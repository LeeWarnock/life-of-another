var map;
var superchargers = [
    {
        location: 'Fremont',
        latitude: 37.49267,
        longitude: -121.94409
    },
    {
        location: 'Folsom',
        latitude: 38.64392,
        longitude: -121.18621
    },
    {
        location: 'Gilroy',
        latitude: 37.02615,
        longitude: -121.56487
    },
    {
        location: 'Harris Ranch',
        latitude: 36.25316,
        longitude: -120.23853
    },
    {
        location: 'Mt. Shasta',
        latitude: 41.30981,
        longitude: -122.31766
    },
    {
        location: 'Roseville',
        latitude: 38.77344,
        longitude: -121.26928
    },
    {
        location: 'Truckee',
        latitude: 39.32720,
        longitude: -120.20643
    },
    {
        location: 'Vacaville',
        latitude: 38.36720,
        longitude: -121.95601
    },
    {
        location: 'Atascadero',
        latitude: 35.48640,
        longitude: -120.66558
    },
    {
        location: 'Barstow',
        latitude: 34.89120,
        longitude: -116.99910
    },
    {
        location: 'Buellton',
        latitude: 34.61545,
        longitude: -120.18856
    },
    {
        location: 'Cabazon',
        latitude: 33.92967,
        longitude: -116.81649
    },
    {
        location: 'Culver City',
        latitude: 33.98465,
        longitude: -118.39505
    },
    {
        location: 'El Centro',
        latitude: 32.76200,
        longitude: -115.53197
    },
    {
        location: 'Indio',
        latitude: 33.74272,
        longitude: -116.21316
    },
    {
        location: 'Los Angeles',
        latitude: 33.92142,
        longitude: -118.32982
    },
    {
        location: 'Needles',
        latitude: 34.85083,
        longitude: -114.62414
    },

    {
        location: 'Oxnard',
        latitude: 34.24075,
        longitude: -119.17699
    },
    {
        location: 'Rancho Cucamonga',
        latitude: 34.11348,
        longitude: -117.53257
    },
    {
        location: 'San Juan Capistrano',
        latitude: 33.49835,
        longitude: -117.66287
    },
    {
        location: 'Tejon Ranch',
        latitude: 34.98661,
        longitude: -118.94630
    }
];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 36.0907578, lng: -119.5948303},
        zoom: 7
    });

    superchargers.forEach(function (sc) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(sc.latitude, sc.longitude),
            icon: {
                url: 'data:image/png;base64,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',
                scaledSize: new google.maps.Size(23, 33)
            },
            map: map,
            title: sc.location,
            animation: google.maps.Animation.DROP
        });
    });
}
