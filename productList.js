(function () {

    // "Database" of candies (but really just an array)
    var mockDatabase = [
        { _id: 'skittles_original', name: 'Skittles', price: '$5.00', description: 'These are skittles.', brand: 'skittles' },
        { _id: 'starbursts_original', name: 'Starbursts', price: '$10.00', description: 'These are starbursts.', brand: 'starbursts'  },
        { _id: 'smarties', name: 'Smarties', price: '$9.99', description: 'These are smarties.'  },
        { _id: 'hersheys_original', name: 'Hersheys', price: '$114.99', description: 'These are hersheys.'  },
        { _id: 'kitkat_original', name: 'Kitkat', price: '$114.99', description: 'These are hersheys.'  },
        { _id: 'twizzlers_original', name: 'Twizzlers', price: '$1.99', description: 'These are twizzlers.' },
        { _id: 'starbursts_original', name: 'Starbursts', price: '$10.00', description: 'These are starbursts.', brand: 'starbursts'  },
        { _id: 'smarties', name: 'Smarties', price: '$9.99', description: 'These are smarties.'  },
        { _id: 'hersheys_original', name: 'Hersheys', price: '$114.99', description: 'These are hersheys.', brand: 'starbursts'  },
        { _id: 'hersheys_original', name: 'Hersheys', price: '$114.99', description: 'These are hersheys.'  },
    ];

    // This function renders the products individually on the page given
    // a list of results
    function renderList (results) {
        var productsContainer = document.querySelector('#productsContainer');

        // clear out inner HTML to get rid of any older results
        productsContainer.innerHTML = '';

        // Map each item to its own item on the page
        var products = results.map(function (result) {
            return '<div class="product" data-CandyID="' + result._id + '"><a href="product.html">'
                + '<div class="product_top">' + result.name + '</div><div class="product_middle">' // Name
                + '<img src="images/' + result._id + '.jpg" class="product_image"/></div>' // Image
                + '<div class="product_price">' + result.price + '</div>' // Price
                + '<div class="product_top">' + result.description + '</div>' // Name
                + '</a></div>'
        });

        // Add all of these created HTML elements to the page inside the
        // productsContainer div
        products.forEach(function (item) {
            productsContainer.innerHTML += item; // += adds to HTML instead of overwriting it entirely.
        });
    }

    renderList(mockDatabase);

    // This will order results list
    function orderBy(sortValue) {
        // Sort method varies based on what type of value we're sorting
        var sortedResults = (sortValue === 'name') ?
            mockDatabase.sort(function (a, b) { // Strings need to be sorted in a slightly more compldex way
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                // Sorts alphabetically.  -1 puts it before. 1 puts it after
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            }) :
            mockDatabase.sort(function (a, b) { // Numbers a booleans are much simpler.0
                // Just need postive or negative number
                // Object properties can be accessed through a string representing their name
                return a[sortValue] - b[sortValue];
            });
        renderList(sortedResults);
    }

    // Change events trigger after the value of a form input changes
    document.querySelector('#orderBy').addEventListener('change', function(event){
        // When something within that input element changes, re-orderA
        orderBy(event.target.value);
    });


    // This function filters the candies by brand
    function filterByBrand(brand) {
        var filteredResults = mockDatabase.filter(function (result) {
            // If this candy matches the brand, return TRUE
            console.log(result.brand + " and " + brand);
            return (result.brand == brand);
        });
        renderList(filteredResults);
    }
    // Value of the input has changed, re-run the filter function
    document.querySelector('#filterByBrand').addEventListener('change', function(event){
        var brand = event.target.value;
        filterByBrand(brand);
    });

    function setSelectedProduct(product)
    {
        localStorage.setItem("selectedProduct", product);
    }


    productItems = document.querySelectorAll('.product');

    for (var i=0; i < productItems.length; i++)
    {
        productItems[i].addEventListener('click', function(event) {
            var _product = this.getAttribute("data-CandyID");
            localStorage.setItem("selectedProduct", _product);
        });
    }

})(); // Wrap entire file in self executing function.
      // Keeping all variables declared in this file inside a local scope.