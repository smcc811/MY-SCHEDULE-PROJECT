$(document).ready(function(){
   console.log("hello world");


// get current hour

var completeDate = moment().format("MMM Do YYYY");
console.log("today is: " + completeDate);
var hour = moment().format("HH");
console.log("the current hour is: "+ hour);
var todayDate = document.getElementById("currentDay");
todayDate.append(completeDate);


// adding time class to text area

function setTextMessageColor() {
   if(parseInt(hour) < 09){
      $("#nineText").addClass("future");
      $("#tenText").addClass("future");
      $("#elevenText").addClass("future");
      $("#noonText").addClass("future");
      $("#oneText").addClass("future");
      $("#twoText").addClass("future");
      $("#threeText").addClass("future");
      $("#fourText").addClass("future");
      $("#fiveText").addClass("future");
      $("#sixText").addClass("future");
   }

   if(parseInt(hour) < 10){
      $("#nineText").addClass("present");
      $("#tenText").addClass("future");
      $("#elevenText").addClass("future");
      $("#noonText").addClass("future");
      $("#oneText").addClass("future");
      $("#twoText").addClass("future");
      $("#threeText").addClass("future");
      $("#fourText").addClass("future");
      $("#fiveText").addClass("future");
      $("#sixText").addClass("future");
   }

   if(parseInt(hour) < 11){
      $("#nineText").addClass("past");
      $("#tenText").addClass("present");
      $("#elevenText").addClass("future");
      $("#noonText").addClass("future");
      $("#oneText").addClass("future");
      $("#twoText").addClass("future");
      $("#threeText").addClass("future");
      $("#fourText").addClass("future");
      $("#fiveText").addClass("future");
      $("#sixText").addClass("future");
   }

   if(parseInt(hour) < 12){
      $("#nineText").addClass("past");
      $("#tenText").addClass("past");
      $("#elevenText").addClass("present");
      $("#noonText").addClass("future");
      $("#oneText").addClass("future");
      $("#twoText").addClass("future");
      $("#threeText").addClass("future");
      $("#fourText").addClass("future");
      $("#fiveText").addClass("future");
      $("#sixText").addClass("future");
   }

   if(parseInt(hour) < 13){
      $("#nineText").addClass("past");
      $("#tenText").addClass("past");
      $("#elevenText").addClass("past");
      $("#noonText").addClass("present");
      $("#oneText").addClass("future");
      $("#twoText").addClass("future");
      $("#threeText").addClass("future");
      $("#fourText").addClass("future");
      $("#fiveText").addClass("future");
      $("#region sixText").addClass("future");
   }
   
   if(parseInt(hour) < 14){
      $("#nineText").addClass("past");
      $("#tenText").addClass("past");
      $("#elevenText").addClass("past");
      $("#noonText").addClass("past");
      $("#oneText").addClass("present");
      $("#twoText").addClass("future");
      $("#threeText").addClass("future");
      $("#fourText").addClass("future");
      $("#fiveText").addClass("future");
      $("#sixText").addClass("future");
   }

  
   if(parseInt(hour) < 15){
      $("#nineText").addClass("past");
      $("#tenText").addClass("past");
      $("#elevenText").addClass("past");
      $("#noonText").addClass("past");
      $("#oneText").addClass("past");
      $("#twoText").addClass("present");
      $("#threeText").addClass("future");
      $("#fourText").addClass("future");
      $("#fiveText").addClass("future");
      $("#sixText").addClass("future");
   }

   if(parseInt(hour) < 16){
      $("#nineText").addClass("past");
      $("#tenText").addClass("past");
      $("#elevenText").addClass("past");
      $("#noonText").addClass("past");
      $("#oneText").addClass("past");
      $("#twoText").addClass("past");
      $("#threeText").addClass("present");
      $("#fourText").addClass("future");
      $("#fiveText").addClass("future");
      $("#sixText").addClass("future");
   }

   if(parseInt(hour) < 17){
      $("#nineText").addClass("past");
      $("#tenText").addClass("past");
      $("#elevenText").addClass("past");
      $("#noonText").addClass("past");
      $("#oneText").addClass("past");
      $("#twoText").addClass("past");
      $("#threeText").addClass("past");
      $("#fourText").addClass("present");
      $("#fiveText").addClass("future");
      $("#sixText").addClass("future");
   }

   if(parseInt(hour) < 18){
      $("#nineText").addClass("past");
      $("#tenText").addClass("past");
      $("#elevenText").addClass("past");
      $("#noonText").addClass("past");
      $("#oneText").addClass("past");
      $("#twoText").addClass("past");
      $("#threeText").addClass("past");
      $("#fourText").addClass("past");
      $("#fiveText").addClass("present ");
      $("#sixText").addClass("future");
   }

   if(parseInt(hour) < 19){
      $("#nineText").addClass("past");
      $("#tenText").addClass("past");
      $("#elevenText").addClass("past");
      $("#noonText").addClass("past");
      $("#oneText").addClass("past");
      $("#twoText").addClass("past");
      $("#threeText").addClass("past");
      $("#fourText").addClass("past");
      $("#fiveText").addClass("past");
      $("#sixText").addClass("present");
   }

   if(parseInt(hour) < 24){
      $("#nineText").addClass("past");
      $("#tenText").addClass("past");
      $("#elevenText").addClass("past");
      $("#noonText").addClass("past");
      $("#oneText").addClass("past");
      $("#twoText").addClass("past");
      $("#threeText").addClass("past");
      $("#fourText").addClass("past");
      $("#fiveText").addClass("past");
      $("#sixText").addClass("past");
   }




}

// function below houses all button functions to send data to local storage

 function process () {

  $("#nineButton").on("click",function(){   
     var nine = $.trim($("#nineText").val());          
         localStorage.setItem ('nine', nine);               
  })


  $("#tenButton").on("click",function(){
     var ten = $.trim($("#tenText").val());  
        localStorage.setItem('ten', ten);       
  })

  $("#elevenButton").on("click",function(){
     var eleven = $.trim($("#elevenText").val());  
         localStorage.setItem('eleven', eleven);  
  })

  $("#noonButton").on("click",function(){
     var noon = $.trim($("#noonText").val()); 
        localStorage.setItem('noon', noon);   
  })

  $("#oneButton").on("click",function(){
     var one = $.trim($("#oneText").val());   
        localStorage.setItem('one', one);
  })

  $("#twoButton").on("click",function(){
     var two = $.trim($("#twoText").val());     
        localStorage.setItem('two', two);      
  })

  $("#threeButton").on("click",function(){
     var three = $.trim($("#threeText").val());
         localStorage.setItem('three', three);  
  })


  $("#fourButton").on("click",function(){
     var four = $.trim($("#fourText").val()); 
      localStorage.setItem("four", four);  
  })  

  $("#fiveButton").on("click",function(){
        var five = $.trim($("#fiveText").val());
            localStorage.setItem('five', five)       
   })



   $("#sixButton").on("click",function(){
     var six = $.trim($("#sixText").val());
         localStorage.setItem('six', six); 
   })
 }

// pull information back from local storage

 function getInfo() {
    $("#nineText").val(localStorage.getItem('nine')); 
    $("#tenText").val(localStorage.getItem('ten'));
    $("#elevenText").val(localStorage.getItem('eleven'));
    $("#noonText").val(localStorage.getItem('noon'));
    $("#oneText").val(localStorage.getItem('one'));
    $("#twoText").val(localStorage.getItem('two'));
    $("#threeText").val(localStorage.getItem('three'));
    $("#fourText").val(localStorage.getItem('four'));
    $("#fiveText").val(localStorage.getItem('five'));
    $("#sixText").val(localStorage.getItem('six'));
 }

 //processing taking place here
 
getInfo();
setTextMessageColor();
process();





});   // end of document.ready function 