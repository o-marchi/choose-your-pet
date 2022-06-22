
const animals = [
  {
    name: 'Dog',
    image: 'https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png',
  },
  {
    name: 'Cat',
    image: 'https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info',
  },
  {
    name: 'Iguana',
    image: 'https://s1.static.brasilescola.uol.com.br/be/2022/05/iguana.jpg',
  },
  {
    name: 'Parrot',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Papagaio-verdadeiro.jpg',
  }
];

const menuElement = document.getElementById('menu');
const imageElement = document.getElementById('image');

function cleanImageElement() {
  imageElement.innerHTML = '';
}

function createMenu() {
  animals.forEach(animal => {
    const button = document.createElement('button');
    button.innerText = animal.name;

    button.addEventListener('click', () => {
      cleanImageElement();

      const image = document.createElement('img');
      image.src = animal.image;

      imageElement.appendChild(image);
    });

    menuElement.appendChild(button);
  });
}

createMenu();

