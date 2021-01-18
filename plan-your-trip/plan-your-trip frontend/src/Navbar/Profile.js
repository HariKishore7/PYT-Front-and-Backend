import React, { useState, useEffect } from 'react';
import './Profile.css';
export default function Profile(){
    const [prevTrips, setprevTrips] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:9999/Booking",{credentials:"include"})
        .then((r)=>r.json())
        .then((arr)=>{
            setprevTrips(arr);
        });
    }, []);

    // return(
    //     <div id="userprofile">
    //         if(setprevTrips.length===0){
    //             <div>No Prvious Trips</div>
    //         }
    //         else{
    //             <div>Some are there</div>
    //         }
    //     </div>
    // );
    return(
        <div id="userprofile">
            if(setprevTrips.length===0){
                <div>No Prvious Trips</div>
            }
            else{
                <div>Some are there</div>
            }
        </div>
    );
}