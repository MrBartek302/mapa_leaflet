var map = L.map('map').setView([52.185763, 21.572510],16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map); 

let marker1, circle1, zoomed;

function lokalizacja(){
navigator.geolocation.watchPosition(success, error);
}
var ilosc=0
function success(pos) {

const lat = pos.coords.latitude;
const lng = pos.coords.longitude;
const accuracy = pos.coords.accuracy;

if(ilosc==0){
const h2 = document.createElement("h2")
h2.innerHTML = "Latitude: "+lat+" || "+" Longitude: "+lng
document.getElementById("gora").appendChild(h2)
ilosc=1
}

if (marker1) {
map.removeLayer(marker1);
map.removeLayer(circle1);
}
// Removes any existing marker and circule (new ones about to be set)

marker1 = L.marker([lat, lng]).addTo(map)
.bindPopup('Moja lokalizacja.')
.openPopup(); 
circle1 = L.circle([lat, lng], { radius: 20 }).addTo(map);
// Adds marker to the map and a circle for accuracy

if (!zoomed) {
zoomed = map.fitBounds(circle1.getBounds()); 
}
// Set zoom to boundaries of accuracy circle

map.setView([lat, lng]);
// Set map focus to current user position

}

function error(err) {

if (err.code === 1) {
alert("Please allow geolocation access");
} else {
alert("Cannot get current location");
}

}
    
    var marker = L.marker([52.186598, 21.571534]).addTo(map)
    .bindPopup('Moja Szkoła.')
    .openPopup();            

    var circle = L.circle([52.185707, 21.572745, 16], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 200
    }).addTo(map) 
    circle.bindPopup("Cały obszar szkoły.");
    var popup = L.popup();

//function onMapClick(e) {
//    popup
//        .setLatLng(e.latlng)
//        .setContent("Kiknąłeś na: " + e.latlng.toString())
//        .openOn(map);
//}
//map.on('click', onMapClick);
