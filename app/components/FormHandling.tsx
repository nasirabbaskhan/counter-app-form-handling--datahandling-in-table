"use client";
import { setEngine } from "crypto";
import React, { useState } from "react";

export default function FormHandling() {
  const [userName, setUserName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setPhone] = useState("");

  //   const onChangeHandler = (event: any) => {
  //     setUserName(event.target.value);
  //   };

  //   const emailonChangeHandler = (e: any) => {
  //     setemail(e.target.value);
  //   };

  //   const phonChangeHandler = (e: any) => {
  //     setPhone(e.target.value);
  //   };

  return (
    <div className="mt-9 ml-4">
      <p className="text-2xl mb-3">Form Handling</p>
      <div>
        {" "}
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className="border border-black outline-none rounded mb-6"
          type="text"
          name="text"
          placeholder="Enter Your Name."
        />
      </div>
      <div>
        <input
          onChange={(e) => {
            setemail(e.target.value);
          }}
          className="border border-black outline-none rounded mb-6"
          type="text"
          name="text"
          placeholder="Enter Your Email."
        />
      </div>

      <div>
        <input
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          className="border border-black outline-none rounded mb-6"
          type="text"
          name="text"
          placeholder="Enter Your Pmail."
        />
      </div>

      <hr className="bg-black" />
      <p>Your Name: {userName}</p>
      <p>Email : {email}</p>
      <p>Phone No : {phone}</p>
    </div>
  );
}
