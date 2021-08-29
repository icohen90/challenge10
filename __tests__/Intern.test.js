const Intern = require("../lib/Intern");

describe('Intern Class Test', () => {
    const employeeName = "Ian";
    const employeeID = "1";
    const employeeEmail = "ian_cohen90@live.com";
    const employeeSchool = "some school";

    it("New Intern returns a role of Intern", () =>{
        expect(new Intern(employeeName, employeeID, employeeEmail, employeeSchool).getRole()).toBe('Intern')
    });

    it("New Employee returns a name", () => {
        expect(new Intern(employeeName, employeeID, employeeEmail, employeeSchool).getName()).toBe(employeeName)
    });
    
    it("Gives employee ID matching input", () => {
        expect(new Intern(employeeName, employeeID, employeeEmail, employeeSchool).getId()).toBe(employeeID)
    });

    it("Populates email address as passed to function", () =>{
        expect(new Intern(employeeName, employeeID, employeeEmail, employeeSchool).getEmail()).toBe(employeeEmail)
    });

    it("Returns School via getSchool method", () =>{
        expect(new Intern(employeeName, employeeID, employeeEmail, employeeSchool).getSchool()).toBe(employeeSchool)
    });
})