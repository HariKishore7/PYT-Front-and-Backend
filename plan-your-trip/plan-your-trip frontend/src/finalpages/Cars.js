import React from 'react';
import './Cars.css';
import Description from '../Components/Description';
import {fiveSeater,sevenSeater,luxury} from "./CarImages";

function Body(){
    return(
        <div className="body">
            <h1>Choose Your Own Car</h1>
            <p>Pick as you wish</p>
        </div>
    );
}

export default function Cars(){
    return(
        <div>
            {/* <Navbar/> */}
            <Body/>
            <Description religiousImages={fiveSeater} touristImages={sevenSeater} beachImages={luxury}/>
        </div>            
    );
}