const Manager = require("../lib/Manager");

describe('Manager Class Test', () => {
    const employeeName = "Ian";
    const employeeID = "1";
    const employeeEmail = "ian_cohen90@live.com";
    const employeeOfficeNumber = "some school";

    it("New Manager returns a role of Manager", () =>{
        expect(new Manager(employeeName, employeeID, employeeEmail, employeeOfficeNumber).getRole()).toBe('Manager')
    });

    it("New Employee returns a name", () => {
        expect(new Manager(employeeName, employeeID, employeeEmail, employeeOfficeNumber).getName()).toBe(employeeName)
    });
    
    it("Gives employee ID matching input", () => {
        expect(new Manager(employeeName, employeeID, employeeEmail, employeeOfficeNumber).getId()).toBe(employeeID)
    });

    it("Populates email address as passed to function", () =>{
        expect(new Manager(employeeName, employeeID, employeeEmail, employeeOfficeNumber).getEmail()).toBe(employeeEmail)
    });

    it("Returns office number of employee", () =>{
        expect(new Manager(employeeName, employeeID, employeeEmail, employeeOfficeNumber).getOfficeNumber()).toBe(employeeOfficeNumber)
    });
})