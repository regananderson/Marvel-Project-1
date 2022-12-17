
const $description = $('#description');
const $photo = $('#photo');
const $story1 = $('#story1');
const $series1 = $('#series1');
const $event1 = $('#event1');
const $comic1 = $('#comic1');
const $input = $('input[type="text"]');

let characterData, userInput;

$("form").on("submit", handleGetData)

function handleGetData(event) {
  event.preventDefault()
  // calling preventDefault() on a 'submit' event will prevent a page refresh
  userInput = $input.val()
  
  
  $.ajax({
    url: "https://gateway.marvel.com:443/v1/public/characters?ts=7&apikey=9f52847cde39675d57b1d9a8259671c5&hash=d6875e49b66202cc04525cf5712e2f86&name=" + userInput,
  }).then(
    (data) => {
      characterData = data
      console.log(characterData)
      render(characterData)
      console.log("Name: " + characterData.data.results[0].name)
      console.log("Description:  " + characterData.data.results[0].description)

        
      console.log("event1: " + characterData.data.results[0].events.items[0].name)

      console.log("comic1: " + characterData.data.results[0].comics.items[0].name)
    
      console.log("story1: " + characterData.data.results[0].stories.items[0].name)
      
      console.log("series1:" + characterData.data.results[0].series.items[0].name)
      
    },
    (error) => {
      console.log("bad request", error)
    })
    
     $input.val('');
}

function render() {
    //hulk render
    let description = characterData.data.results[0].description;
        descriptionArray = description.split(' ');
        const index = description.indexOf('Hulk');
        console.log(descriptionArray)
        descriptionArray.splice(27, 1, "_____")
        descriptionArray.splice(37, 1, "_____")
        descriptionArray.splice(42, 1, "_____")
        descriptionHint = descriptionArray.join(' ');
        console.log(descriptionHint)

  $description.text("Description: " + descriptionHint)
  //$description.append( '<img src="http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg" alt="Hulk" />')
  $story1.text("story1-" + characterData.data.results[0].stories.items[0].name)
  $series1.text("series1-" + characterData.data.results[0].series.items[0].name)
  $event1.text("event1-" + characterData.data.results[0].events.items[0].name)
  $comic1.text("comic1-" + characterData.data.results[0].comics.items[0].name)
  
}

function render() {
    //iron man render
    let description = characterData.data.results[0].description;
        descriptionArray = description.split(' ');
        console.log(descriptionArray)
        descriptionArray.splice(51, 2, "_____")
       
        descriptionHint = descriptionArray.join(' ');
        console.log(descriptionHint)

  $description.text("Description: " + descriptionHint)
  //$description.append( '<img src="http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg" alt="Iron Man" />')
  $story1.text("story1-" + characterData.data.results[0].stories.items[0].name)
  $series1.text("series1-" + characterData.data.results[0].series.items[0].name)
  $event1.text("event1-" + characterData.data.results[0].events.items[0].name)
  $comic1.text("comic1-" + characterData.data.results[0].comics.items[0].name)
  
}

function render() {
    //Captain America render
    let description = characterData.data.results[0].description;
        descriptionArray = description.split(' ');
   
        console.log(descriptionArray)
        descriptionArray.splice(33, 2, "_____")

        descriptionHint = descriptionArray.join(' ');
        console.log(descriptionHint)

  $description.text("Description: " + descriptionHint)
 
  //$description.append( '<img src="https://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087.jpg" alt="Captain America" />')
  $story1.text("story1-" + characterData.data.results[0].stories.items[0].name)
  $series1.text("series1-" + characterData.data.results[0].series.items[0].name)
  $event1.text("event1-" + characterData.data.results[0].events.items[0].name)
  $comic1.text("comic1-" + characterData.data.results[0].comics.items[0].name)
  
}

