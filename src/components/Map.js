import { makeStyles } from '@material-ui/core/styles';
import { MapContainer, TileLayer, Marker, Pane, Polyline, Circle, LayerGroup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import marker from '../assets/plane.svg';
import dot from '../assets/dot.svg';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '70vh',
    width: '100%',
  },
}));

const dotIcon = L.icon({
  iconUrl: dot,
  iconSize: [10,10],
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null
});

const planeIcon = L.icon({
  iconUrl: marker,
  iconSize: [80,80],
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null
});

export default function Map({positions, flights, positionsHistory}) {
  const classes = useStyles();

  const maxCoords = [90, 90];
  const minCoords = [-90, -90];
  for (let i = 0; i < flights.length; i++) {
    maxCoords[0] = Math.min(flights[i].origin[0], maxCoords[0])
    maxCoords[1] = Math.min(flights[i].origin[1], maxCoords[1])
    minCoords[0] = Math.max(flights[i].destination[0], maxCoords[0])
    minCoords[1] = Math.max(flights[i].destination[1], maxCoords[1])
  }

  const center = [(maxCoords[0] + minCoords[0]) / 2, (maxCoords[1] + minCoords[1]) / 2];

  if (flights.length === 0) {
    return <Typography>Loading</Typography>
  }

  return (
    <MapContainer
      className={classes.mapContainer}
      center={center}
      zoom={3}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Pane name="history-markers" style={{ zIndex: 500 }}>
        {positionsHistory.map((position, i) => (
          <Marker
            key={`marker-history-${i}`}
            icon={dotIcon}
            position={[position[0], position[1]]}
          />
        ))}
      </Pane>
      <Pane name="plane-markers" style={{ zIndex: 501 }}>
        {Object.entries(positions).map(([code, plane]) => {
          return (
            <Marker
              key={`marker-${code}`}
              icon={planeIcon}
              position={[plane.position[0], plane.position[1]]}
            />
          );
        })}
      </Pane>
      <Pane name="lines" style={{ zIndex: 499 }}>
        {flights.map((plane) => (
          <LayerGroup key={`line-${plane.code}`}>
            
            <Polyline
              positions={[plane.origin, plane.destination]}
            />
            <Circle center={plane.origin} radius={10000} />
            <Circle center={plane.destination} radius={10000} />
          </LayerGroup>
        ))}
      </Pane>
    </MapContainer>
  );
}
