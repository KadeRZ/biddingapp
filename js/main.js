let bids = [];


document.getElementById("place-bid-button").addEventListener("click", function() {
 addBids("place-bid")
});
document.getElementById("place-bid-button2").addEventListener("click", function() {
    addBids("place-bid2")
   });

function addBids(btn) {
    const placeBids = document.getElementById(btn).value;
    bids.push(placeBids);
    console.log(bids);
    document.getElementById("array").innerHTML = bids;
}
function save() {
    localStorage.setItem('bids', "addBids"); 
   }
function get() {
    let addBids = localStorage.getItem('bids');
}