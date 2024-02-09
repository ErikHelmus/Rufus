var client = contentful.createClient({
    space: '2dk7frn4np2n',
    accessToken: 'inlra9YYNdOSD3Zv9PvHIHzacVnnU9TE9KHJtk8DpVc'
  });


// client is helper to connect to contentful
// getEntries is a method to get all entries from contentful
// entries is an object that contains all entries

var placeForContent = document.getElementById('place-for-content')

  client.getEntries().then(function (entries) {
     console.log(entries)
     // for each entry run the function
    entries.items.forEach(function (entry) {
     // fields are the fields we named in contentful
      var entryDiv = document.createElement('div');
      entryDiv.classList.add('entry-div');

      if (entry.fields.name) {
        var name = document.createElement('h2')
        name.innerHTML = entry.fields.name;
        entryDiv.appendChild(name);
        placeForContent.appendChild(entryDiv)
      }
    });
  });