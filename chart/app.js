const viewsClicksArray = JSON.parse(localStorage.getItem('session'));
const myButton = document.getElementById('return');
const statButton = document.getElementById('market');

const clicks = [];
const ids = [];
const views = [];



viewsClicksArray.forEach((item) => {
    if (item.clicks > 0) {
        clicks.push(item.clicks);
        ids.push(item.name);
        views.push(item.views);
    }
});

const ctx = document.getElementById('chart').getContext('2d');
/* eslint-disable*/
new Chart (ctx, {
/* eslint-enable */
    type: 'horizontalBar',
    data: {
        labels: ids,
        datasets: [{
            label: '# of Clicks',
            data: clicks, 
            backgroundColor: '#F7F4BF',
        }, {
            label: '# of Views',
            data: views,
            backgroundColor: '#FCEAE6'
        }],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

myButton.addEventListener('click', () => {
    location.replace('../index.html');
    localStorage.removeItem('session');
});

statButton.addEventListener('click', () => {
    location.replace('../marketing/index.html');
    localStorage.removeItem('session');
});

