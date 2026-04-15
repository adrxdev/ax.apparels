// Modern Shopify Theme JavaScript

// Change product image on thumbnail click
function changeImage(imageUrl) {
  const mainImage = document.getElementById('mainImage');
  if (mainImage) {
    mainImage.src = imageUrl;
  }
}

// Cart functionality
document.addEventListener('DOMContentLoaded', function() {
  
  // Handle product form submission
  const productForms = document.querySelectorAll('.product-form');
  productForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      
      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        // Update cart count
        updateCartCount();
        // Show success message
        alert('Product added to cart!');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error adding product to cart');
      });
    });
  });
  
  // Update cart count
  function updateCartCount() {
    fetch('/cart.js')
      .then(response => response.json())
      .then(data => {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
          cartCount.textContent = data.item_count;
        }
      });
  }
  
  // Mobile menu toggle (if needed)
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      document.querySelector('.main-nav').classList.toggle('active');
    });
  }
  
});
