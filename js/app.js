'use strict'
let container = document.getElementById('container');
let table = document.createElement('table');
    container.appendChild(table);

let submition = document.getElementById('myform');
let storearr =[];
let presentimg = ['present1.jpg','present2.jpg','present4.png','present5.png','present6.jpg',]
function Present(username , quantity , forwhom ,cashornot , img )
{
    this.username = username;
    this.quantity = quantity;
    this.forwhom = forwhom;
    this.cashornot = cashornot ;
    this.img = 'img/' +presentimg[img];
    storearr.push(this);
}
Present.prototype.render = function(){

    table.textContent='';
    
    let thead = document.createElement('thead');
    table.appendChild(thead);
    let trhead = document.createElement('tr');
    thead.appendChild(trhead);

    let thhead = document.createElement('th');
    trhead.appendChild(thhead);
    thhead.textContent = 'User Name ';

    thhead = document.createElement('th');
    trhead.appendChild(thhead);
    thhead.textContent = 'Quantity ';

    thhead = document.createElement('th');
    trhead.appendChild(thhead);
    thhead.textContent = 'For Whom';

    thhead = document.createElement('th');
    trhead.appendChild(thhead);
    thhead.textContent = 'Cash or not ';

    thhead = document.createElement('th');
    trhead.appendChild(thhead);
    thhead.textContent = 'Present ';

    for (let index = 0; index < storearr.length; index++) {
        let tbody = document.createElement('tbody');
        table.appendChild(tbody);
        let trbody =document.createElement('tr');
        tbody.appendChild(trbody);

        let tdbody =document.createElement('td');
        trbody.appendChild(tdbody);
        tdbody.textContent=storearr[index].username;

        tdbody =document.createElement('td');
        trbody.appendChild(tdbody);
        tdbody.textContent=storearr[index].quantity;

        tdbody =document.createElement('td');
        trbody.appendChild(tdbody);
        tdbody.textContent=storearr[index].forwhom;

        tdbody =document.createElement('td');
        trbody.appendChild(tdbody);
        tdbody.textContent=storearr[index].cashornot;

        tdbody =document.createElement('td');
        trbody.appendChild(tdbody);
        let imgcontain = document.createElement('img');
        tdbody.appendChild(imgcontain);
        imgcontain.setAttribute('src',storearr[index].img);
        
    }
    // table.style.backgroundImage=URL("https://img.freepik.com/free-vector/colorful-watercolor-rainbow-background_125540-151.jpg?size=626&ext=jpg");
    submition.style.backgroundImage = "url('https://img.freepik.com/free-vector/colorful-watercolor-rainbow-background_125540-151.jpg?size=626&ext=jpg')"; 

    table.style.backgroundImage = "url('https://img.freepik.com/free-vector/colorful-watercolor-rainbow-background_125540-151.jpg?size=626&ext=jpg')"; 
    // table.style.backgroundImage.repeat = "not-repeat";
    
}
submition.addEventListener('submit',handelclick);

function handelclick(event){
    event.preventDefault();
    let username = event.target.username.value;
    let quantity = event.target.Quantity.value;
    let forwhome = event.target.forwhome.value;

    let cashornot;
    if(document.getElementById('yescash').checked)
    {
        cashornot ='yes'
    }
    else if(document.getElementById('nocash').checked){
        cashornot= 'no'
    }
    let img = imgrandom(0,4);
    
    let data = new Present(username,quantity,forwhome,cashornot,img);
    data.render();
    setting();
    event.target.username.value = '';
    event.target.Quantity.value='';
    event.target.forwhome.value='';
    document.getElementById('yescash').checked = false;
    document.getElementById('nocash').checked = false;
    
}
document.getElementById('username').value ='';
document.getElementById('Quantity').value ='';
document.getElementById('optionsel').value ='';
document.getElementById('yescash').checked = false;
document.getElementById('nocash').checked = false;

function imgrandom(min ,max){
    return parseInt( Math.random() * (max - min) + min);
}
function setting(){
    let data = JSON.stringify(storearr);
    localStorage.setItem('data ' , data);
}
function getting(){
    let localdata = localStorage.getItem('data ');
    let obj = JSON.parse(localdata);
    let setdata ;
    if(obj)
    {
        
        for (let index = 0; index < obj.length; index++) {
            let img = imgrandom(0,4);
            
            setdata = new Present (obj[index].username ,obj[index].quantity , obj[index].forwhom ,obj[index].cashornot,obj[index].img);
            
        }
        setdata.render();
    }
}
getting();