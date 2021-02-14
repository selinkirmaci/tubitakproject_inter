import React, {Component} from "react";
import {Grid, Paper} from "@material-ui/core";
import {CardDemo} from "./CardDemo";
import {Sidebar} from "primereact/sidebar";
import {AppBar,Toolbar,IconButton,Typography,InputBase,fade,makeStyles} from "@material-ui/core";
import AppBarShort from "./AppBarShort";
import EventCard from "./EventCard";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


export default class  UserHomePage extends Component
{
    column = [
        {id: "name"},
        {id: "surname"},
        {id: "username"},
        {id: "email"},
        {id: "tcKimlikNo"},
        {id: "paswword"},
    ];
    constructor() {
        super();
        this.state = {
            suggestions: null,
            visibleLeft: false,
            postArray: [
                {id: "name",start:"Event2 start date",end:"Event end date",location:"event2 location",leftcap:"40"},
                {id: "name",start:"Event2 start date",end:"Event end date",location:"event2 location",leftcap:"40"},
            ],
            eventsData: []
        };
        this.eventNames = [];
        this.names = [];
    }
    suggest(event) {
        let results = this.names.filter((names) => {
            return names.toLowerCase().startsWith(event.query.toLowerCase());
        });

        this.setState({ suggestions: results });
    }
    componentDidMount()
    {
        axios.get("/events/current").then(response =>{
            this.setState({eventsData: response.data});
                console.log(response);
        });
        console.log(this.state.eventsData);
    }

    render() {
        return (
            <div className={"root"}>
               <AppBarShort names = {this.eventNames} title = "Home Page"></AppBarShort>

            <div style = {{justifyContent: 'center'}}>
                <br/>
                <Grid container spacing = {3}>
                    {
                        this.state.eventsData.map((event , index) =>
                            {
                                this.names.push(event.eventName)
                                this.eventNames.push(event.eventName)
                                return(
                                    <Grid item xs = {3}>
                                        <EventCard  title = {event.eventName}
                                                    start = {event.startDate}
                                                    end={event.endDate}
                                                    location={event.longitude}
                                                    lat = {event.latitude}
                                                    lng={event.longitude}
                                                    leftcap = {event.leftCapacity}
                                                    cap = {event.capacity}
                                                    link = {event.link}
                                        />
                                    </Grid>
                                )
                            }
                        )
                    }
                </Grid>
            </div>
            </div>

        );
    }
}