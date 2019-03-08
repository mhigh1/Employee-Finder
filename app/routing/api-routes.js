// Load data from employees.js file
const employees = require('../data/employees.js');

module.exports = function(app) {
    // API to Return Employee Data as JSON object
    app.get('/api/employees', function(req, res) {
        res.json(employees);
    });
   
    // Add Employee Survey to the Data set and return optimal match
    app.post('/api/employees', function(req, res) {
        
        // Object to hold the best matching employee
        const bestMatch = {
            name: '',
            photo: '',
            score: Infinity
        }

        const userSubmission = req.body;
        const userScores = userSubmission.scores;
        let sumDiff;

        for(let i = 0; i < employees.length; i++) {
            const currentEmployee = employees[i];
            sumDiff = 0;

            for(let j = 0; j < currentEmployee.scores.length; j++) {
                const employeeScore = currentEmployee.scores[j];
                const userScore = userScores[j];
                sumDiff += Math.abs(parseInt(userScore) - parseInt(employeeScore));
            }

            if(sumDiff <= bestMatch.score) {
                bestMatch.name = currentEmployee.name;
                bestMatch.photo = currentEmployee.photo;
                bestMatch.score = sumDiff;
            }
        }

        // Add the user's survey data to the employees data
        employees.push(userSurveyData);
        
        // Return a JSON object of the matching employee
        res.json(bestMatch);
    });
};