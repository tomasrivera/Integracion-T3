import React, { useState } from "react";
import { Typography, Container, makeStyles, Paper, List, TextField, Button } from "@material-ui/core"


const useStyles = makeStyles(() => ({
  root: {
    // backgroundColor: 'white',
    width: "90%",
    marginTop: 15,
    padding: 10,
  },
  list: {
    height: '45vh',
    overflow: 'auto',
  },
  paper: {
    padding: 10,
    marginBottom: 5,
  },
  paperInline: {
    // flex: 'grow',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    display: 'inline-block',
  },
  date: {
    display: 'inline-block',
  },
  message: {
  },
  inputText: {
    width: '75%',
    marginRight: 5,
    backgroundColor: 'white',
  },
  form: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameLabel: {
    marginRight: 10,
  }
}));

export default function Chat({messages, send}) {
  const classes = useStyles();

  const [input, setInput] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);

  const toDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toTimeString();
  }

  const onClick = () => {
    if (name) {
      send(name, input);
      setInput('');
      setNameError(false);
    } else {
      setNameError(true);
    }
  }

  const onWrite = (event) => {
    setInput(event.target.value)
  }

  return (
    <Container className={classes.root}>
      <Typography variant="h5">Chat</Typography>
      <List className={classes.list}>
        {messages.map((message, i) => (
          <Paper key={`message-${i}`} className={classes.paper}>
            <Container className={classes.paperInline}>
              <Typography className={classes.name} variant="body1">{message.name}</Typography>
              <Typography className={classes.date} variant="body1" align='right'>{toDate(message.date)}</Typography>
            </Container>
            <Container>
              <Typography className={classes.message} variant="body1" align='right'>{message.message}</Typography>
            </Container>
          </Paper>
        ))}
      </List>
      <Container>
      <form className={classes.form} noValidate autoComplete="off">
        <Typography className={classes.nameLabel} variant="body1">Nickname</Typography>
        <TextField error={nameError} value={name} onChange={(event) => setName(event.target.value)} className={classes.inputText} variant="outlined" />
      </form>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField value={input} onChange={onWrite} className={classes.inputText} variant="outlined" />
        <Button variant="contained" color="primary" onClick={onClick}>Enviar</Button>
      </form>
      </Container>
    </Container>
  )
}