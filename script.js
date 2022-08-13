let input = document.getElementById("myText").value;
document.getElementById("myButton").onclick = function(){
    $('.temp').empty();
    $('.weather').empty();
    var city = document.getElementById("myText").value;
    
    $.getJSON(
        "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=052a9b7f2c0223088cf6f38f8b4f9fce",
        function(data){
    var icon = "https://openweathermap.org/img/w/"+data.weather[0].icon+".png"
    var temp = data.main.temp;
    var weather = data.weather[0].main

    $('.icon').attr('src', icon);
    $('.temp').append(Math.floor(temp)+"°");
    $('.weather').append(weather)
   
        }
    );
    
}
function handleEnterKey(e){ 
    if(e.keyCode == 13){ 
        try{
            e.preventDefault ? e.preventDefault() : (e.returnValue = false);

        }catch(err){
            console.log(err.message); 
        }
    }
}
$(document).on("keypress", "input", function(e){
    if(e.which == 13){
        $('.temp').empty();
        $('.weather').empty();

        var city = document.getElementById("myText").value;
        
        $.getJSON(
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=052a9b7f2c0223088cf6f38f8b4f9fce",
            function(data){
        var icon = "https://openweathermap.org/img/w/"+data.weather[0].icon+".png"
        var temp = data.main.temp;
        var weather = data.weather[0].main
    
        $('.icon').attr('src', icon);
        $('.temp').append(Math.floor(temp)+"°");
        $('.weather').append(weather)
       
            }
        );
    }
});
  

