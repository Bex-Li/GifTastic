console.log("hello");

var animals = [
    "DOGS",
    "CATS", 
    "PIGS",
    "CHICKENS"
]

//create for loop for button
for (var i = 0; i < animals.length; i++) {
    var button = $('<button/>').text(animals[i]);
    button.addClass( "animalButtons" );
    $(".animalButDiv").append(button)
    //var parent = $('<tr><td></td></tr>').children().append(test).end();
}

$(document).on("click", ".animalButtons", function(event) {
    console.log("buttons!");
    console.log(event.target.innerText);
    //use this variable event.target.innerText with the AJAX request so the AJAX can send to the GIPHY API using selectAnimal
    var selectAnimal = event.target.innerText 

    
});

