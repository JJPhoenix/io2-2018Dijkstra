function GetIconStyle(icono,sombra){
    return function IconsStyle(feature) {
        return{
            iconUrl: icono,
            iconSize: [38, 95],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
            shadowUrl: sombra,
            shadowSize: [68, 95],
            shadowAnchor: [22, 94]
        }
    }
}

var puerta2 = L.icon(GetIconStyle('images/icons8-marker-48.png',''));