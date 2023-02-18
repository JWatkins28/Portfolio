import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function ProjectCards(props) {

  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      dark: {
        main: '#000000',
        contrastText: '#fff',
      },
    },
  });

  return (
    <Card sx={{ maxWidth: 345 }} className="hover:transition hover:ease-in-out hover:scale-110 hover:duration-300">
      <CardMedia
        component="img"
        alt={props.name}
        height="140"
        image={props.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <ThemeProvider theme={theme}>
      <CardActions className="flex justify-center">
      <a href={props.deployed} target="_blank"><Button color="dark" variant="contained" size="medium">Deployed App</Button></a>
      <a href={props.github} target="_blank"><Button color="dark" variant="outlined" size="medium">Github Repo</Button></a>
      </CardActions>
      </ThemeProvider>
    </Card>
  );
}