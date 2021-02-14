import {Button} from "@material-ui/core";
import {Paper} from "@material-ui/core";
import {Card} from "@material-ui/core";
import {InputText} from "primereact/inputtext";
import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default class SignUp extends Component
{
    state = {
        inputData: {}
    }
    handleNewUser = (userDetails) =>{
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
    return(
        <div style={{height : '110vh', width : '100%',backgroundImage: 'linear-gradient(to bottom right,#8C4FB7,#3834DE)'}}>
            <Paper style={{backgroundImage: 'linear-gradient(to bottom right,#8C4FB7,#3834DE)'}}>
                <Card class="rounded-card"  header={this.header} footer={this.footer} style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '40%',
                    minHeight: '60%',
                    justifyContent: "center",
                    borderRadius: '20px',
                    backgroundColor:'white'
                }}>
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
                            <label htmlFor="lastname4" className="p-col-12 p-md-2">Password Confirm</label>
                            <div className="p-col-12 p-md-10">
                                <InputText id="lastname4" type="password"/>
                            </div>
                        </div>
                        <br/>
                        <div className="p-field p-grid">
                            <div className="p-col-12 p-md-10">
                                <Button onClick={() => this.handleNewUser(this.state.inputData)} label="Sign Up"  style={{marginLeft: '16em',marginRight: '.4em',color: 'white',backgroundImage: 'linear-gradient(to bottom right,#8C4FB7,#3834DE)' , width : '25%'}}/>
                            </div>
                        </div>

                    </div>

                </Card>
            </Paper>
        </div>
    );}
}