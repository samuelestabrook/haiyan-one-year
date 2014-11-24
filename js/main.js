var windowHeight = $(window).height();
var width = $(window).width(); 
var mapCreated = false;

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
}); 

$(window).resize(function(){     
    windowHeight = $(window).height();
    var newWidth = $(window).width();
    if(newWidth >= 768 && mapCreated === false){
      fullSetup();
    }
});

function callImageModal(item) {
  var imgUrl = $(item).find('img').attr("src").slice(0,-9) + 'large.jpg';
  var img_maxHeight = (windowHeight*0.85).toString() + "px";
  $(".modal-img").css('max-height', img_maxHeight);
  $(".modal-img").attr('src', imgUrl);
  $("#myImageModal").modal();    
}


function fullSetup(){

width = $(window).width(); 
if(width >= 768){
      mapCreated = true;

      
      $(".quickNav").html('<div class="btn-group hidden-xs">'+
          '<button type="button" class="btn btn-xs dropdown-toggle btn-quickNav" data-toggle="dropdown">'+ 
            '<span style="font-size:18px; color:#f5f5f5;"> ☰ </span></button>'+
            '<ul class="dropdown-menu" role="menu">'+
              '<li><a href="#">Home</a></li>'+
              '<li><a href="#martine"><span class="glyphicon glyphicon-picture color-green"></span>&nbsp; Martine</a></li>'+
              '<li><a href="#soccer"><span class="glyphicon glyphicon-picture color-green"></span>&nbsp; Soccer</a></li>'+
              '<li><a href="#canaan"><span class="glyphicon glyphicon-user color-blue"></span>&nbsp; Canaan</a></li>'+
              '<li><a href="#hope"><span class="glyphicon glyphicon-user color-blue"></span>&nbsp; HOPE clinics</a></li>'+
              '<li><a href="#father"><span class="glyphicon glyphicon-user color-blue"></span>&nbsp; Father & daughter</a></li>'+
              '<li><a href="#soil"><span class="glyphicon glyphicon-user color-blue"></span>&nbsp; SOIL</a></li>'+
              '<li><a href="#junior"><span class="glyphicon glyphicon-picture color-green"></span>&nbsp; Junior</a></li>'+
              '<li><a href="#dominique"><span class="glyphicon glyphicon-picture color-green"></span>&nbsp; Dominique</a></li>'+
              '<li><a href="#mirebalais"><span class="glyphicon glyphicon-film color-khaki"></span>&nbsp; Mirebalais Hospital</a></li>'+
              '<li><a href="#landy"><span class="glyphicon glyphicon-picture color-green"></span>&nbsp; Landy</a></li>'+
              '<li><a href="#haitian"><span class="glyphicon glyphicon-info-sign color-red"></span>&nbsp; Haitian Red Cross</a></li>'+
              '<li><a href="#ifrc"><span class="glyphicon glyphicon-info-sign color-red"></span>&nbsp; IFRC</a></li></ul></div>');
      $(".quickNav").tooltip(); 
 

      $('body').css("padding-top","0px");


      // geojson points for each story piece
      var storyPoints = [
      {
        "type": "Feature",
        "properties": {
          "id": "martine",
          "place_name": "port-au-prince haiti",
          "view_bounds": [
          [17.696833, -74.355351], [20.149248, -71.773564]  
          ]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
          -72.330206,
          18.538998
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": "soccer",
          "place_name": "port-au-prince haiti",
          "view_bounds": [
          [17.696833, -74.355351], [20.149248, -71.773564]  
          ]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
          -72.330206,
          18.538998
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": "canaan",
          "place_name": "port-au-prince haiti",
          "view_bounds": [
          [17.696833, -74.355351], [20.149248, -71.773564]  
          ]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
          -72.330206,
          18.738998
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": "hope",
          "place_name": "port-au-prince haiti",
          "view_bounds": [
          [17.696833, -74.355351], [20.149248, -71.773564]  
          ]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
          -72.330206,
          18.538998
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": "father",
          "place_name": "port-au-prince haiti",
          "view_bounds": [
          [17.696833, -74.355351], [20.149248, -71.773564]  
          ]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
          -72.330206,
          18.538998
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": "soil",
          "place_name": "port-au-prince haiti",
          "view_bounds": [
          [17.696833, -74.355351], [20.149248, -71.773564]  
          ]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
          -72.330206,
          18.538998
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": "junior",
          "place_name": "port-au-prince haiti",
          "view_bounds": [
          [17.696833, -74.355351], [20.149248, -71.773564]  
          ]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
          -72.330206,
          18.538998
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": "dominique",
          "place_name": "port-au-prince haiti",
          "view_bounds": [
          [17.696833, -74.355351], [20.149248, -71.773564]  
          ]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
          -72.330206,
          18.538998
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": "mirebalais",
          "place_name": "port-au-prince haiti",
          "view_bounds": [
          [17.696833, -74.355351], [20.149248, -71.773564]  
          ]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
          -72.330206,
          18.538998
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": "landy",
          "place_name": "port-au-prince haiti",
          "view_bounds": [
          [17.696833, -74.355351], [20.149248, -71.773564]  
          ]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
          -72.330206,
          18.538998
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": "haitian",
          "place_name": "port-au-prince haiti",
          "view_bounds": [
          [17.696833, -74.355351], [20.149248, -71.773564]  
          ]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
          -72.330206,
          18.538998
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "id": "ifrc",
          "place_name": "port-au-prince haiti",
          "view_bounds": [
          [17.696833, -74.355351], [20.149248, -71.773564]  
          ]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
          -72.330206,
          18.538998
          ]
        }
      }
        ];
      // define tile layer for base map
      var tileLayerUrl = 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
      // var tileLayerUrl = 'http://{s}.tiles.mapbox.com/v3/americanredcross.hcji22de/{z}/{x}/{y}.png';
      var tileLayer = L.tileLayer(tileLayerUrl);

      // setup leaflet map with desired options
      
      var storyWidth = $(window).width() * 0.60;
      var padding = L.point(storyWidth, 0);
      var map = L.map('map', { 
          dragging: false,
          touchZoom: false,
          scrollWheelZoom: false,
          doubleClickZoom: false,
          boxZoom: false,
          keyboard: false,
          zoomControl: false,
          attributionControl: false,  
          // zoom: 6,
          // center: [11, 125.7],     
          layers: [tileLayer]
      }).fitBounds([[17.696833, -74.355351], [20.149248, -71.773564]], {
        paddingTopLeft: padding
      });

 

      //add markers to map
      var markerMap = {};
      var spots = L.geoJson(storyPoints, {
        pointToLayer: function (feature, latlng) {
            var thisIcon = L.divIcon({
              className: feature.properties.id +' spot spot-' + feature.properties.id,
              iconAnchor: [60,60]
            });
            var thisMarker = L.marker(latlng, {
              icon: thisIcon, 
              clickable: false
            });
            markerMap[feature.properties.id] = thisMarker;
            return thisMarker;
        }
      }).addTo(map);

      // Array of story section elements.
      var sections = document.getElementsByTagName('section');      

      // Helper to set the active section.
      var previousActive = 0;
      var setActive = function(index, ease) {
          var activeSpotId = sections[index].id;
          // Set active class on sections
          _(sections).each(function(s) { s.className = s.className.replace(' active', '') });
          sections[index].className += ' active';

          // if sections[index].id == cover || movement || etc. then add a class for display:none for all the markers

          // Set active class on markers
          $.each($('.spot'), function(index, spotDiv) {     
            if($(spotDiv).hasClass(activeSpotId)){
              $(spotDiv).addClass('active');
            } else {
              $(spotDiv).removeClass('active');
            }
          });
          
          // Set a body class for the active section.
          document.body.className = 'section-' + index;

          // Ease map to active marker.
//          if (ease && previousActive !== index && markerMap[activeSpotId] !== undefined) {
//            var storyWidth = $(window).width() * 0.6;
//           var padding = L.point(storyWidth, 0)
//            map.fitBounds(markerMap[activeSpotId].feature.properties.view_bounds, {
//              paddingTopLeft: padding,
              // zoom: {
              //   animate: true,
              //   duration: 6
              // },
//              pan: {
//                animate: true,
//                duration: 2.5
//              }
//            });
//
//            previousActive = index;
//          } 
          return true;
      };

      // Bind to scroll events to find the active section.
      window.onscroll = _(function() {
        // IE 8
        if (window.pageYOffset === undefined) {
          var y = document.documentElement.scrollTop;
          var h = document.documentElement.clientHeight;
        } else {
          var y = window.pageYOffset;
          var h = window.innerHeight;
        }

        // If scrolled to the very top of the page set the first section active.
        if (y === 0) return setActive(0, true);

        // Otherwise, conditionally determine the extent to which page must be
        // scrolled for each section. The first section that matches the current
        // scroll position wins and exits the loop early.
        var memo = 0;
        var buffer = (h * 0.3333);
        var active = _(sections).any(function(el, index) {
          memo += el.offsetHeight;
          return y < (memo-buffer) ? setActive(index, true) : false;
        });

        // If no section was set active the user has scrolled past the last section.
        // Set the last section active.
        if (!active) setActive(sections.length - 1, true);
      }).debounce(10);

      // Set map to first section.
      setActive(0, false);

      

}
}

// show disclaimer text on click of dislcaimer link
      function showDisclaimer() {
          window.alert("The maps used do not imply the expression of any opinion on the part of the International Federation of Red Cross and Red Crescent Societies or National Societies concerning the legal status of a territory or of its authorities.");
      }

fullSetup();