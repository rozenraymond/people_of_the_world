$(document).on("ready turbolinks:load", function() {

    if (window.location.pathname == '/globe') {

        var mapboxAccessToken = 'pk.eyJ1IjoiZW1tYXJheW1vbmQiLCJhIjoiY2l5YTNpY3d6MDBhbDMycW9icDg5em50YyJ9.wT6b1LEGXVxRHiXPzkuBGA';

        // Creating a map using leaflet
        var map = L.map('mapid', {
            dragging: false,
            zoomControl: false,
            dragging: false,
            attributionControl: false,
            zoomAnimation: false,
            minZoom: 2.1,
            maxZoom: 4
        }).setView([10, 0], 2.1);

        // Appending the tiles to the map & setting the map style
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
            id: 'mapbox',
        }).addTo(map);



        // Append the country polygon onto the map
        L.geoJson(country).addTo(map);

        // Setting the color on each of the country based on the population data
        var getColor = function(d) {
            return d > 1000000000 ? '#4d004b' :
                d > 100000000 ? '#810f7c' :
                d > 50000000 ? '#88419d' :
                d > 10000000 ? '#8c96c6' :
                d > 5000000 ? '#9ebcda' :
                d > 1000000 ? '#bfd3e6' :
                d > 500000 ? '#e0ecf4' :
                '#f7fcfd';
        }

        // Setting the style for the polygon
        var style = function(feature) {
            return {
                fillColor: getColor(feature.properties.population),
                weight: 1,
                opacity: 1,
                color: 'white',
                fillOpacity: 0.7
            };
        }

        // Appending the style onto the map
        L.geoJson(country, {
            style: style
        }).addTo(map);

        var geojson;

        // Highlight the map when user hover onto the country
        var highlightCountry = function(e) {
            var layer = e.target;

            layer.setStyle({
                weight: 5,
                color: '#666',
                dashArray: '',
                fillOpacity: 0.7
            });

            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                layer.bringToFront();
            }
        }

        //Reset the style when user is not hovering the country
        var resetHighlight = function(e) {
            geojson.resetStyle(e.target);
        }

        // Set the style for zooming in the country when user click on the country
        var clickEvent = function(e) {
            var countryName = e.target.feature.properties.name;
            // map.fitBounds(e.target.getBounds(),{
            //   paddingBottomRight: [150,150],
            //   paddingTopLeft: [150,150]
            // });
            window.location = "/countries/" + countryName;
        }

        // Applying the style
        var onEachCountry = function(feature, layer) {
            layer.on({
                mouseover: highlightCountry,
                mouseout: resetHighlight,
                click: clickEvent
            });
        }

        // Applying the style to the geoJson data
        geojson = L.geoJson(country, {
            style: style,
            onEachFeature: onEachCountry
        }).addTo(map);

        // Set the legend for human population
        var legend = L.control({
            position: 'bottomleft'
        });

        legend.onAdd = function(map) {

            var div = L.DomUtil.create('div', 'info legend'),
                population = [0, 5, 10, 50, 100, 500, 1000, 10000],
                labels = [];

            div.innerHTML += '<span class="legendTitle">' + 'Human Population' + '</span>' + "<br>" + '<span class="legendTitle">' + '(in 100,000)' + '</span>' + '<br>';
            for (var i = 0; i < population.length; i++) {
                if (i === population.length - 1) {
                    div.innerHTML += '<i style="background:' + getColor((population[i] + 1) * 100000) + '"></i> ' +
                        '> ' + population[i] + '<br>';
                } else {
                    div.innerHTML += '<i style="background:' + getColor((population[i] + 1) * 100000) + '"></i> ' +
                        population[i] + ' - ' + population[i + 1] + '<br>';
                }


            }

            return div;
        };

        legend.addTo(map);
    };
});
