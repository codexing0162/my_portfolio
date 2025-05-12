// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the pop-in class when elements are in view
function handleScroll() {
    const elements = document.querySelectorAll('.pop-in'); // Select elements with the pop-in class
    elements.forEach((el) => {
        if (isElementInViewport(el)) {
            el.classList.add('visible'); // Add visible class to trigger animation
        }
    });
}

// Add event listener for scroll
window.addEventListener('scroll', handleScroll);

// Initial check in case elements are already in view
handleScroll();

document.getElementById('contactForm').addEventListener('submit', sendData);

function sendData(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = {
        name: name,
        email: email,
        message: message
    };

    // Replace 'YOUR_WEB_APP_URL' with your Google Apps Script Web App URL
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLj8QS5GKPVeNLZ_LpgXbK7M7pzd9HRg1RSazBSYp26dsXTlz_9PAbyg2QD8qLAjuHexnbFnl25XfA9KftAbJ01629NRp972NGHmO0C06CYH-KULNW-lkhI0EM6DUrK5T2VU_fNONP8xs2gdGZOqmNnfdTDwhKwyOhRP-saVk5fHoyhFG1g-3OrVYP89ITqiUpqkIb97eKVwPk-dQAlQegeGRxJQYDBg4nq4n5TIqScXaEy61r35-zTJTjIcODTgcjaX4yT3wQ_pdaS3F_URVgIY5YZtqIUg2KLQ2Rva&lib=Muidnw9xex8nh1QQ5HFnhRU2hJw5ILGYi', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log('Response:', response);
        return response.json();
    })
    .then(result => {
        console.log('Result:', result);
        if (result.status === 'success') {
            alert('Message sent successfully!');
        } else {
            alert('Error sending message: ' + result.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending data.');
    });
}
