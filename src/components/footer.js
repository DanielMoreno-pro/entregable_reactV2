import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/header.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
 
  
class Footer extends Component{
    render(){
        
        return(
            <div className='espacioSuperior'>
      <Grid container spacing={3}>
        
        <Grid item xs={6} sm={3}>
          <Paper className='{classes.paper}'>
              <img src = "https://www.colmich.edu.mx/templates/plantilla2.5/css/imagenes/logo_cabeza_sector2.png"/>

          </Paper>
        </Grid>
      
        <Grid item xs={6} sm={3}>
          <Paper className='{classes.paper}'>
          <div> <h1> Contacto directo </h1></div> 
          <div id='cedes' class = "cedes">Telefono: 52 (351) 5157100</div> 
          <div> </div>
          <div id='cedes' class = "cedes">Direccion: Martínez de Navarrete 505, Col. Las Fuentes</div> 
          <div id='cedes' class = "cedes">Codigo Postal: 59699</div>       

          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className='{classes.paper}'>
          <div> <h1> Otras Cedes </h1></div> 
            <div id='cedes' class = "cedes">CENTROGEO</div> 
            <div id='cedes' class = "cedes">CIAD</div> 
            <div id='cedes' class = "cedes">CIATEC</div> 
            <div id='cedes' class = "cedes">CIDETEQ</div> 
            <div id='cedes' class = "cedes">COLEF</div> 
            <div id='cedes' class = "cedes">ECOSUR</div> 
            <div id='cedes' class = "cedes">CIO</div> 
          </Paper>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Paper className='{classes.paper}'>
            <div> <h1> Otras Cedes </h1></div> 
            <div id='cedes' class = "cedes">COLMEX</div> 
            <div id='cedes' class = "cedes">COLSAN</div> 
            <div id='cedes' class = "cedes">ECOSUR</div> 
            <div id='cedes' class = "cedes">CIMAT</div> 
            <div id='cedes' class = "cedes">CIDESE</div> 
            <div id='cedes' class = "cedes">INFOTEC</div> 
            <div id='cedes' class = "cedes">MORA</div> 
            

          </Paper>
        </Grid>
      </Grid>
      
    </div>
            /*
            <div className = "App-header1">
            
            <h1>El Colegio de Michoacán</h1>
             
            </div>
            */
        );
    }
}
export default Footer;