$(document).ready(function() {
  // Open database
  var request = indexedDB.open('customermanager', 1);

  request.onupgradeneeded = function(e) {
    var db = e.target.result;

    if (!db.objectStoreNames.contains('customers')) {
      var os = db.createObjectStore('customers', {keyPath: "id", autoIncrement: true});
      // Create index for name
      os.createIndex('name', 'name', {unique: false});
    }
  };

  // Success
  request.onsuccess = function(e) {
    console.log('Success: Open database...');
    db = e.target.result;
    // Show customers
    // showCustomers();
  };

  // Error
  request.onerror = function(e) {
    console.log('Error: Could not open database...');
  };



});