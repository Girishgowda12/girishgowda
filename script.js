console.log("file loaded");
var header=$("#heading");
console.log(header.text());
header.css('color','red');
header.css('background','black');

var ullist=$(".giri");
console.log(ullist.text());
ullist.css('color','blue');
ullist.css('background','black');

var btn=$("#superbtn");
btn.on('click',function(){
    console.log("clicked");
})

var inp=$("#superinput");
var output=$("#output")
console.log(output);
  inp.on('keyup',function(){
    var value=$(this).val();
    //console.log(value);
     output.html(value);
     
})



//wether application
var button=$("#btnid");
button.on('click',function(){
    console.log("clicked");
})