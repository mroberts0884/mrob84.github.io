/* contact page */

document.getElementById('contact-form').addEventListener('submit', function(e){
<<<<<<< HEAD
    e.preventDefault();
    const name = document.getElementById('name').value;
    if (name == "") {
          alert("Name must be filled out.");
          return false;
        }    
    const email = document.getElementById('emailaddress').value;
    if (email == "") {
        alert("Email must be filled out.");
            return false    
        }    
    else {
            alert("Form submitted. Thank you!")
            return true    
        }
      })

=======

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
>>>>>>> 970274a17a45b725612ff6b17ce6d70e210583c6
