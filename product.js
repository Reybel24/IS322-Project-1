// Grab the candy data object
var productID = localStorage.getItem('selectedProductID');
var productName = localStorage.getItem('selectedProductName');
var productDescription = localStorage.getItem('selectedProductDescription');

var title = document.querySelector('#product_title');
title.innerHTML = productName;

var image = document.querySelector('#product_image');
image.getAttribute("src").innerHTML = "images/" + productID;


var description = document.querySelector('#product_description');
description.innerHTML = productDescription;
