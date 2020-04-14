
export class Products {
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

    
}

// getObjectById(array, id) {
//     array.forEach((object) => {
//         if (array.id === id) {
//             return object;
//         }
//     });
// }

