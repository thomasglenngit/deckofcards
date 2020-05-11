let cards = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];

let suits = [];
	cards.forEach(function(card) {
  	suits.push(card.concat(" of diamonds"));
    suits.push(card.concat(" of hearts"));
    suits.push(card.concat(" of clubs"));
    suits.push(card.concat(" of spades"));
    
     return suits;

/* suits.forEach(function(suit) { */
	 
});

// Here is great code for a deck of cards from the following website:

// https://github.com/ldonald067/card-deck/blob/master/js/scripts.js

// $(document).ready(function(){
//   var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
//   var suits = ["Diamonds", "Hearts", "Clubs", "Spades"];
//   var deck = [];

//   suits.forEach(function(suit){
//     cards.forEach(function(card){
//       deck.push(card + " of " + suit);
//     });
//   });
//   deck.forEach(function(rank){
//     $(".cards").append("<li>" + rank);
//   });
//   alert("Here's the deck");
// });