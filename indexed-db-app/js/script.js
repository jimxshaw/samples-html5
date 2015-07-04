$(document).ready(function() {
  // Open database
  var request = indexedDB.open('customermanager', 1);

  // Success
  request.onsuccess = function(e) {
    console.log('Success: Open database...');
    db = e.target.result;
    // Show customers
    showCustomers();
  };

  // Error
  request.onerror = function() {
    console.log('Error: Could not open database...');
  };
});