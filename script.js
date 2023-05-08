
document.getElementById("button").onclick = function(){
    var dice1 = Math.floor(Math.random()*6 + 1);
    var dice2 = Math.floor(Math.random()*6 + 1);

    var randomImgSource_1 = "./src/images/dice" + dice1 + ".png";
    var randomImgSource_2 = "./src/images/dice" + dice2 + ".png";

    document.querySelector("#ply-1").setAttribute("src",randomImgSource_1);
    document.querySelector("#ply-2").setAttribute("src",randomImgSource_2);

}