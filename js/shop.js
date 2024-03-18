document.getElementById("menu-toggle").addEventListener("click", function(){
document.getElementById("menu").classList.toggle("active");
});

var client = contentful.createClient({
    space: '2dk7frn4np2n',
    accessToken: 'inlra9YYNdOSD3Zv9PvHIHzacVnnU9TE9KHJtk8DpVc'
    });

  console.log(client);

// client is helper to connect to contentful
// getEntries is a method to get all entries from contentful
// entries is an object that contains all entries

var allProducts = document.getElementById('all-products');

  client.getEntries({content_type:'rufusProducts'}).then(function (entries) {
     entries.items.forEach(function (entry) {
        console.log(entry);
        // fields are the Rufus products created in Contentful

      var productDiv = document.createElement('div');
      productDiv.classList.add('product-div'); 

        if (entry.fields.name) {
        var name = document.createElement('h3');
        name.innerHTML = entry.fields.name;
        productDiv.append(name);

        var mainImage = document.createElement('img');
        if (entry.fields.mainImage){
            mainImage.src = entry.fields.mainImage.fields.file.url;
            productDiv.append(mainImage);
        }
  
         var linkToDetails = document.createElement('a');
         linkToDetails.href = 'details.html?id=' + entry.sys.id;
         linkToDetails.appendChild(mainImage);

         productDiv.appendChild(name);
         productDiv.appendChild(linkToDetails);
         allProducts.append(productDiv); 
      }
    });
  });
