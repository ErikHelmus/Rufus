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

var latestProducts = document.getElementById('latest-products');

  client.getEntries({content_type:'rufusScents'}).then(function (entries) {
     entries.items.forEach(function (entry) {
        console.log(entry);
        // fields are the Rufus products created in Contentful

      var scentDiv = document.createElement('div');
      scentDiv.classList.add('scent-div'); 

      if (entry.fields.collectionName) {
        var collectionName = document.createElement('h3');
        collectionName.innerHTML = entry.fields.collectionName;
        scentDiv.append(collectionName);

        var collectionImage = document.createElement('img');
        if (entry.fields.collectionImage){
            collectionImage.src = entry.fields.collectionImage.fields.file.url;
            scentDiv.append(collectionImage);
        }
  
         var linkToProducts = document.createElement('a');
         linkToProducts.href = 'shop.html?id=' + entry.sys.id;
         linkToProducts.appendChild(collectionImage);

         scentDiv.appendChild(collectionName);
         scentDiv.appendChild(linkToProducts);
         latestProducts.append(scentDiv); 
      }
    });
  });
