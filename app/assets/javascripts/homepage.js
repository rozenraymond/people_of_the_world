// $( document ).ready( function () {
//   var size = {
//     width: window.innerWidth/13,
//     height: window.innerHeight/10
//   };
//
//   var grid = $( ".picturesGrid" );
//
//   var picNum = 0;
//   <% picNum = 0 %>
//   <% k = 0 %>
//   <% a = 0 %>
//
//     for (var i = 1; i <= 6; i++){
//       <% while a < 6 %>
//       for (var j = 1; j <= 8; j++){
//         <% while k < 8 %>
//           <% picNum += 1 %>
//           <% k += 1 %>
//
//
//         // picNum++;
//         // console.log(picNum);
//
//         // var peopleURL = "people/pic" + picNum.toString() + ".jpg";
//         // console.log(peopleURL);
//         var image = '<%= image_path( "people/pic#{ picNum.to_s }.jpg" ) %>';
//
//         // var wholeURL = 'url <%#= asset_path ("#{people/pic'+ picNum.toString() + '})"%>';
//         $div = $("<div></div>");
//         $div.addClass('pic');
//         $div.css("background-image", 'url( ' + image + ' )');
//
//         // debugger;
//
//         grid.append( $div );
//         <% end %>
//
//       }
//       <% picNum += 1 %>
//       <% end %>
//     }
//
// });
