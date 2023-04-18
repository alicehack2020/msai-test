// Write code related to Volatiers Page
// Retrieve data from localStorage
const helpersData = JSON.parse(localStorage.getItem('Helpers')) || [];

// Get DOM elements
const filterSelect = document.getElementById('filter');
const tbody = document.querySelector('tbody');

// Populate the table with data
function populateTable(data) {
  tbody.innerHTML = '';

  data.forEach((helper) => {
    if (helper.type === 'Volantier') {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${helper.name}</td>
        <td>${helper.phone}</td>
        <td>${helper.email}</td>
        <td>${helper.category}</td>
        <td><button class="delete-btn">Delete</button></td>
      `;
      tbody.appendChild(row);
    }
  });
}

// Delete helper from table and localStorage
function deleteHelper(event) {
  if (event.target.classList.contains('delete-btn')) {
    const row = event.target.closest('tr');
    const email = row.querySelector('td:nth-child(3)').textContent;
    const filteredData = helpersData.filter((helper) => helper.email !== email);
    localStorage.setItem('Helpers', JSON.stringify(filteredData));
    row.remove();
  }
}

// Filter data by category
function filterData(event) {
  const category = event.target.value;
  const filteredData = helpersData.filter((helper) => {
    return category === '' || helper.category === category;
  });
  populateTable(filteredData);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  populateTable(helpersData);
});

tbody.addEventListener('click', deleteHelper);

filterSelect.addEventListener('change', filterData);
