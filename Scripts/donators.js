// Write code related to Donators Page
// Get the DOM elements
const filterSelect = document.getElementById("filter");
const tableBody = document.querySelector("tbody");

// Fetch data from localStorage
const helpersData = JSON.parse(localStorage.getItem("Helpers"));

// Function to update the table with filtered data
const updateTable = (category) => {
  // Clear the table body
  tableBody.innerHTML = "";

  // Filter the data based on selected category
  const filteredData = helpersData.filter(
    (helper) => helper.type.toLowerCase() === category.toLowerCase()
  );

  // Loop through the filtered data and create table rows
  filteredData.forEach((helper) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${helper.name}</td>
      <td>${helper.phone}</td>
      <td>${helper.email}</td>
      <td>${helper.category}</td>
      <td class="delete" data-id="${helper.id}">Delete</td>
    `;
    tableBody.appendChild(row);
  });
};

// Event listener for filter select tag
filterSelect.addEventListener("change", (event) => {
  const category = event.target.value;
  updateTable(category);
});

// Event listener for delete cells
tableBody.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    const helperId = event.target.dataset.id;

    // Remove the row from DOM
    event.target.parentElement.remove();

    // Remove the helper from localStorage
    const updatedHelpersData = helpersData.filter(
      (helper) => helper.id !== helperId
    );
    localStorage.setItem("Helpers", JSON.stringify(updatedHelpersData));
  }
});

// Initial update of table with all data
updateTable("");
