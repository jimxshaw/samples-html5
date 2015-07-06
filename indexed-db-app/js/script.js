$(document).ready(function() {
  // Open database
  var request = window.indexedDB.open('customermanager', 1);

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
    showCustomers();
  };

  // Error
  request.onerror = function(e) {
    console.log('Error: Could not open database...');
  };
});

// Add customer
function addCustomer() {
  var name = $('#name').val();
  var email = $('#email').val();

  var transaction = db.transaction(["customers"], "readwrite");

  // Ask for ObjectStore
  var store = transaction.objectStore("customers");

  // Define a customer
  var customer = {
    name: name,
    email: email
  };

  // Perform the add
  var request = store.add(customer);

  // Success
  request.onsuccess = function(e) {
    window.location.href = "index.html";
  };

  // Error
  request.onerror = function(e) {
    alert("Sorry, the customer was not added");
    console.log('Error', e.target.error.name);
  };
}

// Display customers
function showCustomers(e) {
  var transaction = db.transaction(["customers"], "readonly");

  // Ask for ObjectStore
  var store = transaction.objectStore("customers");
  var index = store.index('name');

  var output = '';
  index.openCursor().onsuccess = function(e) {
    var cursor = e.target.result;
    if (cursor) {
      output += "<tr id='customer_" + cursor.value.id + "'>";
      output += "<td>" + cursor.value.id + "</td>";
      output += "<td><span class='cursor customer' contenteditable='true'>" + cursor.value.name + "</span></td>";
      output += "<td><span class='cursor customer' contenteditable='true'>" + cursor.value.email + "</span></td>";
      output += "<td><a onclick='removeCustomer(" + cursor.value.id + ")' href='#'>Delete</a></td>";
      output += "</tr>";
      cursor.continue();
    }
    $('#customers').html(output);
  };
}

// Delete a customer
function removeCustomer(id) {
  var transaction = db.transaction(["customers"], "readwrite");

  // Ask for ObjectStore
  var store = transaction.objectStore("customers");

  var request = store.delete(id);

  // Success
  request.onsuccess = function() {
    console.log('customer ' + id + ' deleted');
    $('.customer_' + id).remove();
  };

  // Error
  request.onerror = function(e) {
    console.log('Error: Could not open database...');
  };
}

// Clear ALL customers
function clearCustomers() {
  indexedDB.deleteDatabase('customermanager');
  window.location.href = "index.html";
}




























