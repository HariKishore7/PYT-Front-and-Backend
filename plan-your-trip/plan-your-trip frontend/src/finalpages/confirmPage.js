import React from 'react';
import './confirmPage.css';

export default function ConfirmPage(){
    return(
        <div>
            <img src="https://www.bing.com/th/id/OGC.007fb8b6548993c4d50e8e25496099ff?pid=1.7&rurl=https%3a%2f%2fcdn.dribbble.com%2fusers%2f224900%2fscreenshots%2f2893304%2fcar_1.gif&ehk=1uajdqdtgnZXJl9aSEskOPbR8s0mHgjakdcmwPZvRlQ%3d" alt="carGif"></img>
            <div className="head">Book The Car</div>
            <div className="userInfo">
                <input type="tel" placeholder="Phone number"></input><br></br>
                <input type="number" placeholder="Age"></input><br></br>
                <input type="dob" placeholder="Date of birth"></input><br></br>
                <input type="address" placeholder="Address"></input><br></br>
                <input type="password" placeholder="Enter password"></input><br></br>
                <input type="text" placeholder="Licence ID"></input>
            </div>
            <div className="buttons">
                <button className="signupButton">BOOK IT NOW</button>
            </div>
        </div>
    );
}