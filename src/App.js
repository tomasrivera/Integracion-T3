import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LocalAirportOutlinedIcon from '@material-ui/icons/LocalAirportOutlined';
import { io } from 'socket.io-client';
import Map from './components/Map';
import Chat from './components/Chat';


const ENDPOINT = "wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#cfe8fc'
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();

  const [positions, setPositions] = useState({});
  const [flights, setFlights] = useState([]);
  const [positionsHistory, setPositionsHistory] = useState([]);
  const [chat, setChat] = useState([]);
  
  const sendMessage = (name, message) => {
    const socket = io(
      ENDPOINT, { path: '/flights' }
    );
    socket.on("connect", () => {
      socket.emit("CHAT", { name, message }, () => (socket.close()))
    });
  }

  useEffect(() => {
    const socket = io(
      ENDPOINT, { path: '/flights' }
    );

    socket.emit("FLIGHTS")

    socket.on("connect", () => {
      console.log(`connected to websocket with id: ${socket.id}`);
    });

    socket.on("POSITION", data => {
      setPositions((prevState) => ({
        ...prevState,
        [data.code]: {
          position: data.position,
        },
      }));
      setPositionsHistory((prevState) => ([...prevState, data.position]));
    });

    socket.on("FLIGHTS", (data) => {
      setFlights(data);
    });

    socket.on("CHAT", (data) => {
      setChat((prevState) => ([...prevState, data]));
    });
    return () => {
      socket.close();
    }
  }, []);

  return (
    <Container className={classes.root} maxWidth={false} disableGutters>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <LocalAirportOutlinedIcon className={classes.icon} color="inherit" aria-label="icon" />
          <Typography variant="h5" className={classes.title}>
            Tarea 3
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={0}>
        <Grid item xs={8}>
          <Map flights={flights} positions={positions} positionsHistory={positionsHistory} />
        </Grid>
        <Grid item xs={4}>
          <Chat messages={chat} send={sendMessage}/>
        </Grid>
        <Grid item xs={12}>
            <p>Hola</p>
        </Grid>
      </Grid>
    </Container>
);
}

