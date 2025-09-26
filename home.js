function addToCart() {
  const size = document.getElementById('size').value;
  // const quantity = parseInt(document.getElementById('quantity').value);

  if (!size) {
    alert("Please select a size.");
    return;
  }

   alert("Product added to cart!");
}

  // const product = {
  //   id: 1,
  //   name: "Blue Checked Flannel Shirt",
  //   price: 139,
  //   size: size,
  //   quantity: quantity,
  //   image:"fannel2.jpg"
  // };

  // let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // // Check if product already exists with same size
  // const existing = cart.find(item => item.id === product.id && item.size === product.size);

  // if (existing) {
  //   existing.quantity += product.quantity;
  // } else {
  //   cart.push(product);
  // }

  // localStorage.setItem("cart", JSON.stringify(cart));
  // alert("Product added to cart!");

  // Optional: redirect to cart
  // window.location.href = "cart.html";
// }