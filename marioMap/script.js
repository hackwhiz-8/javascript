function initMap(){
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 34.66850563895583, lng: 135.43007583287354},
        zoom: 8,
        mapId : 'a35479fcaaeb4ba5',
        mapTypeControl: false,
        fullscreencontrol:false,
        streetViewControl:false
      });

      new google.maps.Marker({
        position: { lat: 34.66850563895583, lng: 135.43007583287354 },
        map,
        icon: image,
      });
}   


// 34.66850563895583, 135.43007583287354