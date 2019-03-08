// Grab the candy data object
var productID = localStorage.getItem('selectedProductID');
var productName = localStorage.getItem('selectedProductName');
var productDescription = localStorage.getItem('selectedProductDescriptionLong');
var productPrice = localStorage.getItem('selectedProductPrice');
var productBrand = localStorage.getItem('selectedProductBrand');
var productYear = localStorage.getItem('selectedProductYear');

var title = document.querySelector('#productBig_title');
title.innerHTML = productName;

var details = document.querySelector('#productBig_details');
details.innerHTML = "Price: $" + productPrice + "<br>Brand: " + productBrand + "<br>Year: " + productYear;

var description = document.querySelector('#productBig_description');
description.innerHTML = productDescription;

var image = document.querySelector('#productBig_image');
image.src = 'Images/' + productID + '.jpg';

function AddToCart() {
    alert(productName + " has been added to your cart! (but not really)");
}

// Add to cart
document.querySelector('#addToCartButton').addEventListener('click', function(event){
    AddToCart();
});