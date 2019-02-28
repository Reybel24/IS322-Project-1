var product = localStorage.getItem('selectedProduct');

var title = document.querySelector('#product_title');
title.innerHTML = product;

var image = localStorage.getItem('#product_image');
image.innerHTML = "Hello 2";


var desciption = document.querySelector('#product_description');
desciption.innerHTML = "Hello 3";
