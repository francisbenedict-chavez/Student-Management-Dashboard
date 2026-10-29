import { getStudentsAPI, addStudentsAPI } from "./api.js";

console.log("Initial DB State: ", getStudentsAPI());

console.log(
  "Returned Saved Object:",
  addStudentsAPI({
    firstName: undefined,
    lastName: "Yagami",
    email: "undefined.yagami@example.com",
  }),
  addStudentsAPI({
    firstName: undefined,
    lastName: "Anoter Yagami",
    email: "light.anotheryagami@example.com",
  }),
);

console.log(
  "Returned Saved Object:",
  addStudentsAPI({
    firstName: "Light",
    lastName: "Yagami",
    email: "light.yagami@example.com",
  }),
);

console.log("Updated DB State: ", getStudentsAPI());
