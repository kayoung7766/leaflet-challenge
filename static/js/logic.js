//https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

var myMap = L.map("mapid", {
  center: [34.05, -118.24],
  zoom: 12,
});

// Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map


var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"


var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
})
//Create a baseMaps object to hold the lightmap layer
var baseMaps = {
  "Light Map": lightmap
};

// var overlayMaps = {
//   "Earthquakes": earthquakes
// };

L.control.layers(baseMaps,  {
  //collapsed: false
}).addTo(myMap);




function createMarkers(response) {

  // Pull the "stations" property off of response.data
  var features = response.features;
  console.log(features);
  
  var earthquakes = [];
  for (var index = 0; index <features.length; index++) {
        var features = features[index];
        var earthquakes=L.marker([features.geometry.coordinates[0], features.geometry.coordinates[1]])
        .bindPopup ("<h3>" + features.geometry.coordinates + "</h3>");
        console.log(earthquakes);
       //earthquakes.push(earthquake);
  }
  //createMap(L.layerGroup(earthquakes));

}

 // Initialize an array to hold earthquakes
//   var bikeMarkers = [];

//   // Loop through the stations array
//   for (var index = 0; index < stations.length; index++) {
//     var station = stations[index];

//     // For each station, create a marker and bind a popup with the station's name
//     var bikeMarker = L.marker([station.lat, station.lon])
//       .bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "</h3>");

//     // Add the marker to the bikeMarkers array
//     bikeMarkers.push(bikeMarker);
//   }

//   // Create a layer group made from the bike markers array, pass it into the createMap function
//   createMap(L.layerGroup(bikeMarkers));
// }


// Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
d3.json(queryUrl, createMarkers);



// L.control.layers(baseMaps).addTo(myMap);
// // Create an overlayMaps object to hold the bikeStations layer
// var overlayMaps = {
//   "Earthquakes": earthquakes
// };

// Create the map object with options





// // Perform a GET request to the query URL
// d3.json(queryUrl, function(data) {
//   // Once we get a response, send the data.features object to the createFeatures function
//   createFeatures(data.features);
// });

// function createFeatures(earthquakeData) {

//   // Define a function we want to run once for each feature in the features array
//   // Give each feature a popup describing the place and time of the earthquake
//   function onEachFeature(feature, layer) {
//     layer.bindPopup("<h3>" + feature.properties.place +
//       "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
//   }

//   // Create a GeoJSON layer containing the features array on the earthquakeData object
//   // Run the onEachFeature function once for each piece of data in the array
//   var earthquakes = L.geoJSON(earthquakeData, {
//     onEachFeature: onEachFeature
//   });

//   // Sending our earthquakes layer to the createMap function
//   createMap(earthquakes);
// }

// function createMap(earthquakes) {

//   // Define streetmap and darkmap layers
//   var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "mapbox/streets-v11",
//     accessToken: API_KEY
//   });



//   // Define a baseMaps object to hold our base layers
//   var baseMaps = {
//     "Street Map": streetmap,
//   };

//   // Create overlay object to hold our overlay layer
//   var overlayMaps = {
//     Earthquakes: earthquakes
//   };

//   // Create our map, giving it the streetmap and earthquakes layers to display on load
//   var myMap = L.map("map", {
//     center: [
//       37.09, -95.71
//     ],
//     zoom: 5,
//     layers: [streetmap, earthquakes]
//   });

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
//   L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false
//   }).addTo(myMap);
// 
