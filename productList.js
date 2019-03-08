(function () {

    // "Database" of candies (but really just an array)
    var mockDatabase = [
        { _id: 'skittles', name: 'Skittles', price: '5.00', description: 'These are skittles.', brand: 'Wrigley Company', year: '1974', flavor: 'sweet', nuts: 'no', descriptionLong: "<h2>Skittles</h2><p>Skittles consist of hard sugar shells imprinted with the letter <b>\"S\"</b>. The interior consists mainly of sugar, corn syrup, and hydrogenated palm kernel oil along with fruit juice, citric acid, natural and artificial flavors.[2] The confectionery has been sold in a variety of flavor collections, such as Tropical, Wild Berry, Dessert, sweet heat and Sour. </p>" },
        { _id: 'starburs', name: 'Starbursts', price: '10.00', description: 'These are starbursts.', brand: 'Wrigley Company', year: '1960', flavor: 'sweet', nuts: 'no', descriptionLong: "<h2>Starbursts</h2><p>Starburst (originally known as Opal Fruits) is the brand name of a box-shaped, <b>fruit-flavored</b> soft taffy candy manufactured by The Wrigley Company, a subsidiary of Mars, Incorporated. Starburst has many different varieties such as Tropical, Sour, FaveReds, Very Berry, Superfruit Flavor and Original. The original flavors include: strawberry, lemon, orange, and cherry (changed from the initial lime).[1][2] The tropical flavors include: strawberry banana, pina colada, cherry kiwi, and mango melon.</p>" },
        { _id: 'smarties', name: 'Smarties', price: '9.99', description: 'These are smarties.', brand: 'Smarties Candy Company', year: '1949', flavor: 'sweet', nuts: 'no', descriptionLong: "<h2>Smarties</h2><p>Smarties are a colour-varied <b>sugar-coated</b> chocolate confectionery. They have been manufactured since 1937,[1] originally by H.I. Rowntree & Company in the UK, and are currently produced by Nestlé. </p>" },
        { _id: 'hersheys_original', name: 'Hersheys', price: '14.99', description: 'These are hersheys.', brand: 'The Hershey Company', year: '1935', flavor: 'sweet', nuts: 'yes', descriptionLong: "<h2>Hersheys (Original)</h2><p>The Hershey's Milk Chocolate Bar (commonly called the Hershey's Bar, or more simply the Hershey Bar) is the flagship chocolate bar of the Hershey Company. Hershey refers to it as <b>\"The Great American Chocolate Bar.\"</b> The Hershey Milk Chocolate Bar was first sold in 1900, followed by the Hershey's Milk Chocolate with Almonds variety, which began production in 1908. </p>" },
        { _id: 'kit_kat', name: 'Kitkat', price: '10.99', description: 'These are kitkats.', brand: 'Nestle', year: '1935', flavor: 'sweet', nuts: 'yes', descriptionLong: "<h2>KitKat</h2><p>Kit Kat is a chocolate-covered <b>wafer bar</b> confection created by Rowntree's of York, United Kingdom, and is now produced globally by Nestlé, which acquired Rowntree in 1988, and closed it in 2006,[1] with the exception of the United States where it is made under license by H.B. Reese Candy Company, a division of The Hershey Company. The standard bars consist of two or four pieces composed of three layers of wafer, separated and covered by an outer layer of chocolate. Each finger can be snapped from the bar separately. There are many different flavours of Kit Kat, including milk, white, and dark chocolate. </p>" },
        { _id: 'hersheys', name: 'Hersheys Cookies N Cream', price: '10.99', description: 'These are cookies n cream.', brand: 'Nestle', year: '1935', flavor: 'sweet', nuts: 'yes', descriptionLong: "<h2>Hersheys (Cookies n' Cream)</h2><p>Hershey's Cookies 'n' Creme is a flat, white candy bar containing small, uniformly-shaped cookie bits similar in taste and texture to an <b>Oreo</b>. It was introduced in 1994.[1] The \"king-sized\" variant of the bar shares the dimensions of the original bar but is thicker vertically. This is one of the few Hershey's chocolates sold in the United Kingdom. The standard-sized bar has 12 rectangular blocks arranged in a 3X4 grid. Similar Cookies 'n' Creme candies manufactured by Hershey were released as Hershey's Drops in 2010. </p>" },
        { _id: 'twizzlers', name: 'Twizzlers', price: '1.99', description: 'These are twizzlers.', brand: 'The Hershey Company', year: '1845', flavor: 'sweet', nuts: 'no', descriptionLong: "<h2>Twizzlers</h2><p>Twizzlers is a brand of candy in the United States and Canada. Twizzlers is the product of Y&S Candies, Inc., of Lancaster, Pennsylvania, now a subsidiary of <b>The Hershey Company.</b> </p>" },
        { _id: 'mentos_mint', name: 'Mentos', price: '10.00', description: 'These are mentos.', brand: 'Other', year: '1932', flavor: 'mint', nuts: 'no', descriptionLong: "<h2>Mentos</h2><p>Mentos (stylized as mentos) is a brand of prepackaged scotch mints sold in stores and vending machines. First produced in the <b>Netherlands in 1948</b>, it is currently sold in more than 130 countries worldwide by the Italian corporation Perfetti Van Melle.[1] The mints are small oblate spheroids, with a slightly hard exterior and a soft, chewy interior. </p>" },
        { _id: 'air_heads', name: 'AirHeads Xtremes Bites', price: '14.99', description: 'These are airheads.', brand: 'Other', year: '1985', flavor: 'sweet', nuts: 'no', descriptionLong: "<h2>Airheads</h2><p>AirHeads are a tangy, <b>taffy-like</b>, chewy candy manufactured by Dutch-Italian company Perfetti Van Melle in Erlanger, Kentucky.[1] They were created August 7, 1985 by <b>Steve Bruner</b>.[2] AirHeads are available nationwide in the United States. The candy is available in over 16 different flavors. </p>" },
        { _id: 'york', name: 'York Peppermint Patties', price: '8.99', description: 'These are york pepopermints.',brand: 'The Hershey Company', year: '1975', flavor: 'mint', nuts: 'no', descriptionLong: "<h2>York Peppermint</h2><p>York Peppermint Pattie is a <b>dark chocolate</b> enrobed peppermint confection produced by The Hershey Company. </p>" },
        { _id: 'reeses_pieces', name: 'Resses Pieces', price: '11.99', description: 'These are recees pieces.', brand: 'The Hershey Company', year: '1978', flavor: 'sweet', nuts: 'yes', descriptionLong: "<h2>Reeses Pieces</h2><p>Reese's Pieces are a peanut butter candy manufactured by The Hershey Company; they are <b>oblate spheroid</b> in shape and covered in candy shells that are colored yellow, orange, or brown.[1] They can be purchased in plastic packets, cardboard boxes, or cup-shaped travel containers. The candy was introduced in 1977,[2][3] and introduced to Canada in 1980.[4] </p>" },
        { _id: 'milky_way', name: 'Milky Way', price: '14.99', description: 'These are milky ways.', brand: 'Mars', year: '1923', flavor: 'sweet', nuts: 'yes', descriptionLong: "<h2>Milky Way</h2><p>The Milky Way bar is a chocolate-covered confectionary bar manufactured and distributed by the Mars confectionery company. Introduced in 1923, the Milky Way bar's American version is made of <b>caramel and covered with milk chocolate</b>, similar to the Mars bar sold outside of the U.S. The global Milky Way is a different chocolate candy bar similar to the American 3 Musketeers. </p>" },
        { _id: 'twix', name: 'Twix', price: '16.99', description: 'These are twix.', brand: 'Mars', year: '1979', flavor: 'sweet', nuts: 'yes', descriptionLong: "<h2>Twix</h2><p>Twix is a sweet made by Mars, Inc., consisting of a biscuit (\"cookie\" in North America) applied with other <b>confectionery toppings and coatings</b> (most frequently caramel and milk chocolate).[1] Twix are packaged with two or four bars in a wrapper. Miniature and other variations of Twix bars are also available.[2] </p>" },
        { _id: 'sour_patch_kids', name: 'Sour Patch Kids', price: '11.99', description: 'These are sour patch kids.', brand: 'Mars', year: '1985', flavor: 'sour', nuts: 'no', descriptionLong: "<h2>Sour Patch Kids</h2><p>Sour Patch Kids (known as Very Bad Kids in France, and as <b>Maynards Sour Patch</b> Kids in the UK and Canada) are a soft candy with a coating of invert sugar and sour sugar (a combination of citric acid, tartaric acid and sugar).[2] The slogan, \"Sour. Sweet. Gone.\", refers to the sour-to-sweet taste of the candy.</p>" },
        { _id: 'now_an_later', name: 'Now and Later Extreme Sour', price: '4.99', description: 'These are now and laters.', brand: 'Other', year: '1962', flavor: 'sour', nuts: 'no', descriptionLong: "<h2>Now and Later</h2><p>Now and Later is a brand of fruit-flavored taffy-like candy manufactured by Ferrara Candy Company. The candy is formed into squares packaged in <b>colorful paper</b>. Nineteen flavors are currently available in both the Traditional and Chewy variety.</p>" },
        { _id: 'trolli', name: 'Trolli Sour Brite Crawlers', price: '9.99', description: 'These are trollis.', brand: 'Other', year: '1981', flavor: 'sour', nuts: 'no', descriptionLong: "<h2>Trolli</h2><p>Trolli is a Regular confectionery brand used by Trolli GmbH (formerly Mederer GmbH) worldwide and by <b>Ferrara Candy Company</b> in the United States. Trolli GmbH sells gummy candies, marshmallows, and soft licorice gums in over 80 countries and has factories in Germany, Indonesia, China and the Czech Republic. </p>" },
        { _id: 'starlights_mints', name: 'Starlight Mints', price: '5.99', description: 'These are starlight mints.', brand: 'Other', year: '2001', flavor: 'mint', nuts: 'no', descriptionLong: "<h2>Starlight Mints</h2><p>A mint is a food item often consumed as an after-meal refreshment or before business and social engagements to improve breath odor.[1] Mints are commonly believed to <b>soothe the stomach</b> given their association with natural byproducts of the plant genus Mentha.[2] Mints sometimes contain derivatives from plants such as peppermint oil or spearmint oil, or wintergreen from the plant genus Gaultheria. However, many of the most popular mints citing these natural sources contain none in their ingredient list or contain only trace amounts. </p>" },
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