import React from "react";
import "./signup.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Sign_up = () => {
  const [udata, setUdata] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });
  const adddata = (e) => {
    const { name, value } = e.target;
    setUdata(() => {
      return {
        ...udata,
        [name]: value,
      };
    });
  };
  return (
    <section>
      <div className="sign_container">
        <div className="sign_header ">
          <img src="./blacklogoamazon.png " alt="amazonlogo" />
        </div>
        <div className="sign_form">
          <form>
            <h1>Sign-Up</h1>
            <div className="form_data">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                onChange={adddata}
                //onChange={(e)=>setUdata({...udata,name:e.target.value})}
                value={udata.name}
                name="name"
                id="name"
              />
            </div>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                onChange={adddata}
                value={udata.email}
                name="email"
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="number">Mobile number</label>
              <input
                type="number"
                onChange={adddata}
                value={udata.number}
                name="number"
                id="number"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                onChange={adddata}
                value={udata.password}
                name="password"
                id="password"
                placeholder="At least 6 characters"
              />
            </div>
            <div className="form_data">
              <label htmlFor="cpassword">Password again</label>
              <input
                type="password"
                onChange={adddata}
                value={udata.password}
                name="cpassword"
                id="cpassword"
              />
            </div>
            <button className="signin_btn">Continue</button>
            <div className="signin_info">
              <p>Already have an account?</p>
              <NavLink to="/login">Signin</NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Sign_up;
