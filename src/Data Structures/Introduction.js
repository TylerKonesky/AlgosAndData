// Data Structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data. 
// The more time you spend as a developer the more likely you are to need to use one of these data structures. 

// Classes: A blueprint for creating objects with pre-defined properties and methods

class Student {

    //Constructor
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = []
    }
    getFullName(){
        return `Welcome, ${this.firstName} ${this.lastName}`
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 5){
            return `${this.firstName} needs to report for detention!`
        }
        return `${this.firstName} now has ${this.tardies} for the year!`
    }

    addScore(test, score){
        this.scores.push({
            test,
            score
        })
    }

    averageScores(){
        let sum = 0;
        this.scores.map(score =>{
            sum += score.score;
        })
        return sum / this.scores.length;
    }
}

// The method to create new objects must be called a constructor.
// The class keyword creates a constant, so you cannot redefine it. Watch out for the syntax.

let firstStudent = new Student("Cold", "Steele", "4th");
let secondStudent = new Student("Hot", "Steele", "2nd");

// Instance Methods: Methods that pertain to a single instance of a class;

firstStudent.getFullName(); // returns Welcome, Cold Steele
secondStudent.getFullName(); // returns Welcome, Hot Steele

firstStudent.markLate();// returns Cold now has 1 tardies for the year!

secondStudent.addScore('English', 88); // Updates scores...
secondStudent.addScore('Math', 90); // Updates scores...

secondStudent.averageScores(); // returns 89

