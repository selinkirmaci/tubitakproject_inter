import {Card, Paper} from "@material-ui/core";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import React, {Component, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

export default class Login extends Component
{
    state = {
        user: {},
        username : "",
        password: "",
        tokeNotTaken:false,
        token:"",
        inputData: {}

    }
    handleNewUser = (userDetails) =>{
        console.log(userDetails);
        axios.post("/users",userDetails);
    };

    handleInputChange= (event) => {
        event.persist();
        this.setState(prevState => {
            let inputData = {...prevState.inputData};
            inputData[event.target.id] = event.target.value;
            return {...prevState, inputData : inputData };
        })
    }
    render() {
        return (
            <div class="row no-gutters">
                <div class="col no-gutters" style={{height: '100vh', width: '80%', backgroundColor: 'white'}}>
                    <Paper style={{
                        backgroundImage: 'linear-gradient(to bottom right,#8C4FB7,#3834DE)',
                        height: '100vh',
                        width: '80%'
                    }}></Paper>
                </div>
                <div className="col no-gutters" style={{height: '100vh', width: '120%'}}>
                    <Paper elevation={0} style={{height: '100vh', width: '100%'}}>
                        <Paper elevation={0} style={{
                            position: 'absolute', left: '30%', top: '35%',
                            transform: 'translate(-50%, -50%)',
                            width: '70%',
                            minHeight: '50%',
                            maxHeight: '60%',
                            justifyContent: "center"
                        }}>
                            <h3 class="text" style={{marginLeft: '40%'}}>WELCOME</h3>
                            <br/>
                            <br/>
                            <div className="p-fluid">
                                <br/>
                                <div className="p-fluid p-formgrid p-grid">
                                    <div className="p-field p-col-12 p-md-6">
                                        <label htmlFor="firstname6">Name</label>
                                        <InputText id="name" type="text"  onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="p-field p-col-12 p-md-6">
                                        <label htmlFor="lastname6">Surname</label>
                                        <InputText id="surname" type="text" onChange={this.handleInputChange} />
                                    </div>
                                </div>
                                <br/>
                                <div className="p-field p-grid">
                                    <label htmlFor="lastname4" className="p-col-12 p-md-2">TC Kimlik No</label>
                                    <div className="p-col-12 p-md-10">
                                        <InputText id="tcKimlikNo"  onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <div className="p-field p-grid">
                                    <label htmlFor="lastname4" className="p-col-12 p-md-2">Email</label>
                                    <div className="p-col-12 p-md-10">
                                        <InputText id="email" type="email" onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <br/>
                                <div className="p-field p-grid">
                                    <label htmlFor="lastname4" className="p-col-12 p-md-2">Username</label>
                                    <div className="p-col-12 p-md-10">
                                        <InputText id="username" type="username" onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <br/>
                                <div className="p-field p-grid">
                                    <label htmlFor="lastname4" className="p-col-12 p-md-2">Password</label>
                                    <div className="p-col-12 p-md-10">
                                        <InputText id="password" type="password" onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <br/>
                                <div className="p-field p-grid">
                                    <div className="p-col-12 p-md-10">
                                        <Link to="/homepage">
                                        <Button onClick={() => this.handleNewUser(this.state.inputData)} label="Sign Up"  style={{marginLeft: '16em',marginRight: '.4em',color: 'white',backgroundImage: 'linear-gradient(to bottom right,#8C4FB7,#3834DE)' , width : '25%'}}/>
                                        </Link>
                                    </div>
                                </div>

                            </div>

                            <div>
                                <br/>
                                <Link to="/homepage">
                                    <li style={{
                                        listStyle: 'none',
                                        marginLeft: '38%',
                                        textDecorationLine: 'underline',
                                        color: '#8C4FB7'
                                    }}>Already Have An Account?
                                    </li>
                                </Link>
                            </div>
                        </Paper>
                    </Paper>
                </div>
            </div>
        );
    }
}