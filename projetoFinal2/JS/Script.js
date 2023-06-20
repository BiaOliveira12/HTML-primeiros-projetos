let count = 1;
var contagem = document.getElementById("slide1").checked = true;

setInterval( function(){
    nextImage();
}, 4000)

function nextImage(){
    count++;
    if(count>5){
        count = 1;
    }

document.getElementById("slide"+count).checked = true;
}
