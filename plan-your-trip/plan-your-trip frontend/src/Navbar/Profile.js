import React, { useState, useEffect } from 'react';
import './Profile.css';
import NavBar from '../Navbar/Navbar';
import Footer from '../footer/Footer';

function UserProfile(props){
    return(
        <div className="profileInfo">
            <div className="userName">Hari</div>
            {props.length ? <div>No previos trips</div> : <div>Some trips are there to be added here</div> }
        </div>
    )
}

export default function Profile(){
    const [prevTrips, setprevTrips] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:9999/Booking",{credentials:"include"})
        .then((r)=>r.json())
        .then((arr)=>{
            setprevTrips(arr);
        });
    }, []);
    return(
        <div>
            <NavBar/>
            <UserProfile lenght={setprevTrips.length}/>
            <Footer/>
        </div>
    );
}