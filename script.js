let celcius = document.getElementById("celcius");
let fahrenhiet = document.getElementById("fahrenhiet");

function celToFar(){
    let output = ( parseFloat(celcius.value)*9/5)+32;
    fahrenhiet.value=parseFloat(output.toFixed(2));
}
function farToCel(){
    let output = (parseFloat(fahrenhiet.value )-32)*5/9;
    celcius.value= parseFloat(output.toFixed(2))
}