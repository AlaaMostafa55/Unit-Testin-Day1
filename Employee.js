/**
 * Represents a Employee in the system.
 */
class Employee {
  /**
   * @param {string} name the employee name.
   * @param {number} age the employee age.
   * @param {number} yearsOfExp the number of employee years of experience.
   */
  constructor(name, age, yearsOfExp) {
    this.name = name;
    this.age = age;
    this.yearsOfExp = yearsOfExp;
  }
  /**
   * Setting salary according to number of years of experience.
   * @return {Number} the salary after setting it.
   ** If 0 < yearsOfExp <= 5 then salary will be 5000
   ** If 5 < yearsOfExp then salary will be 9000
   */
  calculateSalary() {
    this.salary = this.yearsOfExp <= 5 ? 5000 : 9000;
    return this.salary;
  }
 
  /**
   *
   * @returns {object} The object containing the address info.
   * @param {String} country The country of the address.
   * @param {String} city The city of the address.
   **/
  setAddress(country, city) {
    this.address = { country, city };
    return this.address;
  }
  /**
   * Increasing salary based on years of experience and notify the employee that he has been promoted
   ** If 0 < yearsOfExp <= 6 then salary will be increased by 20% and he'll be senior
   ** If 6 < yearsOfExp <= 10 then salary will be increased by 40% and he'll be team lead
   **/
  getPromoted() {
    if (this.yearsOfExp > 0 && this.yearsOfExp <= 6) {
      this.sendEmployeeMessage("you got promoted to be senior");
      this.salary *= 1.2; //20%
    } else if (this.yearsOfExp > 6 && this.yearsOfExp <= 10) {
      this.sendEmployeeMessage("you got promoted to be team lead");
      this.salary *= 1.4; //40%
    }
  }
  sendEmployeeMessage(message) {
    // imagine there is code sending email
    message;
  }
  /**
   *
   * @returns {String} The department info like "10100: Alex".
   * @param {Object} dept The object representing department.
   * @param {function} dept.getId getting the department id.
   * @param {function} dept.getLocation getting the department location.
   **/
  deptInfo(dept) {
    dept.xx()
    return dept.getId() + ": " + dept.getLocation();
  }
}

module.exports = Employee;
