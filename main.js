var cardContainer = $('.card-container');
var submit = $('.button');
var packinglist = [ ];

submit.on("click", getItem) //event listener

function getItem() {
  var item = $('.todo').val();
  appendItem(item);
  clear();
}

$('.card-container').on("click", ".delete-btn", deleteItem) //eventlistener

function deleteItem(event) {
event.target.parentNode.remove()
}

function appendItem(item) {
  cardContainer.append(`
<div class= "item-card">
<p> ${item}</p>
<button class = "delete-btn"> Delete </button>
   </div>`);



packinglist.push(item);
localStorage.setItem("packinglist", JSON.stringify(packinglist));

}

var packinglistsaved = JSON.parse(localStorage.getItem("packinglist"))

for (var i =0; i<packinglistsaved.length;i++) {
  var item2 = packinglistsaved[i];
  cardContainer.append(`
<div class= "item-card">
<p> ${item2}</p>
<button class = "delete-btn"> Delete </button>
   </div>`);

}

function clear() {
  $('.todo').val("");
}
