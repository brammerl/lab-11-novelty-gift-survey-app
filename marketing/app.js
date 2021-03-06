const updatedData = JSON.parse(localStorage.getItem('overall'));

const clicks = [];
const views = [];
const ids = [];



updatedData.forEach(item => {
    if (item.clicks > 0){
        clicks.push(item.clicks);
        ids.push(item.name);
        views.push(item.views);
    }
});


const ctx = document.getElementById('chart').getContext('2d');
/* eslint-disable */
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

localStorage.removeItem('session');
