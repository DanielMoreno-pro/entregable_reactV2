import React, { Component } from 'react';

import { Link } from "react-router-dom";
//import { makeStyles } from '@material-ui/core/styles';
import { Container, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import imagen from '../styles/i1.jpg';
import Areas from './Areas';


const images = [
    {
      url: 'https://www.colmich.edu.mx/images/carrusel/ConvocatoriasRevRel.jpg',
      title: 'Breakfast',
      width: '40%',
    },
    {
      url: './styles/i1.jpg',
      title: 'Burgers',
      width: '30%',
    },
    {
      url: 'styles/i1.jpg',
      title: 'Camera',
      width: '30%',
    },
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));
  
  export default function ButtonBases() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
       
         <Link to="/areas"> 
          <Button
            focusRipple
            key={'Areas'}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: '435px',
              height: '450px'
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${'https://www.colmich.edu.mx/images/carrusel/ConvocatoriasRevRel.jpg'})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {'Areas'}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </Button>
          </Link>
          
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


          <Link to="/ups"> 
          <Button
            focusRipple
            key={'Areas'}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: '435px',
              height: '450px'
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${'https://www.colmich.edu.mx/images/carrusel/ConvocatoriasRevRel.jpg'})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {'UPS'}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </Button>
          </Link>
        
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


        
          <Link to="/tecnico"> 
          <Button
            focusRipple
            key={'Areas'}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: '435px',
              height: '450px'
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${'https://www.colmich.edu.mx/images/carrusel/ConvocatoriasRevRel.jpg'})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {'Tecnicos'}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </Button>
          </Link>
      </div>
    );
  }
  /*
class Inicio extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App-content">
                <Container maxWidth="xs">
                <Link to="/areas">
                    <Button variant="contained" color="primary">

                        Areas
                    </Button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="../ups">
                    <Button variant="contained" color="primary">
                        UPS
                    </Button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="../tecnico">
                    <Button variant="contained" color="primary">
                        Tecnicos
                    </Button>
                </Link>
                
            </Container>
            </div>
         );
    }
}
 */
//export default Inicio;

