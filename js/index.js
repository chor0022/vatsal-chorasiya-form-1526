let fm = document.getElementById('my-form');
let fn = document.getElementById('fname');
let em = document.getElementById('email');
let msg = document.getElementById('msg');
let btn = document.getElementById('submit-btn');
const feedbackDiv = document.getElementById('feedback');

// Declare variable that stores regular expression for email
const emRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ===============================
// READY TO START CODING
// ===============================

// Define event-handler
function handleForm() {

    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    let ui = {};
    let errors = [];

    // +-----------+    
    // | FULL NAME |
    // +-----------+
    if (fn.value.trim() !== '') {
        ui.fullName = fn.value.trim();
    } else {
        errors.push('Full name is missing');
    }

    // +-------+    
    // | EMAIL | 
    // +-------+
    if (em.value.trim() !== '') {
        if (emRegex.test(em.value.trim())) {
            ui.email = em.value.trim();
        } else {
            errors.push('Email format is invalid');
        }
    } else {
        errors.push('Email is missing');
    }

    // +---------+    
    // | MESSAGE | 
    // +---------+
    if (msg.value.trim() !== '') {
        ui.message = msg.value.trim();
    } else {
        errors.push('Message is missing');
    }

    // +-----------------+
    // | CONSOLE OUTPUT  |
    // +-----------------+
    if (errors.length > 0) {
        console.log('ERRORS', errors);
    } else {
        console.log('COLLECTED DATA', ui);
    }

    // +-----------------+
    // | FEEDBACK/ERRORS |
    // +-----------------+
    if (errors.length > 0) {
        let errorHTML = '';
        errors.forEach(error => {
            errorHTML += `${error}<br>`;
        });
        feedbackDiv.innerHTML = errorHTML;
        feedbackDiv.className = 'error';
        feedbackDiv.style.display = 'block';
    } else {
        feedbackDiv.innerHTML = `Thank you for your submission!<br>
            <strong>Name:</strong> ${ui.fullName}<br>
            <strong>Email:</strong> ${ui.email}<br>
            <strong>Message:</strong> ${ui.message}`;
        feedbackDiv.className = 'success';
        feedbackDiv.style.display = 'block';

        // Clear fields
        fn.value = '';
        em.value = '';
        msg.value = '';
    }
}

// ===============================
// Register event
// ===============================
btn.addEventListener("click", handleForm);
