import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import {GoogleMap,withScriptjs,withGoogleMap,Marker} from "react-google-maps";
import Map from "./Map";
import MapWithSearch from "./MapWithSearch";
import RegisterModal from "./RegisterModal";

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function EventDetailModal(props)  {
    const [dialogShow,setDialogShow] = React.useState(false);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            scrollable = "true"
            centered >
            <Modal.Header style={{maxHeight:'10em'}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h3>{props.title}</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Start & End Dates</h5>
                {props.start} / {props.end}
                <h5 style={{marginTop:"2em"}}>Left Capacity</h5>
                {props.leftcap + " out of " + props.cap }
                <br/>
                <h5 style={{marginTop:"2em"}}>Q&A</h5>
                {props.link}
                <div style = {{width: '50m',height: '50vh'}}>
                    <WrappedMap lat= {props.lat} lng = {props.lng}
                        mapElement = {<div style={{height: '100%'} }/>}
                                containerElement = {<div style={{height: '100%'} }/>}
                                loadingElement = {<div style={{height:'100%'}}/>}
                                googleMapURL = {'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDmArMxHZL3KyWmLeQQBhaSr0W-m_EaKe0'}/>

                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setDialogShow(true)}>REGISTER</Button>
                <RegisterModal
                open = {dialogShow}
                handleClose = {()=>setDialogShow(false)}
                eventName = {props.eventName}
                />
                <Button onClick={props.onHide}>CANCEL</Button>
            </Modal.Footer>
        </Modal>
    );
}