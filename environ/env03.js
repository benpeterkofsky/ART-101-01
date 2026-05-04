let environmentTitle = "Benji's Snake Aquarium";
let environmentElements = ["snake", "fish", "a rock"];   

let mainEntity = {
    name: "snake"
    type: "soft border",
    mood: "nervous",
    isMoving: false,
      favoriteElement: environmentElements[1]
};

let elem = document.querySelector (."fish");"
elem.style.border = "5px solid rgb(32, 38, 35)";
let count = 0;
let buttonCreature = {
    name: "needy-button",
    species: "interface creature",
    favoriteFood: "clicks",
    moods: ["sleepy", "nervous", "glowing", "dramatic", "hopeful", "confused"]
};
    
$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;
    let currentMood = buttonCreature.moods[arrayPosition];
    let message = "<p>You clicked me" + count +"times.</p>";

    message = message +"<p> My current mood is " + currentMood +
        "I am a" +" " +  buttonCreature.name +".</p>";
    

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
});
