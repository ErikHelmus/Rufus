document.getElementById("menu-toggle").addEventListener("click", function(){
document.getElementById("menu").classList.toggle("active");
});

var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

var client = contentful.createClient({
    space: '2dk7frn4np2n',
    accessToken: 'inlra9YYNdOSD3Zv9PvHIHzacVnnU9TE9KHJtk8DpVc'
  });

var productDetails = document.getElementById('product-details');

  client.getEntry(id).then(function (entry) {
    console.log(entry);

    var imageDiv = document.createElement('div');
    imageDiv.classList.add('image-div');
    product.append(imageDiv);

    var mainImage = document.createElement('img');
    if (entry.fields.mainImage){
        mainImage.src = entry.fields.mainImage.fields.file.url;
        imageDiv.append(mainImage);
      }

    var name = document.createElement('h1');
    name.innerHTML = entry.fields.name;
    productDetails.appendChild(name);

    var price = document.createElement('h3');
    price.innerHTML = entry.fields.price;
    productDetails.append(price);

    // Referenced Content
    var description = document.createElement('p');
    description.innerHTML = entry.fields.description;
    productDetails.append(description)
});
