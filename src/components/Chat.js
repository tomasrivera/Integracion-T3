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
    height: '50vh',
    overflow: 'auto',
  },
  paper: {
    padding: 10,
    marginBottom: 5,
  },
  paperInline: {
    flexDirection: 'horizontal',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 15,
  },
  message: {
    alignText: 'right',
    alignSelf: 'right',
    flexGrow: 1,
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
              <Typography variant="body1">{message.date}</Typography>
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