import React from 'react';
import './Cars.css';
import Description from '../Components/Description';
import NavBar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
import car_image from './car_image.svg';
import {fiveSeater,sevenSeater,luxury} from "./CarImages";

function IntroImage(){
    return(
        <div>
            <img className="carImage" alt="bgimage" src={car_image}></img>
        </div>
    );
}

function Body(){
    return(
        <div className="infocar">
            <h1>Pick As You Wish</h1>
        </div>
    );
}

export default function Cars(){
    let firsttab="Five Seater";
    let secondtab="Seven Seater";
    let thirdtab="Luxury";

    return(
        <div>
            <NavBar/>
            <IntroImage/>
            <Body/>
            <Description firsttab={firsttab} secondtab={secondtab} thirdtab={thirdtab} religiousImages={fiveSeater} touristImages={sevenSeater} beachImages={luxury}/>
            <Footer/>
        </div>            
    );
}