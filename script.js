var happyImages = [
    "https://cdn.myanimelist.net/s/common/uploaded_files/1446436977-d1b19d3e9d7587282a22631631af962b.jpeg", 
    "https://pixel.nymag.com/imgs/daily/vulture/2017/11/19/3-olaf.w330.h330.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUsmE5GLeOXwqzNP9BlCcSMpLXRJd731dlZrlmjHquHT0m6J_vpg"
];
var sadImages = [
"https://data.whicdn.com/images/311124832/large.jpg",
"https://pm1.narvii.com/7064/07a887ef76cfd2898452ecb2d0c3d957ac3edb1fr1-444-331v2_00.jpg",
"http://www.planetcalypsoforum.com/gallery/files/1/7/8/9/3/huge_mouth_baby.jpg"];
var tiredImages = [
"https://data.whicdn.com/images/177726885/superthumb.png?t=1431280330",
"https://peopledotcom.files.wordpress.com/2018/06/post-malone.jpg",
"https://t7.rbxcdn.com/1ce784e15cfde6a710cd88e7e897f558"];
var hungryImages = [
"https://media1.tenor.com/images/551999e672c1bed01d914055f73c51f0/tenor.gif?itemid=11590925",
"https://beagamhain.files.wordpress.com/2011/01/14_press_photo.jpg",
"https://images.wagwalkingweb.com/media/articles/cat/why-is-my-cat-always-hungry/why-is-my-cat-always-hungry.jpg" ];

$("button").click(function(){
    var mood = $("input").val();
    $(".images").html("");
    
    if( mood === "happy" ) {
        happyMood(happyImages);
        
    }else if ( mood === "sad") {
        sadMood(sadImages);
    } else if ( mood === "tired"){
        tiredMood(tiredImages);
    } else if (mood === "hungry" ) {
        hungryMood(hungryImages);
    }else {
        alert("Select your mood from the placeholders!!");
    }
    
    $("input").val("");
});


function happyMood(){
   happyImages.forEach(function(yay) {
   $(".images").append("<img src=" + yay + ">");
   });
   $("body").css("background-color","yellow");
   $("body").css("color","red");
   
}
function sadMood(){
    sadImages.forEach(function(mm) {
   $(".images").append("<img src=" + mm + ">");
   });
   $("body").css("background-color","blue");
   $("body").css("color","orange");
}
function tiredMood(){
   tiredImages.forEach(function(ahh) {
   $(".images").append("<img src=" + ahh + ">");
   });
   $("body").css("background-color","grey");
   $("body").css("color","white");
}
function hungryMood(){
    
    hungryImages.forEach(function(yum){
    $(".images").append("<img src=" + yum + ">");
    $("body").css("background-color","orange");
    $("body").css("color","blue");
     
 });
}

function changeBackgroundColor(color){
    
}

function changeTextColor(color){
}

function displayImages(images){
  
}


