

var map = L.map("mapid", {
  center: [34.05, -118.24],
  zoom: 12,
  // layers: [lightmap]
});

var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
}).addTo(map);


d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson", function(data){
  




















  // // Pull the "stations" property off of response.data
  // var features = response.features;
  // // Initialize an array to hold bike markers
  // var earthquakesMarkers = [];
  // // Loop through the stations array
  // for (var index = 0; index < features.length; index++) {
  //   var feature = features[index];
  //   // For each earthquake, create a marker and bind a popup 
  //   var earthquakeMarker = L.marker([feature.geometry.coordinates[0], feature.geometry.coordinates[1]])
  //     .bindPopup("<h3>" + feature.geometry.coordinates[0] + "</h3>");
  //     console.log(earthquakeMarker);
  //   // Add the marker to the array
  //   earthquakesMarkers.push(earthquakeMarker);
  // }
  //   // create a group layer of earthquakes
  //   var earthquakeMarkerLayer = L.layerGroup(earthquakesMarkers);
  // // Create the tile layer that will be the background of our map
  // var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  //   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  //   maxZoom: 18,
  //   id: "light-v10",
  //   accessToken: API_KEY
  // });
  // // Create a baseMaps object to hold the lightmap layer
  // var baseMaps = {
  //   "Light Map": lightmap
  // };
  // // Create an overlayMaps object to hold the earthquakes layer
  // var overlayMaps = {
  //   "Earthquakes": earthquakeMarkerLayer
  // };
  // // Create the map object with options
  // var map = L.map("mapid", {
  //   center: [34.05, -118.24],
  //   zoom: 12,
  //   layers: [lightmap, earthquakeMarkerLayer]
  // });
  // // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
  // L.control.layers(null, overlayMaps, {
  //   collapsed: false
  // }).addTo(map);
});