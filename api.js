let mockStudentDb = [];

export function getStudentsAPI() {
  return mockStudentDb;
}

/**
 * Adds a student to the mock database and returns the saved record.
 * @param {{firstName?: string, lastName?: string,
 * email?: string}} newStudentData
 * Student details to add.
 * @returns {{id: number, firstName?: string, lastName?: string,
 * email?: string}}
 * The saved student record.
 */
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
