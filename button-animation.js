$(document).ready(function() {
    $("#button-animation").click(function() {
      var button = $(this);
      button.addClass("button-animation");
  
      setTimeout(function() {
        button.removeClass("button-animation");
      }, 1000);
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons
    var filterButtons = document.querySelectorAll('.filter-button');
  
    // Add click event listener to each filter button
    filterButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var selectedCategory = this.getAttribute('data-category');
  
        // Show all menu items if "All" is selected
        if (selectedCategory === 'all') {
          showAllMenuItems();
        } else {
          // Hide all menu items
          hideAllMenuItems();
  
          // Show menu items with selected category
          var menuItems = document.querySelectorAll('.menu-item');
          menuItems.forEach(function(item) {
            var itemCategory = item.getAttribute('data-category');
            if (itemCategory === selectedCategory) {
              item.style.display = 'block';
            }
          });
        }
      });
    });
  });
  
  function showAllMenuItems() {
    var menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(function(item) {
      item.style.display = 'block';
    });
  }
  
  function hideAllMenuItems() {
    var menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(function(item) {
      item.style.display = 'none';
    });
  }
  