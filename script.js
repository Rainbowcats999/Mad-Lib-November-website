let userName = prompt('WHAT IS YOUR NAME?')
let userQuest = prompt ('What is your quest?')
let userFavoriteColor = prompt('What is your favorite color?')
let swallowedAirspeed = prompt ('What is the speed of an uneven swallowed?')
let userAge = prompt ('What is your age?')
let userChosenName=prompt('Give a character name');
let userChosenVerb=prompt('Give a verb PRESENT TENSE like runs');
let userChosenLocation=prompt('Give a location, can be a country, state, anything');
let userChosenGender=prompt('Give your character a gender (EX: her, his, their, its)');
let userChosenGenderTwo=prompt('To match the chosen gender, give one again (EX: her, him, them, it)');
let userChosenGenderThree=prompt('Just one more... (EX: he, she, it, they)');
let userChosenSecondCharacter=prompt('Name another character');
let userChosenSecondCharacterAdjective=prompt('Give your second character an adjective/occupation or two');
let userChosenThirdCharacter=prompt('Give me a third character\'s name');
let userChosenThirdCharacterAdjective=prompt('Give me an adjective/occupation for the third character');
let userChosenSchool=prompt('Give me a school please in the (Name of school) (Elementary/Middle/High) School format ');
let userChosenAmount=prompt('Give me any number in the world');
let userChosenOrganizationName=prompt('Name me an organization, can be abbreviated');

let myStory =
`<p> Hello ${userName}! Answer me these questions <span class="loud">three</span> and the other side you'll see.</p>

<p> I see you have already answered, so your quest is to ${userQuest} </p>`

console.log (myStory)

document.getElementById('story').innerHTML = myStory
