// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-linksm')[0]

// toggleButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active')
// })

function openMenu() {
    var x = document.getElementById("navbar-li");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

var y = document.getElementById("productFront");
var z = document.getElementById("productSide");

const activColor = document.getElementsByClassName("valgt");
const product = document.getElementsByClassName ("product");

function changeImg() {

    // if(y.style.display === "flex"){
    //     y.style.display = "none";
    //     z.style.display = "flex";
    // }

    for(var i=0, j = product.length; i<j; i++){
        if(product[i].classList.contains("valgt") && product[i].classList.contains("hide") ){
            product[i].classList.remove("hide");
            console.log("valgt og vist");
        }
        else if (product[i].classList.contains("valgt")){
            product[i].classList.add("hide");
            console.log("valgt og gemt");
        }
        else{
            console.log("ikke valgt");
        }

    }

    // if(y.classList.contains("valgt") && y.classList.contains("hide")){
    //     y.classList.remove("hide");
    //     z.classList.add("hide");
    //     console.log("if");
    // }
    // else if (z.classList.contains("valgt") && z.classList.contains("hide")){
    //     y.classList.add("hide");
    //     z.classList.remove("hide");
    //     console.log("else if");
    // }

    // if (activColor[0].classList.contains("hide") ){
    //     activColor[0].classList.remove("hide");
    //     activColor[1].classList.add("hide");
    // }

    // if (y.style.display === "none"){
    //     y.classList.remove("hide");
    //     z.classList.add("hide");

        // y.style.display = "flex";
        // z.style.display = "flex";
        // console.log("none");
    // } 
    // else {
    //     // activColor[0].classList.add("hide");
    //     // activColor[1].classList.remove("hide");
    //     // y.classList.add("hide");
    //     // z.classList.remove("hide")


    //     // y.style.display = "none";
    //     // z.style.display = "none";
    //     console.log("else");
    // }
}




// Color change functions
const dots = document.getElementsByClassName("dot");
const box = document.getElementsByClassName("textbox");
var largeHalv = document.getElementById("dotLarge");
var largeKvart = document.getElementById("dotLarge2");




function colorGreen(){
    var c = 0;
    for (var i= 0, j = dots.length; i<j; i++){
        if(dots[i] != dots[c]){
            dots[i].classList.remove("active")
            console.log("removeA")
        }
        else{
            dots[i].classList.add("active")
            console.log("addA")
        }
    }
    box[0].classList.remove("lyserød", "blå", "gul", "orange");
    box[1].classList.remove("lyserød", "blå", "gul", "orange");
    box[0].classList.add("grøn");
    box[1].classList.add("grøn");
    largeHalv.classList.remove("lyserød", "blå", "gul", "orange"); 
    largeKvart.classList.remove("lyserød", "blå", "gul", "orange");
    largeHalv.classList.add("grøn");
    largeKvart.classList.add("grøn");

    var n = 0;
    var m = 5;
    for(var i = 0, j = product.length; i<j; i++){
        if(product[i] != product[n] && product[i] != product[m]){
            product[i].classList.remove("valgt");
            product[i].classList.add("hide");
            console.log("if");
        }
        else if (product[i] == product[m]){
            product[i].classList.add("valgt");
            product[i].classList.add("hide");
            console.log("else if");
        }
        else{
            product[i].classList.add("valgt");
            product[i].classList.remove("hide");
            console.log("else");
        }
    }
    console.log("grøn");
}

function colorPink(){
    var c = 1;
    for (var i= 0, j = dots.length; i<j; i++){
        if(dots[i] != dots[c]){
            dots[i].classList.remove("active")
            console.log("removeA")
        }
        else{
            dots[i].classList.add("active")
            console.log("addA")
        }
    }

    box[0].classList.remove("grøn", "blå", "gul", "orange");
    box[1].classList.remove("grøn", "blå", "gul", "orange");
    box[0].classList.add("lyserød");
    box[1].classList.add("lyserød");
    largeHalv.classList.remove("grøn", "blå", "gul", "orange");
    largeKvart.classList.remove("grøn", "blå", "gul", "orange");
    largeHalv.classList.add("lyserød");
    largeKvart.classList.add("lyserød");

    var n = 1;
    var m = 6;
    for(var i = 0, j = product.length; i<j; i++){
        if(product[i] != product[n] && product[i] != product[m]){
            product[i].classList.remove("valgt");
            product[i].classList.add("hide");
            console.log("if");
        }
        else if (product[i] == product[m]){
            product[i].classList.add("valgt");
            product[i].classList.add("hide");
            console.log("else if");
        }
        else{
            product[i].classList.add("valgt");
            product[i].classList.remove("hide");
            console.log("else");
        }
    }

    console.log("lyserød");

}
function colorBlue(){
    var c = 2;
    for (var i= 0, j = dots.length; i<j; i++){
        if(dots[i] != dots[c]){
            dots[i].classList.remove("active")
            console.log("removeA")
        }
        else{
            dots[i].classList.add("active")
            console.log("addA")
        }
    }
    box[0].classList.remove("grøn", "lyserød", "gul", "orange");
    box[1].classList.remove("grøn", "lyserød", "gul", "orange");
    box[0].classList.add("blå");
    box[1].classList.add("blå");
    largeHalv.classList.remove("grøn", "lyserød", "gul", "orange");
    largeKvart.classList.remove("grøn", "lyserød", "gul", "orange");
    largeHalv.classList.add("blå");
    largeKvart.classList.add("blå");

    var n = 2;
    var m = 7;
    for(var i = 0, j = product.length; i<j; i++){
        if(product[i] != product[n] && product[i] != product[m]){
            product[i].classList.remove("valgt");
            product[i].classList.add("hide");
            console.log("if");
        }
        else if (product[i] == product[m]){
            product[i].classList.add("valgt");
            product[i].classList.add("hide");
            console.log("else if");
        }
        else{
            product[i].classList.add("valgt");
            product[i].classList.remove("hide");
            console.log("else");
        }
    }

    console.log("blå");

}
function colorYellow(){
    var c = 3;
    for (var i= 0, j = dots.length; i<j; i++){
        if(dots[i] != dots[c]){
            dots[i].classList.remove("active")
            console.log("removeA")
        }
        else{
            dots[i].classList.add("active")
            console.log("addA")
        }
    }
    box[0].classList.remove("grøn", "lyserød", "blå", "orange");
    box[1].classList.remove("grøn", "lyserød", "blå", "orange");
    box[0].classList.add("gul");
    box[1].classList.add("gul");
    largeHalv.classList.remove("grøn", "lyserød", "blå", "orange");
    largeKvart.classList.remove("grøn", "lyserød", "blå", "orange");
    largeHalv.classList.add("gul");
    largeKvart.classList.add("gul");

    var n = 3;
    var m = 8;
    for(var i = 0, j = product.length; i<j; i++){
        if(product[i] != product[n] && product[i] != product[m]){
            product[i].classList.remove("valgt");
            product[i].classList.add("hide");
            console.log("if");
        }
        else if (product[i] == product[m]){
            product[i].classList.add("valgt");
            product[i].classList.add("hide");
            console.log("else if");
        }
        else{
            product[i].classList.add("valgt");
            product[i].classList.remove("hide");
            console.log("else");
        }
    }

    console.log("gul");
}
function colorOrange(){
    var c = 4;
    for (var i= 0, j = dots.length; i<j; i++){
        if(dots[i] != dots[c]){
            dots[i].classList.remove("active")
            console.log("removeA")
        }
        else{
            dots[i].classList.add("active")
            console.log("addA")
        }
    }

    box[0].classList.remove("grøn", "lyserød", "blå", "gul");
    box[1].classList.remove("grøn", "lyserød", "blå", "gul");
    box[0].classList.add("orange");
    box[1].classList.add("orange");
    largeHalv.classList.remove("grøn", "lyserød", "blå", "gul");
    largeKvart.classList.remove("grøn", "lyserød", "blå", "gul");
    largeHalv.classList.add("orange");
    largeKvart.classList.add("orange");

    var n = 4;
    var m = 9;
    for(var i = 0, j = product.length; i<j; i++){
        if(product[i] != product[n] && product[i] != product[m]){
            product[i].classList.remove("valgt");
            product[i].classList.add("hide");
            console.log("if");
        }
        else if (product[i] == product[m]){
            product[i].classList.add("valgt");
            product[i].classList.add("hide");
            console.log("else if");
        }
        else{
            product[i].classList.add("valgt");
            product[i].classList.remove("hide");
            console.log("else");
        }
    }
    
    console.log("orange");
}
// Color change slut
