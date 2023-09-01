import React from "react";
import "./buynow.css";
import { Divider } from "@mui/material";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./Right";

const Buynow = () => {
  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
             <h1>Select Cart</h1>
             <p> Select all items</p>
             <span className="leftbuyprice">Price</span>
                  <Divider />
                  

            <div className="item_container">
               <img
                src="https://rukminim2.flixcart.com/image/832/832/kuwzssw0/smartwatch/f/v/0/49-android-ios-dz09-creation4u-yes-original-imag7xnvwujjb3dw.jpeg?q=70"
                alt="image"
                />
                <div className="item_details">
                  <h3>Molife Sence 500 Smartwatch(Black strap,Freesize)</h3>
                  <h3> Smart Watches</h3>
                  <h3 className="differentprice"></h3>
                  <p className="unusual">Usually dispatched in 8 days</p>
                  <p> Eligible for Free Shipping</p>
                  <img
                  src="https://qph.cf2.quoracdn.net/main-qimg-21454ebf6edc35fb0e1f069e47212ab1.webp"
                   alt=""
                    />
                  <Option />
                </div>
                <h3 className="item_price"> ₹4049.00 </h3>
            </div>
                  <Divider />
                  <Subtotal />
              </div>
              <Right/>
    </div>
</div>

  );
};

export default Buynow;
