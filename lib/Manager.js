const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email, 'Manager');
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;