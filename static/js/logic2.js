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
    switch (true){
    case d > 90:
      return "#EE3416";
      case d > 70:
      return "#E14A1E";
      case d > 50:
      return "#E16E1E";
      case d > 30:
      return "#FFC300";
      case d > 10:
      return "#B2E11E";
      default:
      return "#B9F09A";
  }
}

  var info = L.control({
    position: "bottomright"
  });
  // When the layer control is added, insert a div with the class of "legend"
  info.onAdd = function() {
    var div = L.DomUtil.create("div", "legend");
    labels = ['<strong>Categories</strong>'],
    categories = ['-10-10','10-30','30-50','50-70','70-90', '90+'];
    for (var i = 0; i < categories.length; i++) {
            div.innerHTML += 
            labels.push(
                '<i class="circle" style="background:' + getColor(categories[i] + 1) + '"></i> ' +
                (categories[i] ? categories[i] : '+'));
        }
        div.innerHTML = labels.join('<br>');
    return div;
};
  // Add the info legend to the map
  info.addTo(map);
  
  
});