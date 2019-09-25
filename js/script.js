// Card data

const cardsArray = [
  {
    name: '',
    img: 'img/'
  },
  {
    name: '',
    img: 'img/'
  },
  {
    name: '',
    img: 'img/'
  },
  {
    name: '',
    img: 'img/'
  },
  {
    name: '',
    img: 'img/'
  },
  {
    name: '',
    img: 'img/'
  },
  {
    name: '',
    img: 'img/'
  },
  {
    name: '',
    img: 'img/'
  },
  {
    name: '',
    img: 'img/'
  },
  {
    name: '',
    img: 'img/'
  },
  {
    name: '',
    img: 'img/'
  },
  {
    name: '',
    img: 'img/'
  }
];

const game = document.getElementById('game');

const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

game.appendChild(grid);

let gameGrid = cardsArray.concat(cardsArray);

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

gameGrid.sort(() => 0.5 - Math.random());

grid.addEventListener('click', function(event) {
  let clicked = event.target;

  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected')
  ) {
    return;
  }

  let firstGuess = '';
  let secondGuess = '';
  let previousTarget = null;
  let count = 0;

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
    let delay = 1200;

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
