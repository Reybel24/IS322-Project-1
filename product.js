// Grab the candy data object
var productID = localStorage.getItem('selectedProductID');
var productName = localStorage.getItem('selectedProductName');
var productDescription = localStorage.getItem('selectedProductDescription');

var title = document.querySelector('#product_title');
title.innerHTML = productName;

var description = document.querySelector('#product_description');
description.innerHTML = productDescription;

var image = document.querySelector('#product_image');
image.setAttribute("src", "images/" + productID);
