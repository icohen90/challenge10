const Employee = require("../lib/Employee");

describe('Employee Class Test', () => {
    const employeeName = "Ian";
    const employeeID = "1";
    const employeeEmail = "ian_cohen90@live.com";

    it("New employee returns a role of employee", () => {
        expect(new Employee(employeeName, employeeID, employeeEmail).getRole()).toBe('Employee')
    });
    
    it("New employee returns a name", () => {
        expect(new Employee(employeeName, employeeID, employeeEmail).getName()).toBe(employeeName)
    });

    it("New employee ID matches", () => {
        expect(new Employee(employeeName, employeeID, employeeEmail).getId()).toBe(employeeID)
    });

    it("New employee email matches", () => {
        expect(new Employee(employeeName, employeeID, employeeEmail).getEmail()).toBe(employeeEmail)
    });
})