// Replace with your actual Google Sheets API key
const API_KEY = 'AIzaSyDHwo9vdvNT7k1_Xw--teAE-JF5r8fGIT8';

// Replace with the ID of the Google Sheet you want to access
const SPREADSHEET_ID = '1NUt36vkRrYxYPRjzqg3JZXIMD552wA78BvV4lID2Nz4';

// Replace with the range of cells you want to retrieve data from
const RANGE = 'Services!A2:F';

// Make the GET request to the Google Sheets API
$.ajax({
url: `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`,
type: 'GET',
success: (data) => {
// Get the rows of data from the API response
const rows = data.values;

// Loop through the rows and create table rows
for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    $('#data-rows').append(`
    <tr>
        <td style="font-size:14;">${row[0]}</td>
        <td>${row[1]}</td>
        <td>${row[2]}</td>
        <td>${row[3]}</td>
        <td>${row[4]}</td>
        <td>${row[5]}</td>
    </tr>
    `);
}
},
error: (err) => {
console.log(err);
}
});

// Listen for changes to the search input
$('#search').on('input', function() {
// Get the search input value
const searchValue = $(this).val();
console.log(searchValue)
// Loop through each row
$('#data-rows tr').each(function() {
// Get the text of all cells in the row
const rowText = $(this).text();

// Check if the search input value is in the row text
if (rowText.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) {
    // Show the row if the search input value is found
    $(this).show();
} else {
    // Hide the row if the search input value is not found
    $(this).hide();
}
});
});


//Testing Commit and pUsh