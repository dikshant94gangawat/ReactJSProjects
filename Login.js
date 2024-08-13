import React from "react";
import { useState } from "react";
const Login = () => {
  const [value, setValue] = useState({
    fname: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    error: {},
  });

  const validateForm = () => {
    if (!value.fname) {
      value.error = "Name is required";
    }

    console.log(value.error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    console.log("form submitted");
  };
  return (
    <div className="maincontainer flex items-center justify-center ">
      <div className="w-6/12 h-max bg-yellow-600 mt-10 flex items-center  justify-center ">
        <form onSubmit={handleSubmit} className=" pt-10 flex flex-col">
          <label
            htmlFor="fname"
            className="text-2xl text-rose-800 font-bold flex justify-between"
          >
            First Name :{" "}
            <input
              type="text"
              id="fname"
              onChange={(e) => setValue({ ...value, fname: e.target.value })}
              placeholder="Type your first name"
              className="p-2 ml-5"
            />
          </label>

          <label
            htmlFor="email"
            className="text-2xl text-rose-800 font-bold  mt-5 flex justify-between"
          >
            Email ID :
            <input
              type="email"
              id="email"
              onChange={(e) => setValue({ ...value, email: e.target.value })}
              placeholder="Type your email id"
              className="p-2 ml-5"
            />
          </label>
          <label
            htmlFor="password"
            className="text-2xl text-rose-800 font-bold  mt-5 flex justify-between"
          >
            Password :
            <input
              type="password"
              id="password"
              onChange={(e) => setValue({ ...value, password: e.target.value })}
              placeholder="Type your password"
              className="p-2 ml-5"
            />
          </label>
          <label
            htmlFor="confirmPassword"
            className="text-2xl text-rose-800 font-bold  mt-5 flex justify-between"
          >
            Confirm Password :
            <input
              type="password"
              id="confirmPassword"
              onChange={(e) =>
                setValue({ ...value, confirmPassword: e.target.value })
              }
              placeholder="Type your password"
              className="p-2 ml-5"
            />
          </label>
          <label
            htmlFor="confirm-password"
            className="text-2xl text-rose-800 font-bold  mt-20"
          >
            Gender :
            <select className="p-1 ml-6">
              <option
                onChange={(e) => setValue({ ...value, fname: e.target.value })}
              >
                Male
              </option>
              <option
                onChange={(e) => setValue({ ...value, fname: e.target.value })}
              >
                Female
              </option>
            </select>
          </label>

          <button className="w-40 h-12 bg-indigo-500 mt-10 mb-10" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
