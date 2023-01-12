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

  return card;
}

function createGame(plays) {
  birds.splice(plays / 2);

  const duplicatedBirds = [...birds, ...birds];

  const shuffledArray = duplicatedBirds.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((bird) => {

    console.log(bird);
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