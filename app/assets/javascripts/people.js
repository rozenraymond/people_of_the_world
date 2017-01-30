$(document).ready(function(){
var color = ["#F1C8DB", "#91B8D9", "#68EDC6", "#EB9FEF", "#A9F8DB", "#81F7E5", "#B6DCFE", "#CFFFB0", "#D1C6AD", "#A26769", "#ECE2D0", "#5D4E6D", "#A9FFF7", "#BCB6FF", "#FE5D9F", "#F1E4F3", "#773344", "#E85F5C", "#919EAC"];


var changeColor = function (){
  var div = document.querySelectorAll(".narrative");
  console.log(div.length);
  var index = Math.floor(Math.random()*color.length);
  console.log(index);
  div.css("backgroundColor", color[index] );
  $(".showPage").append(div);
};


changeColor();

});
