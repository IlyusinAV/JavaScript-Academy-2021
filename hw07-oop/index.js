class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  
    getFullName() {
      return this.name + " " + this.surname;
    }
  }
  
  class Developer extends Person {}
  
  class Tester extends Person {}
  
  class Project {
    developers = [];
    testters = [];
  
    addDeveloper(dev) {
      this.developers.push(dev.getFullName());
    }
  
    addTester(tester) {
      this.testters.push(tester.getFullName());
    }
  
    getTeam() {
      console.log("Developers: " + JSON.stringify(this.developers));
      console.log("Testers: " + JSON.stringify(this.testters));
    }
  }
  
  const superPuper = new Project();
  
  const dev1 = new Developer("Bob", "Smith");
  const dev2 = new Developer("John", "Doe");
  const test1 = new Tester("Alex", "Green");
  
  superPuper.addDeveloper(dev1);
  superPuper.addDeveloper(dev2);
  superPuper.addTester(test1);
  
  superPuper.getTeam();
  