
function initMap()
{
	let map;
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 54.9900023, lng: 82.9703811},
		zoom: 17,
		disableDefaultUI: true,
		styles: [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": 20
            },
            {
                "weight": "1.15"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": 17
            },
            {
                "weight": "1.01"
            },
            {
                "color": "#d3d3d3"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d7c9c9"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#4b4b4b"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#363636"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#8b8b8b"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#100f0f"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bbbbbb"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#971f1f"
            },
            {
                "lightness": 17
            },
            {
                "weight": "2.36"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#1c1919"
            },
            {
                "lightness": 29
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#971f1f"
            },
            {
                "lightness": 18
            },
            {
                "weight": "0.62"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#918b8b"
            },
            {
                "lightness": 16
            },
            {
                "weight": "0.33"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#837373"
            },
            {
                "lightness": 19
            },
            {
                "weight": "1.57"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#4c4b4b"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#e8e8e8"
            }
        ]
    }
]
	});

	const icons = {
		point: {
			icon: 'assets/images/marker.png'
		}
	};

	const features = [
		{
			position: new google.maps.LatLng(54.9900023,82.9703811),
			type: 'point'
		}
	];

	features.forEach(function (feature) {
		let marker = new google.maps.Marker({
			position: feature.position,
			icon: icons[feature.type].icon,
			map: map
		});
	});
}

initMap()
