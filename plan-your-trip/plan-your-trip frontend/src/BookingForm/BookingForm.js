import react from 'react';
import './BookingForm.css';
import NavBar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
import logo from './FormImg.svg'

export default function Form(){
  return(
    <>
    <NavBar/>
      {/* <img className="sideimg" src="https://thepointsguy.com/wp-content/themes/tpg-2016/client/images/tpg-weekly-update-man-left.svg" alt="sideimg"></img> */}
      <img className="sideimgbook" src={logo} alt="sideimg"></img>
        <div className="form-containerbook sign-in-containerbook">
          <form action="#">
            <h1>Fill the Form</h1>
            <div className="inputfieldsbook">
              <input type="text" placeholder="Name" />
              <input type="number" placeholder="Age" />
              <input type="tel" placeholder="Phone Number" />
              <input type="text" disabled value="cityval"/>
              <input type="password" placeholder="Driving Licence Number" />
              <input type="number" placeholder="Number of travellers"/>
              <div className="chooseacar">Choose a car : </div>
              <select id="cars" required>
                <option value="Selectacar">Select a Car</option>
                <optgroup label="Five Seater">
                  <option value="Swift Dezire">Swift Dezire</option>
                  <option value="Renault Kwid">Renault Kwid</option>
                  <option value="Hyundai Creta">Hyundai Creta</option>
                </optgroup>
                <optgroup label="Seven Seater">
                  <option value="Innova">Innova</option>
                  <option value="Duster">Duster</option>
                  <option value="Fortuner">Fortuner</option>
                </optgroup>
                <optgroup label="Luxury">
                  <option value="MgHector">MgHector</option>
                  <option value="Kia">Kia</option>
                  <option value="Jeep">Jeep</option>
                </optgroup>
              </select>
              <p>Date of plan</p>
              <input type="date" placeholder="date of trip" />
            </div>
            <button className="booknowbook">Book Now</button>
          </form>
        </div>
        <Footer/>
  </>
  );
}