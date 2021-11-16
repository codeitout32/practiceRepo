
const items = document.querySelector('#items');
const addForm = document.querySelector('#addForm');
const filter = document.querySelector('#filter')

addForm.addEventListener('submit', additem);
items.addEventListener('click', removeitem);
filter.addEventListener('keyup',filteritems2);


//for add

function additem(e) {
    e.preventDefault();
    item = document.querySelector('#item');

    console.log(item.value);

    //create element
    const newli = document.createElement('li');

    newli.classList.add('list-group-item');

    newli.innerText = item.value;

    const rbutton = document.createElement('button')
    
    rbutton.innerText = 'X';

    rbutton.classList.add('btn' , 'btn-danger' , 'btn-sm', 'float-right', 'delete');

    newli.append(rbutton);

    items.append(newli);

    console.log(newli);

}


// for remove
li = items.querySelectorAll('.delete');

li.forEach(item => {
   
    item.addEventListener('click', item => { 
        if(confirm("Are you Sure?")){
        item.target.parentElement.remove();}
    });    
});


// remove 2nd try

function removeitem(e){
    if(e.target.tagName.toLowerCase() == 'button') e.target.parentElement.remove();
    console.log(e.target.tagName.toLowerCase())
}


function filteritems(e) {
    const fText = filter.value.toLowerCase();

    // Get list
    const item = items.querySelectorAll('li');

    // convert to an array
    Array.from(item).forEach( item =>{
        console.log(item.firstChild.textContent);
        if(item.firstChild.textContent.toLowerCase().indexOf(fText) == -1) item.style.display = 'none';
        else item.style.display = 'block';
    })
    
    
    
    

    //console.log(fText);
}

// filter better version

function filteritems2(e) {
    const text =e.target.value.toLowerCase();

    const itemsList = items.getElementsByTagName('li');

    Array.from(itemsList).forEach(item => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if(itemName.indexOf(text) != -1) item.style.display = 'block';
        else item.style.display = 'none';

    })
}
// .forEach( item => {
//     console.log(item.value);
//     if(item.value.indexOf(fText)) item.style.display = 'block';
// else item.style.display = 'none';
// }