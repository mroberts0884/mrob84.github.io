/* contact page */

document.getElementById('contact-form').addEventListener('submit', function(e){

    e.preventDefault();

    const formData = new formData(this);

    fetch('https://formspree.io/f/mkgwqveo', {
        method: 'POST',
        body: formData

    })
    .then(response => response.text())
    .then(
         alert('Form is submitted.')
)
    .catch(error => console.error('Error:', error));

})
