let mockStudentDb = [];

export function getStudentsAPI() {
  return mockStudentDb;
}

export function addStudentsAPI(newStudentData) {
  let id = Date.now();
  while (mockStudentDb.some((student) => student.id === id)) {
    id += 1;
  }

  const studentData = { ...newStudentData };
  const savedStudent = { id, ...studentData };

  mockStudentDb.push(savedStudent);
  return savedStudent;
}

addStudentsAPI({
  firstName: "Leslie",
  lastName: "Andrews",
  email: "leslie.andrews@example.com",
});

addStudentsAPI({
  firstName: "Emma",
  lastName: "Baumgarten",
  email: "emma.baumgarten@example.com",
});
