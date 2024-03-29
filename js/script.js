// Card data

const cardsArray = [
  {
    name: 'bird',
    img: 'img/bird.png'
  },
  {
    name: 'cartoon',
    img: 'img/cartoon.png'
  },
  {
    name: 'crab',
    img: 'img/crab.png'
  },
  {
    name: 'dog',
    img: 'img/dog.png'
  },
  {
    name: 'eggplant',
    img: 'img/eggplant.png'
  },
  {
    name: 'hippo',
    img: 'img/hippo.png'
  },
  {
    name: 'minion',
    img: 'img/minion.png'
  },
  {
    name: 'potatoes',
    img: 'img/potatoes.png'
  },
  {
    name: 'rhino',
    img: 'img/rhino.png'
  },
  {
    name: 'shark',
    img: 'img/shark.png'
  },
  {
    name: 'duck',
    img: 'img/duck.png'
  },
  {
    name: 'monkey',
    img: 'img/monkey.png'
  }
];

const game = document.getElementById('game');

const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

game.appendChild(grid);

let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

gameGrid.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = item.name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${item.img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

const match = () => {
  var selected = document.querySelectorAll('.selected');

  selected.forEach(card => {
    card.classList.add('match');
  });
};

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', function(event) {
  let clicked = event.target;

  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected')
  ) {
    return;
  }

  if (count < 2) {
    count++;

    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    }

    previousTarget = clicked;

    if (firstGuess !== '' && secondGuess !== '') {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
      } else {
        setTimeout(resetGuesses, delay);
      }
    }
  }
});
