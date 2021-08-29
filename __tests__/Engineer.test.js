const Engineer = require("../lib/Engineer");

describe('Engineer Class Test', () => {
    const employeeName = "Ian";
    const employeeID = "1";
    const employeeEmail = "ian_cohen90@live.com";
    const employeeGithub = "icohen90";

    it("New Engineer returns a role of employee", () => {
        expect(new Engineer(employeeName, employeeID, employeeEmail, employeeGithub).getRole()).toBe('Engineer')
    });
    
    it("New Engineer returns a name", () => {
        expect(new Engineer(employeeName, employeeID, employeeEmail, employeeGithub).getName()).toBe(employeeName)
    });

    it("New Engineer ID matches", () => {
        expect(new Engineer(employeeName, employeeID, employeeEmail,  employeeGithub).getId()).toBe(employeeID)
    });

    it("New Engineer email matches", () => {
        expect(new Engineer(employeeName, employeeID, employeeEmail,  employeeGithub).getEmail()).toBe(employeeEmail)
    });

    it("New Engineer github matches", () => {
        expect(new Engineer(employeeName, employeeID, employeeEmail,  employeeGithub).getGithub()).toBe(employeeGithub)
    });
})