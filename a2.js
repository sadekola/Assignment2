// a2.js

// Import the collegeData module (collegeData.js)
const collegeData = require('./modules/collegeData');

// Initialize data by calling the initialize function from the collegeData module
collegeData.initialize()
    .then(() => {
        // Log a success message if data initialization is successful
        console.log("Data initialized successfully.");

        // Test getAllStudents function
        collegeData.getAllStudents()
            .then(students => {
                // Log the number of students retrieved
                console.log(`Successfully retrieved ${students.length} students`);
            })
            .catch(error => {
                // Log an error message if there's an issue retrieving students
                console.error(`Error retrieving students: ${error}`);
            });

        // Test getCourses function
        collegeData.getCourses()
            .then(courses => {
                // Log the number of courses retrieved
                console.log(`Successfully retrieved ${courses.length} courses`);
            })
            .catch(error => {
                // Log an error message if there's an issue retrieving courses
                console.error(`Error retrieving courses: ${error}`);
            });

        // Test getTAs function
        collegeData.getTAs()
            .then(TAs => {
                // Log the number of TAs retrieved
                console.log(`Successfully retrieved ${TAs.length} TAs`);
            })
            .catch(error => {
                // Log an error message if there's an issue retrieving TAs
                console.error(`Error retrieving TAs: ${error}`);
            });
    })
    .catch(error => {
        // Log an error message if data initialization fails
        console.error(`Initialization failed: ${error}`);
    });
