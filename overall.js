
import { getById } from './common/utils.js';

export function updateMarketData(array) {
    let marketData = localStorage.getItem('overall');

    if (!marketData) {
        marketData = [];
    } else if (marketData) {
        marketData = JSON.parse(marketData);
    }

    array.forEach(item => {
        if (item.views > 0) {
            const match = getById(marketData, item.id);

            if (!match) {
                marketData.push(item);
            } 
            else if (match) {
                match.clicks = match.clicks + item.clicks;
                match.views = match.views + item.views;
            }
        }
     
        const stringed = JSON.stringify(marketData);

        localStorage.setItem('overall', stringed);
        
    });
}
