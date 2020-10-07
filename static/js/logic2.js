

var map = L.map("mapid", {
  center: [37.09, -95.71],
  zoom: 3,
  
});

var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
}).addTo(map);

var url_query = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
d3.json(url_query, function(data){
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor:getColor(feature.geometry.coordinates[2]),
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }

  function getRadius(magnitude) {
    if(magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }

  L.geoJson(data, {
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng);
    },
    style: styleInfo,
    onEachFeature: function(feature, layer) {
      layer.bindPopup(
        "Magnitude: " + feature.properties.mag + "<br>Depth: " + feature.geometry.coordinates[2]
      );
    }
  }).addTo(map)

  function getColor(d) {
    if (d > 90)
      return "#EE3416";
    if (d >70 )
      return "#E14A1E";
      if (d >50 )
      return "#E16E1E";
      if (d >30 )
      return "#FFC300";
      if (d >10 )
      return "#B2E11E";
      if (d> -10)
      return "#B9F09A";
  }

  // function getColor(magnitude) {
  //   return d > 5000000 , 
  //   d > 200000? ‘#BD0026’ :
  //   d > 90 ‘#E31A1C’ :
  //   d > 70 ‘#FC4E2A’ :
  //   d > 50  ‘#FD8D3C’ :
  //   d > 30  ‘#FEB24C’ :
  //   d > 10  ‘#FED976’ :
  //   ‘#FFEDA0’;
  //   }
  
});