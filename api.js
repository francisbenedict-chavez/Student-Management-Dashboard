const mockStudentDb = [
    { id: 1779353927081, firstName: "Leslie", lastName: "Andrews", email: "leslie.andrews@example.com" },
    { id: 1779353927081, firstName: "Emma", lastName: "Baumgarten", email: "emma.baumgartn@example.com" }
];

function getStudentsAPI() {
    return mockStudentDb;
}

function addStudentsAPI(newStudentData) {
    const savedStudent = {
        // ...newStudentData,
        // id: Date.now()
    };

    mockStudentDb.push(savedStudent);
    return savedStudent;
}

module.exports = { getStudentsAPI, addStudentsAPI };
