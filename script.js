let itemInput = document.getElementById('item-name-input');
let priceInput = document.getElementById('item-price-input');
let button = document.getElementById('add');
let table = document.getElementById('table');
let total = document.getElementById('total');


let priceArr = [];

function addItem(){
    let item = (itemInput.value);
    let price = (priceInput.value);

    if (item !== '' && price !== ''){
        let row = document.createElement('tr');
        priceArr.push(parseInt(price));
        row.innerHTML = `<td> ${item} </td> <td>${price}</td>`  

        let sum = 0;
        for(let i=0; i<priceArr.length; i++){
            sum = sum + priceArr[i];
        }
        console.log(sum );

        table.append(row);
        total.innerText = sum;

        itemInput.value = '';
        priceInput.value = '';

    }

}

button.addEventListener('click', addItem)
