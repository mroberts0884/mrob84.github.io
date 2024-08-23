/* contact page */

document.getElementById('contact-form').addEventListener('submit', function(e){
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

