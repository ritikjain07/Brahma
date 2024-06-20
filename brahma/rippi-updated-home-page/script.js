function openNav() {
    document.getElementById("mySidepanel").style.left = "0";
}

function closeNav() {
    document.getElementById("mySidepanel").style.left = "-250px";
}

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: 28.6139, lng: 77.2090 },
    });

    const marker = new google.maps.Marker({
        position: { lat: 28.6139, lng: 77.2090 },
        map: map,
    });
}
