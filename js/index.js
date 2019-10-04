const url = 'food.json';
fetch (url, {
  
})
.then(response => 
    response.json())
.then(data => {
    let mario = data;
    console.log(mario);
    appendData(data);

   
})

.catch(function(error) {
    console.log(error);
});

for (i in url.mario) {
    x += "<h1>" + url.mario[i].name + "</h1>";
    for (j in url.mario[i].desciption) {
      x += url.mario[i].price[j];
    }
  }



function appendData(data) {
var mainContainer = document.getElementById("test");
for (var i = 0; i < data.length; i++) {
    var p = document.createElement("p");
    p.innerHTML ='<a href="#">' +   'Naam: ' +data[i].name + ' ' +  'descriptie: ' + data[i].description + '</a>';
    mainContainer.appendChild(p);
    }   
}

















