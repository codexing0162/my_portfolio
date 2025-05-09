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
