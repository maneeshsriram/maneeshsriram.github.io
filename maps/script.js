mapboxgl.accessToken = 'pk.eyJ1IjoibWFuZWVzaHNyaXJhbSIsImEiOiJja2hkOHJhMTgwM2k2Mnludm5hN3AwMDByIn0.96CYUjIo_H3H8dmRBpb_KQ';
var start = [77.1025, 28.7041];
var end = [77.1025, 28.7041];
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: start,
    zoom: 13
});

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId);
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
);


map.addControl(new mapboxgl.NavigationControl());



// FLY
var isAtStart = true;
document.getElementById('fly').addEventListener('click', function () {
    var target = isAtStart ? end : start;
    isAtStart = !isAtStart;
    map.flyTo({
        center: target,
        zoom: 1,
        bearing: 0,
        speed: 1,
        curve: 1,
        easing: function (t) {
            return t;
        },
        essential: true
    });
});