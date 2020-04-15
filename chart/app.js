const viewsClicksArray = JSON.parse(localStorage.getItem('session'));

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

new Chart (ctx, {
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

localStorage.removeItem('session');
