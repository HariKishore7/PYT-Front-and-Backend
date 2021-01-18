import React from 'react';
import './Hyderabad.css';
import Description from '../Components/Description';
import NavBar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
import {religiousImages,touristImages,parkImages} from "../CityImages/HydImg";
function IntroImage(){
    return(
        <div>
            <img className="hyd" alt="bgimage" src="https://www.wallpapertip.com/wmimgs/44-446351_hyderabad-wallpaper.jpg"></img>
            <h2 className="hydname">Hyderabad</h2>
        </div>
    );
}

function Body(){
    return(
        <div className="infohyd">
            <a href="/Booking"><button className="booknow" value="Hyderabad">Book now</button></a>
            <h1>About Hyderabad</h1>
            <p>Want a taste of being royal? Eat in Hyderabad, where culinary traditions have been passed down from the Nizam monarchy. Arabic, Turkish and Mughlai influences are easily recognisable. The city is famous for its rich, aromatic biryani made with lamb, chicken or vegetables and served with fragrant basmati rice. Satisfy your sweet tooth with double-ka-meetha, a bread pudding.</p>
        </div>
    );
}

export default function Hyderabad(){
    let firsttab="Hyd Religious";
    let secondtab="Hyd Visitor places";
    let thirdtab="Hyd Famous places";
    return(
        <div>
            <NavBar/>
            <IntroImage/>
            <Body/>
            <Description firsttab={firsttab} secondtab={secondtab} thirdtab={thirdtab} religiousImages={religiousImages} touristImages={touristImages} beachImages={parkImages}/>
            <Footer/>
        </div>            
    );
}