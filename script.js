
  

document.addEventListener('DOMContentLoaded', function () {
    const nameForm = document.getElementById('nameForm');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const nameTableBody = document.querySelector('#nameTable tbody');
  
    nameForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const firstName = firstNameInput.value.trim();
      const lastName = lastNameInput.value.trim();
  
      if (firstName !== '' && lastName !== '') {
        const newRow = nameTableBody.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
  
        cell1.innerHTML = firstName;
        cell2.innerHTML = lastName;
  
        firstNameInput.value = '';
        lastNameInput.value = '';
      } else {
        alert('Please enter both first and last names.');
      }
    });
  });
  