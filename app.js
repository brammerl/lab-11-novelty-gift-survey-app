import items from './data/items.js';
import { SuperArray } from './common/utils.js';
import { updateMarketData } from './overall.js';


const itemCopy = new SuperArray(items);

const marketDataArray = items.slice();

const images = document.querySelectorAll('img');
const radio = document.querySelectorAll('input');

let totalClicks = 0;

const renderProducts = () => {
    let choiceOne = itemCopy.randomObject();
    let choiceTwo = itemCopy.randomObject();
    let choiceThree = itemCopy.randomObject();
    
    choiceOne.views = choiceOne.views + 1;
    choiceTwo.views = choiceTwo.views + 1;
    choiceThree.views = choiceThree.views + 1;

    if (totalClicks === 25) {
        totalClicks = 0;
        updateMarketData(marketDataArray);
        location.replace('./chart/index.html');
    }

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

renderProducts();

radio.forEach((radioTag) => {
    radioTag.addEventListener('click', (event) => {
        totalClicks++;
        let selected = itemCopy.getProduct(event.target.value);
        if (event.target.value === selected.id) {
            selected.clicks = selected.clicks + 1;
        }
        itemCopy.save('session');
        renderProducts();
    }); 
});

