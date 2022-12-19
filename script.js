$(document).ready(function (){
const options = document.getElementsByClassName("option-container")[0];
options.style.display = 'none';



const questions = [{
    id: 0,
    //q: 'Select the correct character below:',
    c: "Hulk",
    a: [{text: "Black Panther", isCorrect: false},
        {text: "Spider-Man", isCorrect: false},
        {text: "Thor", isCorrect: false},
        {text: "Hulk", isCorrect: true},
    ]

},
{
    id: 1,
    //q: 'Select the correct character below:',
    c: "Iron Man",
    a: [ {text: "Professor X", isCorrect: false, isSelected: false},
         {text: "Iron Man", isCorrect: true},
        {text: "Doctor Strange", isCorrect: false},
        {text: "Wolverine", isCorrect: false},
    ]

},
{
    id: 2,
    //q: 'Select the correct character below:',
    c: 'Captain America',
    a: [{text: "Hawkeye", isCorrect: false },
        {text: "Deadpool", isCorrect: false},
        {text: "Captain America", isCorrect: true},
        {text: "Ant-Man", isCorrect: false },
]
}
]

var start = true;

// const $description = $('#description');
// const $photo = $('#photo');
// const $story1 = $('#story1');
// const $series1 = $('#series1');
// const $event1 = $('#event1');
// const $comic1 = $('#comic1');
// const $input = $('input[type="text"]');
const $question = $('#question')
  


    $(".begin").on("click", handleGetData)
function handleGetData(event) {
     event.preventDefault()
     options.style.display = '';



     
     // calling preventDefault() on a 'submit' event will prevent a page refresh
    //userInput = $input.val()
    $.ajax({
     // url: "https://gateway.marvel.com:443/v1/public/characters?ts=7&apikey=9f52847cde39675d57b1d9a8259671c5&hash=d6875e49b66202cc04525cf5712e2f86&name=Iron%20Man", 
     url: "https://gateway.marvel.com:443/v1/public/characters?ts=7&apikey=9f52847cde39675d57b1d9a8259671c5&hash=d6875e49b66202cc04525cf5712e2f86&name=" + questions[0].c, 

    }).then(
      (data) => {
        
        hulkData = data
        
        console.log(hulkData)
        hulkrender(hulkData)    
  }), (error) => {
        console.log("bad request", error)
      },
      
      // $input.val('');
       $.ajax({
        // url: "https://gateway.marvel.com:443/v1/public/characters?ts=7&apikey=9f52847cde39675d57b1d9a8259671c5&hash=d6875e49b66202cc04525cf5712e2f86&name=Iron%20Man", 
        url: "https://gateway.marvel.com:443/v1/public/characters?ts=7&apikey=9f52847cde39675d57b1d9a8259671c5&hash=d6875e49b66202cc04525cf5712e2f86&name=" + questions[1].c, 
   
       }).then(
         (data) => {
           
           ironManData = data
           
           console.log(ironManData)
           //ironManrender(ironManData)    
     }), (error) => {
           console.log("bad request", error)
         },
         $.ajax({
            // url: "https://gateway.marvel.com:443/v1/public/characters?ts=7&apikey=9f52847cde39675d57b1d9a8259671c5&hash=d6875e49b66202cc04525cf5712e2f86&name=Iron%20Man", 
            url: "https://gateway.marvel.com:443/v1/public/characters?ts=7&apikey=9f52847cde39675d57b1d9a8259671c5&hash=d6875e49b66202cc04525cf5712e2f86&name=" + questions[2].c, 
       
           }).then(
             (data) => {
               
               captainAmericaData = data
               
               console.log(captainAmericaData)
              // captainAmericarender(captainAmericaData)    
         }), (error) => {
               console.log("bad request", error)
             }
  }




  
  function hulkrender() {
      //hulk render - need to correct
      let description = hulkData.data.results[0].description;
          descriptionArray = description.split(' ');
         console.log(descriptionArray)
          descriptionArray.splice(15, 3, "_____")
          descriptionArray.splice(25, 1, "_____")
          descriptionArray.splice(35, 1, "_____")
          descriptionArray.splice(40, 1, "_____")

          descriptionHint = descriptionArray.join(' ');
          //console.log(descriptionHint)
          $question.text(descriptionHint)
    console.log(descriptionHint)
    // $description.text("Description: " + descriptionHint)
    // //$description.append( '<img src="http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg" alt="Iron Man" />')
    // $story1.text("story1-" + characterData.data.results[0].stories.items[0].name)
    // $series1.text("series1-" + characterData.data.results[0].series.items[0].name)
    // $event1.text("event1-" + characterData.data.results[0].events.items[0].name)
    // $comic1.text("comic1-" + characterData.data.results[0].comics.items[0].name)
    
  }


  function ironManrender() {
      //iron man render
      let description = ironManData.data.results[0].description;
          descriptionArray = description.split(' ');
          console.log(descriptionArray)
          descriptionArray.splice(13, 2, "_____")
          descriptionArray.splice(35, 2, "_____")
          descriptionArray.splice(49, 2, "_____")
         
          descriptionHint = descriptionArray.join(' ');
          //console.log(descriptionHint)
          $question.text(descriptionHint)
    console.log(descriptionHint)
    // $description.text("Description: " + descriptionHint)
    //$description.append( '<img src="http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg" alt="Iron Man" />')
    // $story1.text("story1-" + characterData.data.results[0].stories.items[0].name)
    // $series1.text("series1-" + characterData.data.results[0].series.items[0].name)
    // $event1.text("event1-" + characterData.data.results[0].events.items[0].name)
    // $comic1.text("comic1-" + characterData.data.results[0].comics.items[0].name)
    

}

function captainAmericarender() {
    //iron man render
    let description = captainAmericaData.data.results[0].description;
        descriptionArray = description.split(' ');
        console.log(descriptionArray)
        descriptionArray.splice(10, 2, "_____")
        descriptionArray.splice(33, 2, "_____")
       
        descriptionHint = descriptionArray.join(' ');
        //console.log(descriptionHint)
        $question.text(descriptionHint)
        
  console.log(descriptionHint)
  // $description.text("Description: " + descriptionHint)
  // //$description.append( '<img src="http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg" alt="Iron Man" />')
  // $story1.text("story1-" + characterData.data.results[0].stories.items[0].name)
  // $series1.text("series1-" + characterData.data.results[0].series.items[0].name)
  // $event1.text("event1-" + characterData.data.results[0].events.items[0].name)
  // $comic1.text("comic1-" + characterData.data.results[0].comics.items[0].name)
  

}



function iterate(id) {
 
    var result = document.getElementsByClassName('result');
    result[0].innerText = '';

    const question = document.getElementById('question');
    
    
   // question.innerText = questions[id].q;


    //getting options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

    //adding text
    op1.innerText = questions[id].a[0].text;
    op2.innerText = questions[id].a[1].text;
    op3.innerText = questions[id].a[2].text;
    op4.innerText = questions[id].a[3].text;

    //providing true or false to the options
    op1.value = questions[id].a[0].isCorrect;
    op2.value = questions[id].a[1].isCorrect;
    op3.value = questions[id].a[2].isCorrect;
    op4.value = questions[id].a[3].isCorrect;
 
    var selected = '';
 
    //seleection for op1
    
  op1.addEventListener('click',function (evt){
       // evt.preventDefault()
       //op1.style.backgroundColor = "yellow";
       selected = op1.value;
       if (selected == 'true'){
        result[0].innerHTML = 'True';
        result[0].style.color = 'green';

    }else{
        result[0].innerHTML = 'False';
        result[0].style.color = 'red';
    }
       selected = op1.value;
    })
    op2.addEventListener('click',function (evt){
        // evt.preventDefault()
        //op1.style.backgroundColor = "blue";
        //p2.style.backgroundColor = "yellow";
        selected = op2.value;
        if (selected == 'true'){
            result[0].innerHTML = 'True';
            result[0].style.color = 'green';
        }else{
            result[0].innerHTML = 'False';
            result[0].style.color = 'red';
        }
     })
     op3.addEventListener('click',function (evt){
       // op3.style.backgroundColor = "yellow";
        selected = op3.value;
        if (selected == 'true'){
            result[0].innerHTML = 'True';
            result[0].style.color = 'green';
        }else{
            result[0].innerHTML = 'False';
            result[0].style.color = 'red';
        }
     })
     op4.addEventListener('click',function (evt){
        //op4.style.backgroundColor = "yellow";
        selected = op4.value;
        if (selected == 'true'){
            result[0].innerHTML = 'True';
            result[0].style.color = 'green';
        }else{
            result[0].innerHTML = 'False';
            result[0].style.color = 'red';
        }
     })



}
    
if (start) {
    iterate('0');
}




//adding next button
const next = document.getElementsByClassName('next')[0];
//const options = document.getElementsByClassName("option-container")[0];
 //options.style.display = 'none';
    
var id = 0;


next.addEventListener('click', function(){
    
    start = false;
    id++
    iterate(id)
    console.log(id);
    //options.style.display = 'none';
    
    if (id === 0) {
        // id++;
        // iterate(id);
        //console.log("id is zero");
        console.log(hulkrender())
        //hulkrender();
   

    }if (id === 1) {
        // id++;
        // iterate(id);
       // console.log("id is one");
        //console.log(ironManrender())
        ironManrender();
    }if (id === 2) {
        // id++;
        // iterate(id);
        //console.log("id is two");
        console.log(captainAmericarender())
        captainAmericarender();
        
    }
});


  });



