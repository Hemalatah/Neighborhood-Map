function initAutocomplete() {

	var locs, icon, locationList= [];

	var loc = {lat: 37.7749, lng: -122.4194};
	//create the map
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 37.7949, lng: -122.5194},
		zoom: 12,
		styles: [
	    {
	      "featureType": "landscape",
	      "stylers": [
	        { "hue": "#FFBB00"},
	        {"saturation": 43.400000000000006},
	        {"lightness": 37.599999999999994},
	        {"gamma": 1}
	      ]
	    },{
	      "featureType": "road.highway",
	      "stylers": [
	        {"hue": "#FFC200"},
	        {"saturation": -61.8},
	        {"lightness": 45.599999999999994},
	        {"gamma": 1}
	      ]
	    },{
	      "featureType": "road.arterial",
	      "stylers": [
	        {"hue": "#FF0300"},
	        {"saturation": -100},
	        {"lightness": 51.19999999999999},
	        {"gamma": 1}
	      ]
	    },{
	      "featureType": "road.local",
	      "stylers": [
	        {"hue": "#FF0300"},
	        {"saturation": -100},
	        {"lightness": 52},
	        {"gamma": 1}
	      ]
	    },{
	      "featureType": "water",
	      "stylers": [
	        {"hue": "#0078FF"},
	        {"saturation": -13.200000000000003},
	        {"lightness": 2.4000000000000057},
	        {"gamma": 1}
	      ]
	    },{
	      "featureType": "poi",
	      "stylers": [
	        {"hue": "#00FF6A"},
	        {"saturation": -1.0989010989011234},
	        {"lightness": 11.200000000000017},
	        {"gamma": 1}
	      ]
	    }],
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});


	//create the infowindow
	var infoWindow = new google.maps.InfoWindow({
	    maxWidth: 300,
	    content: ""
	});
	var bounds = new google.maps.LatLngBounds();
	
	/*var icon = {
		url: request.location[0].icon,
		size: new google.maps.Size(71,71),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(17,34),
		scaledSize: new google.maps.Size(25,25)
	};*/

	//create each list item
	function createList(result) {
		console.log(result);
		var locate = {};
		locate.formatted_address = result.formatted_address;
		locate.name = result.name;
		locate.rating = result.rating;
		locate.photos = result.photos;
		locate.geometry = new Object();
		locate.geometry.location = result.geometry.location,
		locationList.push(locate);
		console.log('location is created: %o', locationList);
	}
			
	var service = new google.maps.places.PlacesService(map);
	var request = {
		location: loc,
		radius: 7500,
		query: 'tourist places'
	};

	service.textSearch(request, callback);

	function callback(results, status) {
		if(status === google.maps.places.PlacesServiceStatus.OK) {
			console.log("sucessfully loaded!");
			for(var i = 0; i < results.length; i++) {
				createMarker(results[i]);
				createList(results[i]);
				console.log(results[i]);	
			}
			console.log('locationList is: %o', locationList);
			ko.applyBindings(new ViewModel());
		}
	}

	function createMarker(result) {
		var photos = result.photos
		var icon = photos[0].getUrl({'maxWidth': 75, 'maxHeight': 65});
		var marker = new google.maps.Marker({
			map: map,
			title: result.name,
			rating: result.rating,
			animation:google.maps.Animation.DROP,
			position: result.geometry.location,
			address: result.formatted_address
		});
		var ratingResult = 0;
		marker.addListener('click', function() {
			map.panTo(this.position);
			//pan down infowindow by 200px to keep whole infowindow on screen
			map.panBy(0, -100)
			// compute the rating to implement stars
			ratingResult = result.rating * 15;
			ratingResult = ratingResult.toString();
			//compute the address to display line by line
			var address = result.formatted_address;
			var addressFormat = '';
			address = address.split(',');
			address.forEach(function(item) {
				var last = address.length;
				if(item == address[last-1]) {
					addressFormat += item + '.<br>'
				}
				else {
					addressFormat += item + ',<br>';
				}
			});
			if (result == '') {
				infoWindow.setContent('Oops!, Nothing Loaded!!');
			}
			else {
				infoWindow.setContent('<h5>' + result.name + '</h5>' + '<p>' + addressFormat + '</p>' +  '<div class="star-box" style="display: inline-block;width:auto;white-space: nowrap;">Rating: ' + 
				   '<span class="unfilled" style="color:#d3d3d3; position: absolute;top: 140px;left: 70px;">&#9733;&#9733;&#9733;&#9733;&#9733;</span>' + 
				   '<span class="filled" style="color:#FFBB00; white-space: nowrap; overflow: hidden;position: absolute;top: 140px;left: 70px;width:' + ratingResult + 'px">&#9733;&#9733;&#9733;&#9733;&#9733;</span></div><img src="' + icon + '"/>');
				infoWindow.open(map, marker);
			}
		});
		return marker;
	}

	//close the infowindow when clicked anywhere else
	map.addListener("click", function(){
	    infoWindow.close(infoWindow);
	});

	function ViewModel() {
	    var self = this;

	    // Nav button control
	    this.isNavClosed = ko.observable(false);
	    this.navClick = function () {
	      this.isNavClosed(!this.isNavClosed());
	    };

	    //creating the list from placesService result
	    this.placeList = ko.observableArray();

	    // push the result to ko array
		locationList.forEach(function(place) {
			self.placeList.push(place)
		});
		console.log('placeList is: %o', self.placeList());

		// Click the moreinfo to display the summary page
	    this.isMoreInfo = ko.observable(false);
	    this.moreInfoClick = function () {
	      console.log('More Info is clicked!')
	      this.isMoreInfo(!isMoreInfo());
	    };

		//creating the filter list
	    self.filter = ko.observable("");

		// empty the input box when the remove icon is clicked
		this.emptyInputBox = function() {
			this.filter('');
		};
		
	    // Creating click for the list item
	    this.itemClick = function (item) {
	    	item.marker = createMarker(item);
	      google.maps.event.trigger(item.marker, "click");
	    }

	    this.filteredplaceList = ko.dependentObservable(function() {
			var q = this.filter().toLowerCase();
			//var self = this;
			if (!q) {
				// Return self.spaceList() the original array;
				return ko.utils.arrayFilter(self.placeList(), function(item) {
					//item.marker.setVisible(true);
					return true;
				});
			} else {
				return ko.utils.arrayFilter(this.placeList(), function(item) {
					if (item.name.toLowerCase().indexOf(q) == 0) {
						return true;
					} else {
					//item.marker.setVisible(false);
						return false;
					}
				});
			}
		}, this);

	};
}
