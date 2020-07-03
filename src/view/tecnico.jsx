import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import BusinessIcon from '@material-ui/icons/Business';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


import {
    Button,
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon
  } from "@material-ui/core";

  var  tecnicosArray = []


class Tecnico extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            tecnico: tecnicosArray,
            newState: false,
            edit:false,
            idTecnico:0,

        };

    }
    state = {};

    
    //cons data = {};
    titulo = "LISTA DE TECNICOS";

  frmNom = React.createRef();
  frmApaterno = React.createRef();
  frmAmaterno = React.createRef();
  frmTipotecnico = React.createRef();


  

  addTecnico = event => {
    //event.preventDefault();
    
    var newTecnico = this.state;

    
        const data = {
            Nombre: this.frmNom.value,
            Apaterno: this.frmApaterno.value,
            Amaterno: this.frmAmaterno.value,
            Tipo: this.frmTipotecnico.value
        };
    
        if(!this.state.edit) {
            const url = 'http://localhost:5001/api/tecnicos/';
            axios.post(url,data).then(res => console.log(res.data));
          
            
            this.frmNom.value = "";
            this.frmNom.focus();
        
            this.frmApaterno.value = "";
            this.frmAmaterno.value = "";
            this.frmTipotecnico.value = "";
            
        }
        else {
            const url ='http://localhost:5001/api/tecnicos/'+this.state.id;
            axios.put(url,data).then(res => console.log(res.data));

            this.frmNom.value = "";
            this.frmNom.focus();
    
            this.frmApaterno.value = "";
            this.frmAmaterno.value = "";
            this.frmTipotecnico.value = "";
            
        }
       
        this.setState({newTecnico}); 
        this.loadTecnico();
    
      }
    
      viewTecnico = (id) => event => {
        event.preventDefault();
    
        this.frmNom.value = "";
        this.frmNom.focus();
      
        this.frmApaterno.value= "";
        this.frmAmaterno.value= "";
        this.frmTipotecnico.value= "";
    
      }
    
      editTecnico = (id, row ) => (event) => {
      
    
        var newState = this.state;
        newState.edit = true;
        newState.id = id;
    
        this.setState(newState);
    
        this.frmNom.focus();
        this.frmNom.value = this.state.tecnico[row].Nombre;
        this.frmApaterno.value = this.state.tecnico[row].Apaterno;
        this.frmAmaterno.value = this.state.tecnico[row].Amaterno;
        this.frmTipotecnico.value = this.state.tecnico[row].Tipo;

        this.loadTecnico();
      }
    
    
    
      deleteTecnico = (id) => event => {
        event.preventDefault();
        console.log("Borrar Tecnico");
        console.log(id);
    
        const url ='http://localhost:5001/api/tecnicos/'+id;
        axios.delete(url).then(res => console.log(res.data));
    
        this.frmNom.value = "";
        this.frmNom.focus();
    
        this.frmApaterno.value = "";
        this.frmAmaterno.value = "";
        this.frmTipotecnico.value = "";
      
    
        this.loadTecnico();
        
        console.log(url);
      }
   
      loadTecnico()
      {
          axios.get('http://localhost:5001/api/tecnicos')
          .then (res => {
            this.setState({tecnico:res.data});
            console.log(res.data);
          })
    
      }
       
      componentDidMount()
      {
        this.loadTecnico();
      }
    
    
    
        render() { 
            return ( 
                <div className="App-header2">
                    <Link to="/">
                        <Button
                            variant="contained"
                            color="default"
                            size="small"
                            startIcon={<HomeIcon />}
                        >
                        Regresar
                        </Button>
                    </Link>
                    <form autoComplete="off" onSubmit={this.addTecnico}>    
                        <TextField
                            label="Nombre"
                            type="text"
                            margin="normal"
                            variant="outlined"
                            inputRef={e => (this.frmNom = e)}
                        />
                        &nbsp;&nbsp;&nbsp;
                         <TextField
                            label="Apellido Paterno"
                            type="text"
                            margin="normal"
                            variant="outlined"
                            inputRef={e => (this.frmApaterno  = e)}
                        />
                         &nbsp;&nbsp;&nbsp;
                         <TextField
                            label="Apellido Materno"
                            type="text"
                            margin="normal"
                            variant="outlined"
                            inputRef={e => (this.frmAmaterno  = e)}
                        />
                         &nbsp;&nbsp;&nbsp;
                         <TextField
                            label="Tipo"
                            type="text"
                            margin="normal"
                            variant="outlined"
                            inputRef={e => (this.frmTipotecnico  = e)}
                        />
                    
    
    
                        <Fab
                        color="primary"
                        size="medium"
                        //className="dish-form-icon"
                        onClick={this.addTecnico}
                        >
                        <AddIcon />
                        </Fab>
                        
                
                    <List
                        component="nav"
                        subheader={<ListSubheader component="div">{ this.titulo }</ListSubheader>}
                        >
                        {this.state.tecnico.map((tecnico, index) => (
                            <ListItem button key={index}>
                                <ListItemIcon onClick={this.viewTecnico(index)}>
                                    <BusinessIcon />
                                </ListItemIcon>
                                <ListItemText inset primary={tecnico.Nombre} />
                                <ListItemText inset primary={tecnico.Apaterno} />
                                <ListItemText inset primary={tecnico.Amaterno} />
                                <ListItemText inset primary={tecnico.Tipo} />
                                
                                <ListItemIcon 
                                onClick={this.editTecnico(tecnico.id, index)}>
                                    <EditIcon />
                                    
                                </ListItemIcon>
                                <ListItemIcon onClick={this.deleteTecnico(tecnico.id)}>
                                    <DeleteIcon />
                                </ListItemIcon>
                            </ListItem>
                        ))}
                    </List>
                 </form>
                </div>
             );
        }
    }
     
    export default Tecnico;