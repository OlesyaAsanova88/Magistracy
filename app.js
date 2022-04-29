var btn_prev = document.querySelector('#gallery .buttons .prev');
var btn_next = document.querySelector('#gallery .buttons .next');

var cards = document.querySelectorAll('#gallery .card');
var i = 0

btn_prev.onclick = function () {
   cards[i].style.display = 'none';
   i--;

   if (i >= cards.length) {
      i = 0;
   }

   cards[i].style.display = 'block';
}

btn_next.onclick = function () {
   cards[i].style.display = 'none';
   i++;

   if (i >= cards.length) {
      i = 0;
   }

   cards[i].style.display = 'block';
}