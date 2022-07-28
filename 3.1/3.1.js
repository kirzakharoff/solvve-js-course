/* 1 */
function Employee (name, surName, yearOfBirth) {
    this.name = name;
    this.surName = surName;
    this.fullName = () => {
     return this.name + ' ' + this.surName;
     };
   this.yearOfBirth = yearOfBirth;
   this.age = () => {
      const currentYear = new Date().getFullYear();
     return currentYear - yearOfBirth
   }
   
  
  }
  
  
  const employee1 = new Employee('Kirill', 'Zakharov', 1981);
  console.log(employee1.name);
  
  employee1.name = 'Vasya'
  
  console.log(employee1.name);
  
  
 /* 2 */
  Object.freeze(employee1);
  
  employee1.name = 'Kolya'
  
  console.log(employee1.fullName()); 
 
 
 /* 3 */
 class EmployeeClass {
   constructor (name, surName, yearOfBirth) {
     this.name = name;
     this.surName = surName;
       this.yearOfBirth = yearOfBirth;    
   }
   
   get fullName () {
     return this.name + ' ' + this.surName;
   }
 
   get age () {
       const currentYear = new Date().getFullYear();
     return currentYear - this.yearOfBirth;
   }
 }
 
 
 const employee2 = new EmployeeClass('Kirill', 'Zakharov', 1981);
 
 console.log(employee2.age, employee2.fullName)