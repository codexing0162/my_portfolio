function sendData(event) {
    event.preventDefault(); 

    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    fetch('https://script.google.com/macros/s/AKfycbzxccMSkkTXrxQX6JczNs9_aiUCTKNb4xket8mWtNI_YBrU_tvv-nQCcDp3AyccrIlt/exec', { 
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response:', data);
        alert('Data sent successfully!');
        document.getElementById('contactForm').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error sending data.');
    });
}

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
