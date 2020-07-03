import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";


import {
    Button,
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon
  } from "@material-ui/core";

  var  areasArrway = []


class Areas extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            newState: false,
            areasA: areasArrway,
            edit:false,
            idArea:0,

        };
    }
    state = {};

    
    //cons data = {};
    titulo = "LISTA DE AREAS";


  frmNomArea = React.createRef();
  frmPiso = React.createRef();
  

  addArea = event => {
    //event.preventDefault();
    
    var newArea = this.state;
    
    const data = {
        area: this.frmNomArea.value,
        piso: this.frmPiso.value
    };


    if(!this.state.edit) {
        const url = 'http://localhost:5001/api/areas/';
        axios.post(url,data).then(res => console.log(res.data));
       // newArea.areas.push(this.frmNomArea.value);
        //newArea.areas.sort();    
        this.frmNomArea.value = "";
        this.frmNomArea.focus();
        this.frmPiso.value = "";
    }
    else {
        const url ='http://localhost:5001/api/areas/'+this.state.id;
        axios.put(url,data).then(res => console.log(res.data));

        this.frmNomArea.value = "";
        this.frmNomArea.focus();

        this.frmPiso.value = "";

      // newArea.areas[this.state.id] = this.frmNomArea.value;
      // newArea.edit = false;
       // newArea.id = 0;
    }
   

    this.setState({newArea}); 
    this.loadAreas();
  }

  viewArea = (id) => event => {
    event.preventDefault();

    this.frmNomArea.value = "";
    this.frmNomArea.focus();

    this.frmPiso.value = "";
    //this.frmNomArea.value = this.state.areas[id];
  }

  editArea = (id, row) => (event) => {
    //console.log("Editar Area");
    //console.log(id);

    var newState = this.state;
    newState.edit = true;
    newState.id = id;

    this.setState(newState);

    this.frmNomArea.focus();
    this.frmNomArea.value = this.state.areasA[row].area;
    this.frmPiso.value = this.state.areasA[row].piso;
    this.loadAreas();

    

  }

  deleteArea = (id) => event => {
    //event.preventDefault();
    console.log("Borrar area");
    console.log(id);

    const url ='http://localhost:5001/api/areas/'+id;
    axios.delete(url).then(res => console.log(res.data));

    this.frmNomArea.value = "";
    this.frmNomArea.focus();

    this.frmPiso.value = "";

    this.loadAreas();
    console.log(url);
  

  }

  loadAreas()
  {
      axios.get('http://localhost:5001/api/areas')
      .then (res => {
        this.setState({areasA:res.data});
        console.log(res.data);
      })

  }
   
  componentDidMount()
  {
    this.loadAreas();
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
                <form autoComplete="off" onSubmit={this.addArea}>    
                    <TextField
                        label="Area"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmNomArea = e)}
                    />
                     &nbsp;&nbsp;&nbsp;
                     <TextField
                        label="Tipo"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmPiso  = e)}
                    />
                    <Fab
                    color="primary"
                    size="medium"
                    //className="dish-form-icon"
                    onClick={this.addArea}
                    >
                    <AddIcon />
                    </Fab>
                


                <List
                    component="nav"
                    subheader={<ListSubheader component="div">{ this.titulo }</ListSubheader>}
                    >
                    {this.state.areasA.map((area, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon onClick={this.viewArea(index)}>
                                <BusinessIcon />
                            </ListItemIcon>
                            <ListItemText inset primary={area.area} />
                            <ListItemText inset primary={area.piso} />
                            
                            <ListItemIcon onClick={this.editArea(area.id, index)}>
                                <EditIcon />
                            </ListItemIcon>
                            <ListItemIcon onClick={this.deleteArea(area.id)}>
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
 
export default Areas;