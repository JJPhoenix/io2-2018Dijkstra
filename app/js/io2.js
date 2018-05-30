//Pintar a las calles del mapa
function GetCountriesStyle(color1, color2){
    return function CountriesStyle(feature){
        return {
            fillColor: color1,
            weight:2,
            opacity:1,
            color:color2,
            dashArray:3,
            fillOpacity:0.7
        }
    }
}

//Creacion del mapa de la uni
var map = L.map('myMap').setView([-12.0197, -77.0492],16);


L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);

//lineas verde en el mapa que represeta calles en el formato geoJson
L.geoJson(multilines,{style:
        GetCountriesStyle('white','#050699')
}).addTo(map);

//lineas dentro de la universidad. caminos
var contriesLayer = L.geoJson(lines,
    {style:GetCountriesStyle('white','#bf1a24')}).addTo(map);

var marker;
var marker2;
//Marcador de inicio
function Marker(lat,lng){
    if(marker!=undefined) marker.removeFrom(map);
    var point=[lat,lng];
    destLat=lat;
    destLon=lng;
    marker = L.marker(point,puerta2);
    marker.addTo(map);
}


//Marcador destino
function Marker2(lat,lng){
    if (marker2 != undefined) marker2.removeFrom(map);
    var point=[lat,lng];
    marker2 = L.marker(point);
    marker2.addTo(map);
}
//Agregar puerta 3 4 5 6
document.getElementById("puerta3").addEventListener("click",
    function(){
        capturarClick({latlng:{lat:-12.0245646,lng:-77.0481607}})
    }
);
document.getElementById("puerta4").addEventListener("click",
    function(){
        capturarClick({latlng:{lat:-12.0231427,lng:-77.0498720}})
    }
);
document.getElementById("puerta5").addEventListener("click",
    function(){
        capturarClick({latlng:{lat:-12.0179405,lng:-77.0508984}})
    }
);
document.getElementById("puerta6").addEventListener("click",
    function(){
        capturarClick({latlng:{lat:-12.0151859,lng:-77.0517763}})
    }
);
label = new L.Tooltip();

/**
 * @return {number}
 * tomando los puntos 1 y punto 2, se halla la distnacia entre ellos en kilometros
 * con la latid y longitud de cada punto
 */
function Distance(punto1,punto2){
    var R = 6371e3; //radio de la tierra
    var o1 = punto1.lat*Math.PI/180;
    var o2 = punto2.lat*Math.PI/180;
    var Ao = (punto2.lat-punto1.lat)*Math.PI/180;
    var Al = (punto2.lon-punto1.lon)*Math.PI/180;
    var a = Math.sin(Ao/2) * Math.sin(Ao/2) +
        Math.cos(o1) * Math.cos(o2) *
        Math.sin(Al/2) * Math.sin(Al/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return  R * c; //retorna la distancia en kilometres
}

ul = document.getElementById("myUL");
places.sort(function (a,b) {
   return a.name.toUpperCase().localeCompare(b.name.toUpperCase());
});
(function(){
    for (var i=0;i<places.length;i+=1) {
        var place = places[i];
        if(i<=3){
            ul.innerHTML+="<a class='collection-item center-align' href='#' onclick='return Marker("+place.latlon.lat+","+place.latlon.lon+")'>"+place.name+"</a>";
        }else{
            ul.innerHTML+="<a class='collection-item center-align' style='display: none;' href='#' onclick='return Marker("+place.latlon.lat+","+place.latlon.lon+")'>"+place.name+"</a>";
        }
    }
})();


function Buscador(){
    var input, filter, ul, li, a, i,count=0;
    input = document.getElementById('searchinput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    as = ul.getElementsByTagName('a');

    for (i = 0; i <as.length; i++) {
        a=as[i];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1 && count<4) {
            a.style.display = "";
            count+=1;
        } else {
            a.style.display = "none";
        }
    }
}

var orLat,orLon;
var destLat,destLon;
function capturarClick(e) {
    orLat = e.latlng.lat.toFixed(7);
    orLon = e.latlng.lng.toFixed(7);
    var texto=document.getElementById("origen");
    map.off('click', capturarClick);
    texto.value= orLat+","+orLon;
    Marker2(orLat,orLon);
}
/*
*Seleccionar el origen de forma manual
function SeleccionarOrigen(){
    mymap.on('click', capturarClick);
}*/

function Go(){
    dijkstra({lat:orLat,lon:orLon},{lat:destLat,lon:destLon});
}

var polyline;
//edges nodos de la uni
function dijkstra(origen,destino){
    if(polyline!=undefined){
        console.log("entro");
        polyline.removeFrom(map);
    }
    //encontrando el  punto destino
    var distancias = new Array(edges.length);
    var padres = new Array(edges.length);
    var visto = new Array(edges.length);
    var distActual=distActual2=Infinity;
    var indexOri,indexDest;
    for(var x=1;x<edges.length;x+=1){
        var distancia=Distance(destino,edges[x].latlng);
        if(distancia<45 && distancia<distActual){
            indexDest=x;
            distActual=distancia;
        }
        distancia=Distance(origen,edges[x].latlng);
        if(distancia<45 && distancia<distActual2){
            indexOri=x;
            distActual2=distancia;
        }
    }

    //Restrinccion de datos vacios
    if(indexOri==undefined || indexDest==undefined){
        var toastHTML = '<span>Alguna coordenada no es válida</span>';
        M.toast({html: toastHTML});
        return ;
    }
    destino=edges[indexDest];
    origen=edges[indexOri];
    for(var x=0;x<edges.length;x+=1){
        distancias[x]=1000000000;
        padres[x] = null;
        visto[x] = false;
    }

    var queue = new PriorityQueue({ comparator: function(a, b){
            return a.dist - b.dist;
        }});
    distancias[indexOri]=0;
    queue.queue({i:indexOri,dist:0});
    while(queue.length!=0){
        var u=queue.dequeue();
        visto[u.i]=true;
        for(var i=0;i<edges[u.i].rela.length;i+=1){
            if(visto[edges[u.i].rela[i]]==false  && distancias[edges[u.i].rela[i]]> distancias[u.i]+Distance(edges[u.i].latlng,edges[edges[u.i].rela[i]].latlng)){
                console.log("update dist:",distancias[u.i]+Distance(edges[u.i].latlng,edges[edges[u.i].rela[i]].latlng));
                distancias[edges[u.i].rela[i]]=distancias[u.i]+Distance(edges[u.i].latlng,edges[edges[u.i].rela[i]].latlng);
                padres[edges[u.i].rela[i]]=u.i;
                queue.queue({i:edges[u.i].rela[i],dist:distancias[edges[u.i].rela[i]]});
            }
        }
    }
    var last=indexDest;
    var route=[];
    /*for(var x=1;x<Math.min(padres.length,36);x+=1){
        console.log(x,padres[x]);
    }*/
    while(last!=null){
        route.push(last);
        last=padres[last];
    }
    route.reverse();
    var latlngs = [[orLat,orLon]];
    for(var i=0;i<route.length;i+=1){
        latlngs.push([edges[route[i]].latlng.lat,edges[route[i]].latlng.lon]);
    }
    latlngs.push([destLat,destLon]);
    console.log(latlngs);
    polyline = L.polyline(latlngs,{color: 'black'});
    polyline.addTo(map);
    //Label distance
    /*label.setContent();
    var labelLocation = new L.LatLng(destLat,destLon);
    label.setLatLng(labelLocation)
    mymap.showLabel(label);*/
    var popup = L.popup()
        .setLatLng({lat:destLat,lon:destLon})
        .setContent("<p>"+(distancias[indexDest]/75.0).toFixed(1)+" min<br/>"+distancias[indexDest].toFixed(1)+' m</p>')
        .openOn(map);
}