
export class SuperArray {
    constructor(array) {
        this.array = array.slice();
    }

    // get product by random
    randomObject() {
        const index = Math.floor(Math.random() * this.array.length);
        return this.array[index];
    }

    //get product information
    getProduct(idChoice) {
        let productObj;

        this.array.forEach(product => {
            if (idChoice === product.id) {
                productObj = product;
            }
        });
        return productObj; 
    }

    //saving to local storage
    save() {
        localStorage.setItem('session', JSON.stringify(this.array));
    }   
   
}

export function getById(array, id) {
    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        if (item.id === id) {
            return item;
        }
    }
    return null;
}
