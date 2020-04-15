import { updateMarketData } from '../overall.js';

const test = QUnit.test;

test('testing if object not in local storage', function(assert) {

    const testArray = [{
        id: 'r2-d2-roller',
        src: './assets/bag.jpg',
        name: 'R2D2 Roller Suit Case',
        views: 3,
        clicks: 2
    }];


    updateMarketData(testArray);
    const answer2 = localStorage.getItem('overall');

    const expected = `[{"id":"r2-d2-roller","src":"./assets/bag.jpg","name":"R2D2 Roller Suit Case","views":3,"clicks":2}]`;

    assert.equal(answer2, expected);
});

test('testing when object already in local storage', function(assert) {

    const ls = [{
        id: 'r2-d2-roller',
        src: './assets/bag.jpg',
        name: 'R2D2 Roller Suit Case',
        views: 3,
        clicks: 2
    }];

    localStorage.setItem('overall', JSON.stringify(ls));

    const testArray2 = [{
        id: 'r2-d2-roller',
        src: './assets/bag.jpg',
        name: 'R2D2 Roller Suit Case',
        views: 5,
        clicks: 6
    }];


    updateMarketData(testArray2);
    const answer2 = localStorage.getItem('overall');

    const expected = `[{"id":"r2-d2-roller","src":"./assets/bag.jpg","name":"R2D2 Roller Suit Case","views":8,"clicks":8}]`;

    assert.equal(answer2, expected);
});