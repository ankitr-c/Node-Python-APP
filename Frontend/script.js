// // script.js

// document.addEventListener('DOMContentLoaded', function () {
//     if (document.querySelector('form[action="/login"]')) {
//         // Handling events for login.html
//         const loginForm = document.querySelector('form[action="/login"]');
//         loginForm.addEventListener('submit', function (event) {
//             event.preventDefault();
//             const mail = document.getElementById('mail').value;
//             const passwd = document.getElementById('passwd').value;

//             // Add logic to send login data to the server using Fetch API or another method
//             // You can redirect to the dashboard on successful login or display an error message
//             console.log(`Logging in with ${mail} and ${passwd}`);
//         });
//     }

//     if (document.querySelector('form[action="/register"]')) {
//         // Handling events for register.html
//         const registerForm = document.querySelector('form[action="/register"]');
//         registerForm.addEventListener('submit', function (event) {
//             event.preventDefault();
//             const mail = document.getElementById('mail').value;
//             const username = document.getElementById('username').value;
//             const passwd = document.getElementById('passwd').value;

//             // Add logic to send registration data to the server using Fetch API or another method
//             // You can redirect to the login page on successful registration or display an error message
//             console.log(`Registering with ${mail}, ${username}, and ${passwd}`);
//         });
//     }

//     if (document.title === 'Dashboard') {
//         // Handling events for dashboard.html
//         // You can add logic here to handle client-side interactions on the dashboard
//         // For example, sorting the table, filtering data, or other dynamic behaviors
//         console.log('You are on the dashboard page. Add your dashboard logic here.');
//     }
// });

// // Add more event handling logic for dashboard.html if needed


// script.js

document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('form[action="/login"]')) {
        // Handling events for login.html
        const loginForm = document.querySelector('form[action="/login"]');
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const mail = document.getElementById('mail').value;
            const passwd = document.getElementById('passwd').value;

            // Add logic to send login data to the server using Fetch API or another method
            // You can redirect to the dashboard on successful login or display an error message
            console.log(`Logging in with ${mail} and ${passwd}`);

            // Example: Send login data to the server using Fetch API
            fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ mail: mail, passwd: passwd }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Login response:', data);
                // Add logic based on the response, e.g., redirect to the dashboard
            })
            .catch(error => {
                console.error('Error during login:', error);
                // Handle errors, e.g., display an error message to the user
            });
        });
    }

    if (document.querySelector('form[action="/register"]')) {
        // Handling events for register.html
        const registerForm = document.querySelector('form[action="/register"]');
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const mail = document.getElementById('mail').value;
            const username = document.getElementById('username').value;
            const passwd = document.getElementById('passwd').value;

            // Add logic to send registration data to the server using Fetch API or another method
            // You can redirect to the login page on successful registration or display an error message
            console.log(`Registering with ${mail}, ${username}, and ${passwd}`);

            // Example: Send registration data to the server using Fetch API
            fetch('http://localhost:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ mail: mail, username: username, passwd: passwd }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Registration response:', data);
                // Add logic based on the response, e.g., redirect to the login page
            })
            .catch(error => {
                console.error('Error during registration:', error);
                // Handle errors, e.g., display an error message to the user
            });
        });
    }

    if (document.title === 'Dashboard') {
        // Handling events for dashboard.html
        // You can add logic here to handle client-side interactions on the dashboard
        // For example, sorting the table, filtering data, or other dynamic behaviors
        console.log('You are on the dashboard page. Add your dashboard logic here.');
    }
});

// Add more event handling logic for dashboard.html if needed
