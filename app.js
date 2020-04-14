import items from './data/items.js';
import { Products } from './common/utils.js';

const itemCopy = new Products(items);


const images = document.querySelectorAll('img');
const radio = document.querySelectorAll('input');



const renderProducts = () => {
    let choiceOne = itemCopy.randomObject();
    let choiceTwo = itemCopy.randomObject();
    let choiceThree = itemCopy.randomObject();
    
    choiceOne.views++;
    choiceTwo.views++;
    choiceThree.views++;

    while (choiceOne.id === choiceTwo .id) {
        choiceTwo = itemCopy.randomObject();
    }

    while (choiceTwo.id === choiceThree.id) {
        choiceThree = itemCopy.randomObject();
    }

    while (choiceOne.id === choiceThree.id) {
        choiceThree = itemCopy.randomObject();
    }

    images.forEach((image, i) => {
        if (i === 0) {
            image.src = choiceOne.src;
        } else if (i === 1) {
            image.src = choiceTwo.src;
        } else if (i === 2) {
            image.src = choiceThree.src;
        }
        
    });

    radio.forEach((radioTag, i) => {
        if (i === 0) {
            radioTag.value = choiceOne.id;
        } else if (i === 1) {
            radioTag.value = choiceTwo.id;
        } else if (i === 2) {
            radioTag.value = choiceThree.id;
        }
    });

    
};

radio.forEach((radioTag) => {
    radioTag.addEventListener('click', (event) => {
        let selected = itemCopy.getProduct(event.target.value);
        if (event.target.value === selected.id) {
            selected.clicks += 1;
            selected.views += 1;
        }
    });
});



const myButton = document.querySelector('button');
myButton.addEventListener('click', renderProducts);

renderProducts();