// Sample product data
const products =[];
  
  // Function to display products on the page
  function displayProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
  
    products.forEach((product, index) => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
  
      const productName = document.createElement('h3');
      productName.textContent = product.name;
  
      const productPrice = document.createElement('p');
      productPrice.textContent = `Price: $${product.price}`;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        deleteProduct(index);
      });
  
      productDiv.appendChild(productName);
      productDiv.appendChild(productPrice);
      productDiv.appendChild(deleteButton);
  
      productList.appendChild(productDiv);
    });
  }
  
  // Function to add a new product
  function addProduct(name, price) {
    const newProduct = { name, price };
    products.push(newProduct);
    displayProducts();
  }
  
  // Function to delete a product
  function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts();
  }
  
  // Event listener for the form submission
  const productForm = document.getElementById('productForm');
  productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('nameInput');
    const priceInput = document.getElementById('priceInput');
  
    const name = nameInput.value;
    const price = parseFloat(priceInput.value);
  
    addProduct(name, price);
  
    nameInput.value = '';
    priceInput.value = '';
  });
  
  // Display the initial list of products
  displayProducts();
  