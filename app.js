import { getStudentsAPI, addStudentsAPI } from "./api.js";

let localStudent = [];

const studentForm = document.querySelector("#studentForm");
const studentTableBody = document.querySelector("#studentTableBody");
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");

const renderTable = (dataArray) => {
  studentTableBody.replaceChildren();

  if (dataArray.length === 0) {
    studentTableBody.innerHTML = `
            <tr>
                <td colspan = "4" style = "text-align: center;">
                    No student records found.
                </td>
            </tr>
        `;
    return;
  }

  dataArray.forEach((student, index) => {
    const row = document.createElement("tr");
    [index + 1, student.firstName, student.lastName, student.email].forEach(
      (value) => {
        const cell = document.createElement("td");
        cell.textContent = value === undefined || value === null ? "" : value;
        row.append(cell);
      },
    );
    studentTableBody.append(row);
  });
};

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const studentData = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
  };

  if (!studentData.firstName || !studentData.lastName || !studentData.email) {
    alert("Please fill out all input fields!");
    return;
  }

  addStudentsAPI(studentData);
  renderTable(localStudent);
  studentForm.reset();
});

const initApp = () => {
  localStudent = getStudentsAPI();
  renderTable(localStudent);
};

initApp();
