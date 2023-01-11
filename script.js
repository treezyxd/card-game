const container = document.querySelector('.container');

const birds = [
  'bobrossparrot',
  'explodyparrot',
  'fiestaparrot',
  'metalparrot',
  'revertitparrot',
  'triplestsparrot',
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

function createGame() {
  const duplicatedBirds = [...birds, ...birds];

  const shuffledArray = duplicatedBirds.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((bird) => {

    console.log(bird);
    const card = createCard(bird);
    container.appendChild(card);

  });

}

function loadGame() {
  let plays = prompt('Quantas cartas quer jogar? Digite um numero par entre 4 e 14!');

  if(plays < 4 || plays >= 15 || plays % 2 == 0 || play === undefined || plays === null) {
    alert('erro');
    plays = prompt('Quantas cartas quer jogar? Digite um numero par entre 4 e 14!');
  } else {
    createGame();
  }
}

loadGame();