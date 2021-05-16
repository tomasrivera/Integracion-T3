
import React, { useState } from "react";
import { Button, Card, CardActions, CardContent, makeStyles, Typography, Modal, List } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: '24vh',
    width: '80vw',
    marginInline: 'auto',
    // backgroundColor: 'red',
    flexDirection: 'row',
    overflow: 'auto',
  },
  card: {
    marginInline: 3,
    width: '15vw',
    display: 'inline-block',
  },
  paper: {
    top: '40%',
    left: '40%',
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Flights({ flights }) {
  // console.log(flights);
  const classes = useStyles();
  const [modalFlight, setModalFlight] = useState(undefined);
  const [show, setShow] = useState(false);

  const onClick = (flight) => {
    setModalFlight(flight);
    setShow(true);
  }
  
  return (
    <List className={classes.container}>
      {modalFlight && <Modal
        open={show}
        onClose={() => setShow(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <Typography variant='h4'>Pasajeros</Typography>
          {modalFlight.passengers.map((passenger) => (
            <Typography key={`passenger-${passenger.name}`} variant='body1'>{passenger.name}</Typography>
          ))}
        </div>
      </Modal>}
      {
        flights.map((flight) => (
          <Card key={`flight-card-${flight.code}`} className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {flight.plane}
            </Typography>
            <Typography variant="h5" component="h2">
              {flight.airline} - {flight.code}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {`Origen: ${flight.origin}`}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {`Destino: ${flight.destination}`}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => onClick(flight)}>Pasajeros</Button>
          </CardActions>
          </Card>
        ))
      }
    </List>
  )
}