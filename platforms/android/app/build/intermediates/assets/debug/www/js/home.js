function searchLocation(location){
	window.location.href = 'selection.html';
}




// (function (global) {
//     "use strict";
 
//     function onDeviceReady () {
//     }
 
//     document.addEventListener("deviceready", onDeviceReady, false);
// })(window);


// (function (global) {
//     "use strict";
 
//     function onDeviceReady () {
//         document.addEventListener("online", onOnline, false);
//         document.addEventListener("resume", onResume, false);
//         loadMapsApi();
//     }
 
//     function onOnline () {
//         loadMapsApi();
//     }
 
//     function onResume () {
//         loadMapsApi();
//     }
 
//     function loadMapsApi () {
//         // if online and maps not already loaded
//         //    then load maps api
//     }
 
//     document.addEventListener("deviceready", onDeviceReady, false);
// })(window);

// function loadMapsApi () {
//     if (navigator.connection.type === Connection.NONE || (global.google !== undefined && global.google.maps)) {
//         return;
//     }
//     // load maps api
// }

// (function (global) {
//     "use strict";
 
//     function onDeviceReady () {
//         document.addEventListener("online", onOnline, false);
//         document.addEventListener("resume", onResume, false);
//         loadMapsApi();
//     }
 
//     function onOnline () {
//         loadMapsApi();
//     }
 
//     function onResume () {
//         loadMapsApi();
//     }
 
//     function loadMapsApi () {
//         if(navigator.connection.type === Connection.NONE || google.maps) {
//             return;
//         }
//         $.getScript('https://maps.googleapis.com/maps/api/js?key=API_KEY&sensor=true&callback=onMapsApiLoaded');
//     }
 
//     global.onMapsApiLoaded = function () {
//         // Maps API loaded and ready to be used.
//         var map = new google.maps.Map(document.getElementById("map_canvas"), {});
//     };
 
//     document.addEventListener("deviceready", onDeviceReady, false);
// })(window);


