// collegeData.js

// Import the 'fs' module to work with file system operations
const fs = require('fs').promises;

// Define a class named 'Data' to represent the structure of your data
class Data {
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

// Initialize a variable to hold the data collection
let dataCollection = null;

// Define an asynchronous function named 'initialize'
async function initialize() {
    return new Promise(async (resolve, reject) => {
        try {
            // Read the contents of the 'Students.json' and 'Courses.json' files
            const studentsData = await fs.readFile('../Data/Students.json', 'utf-8');
            const coursesData = await fs.readFile('../Data/Courses.json', 'utf-8');

            // Parse the JSON data into arrays of objects
            const students = JSON.parse(studentsData);
            const courses = JSON.parse(coursesData);

            // Create an instance of the 'Data' class with the parsed data
            dataCollection = new Data(students, courses);
            
            // Resolve the promise to signal successful initialization
            resolve();
        } catch (error) {
            // Reject the promise with an error message if there's an issue during initialization
            reject(`Unable to read students.json. Error: ${error.message}`);
        }
    });
}

// Define an asynchronous function named 'getAllStudents'
async function getAllStudents() {
    return new Promise((resolve, reject) => {
        // Check if there is valid data, then resolve with the 'students' array
        if (dataCollection && dataCollection.students) {
            resolve(dataCollection.students);
        } else {
            // Reject the promise with an error message if no data is available
            reject("No students data available.");
        }
    });
}

// Define an asynchronous function named 'getCourses'
async function getCourses() {
    return new Promise((resolve, reject) => {
        // Check if there is valid data, then resolve with the 'courses' array
        if (dataCollection && dataCollection.courses) {
            resolve(dataCollection.courses);
        } else {
            // Reject the promise with an error message if no data is available
            reject("No courses data available.");
        }
    });
}

// Define an asynchronous function named 'getTAs'
async function getTAs() {
    return new Promise((resolve, reject) => {
        // Check if there is valid data, then filter 'students' to find TAs and resolve with the result
        if (dataCollection && dataCollection.students) {
            const tas = dataCollection.students.filter(student => student.TA);
            resolve(tas);
        } else {
            // Reject the promise with an error message if no data is available
            reject("No students data available.");
        }
    });
}

// Export the functions and class to make them accessible in other files
module.exports = {
    initialize,
    getAllStudents,
    getCourses,
    getTAs,
    
};
