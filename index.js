const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
const suits = ['clubs', 'diamonds', 'hearts', 'spades']

/**
 * create a cards array
 *
 * Loop through the suits
 *    Loop through the ranks
 *      Change the suit and rank inside the template literal
 *      push card to cards
 *
 * Retrieve deck from HTML
 * Insert cards to deck
 *
 * Add an Event Listener to the deck
 *    Look for an element with class of 'card' using the closest() method
 *    If the element exists
 *      Toggle the class 'flipped'
 */

/*
<div class="card">
  <div class="card__inner">
    <div class="card__front">
      <div class="number hearts">2</div>
      <div class="suit"><img src="images/hearts.png"></div>
      <div class="number hearts">2</div>
    </div>
    <div class="card__back"></div>
  </div>
</div>
*/

const cards = []

for(suit of suits)
    {
        for(rank of ranks)
            {
                cards.push(`<div class="card">
                              <div class="card__inner">
                                <div class="card__front">
                                  <div class="number ${suit}">${rank}</div>
                                  <div class="suit"><img src="images/${suit}.png"></div>
                                  <div class="number ${suit}">${rank}</div>
                                </div>
                                <div class="card__back"></div>
                              </div>
                            </div>`)
                
            }
    }

const deck = document.getElementById('deck')

deck.innerHTML= cards.join(' ');

deck.addEventListener('click', function(event){
    const element = event.target.closest('.card')
    if (element){
        element.classList.toggle('flipped')
    }
})