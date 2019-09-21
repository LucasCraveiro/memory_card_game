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

gameGrid.forEach(item => {
  const card = document.createElement('div');

  card.classList.add('card');

  card.dataset.name = item.name;

  card.style.backgroundImage = `url(${item.img})`;

  grid.appendChild(card);
});

let gameGrid = cardsArray.concat(cardsArray);

gameGrid.sort(() => 0.5 - Math.random());

grid.addEventListener('click', function(event) {
  let clicked = event.target;

  if (clicked.nodeName === 'SECTION') {
    return;
  }

  let firstGuess = '';
  let secondGuess = '';
  let count = 0;

  if (count < 2) {
    count++;

    clicked.classList.add('selected');
  }
});

const match = () => {
  var selected = document.querySelectorAll('.selected');

  selected.forEach(card => {
    card.classList.add('match');
  });
};
