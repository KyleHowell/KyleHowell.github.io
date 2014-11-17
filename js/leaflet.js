//Map with on click
var map = L.map('map').setView([37.77484477446375, -122.43481636047363], 13);
L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
  maxZoom: 15,
  minZoom:12,
  id: 'examples.map-i875mjb7'
}).addTo(map);

var popup = L.popup();
function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}
map.on('click', onMapClick);

//Zoomed map with markers
var mapZoom = L.map('mapZoom').setView([37.7797, -122.41379], 14);
L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
  maxZoom: 18,
  minZoom: 13,
  id: 'examples.map-i875mjb7'
}).addTo(mapZoom);

var locations = [["City Center Farmers Market 9-11AM", 37.77967, -122.41366],
  ["Pine and Battery 11AM-1PM", 37.79157, -122.39967],
  ["Soma StrEat Food Park 2PM-7PM", 37.76943, -122.40928]
  ];

for (var i = 0; i < locations.length; i++) {
  marker = new L.marker([locations[i][1],locations[i][2]])
    .bindPopup(locations[i][0])
    .addTo(mapZoom);
    }

//Map with different layers
var mapLayers = L.map('mapLayers').setView([37.77484477446375, -122.43481636047363], 13);
L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
  maxZoom: 15,
  minZoom:12,
  id: 'examples.map-i875mjb7'
}).addTo(mapLayers);

var truckOne = new L.LayerGroup();
L.marker([37.79157, -122.39967])
    .bindPopup('Truck One 9-11AM').addTo(truckOne),
L.marker([37.77967, -122.41366])
    .bindPopup('Truck One 11AM-1PM').addTo(truckOne),
L.marker([37.76943, -122.40928])
    .bindPopup('TruckOne 1PM-7PM').addTo(truckOne),
L.polyline([[37.79157, -122.39967],[37.77967, -122.41366],[37.76943, -122.40928]]).addTo(truckOne);

var truckTwo = new L.LayerGroup();
L.marker([37.78913, -122.39675])
    .bindPopup('Truck Two 9-11AM').addTo(truckTwo),
L.marker([37.78866, -122.40641])
    .bindPopup('Truck Two 11AM-1PM').addTo(truckTwo),
L.marker([37.78181, -122.4007])
    .bindPopup('Truck Two 1PM-7PM').addTo(truckTwo),
L.polyline([[37.78913, -122.39675],[37.78866, -122.40641],[37.78181, -122.4007]]).addTo(truckTwo);

var overlays = {"Food Truck One": truckOne, "Food Truck Two": truckTwo};
L.control.layers(overlays).addTo(mapLayers);

