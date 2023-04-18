  var form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var category = document.getElementById('category').value;
    var type = document.getElementById('type').value;

    // Create an object to store the contact data
    var data = {
      name: name,
      phone: phone,
      email: email,
      category: category,
      type: type
    };

    // Get the existing data from local storage
    var existingData = JSON.parse(localStorage.getItem('Helpers')) || [];

    // Add the new data to the existing data
    existingData.push(data);

    // Store the updated data in local storage
    localStorage.setItem('Helpers', JSON.stringify(existingData));

    // Reset the form
    form.reset();

    alert('Contact data has been stored in local storage.');
  });
 