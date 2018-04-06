console.log("hello");

var animals = [
    "",
    "dogs",
    "cats",
    "pigs",
    "chickens"
];

//create for loop for button
for (var i = 0; i < animals.length; i++) {
    var button = $('<button/>').text(animals[i]);
    button.addClass("animalButtons");
    $(".animalButDiv").append(button);
    //var parent = $('<tr><td></td></tr>').children().append(test).end();
}

$(document).on("click", ".animalButtons", function (event) {
    console.log("buttons!");
    console.log(event.target.innerText);
    var selectAnimal = event.target.innerText;
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=5&q=";
    queryURL += selectAnimal

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // console.log('response =====>', response)
        // console.log('response.data =====>', response.data);

        response.data.forEach(function (gifObject) {
            var img = $('<img>')

            img.attr('src', gifObject.images.fixed_height.url)

            $('#gif-holder').prepend(img)
        })
    });
});

$("#pickerButton").on("click", function(){
    var inputVal = $("#newInput").val().trim();
    var button = $('<button/>').text(inputVal);
    button.addClass("animalButtons");
    $(".animalButDiv").append(button);
})



