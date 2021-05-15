import L from 'leaflet';

const planeIcon = L.icon({
    iconUrl: require('../assets/plane.svg'),
    iconRetinaUrl: require('../assets/plane.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export default planeIcon;