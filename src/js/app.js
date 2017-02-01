// places of interest used in the app
var poi = [
{
  'name': 'Golden Gate Bridge',
  'location': {'lat': 37.79696069999999, 'lng': -122.47480310000003},
  'fs_id': '49d01698f964a520fd5a1fe3'
},
{
  'name': 'San Francisco Chinatown',
  'location': {'lat': 37.794565, 'lng': -122.40782999999999},
  'fs_id': '584f4665a370b9190d30e54a'
},
{
  'name': 'Coit Tower',
  'location': {'lat': 37.8023949, 'lng': -122.40582219999999},
  'fs_id': '49de821ff964a5205c601fe3'
},
{
  'name': 'Painted Ladies',
  'location': {'lat': 37.77625929999999, 'lng': -122.43275800000004},
  'fs_id': '4b9afa7ef964a520c1e835e3'
},
{
  'name': 'The San Francisco Dungeon',
  'location': {'lat': 37.8082296, 'lng': -122.41472899999997},
  'fs_id': '53a1e875498e85bda62c69f3'
},
{
  'name': 'Mission San Francisco de Asís',
  'location': {'lat': 37.7643873, 'lng': -122.42689689999997},
  'fs_id': '49f621e3f964a520096c1fe3'
},
{
  'name': 'Fort Point',
  'location': {'lat': 37.8105867, 'lng': -122.47710660000001},
  'fs_id': '46dabca2f964a5207c4a1fe3'
},
{
  'name': 'Twin Peaks Stairs',
  'location': {'lat': 37.7525098, 'lng': -122.4475683},
  'fs_id': '535687e0498e0030a30beefa'
},
{
  'name': 'The Wave Organ',
  'location': {'lat': 37.8085184, 'lng': -122.44022100000001},
  'fs_id': '49df9416f964a520e7601fe3'
},
{
  'name': 'Pier 39',
  'location': {'lat': 37.808673, 'lng': -122.40982099999997},
  'fs_id': '409d7480f964a520f2f21ee3'
},
{
  'name': 'San Francisco Zoo',
  'location': {'lat': 37.73297429999999, 'lng': -122.50284069999998},
  'fs_id': '49ca9423f964a520c0581fe3'
},
{
  'name': 'Bay Area Discovery Museum',
  'location': {'lat': 37.83564, 'lng': -122.476809},
  'fs_id': '43b02b7bf964a520932c1fe3'
},
{
  'name': 'Legion of Honor',
  'location': {'lat': 37.7844661, 'lng': -122.50084190000001},
  'fs_id': '44d344bef964a52041361fe3'
},
{
  'name': 'Golden Gate Park',
  'location': {'lat': 37.7694208, 'lng': -122.48621379999997},
  'fs_id': '445e36bff964a520fb321fe3'
},
{
  'name': 'Crissy Field',
  'location': {'lat': 37.8039069, 'lng': -122.46406179999997},
  'fs_id': '40b7d280f964a52093001fe3'
},
{
  'name': 'Sutro Baths',
  'location': {'lat': 37.7804369, 'lng': -122.51369349999999},
  'fs_id': '4a05e6dbf964a52098721fe3'
},
{
  'name': 'Musée Mécanique',
  'location': {'lat': 37.8093405, 'lng': -122.41606089999999},
  'fs_id': '4698e95ef964a520f4481fe3'
},
{
  'name': 'San Francisco Museum of Modern Art',
  'location': {'lat': 37.7857182, 'lng': -122.40105080000001},
  'fs_id': '40943a00f964a520e5f21ee3'
},
{
  'name': 'Alcatraz Island',
  'location': {'lat': 37.8266, 'lng': -122.4229},
  'fs_id': '4451c80ef964a520a5321fe3'
}
];

function mapError() {
	document.getElementById('map-error').style.display = 'block';
	document.getElementById('map-error').innerHTML = 'Sorry, something went wrong!. Please try again later.';
}

function initAutocomplete() {

	// Create custom map icon
	var image = {
	    "url": "img/tourIcon.png",
	    // This marker is 32 pixels wide by 32 pixels high.
	    "size": new google.maps.Size(48, 48),
	    // The origin for this image is (0, 0).
	    "origin": new google.maps.Point(0, 0),
	    // The anchor for this image is the base of the flagpole at (0, 32).
	    "anchor": new google.maps.Point(0, 32)
	};

	// Create custom map icon
	var image1 = {
	    "url": "img/tourIconActive.png",
	    // This marker is 32 pixels wide by 32 pixels high.
	    "size": new google.maps.Size(48, 48),
	    // The origin for this image is (0, 0).
	    "origin": new google.maps.Point(0, 0),
	    // The anchor for this image is the base of the flagpole at (0, 32).
	    "anchor": new google.maps.Point(0, 32)
	};


	var loc = {lat: 37.7749, lng: -122.4194};
	//create the map
	var map = new google.maps.Map(document.getElementById('map'), {
		'center': {'lat': 37.7949, 'lng': -122.5194},
		zoom: 12,
		styles: [
	    {
	      'featureType': 'landscape',
	      'stylers': [
	        { 'hue': '#FFBB00'},
	        {'saturation': 43.400000000000006},
	        {'lightness': 37.599999999999994},
	        {'gamma': 1}
	      ]
	    },{
	      'featureType': 'road.highway',
	      'stylers': [
	        {'hue': '#FFC200'},
	        {'saturation': -61.8},
	        {'lightness': 45.599999999999994},
	        {'gamma': 1}
	      ]
	    },{
	      'featureType': 'road.arterial',
	      'stylers': [
	        {'hue': '#FF0300'},
	        {'saturation': -100},
	        {'lightness': 51.19999999999999},
	        {'gamma': 1}
	      ]
	    },{
	      'featureType': 'road.local',
	      'stylers': [
	        {'hue': '#FF0300'},
	        {'saturation': -100},
	        {'lightness': 52},
	        {'gamma': 1}
	      ]
	    },{
	      'featureType': 'water',
	      'stylers': [
	        {'hue': '#0078FF'},
	        {'saturation': -13.200000000000003},
	        {'lightness': 2.4000000000000057},
	        {'gamma': 1}
	      ]
	    },{
	      'featureType': 'poi',
	      'stylers': [
	        {'hue': '#00FF6A'},
	        {'saturation': -1.0989010989011234},
	        {'lightness': 11.200000000000017},
	        {'gamma': 1}
	      ]
	    }],
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	// create the infowindow
	var infoWindow = new google.maps.InfoWindow({
	    maxWidth: 300,
	    content: ''
	});
	var bounds = new google.maps.LatLngBounds();

	// foursquare 
	var foursquareCredentials = {
		CLIENT_ID: 'S0RBIR4VYJHBTE1PAWPM1IJG2XN5G02TWJEUR0SDYUVKGXWU',
		CLIENT_SECRET: 'DOC1ZV0F2LMUX0K0H5LSKEQ5X3C1XMGRIVTGEUXSZY5JYWQW'
	};

	// Recenter map upon window resize
	google.maps.event.addDomListener(window, 'resize', function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, 'resize');
		map.setCenter(center);
	});

	// close the infowindow when clicked anywhere else
	map.addListener('click', function(){
	    infoWindow.close(infoWindow);
	});

	function ViewModel() {
	    var self = this;

	    // creating the list from placesService result
	    this.placeList = ko.observableArray();
	    this.locationList = ko.observableArray();
	    poi.forEach(function(item){
	      	self.placeList.push(item);
	    });
	    
	    // Nav button control
	    this.isNavClosed = ko.observable(false);
	    this.navClick = function () {
	      	this.isNavClosed(!this.isNavClosed());
	    };


		// create a marker for each poi
		this.placeList().forEach(function(place) {
			var marker = new google.maps.Marker({
				map: map,
				name: place.name,
				position: place.location,
				icon: image,
				animation: google.maps.Animation.DROP
			});

			place.marker = marker;
			// Extend the boundaries of the map for each marker
			bounds.extend(marker.position);
			// onclick event for a marker
			marker.addListener('click', function() {
				marker.setIcon(image1);
				setInfoWindow(marker);
			});
		});

		function setInfoWindow(marker) {

			 if(infoWindow.marker){
				//if any marker is already open, change its color to the default color
		        	infoWindow.marker.setIcon(image);
		   	 }

		     	// Check to make sure the infowindow is not already opened on this marker.
		    	if (infoWindow.marker != marker) {

		        	infoWindow.marker = marker;
		        	// Make sure the marker property is cleared if the infowindow is closed.
		        	infoWindow.addListener('closeclick',function(){
		            		infoWindow.marker = null;
		            		marker.setIcon(image);
		        	});
		  	}

			console.log(marker.position);
			//set infowindow
			map.panTo(marker.position);
			//pan down infowindow by 200px to keep whole infowindow on screen
			map.panBy(0, -200);

			if (marker === '') {
				infoWindow.setContent('Oops!, Nothing Loaded!!');
			}
			else {
				console.log(marker.name);
				self.locationList().forEach(function(item) {
					if(item.name.includes(marker.name)) {
						// compute the rating to implement stars
						var ratingResult = 1, warning = '';
						if(item.rating) {
							ratingResult = (item.rating * 10).toString();
						}
						else {
							warning = 'No rating given';
						}

						
						// compute address parameter from the result
						var address = item.formatted_address;
						var addressFormat = '';
						address.forEach(function(addr) {
							var last = address.length;
							if(addr == address[last-1]) {
								addressFormat += addr + '.<br>';
							}
							else {
								addressFormat += addr + ',<br>';
							}
						});
						infoWindow.setContent('<h5>' + item.name + '</h5>' + '<p>' + addressFormat + '</p><br><div><img style="position: absolute; top:170px;left: 50px;" src="' + item.photos + '"/></div><br>' +  '<div class="star-box">Rating: <br>' + warning + '<br>' + 
						   '<span class="unfilled" style="color:#d3d3d3; position: absolute;top: 165px;left: 30px;">&#9733;&#9733;&#9733;&#9733;&#9733;</span>' + 
						   '<span class="filled" style="color:#FFBB00; white-space: nowrap; overflow: hidden;position: absolute;top: 165px;left: 30px;width:' + ratingResult + 'px">&#9733;&#9733;&#9733;&#9733;&#9733;</span></div>');
						infoWindow.open(map, marker);
					}
				});
			}
		}

		//get data from foursquare API
	    self.get_fs_data = ko.computed(function(){
	  		poi.forEach(function(place) {

			    $.ajax({
					url: 'https://api.foursquare.com/v2/venues/' +
										place.fs_id + '/?' +
		                                'client_id=' + foursquareCredentials.CLIENT_ID +
		                                '&client_secret=' + foursquareCredentials.CLIENT_SECRET + '&v=20170127',
					method: 'GET',
					dataType: 'json',
					success: function(data){
						var position = {};
						position.lat = data.response.venue.location.lat;
						position.lng = data.response.venue.location.lng;
		        		var locate = {};
						locate.formatted_address = {};
						locate.formatted_address = data.response.venue.location.formattedAddress;
						locate.name = data.response.venue.name;
						locate.position = position;
						locate.rating = (data.response.venue.rating !== undefined) 
										? (data.response.venue.rating).toString() : false;
						locate.photos = data.response.venue.bestPhoto.prefix + 'height150' + data.response.venue.bestPhoto.suffix;
						self.locationList.push(locate);
						console.log(self.locationList());
					},
					error: function() {
						mapError();
					}
		    	});
			});
	  	});


		// creating the filter list
	    self.filter = ko.observable('');

		// empty the input box when the remove icon is clicked
		this.emptyInputBox = function() {
			this.filter('');
			infoWindow.marker.setIcon(image);
			infoWindow.close(infoWindow);
		};
		
	    // Creating click for the list item
	    this.itemClick = function (place) {
	    	var marker = place.marker;
	    	marker.setIcon(image1);
			// Bounce effect on marker
			marker.setAnimation(google.maps.Animation.BOUNCE);
			window.setTimeout(function() {
				marker.setAnimation(null);
			}, 1400);
			//setInfoWindow(marker);
	        google.maps.event.trigger(marker, 'click');
	    };

	    this.filteredplaceList = ko.dependentObservable(function() {
			var q = this.filter().toLowerCase();
			if (!q) {
				// Return self.spaceList() the original array;
				return ko.utils.arrayFilter(self.placeList(), function(item) {
        				item.marker.setVisible(true);
						return true;
				});
			} else {
				return ko.utils.arrayFilter(this.placeList(), function(item) {
					if (item.name.toLowerCase().indexOf(q) === 0) {	
						return true;
					} else {
						item.marker.setVisible(false);
						return false;
					}
				});
			}
		}, this);
	}

	ko.applyBindings(new ViewModel());
}
