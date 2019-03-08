(function () {

    // "Database" of candies (but really just an array)
    var mockDatabase = [
        { _id: 'skittles_original', name: 'Skittles', price: '5.00', description: 'These are skittles.', brand: 'Wrigley Company', year: '1974', flavor: 'sweet', nuts: 'no', descriptionLong: "<h2>Skittles</h2><p>Skittles consist of hard sugar shells imprinted with the letter <b>\"S\"</b>. The interior consists mainly of sugar, corn syrup, and hydrogenated palm kernel oil along with fruit juice, citric acid, natural and artificial flavors.[2] The confectionery has been sold in a variety of flavor collections, such as Tropical, Wild Berry, Dessert, sweet heat and Sour. </p>" },
        { _id: 'starbursts_original', name: 'Starbursts', price: '10.00', description: 'These are starbursts.', brand: 'Wrigley Company', year: '1960', flavor: 'sweet', nuts: 'no' },
        { _id: 'smarties', name: 'Smarties', price: '9.99', description: 'These are smarties.', brand: 'Smarties Candy Company', year: '1949', flavor: 'sweet', nuts: 'no' },
        { _id: 'hersheys_original', name: 'Hersheys', price: '14.99', description: 'These are hersheys.', brand: 'The Hershey Company', year: '1935', flavor: 'sweet', nuts: 'yes' },
        { _id: 'kitkat_original', name: 'Kitkat', price: '10.99', description: 'These are hersheys.', brand: 'Nestle', year: '1935', flavor: 'sweet', nuts: 'yes' },
        { _id: 'hersheys_cookiesncream', name: 'Hersheys Cookies N Cream', price: '10.99', description: 'These are hersheys.', brand: 'Nestle', year: '1935', flavor: 'sweet', nuts: 'yes' },
        { _id: 'twizzlers_original', name: 'Twizzlers', price: '1.99', description: 'These are twizzlers.', brand: 'The Hershey Company', year: '1845', flavor: 'sweet', nuts: 'no' },
        { _id: 'mentos_mint', name: 'Mentos', price: '10.00', description: 'These are starbursts.', brand: 'Other', year: '1932', flavor: 'mint', nuts: 'no' },
        { _id: 'airheads', name: 'AirHeads Xtremes Bites', price: '14.99', description: 'These are hersheys.', brand: 'Other', year: '1985', flavor: 'sweet', nuts: 'no' },
        { _id: 'york_peppermint', name: 'York Peppermint Patties', price: '8.99', description: 'These are hersheys.',brand: 'The Hershey Company', year: '1975', flavor: 'mint', nuts: 'no' },
        { _id: 'reeses_pieces', name: 'Resses Pieces', price: '11.99', description: 'These are hersheys.', brand: 'The Hershey Company', year: '1978', flavor: 'sweet', nuts: 'yes' },
        { _id: 'milky_way', name: 'Milky Way', price: '14.99', description: 'These are hersheys.', brand: 'Mars', year: '1923', flavor: 'sweet', nuts: 'yes' },
        { _id: 'twix', name: 'Twix', price: '16.99', description: 'These are hersheys.', brand: 'Mars', year: '1979', flavor: 'sweet', nuts: 'yes' },
        { _id: 'sour_patch_kids', name: 'Sour Patch Kids', price: '11.99', description: 'These are hersheys.', brand: 'Mars', year: '1985', flavor: 'sour', nuts: 'no' },
        { _id: 'now_and_later', name: 'Now and Later Extreme Sour', price: '4.99', description: 'These are hersheys.', brand: 'Other', year: '1962', flavor: 'sour', nuts: 'no' },
        { _id: 'trolli', name: 'Trolli Sour Brite Crawlers', price: '9.99', description: 'These are hersheys.', brand: 'Other', year: '1981', flavor: 'sour', nuts: 'no' },
        { _id: 'starlight_mints', name: 'Starlight Mints', price: '5.99', description: 'These are hersheys.', brand: 'Other', year: '2001', flavor: 'mint', nuts: 'no' },
    ];

    // 'Filtering by' text
    var text_filteringBy = document.querySelector('#top-message');

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
                + '<img src="Images/' + result._id + '.jpg" class="product_image"/></div>' // Image
                + '<div class="product_price">$' + result.price + '</div>' // Price
                + '<div class="product_top">' + result.description + '</div>' // Name
                + '</a></div>'
        });

        // Add all of these created HTML elements to the page inside the
        // productsContainer div
        products.forEach(function (item) {
            productsContainer.innerHTML += item; // += adds to HTML instead of overwriting it entirely.
        });

        AddClickEvents();
    }

    renderList(mockDatabase);

    // This will order results list
    function orderBy(sortValue) {
        text_filteringBy.innerHTML = "Sorting by " + sortValue;
        // Sort method varies based on what type of value we're sorting
        var sortedResults = (sortValue === 'name') ?
            mockDatabase.sort(function (a, b) { // Strings need to be sorted in a slightly more complex way
                console.log("sorting by name...");
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
                console.log("sorting by year...");
                return a[sortValue] - b[sortValue];
            });
        renderList(sortedResults);
    }

    // Change events trigger after the value of a form input changes
    document.querySelector('#orderBy').addEventListener('change', function(event){
        // When something within that input element changes, re-orderA
        orderBy(event.target.value);
    });


    //FILTER 1
    // This function filters the candies by brand
    function filterByBrand(brand) {
        text_filteringBy.innerHTML = "Filtering by " + brand;
        var filteredResults = mockDatabase.filter(function (result) {
            // If this candy matches the brand, return TRUE
            return (result.brand == brand);
        });
        renderList(filteredResults);
    }
    // Value of the input has changed, re-run the filter function
    document.querySelector('#filterByBrand').addEventListener('change', function(event){
        var brand = event.target.value;
        filterByBrand(brand);
    });


    //FILTER 2
    // This function filters the candies by whether or not they contain nuts
    function filterByPrice(priceRange) {
        text_filteringBy.innerHTML = "Filtering by price (" + priceRange + ")";
        var filteredResults = mockDatabase.filter(function (result) {
            // If this candy matches the brand, return TRUE
            return (Number(result.price) < Number(priceRange));
        });
        renderList(filteredResults);
    }
    // Value of the input has changed, re-run the filter function
    document.querySelector('#filterByPrice').addEventListener('change', function(event){
        var priceRange = event.target.value;
        filterByPrice(priceRange);
    });


    //FILTER 3
    // This function filters the candies by flavor
    function filterByFlavor(flavor) {
        text_filteringBy.innerHTML = "Filtering by " + flavor;
        var filteredResults = mockDatabase.filter(function (result) {
            // If this candy matches the brand, return TRUE
            return (result.flavor == flavor);
        });
        renderList(filteredResults);
    }
    // Value of the input has changed, re-run the filter function
    document.querySelector('#filterByFlavor').addEventListener('change', function(event){
        var flavor = event.target.value;
        filterByFlavor(flavor);
    });


    //FILTER 4
    // This function filters the candies by whether or not they contain nuts
    function filterByNuts(containsNuts) {
        text_filteringBy.innerHTML = (containsNuts == "yes") ?  "These candies contain nuts" : "These candies do not contain nuts";
        var filteredResults = mockDatabase.filter(function (result) {
            return (result.nuts == containsNuts);
        });
        renderList(filteredResults);
    }
    // Value of the input has changed, re-run the filter function
    document.querySelector('#filterByContainsNuts').addEventListener('change', function(event){
        var containsNutes = event.target.value;
        filterByNuts(containsNutes);
    });



    function setSelectedProduct(productID)
    {
        var _productObject = mockDatabase.find(x => x._id == productID)
        localStorage.setItem('selectedProductID', _productObject._id);
        localStorage.setItem('selectedProductName', _productObject.name);
        localStorage.setItem('selectedProductDescriptionLong', _productObject.descriptionLong);
        localStorage.setItem('selectedProductPrice', _productObject.price);
        localStorage.setItem('selectedProductBrand', _productObject.brand);
        localStorage.setItem('selectedProductYear', _productObject.year);
    }

    function AddClickEvents() {
        productItems = document.querySelectorAll('.product');
        for (var i=0; i < productItems.length; i++)
        {
            productItems[i].addEventListener('click', function(event) {
                var _product = this.getAttribute("data-CandyID");
                setSelectedProduct(_product);
            });
        }
    }


})(); // Wrap entire file in self executing function.
      // Keeping all variables declared in this file inside a local scope.