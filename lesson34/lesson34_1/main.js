var colors = ['red', 'green', 'blue', 'purple'];

function changeBgcolour(){
    document.querySelector('body').style.background=
    colors[Math.floor(Math.random()*colors.length)];
}

var names = ['Festina', 'Anisa', 'Rita', 'Mjellma'];

function changeNames(){
    document.querySelector('p').innerHTML=
    names[Math.floor(Math.random()*names.length)];
}

setInterval(changeBgcolour, 1000);
setInterval(changeNames, 1000);

