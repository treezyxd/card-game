const container = document.querySelector('.container');

const birds = [
  'bobrossparrot',
  'explodyparrot',
  'fiestaparrot',
  'metalparrot',
  'revertitparrot',
  'tripletsparrot',
  'unicornparrot',
];

function createElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

function createImgElement(tag, attribute, path) {
  const element = document.createElement(tag);
  element.setAttribute(attribute, path);
  return element;
}

let firstCard = '';
let secondCard = '';

function checkEndGame() {
  const flippedCards = document.querySelectorAll('.reveal-card');
  const allCards = document.querySelectorAll('.card');

  if(flippedCards.length === allCards.length) {
    alert(`Você ganhou em ${count} jogadas`);
  }
}

function checkCards() {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if(firstCharacter === secondCharacter) {
    firstCard = '';
    secondCard = '';
    
    setTimeout(() => {
      checkEndGame();
    }, 250);
  } else {
    setTimeout(() => {
      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');
      
      firstCard = '';
      secondCard = '';
    }, 1000);
  }
}

let count = 0;

function revealCard({ target }) {
  if(target.parentNode.parentNode.className.includes('reveal-card')){
    return;
  }

  if(firstCard === ''){
    target.parentNode.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode.parentNode;
    count++;
  } else if(secondCard === '') {
    target.parentNode.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode.parentNode;
    count++;

    checkCards();
  }

}

function createCard(bird) {
  const card = createElement('div', 'card');
  const front = createElement('div', 'face front-face');
  const back = createElement('div', 'face back-face');
  const frontImg = createImgElement('img', 'src', `./assets/${bird}.gif`);
  const backImg = document.createElement('img');
  
  backImg.setAttribute('src', './assets/back.png');

  front.appendChild(frontImg);
  back.appendChild(backImg);
  
  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', bird);

  return card;
}

function createGame(plays) {
  birds.splice(plays / 2);

  const duplicatedBirds = [...birds, ...birds];

  const shuffledArray = duplicatedBirds.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((bird) => {

    const card = createCard(bird);
    container.appendChild(card);

  });

}

let plays;

function startGame() {
  do{
    plays = parseInt(prompt('quantas cartas jogar'));
  } while (plays % 2 != 0 || plays > 14 || plays < 4 || plays == null || plays == undefined) {
    createGame(plays);
  }

}

startGame();