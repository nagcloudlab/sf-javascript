"use strict";

// enhanced object literals

const url = "http://localhost";
const headers = {
  "Content-Type": "application/json",
};
const onSuccess = (response) => {
  console.log(response);
};

const config = {
  url,
  port: 8080,
  headers,
  timeout: 5000,
  retries: 3,
  onSuccess,
};

const person = {
  name: "Nag",
  age: 36,
  sayName() {
    console.log("im " + this.name);
  },
};

let addressType = "home"; // home, work, school
const person2 = {
  [addressType + "-address"]: "chennai",
};

const person3 = {
  name: "Nag",
  age: 36,
  "say Name"() {
    console.log("im " + this.name);
  },
};
person3["say Name"]();

//---------------------------------------------------------
