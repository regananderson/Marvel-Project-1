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
},
{
    id: 3,
    //q: 'Select the correct character below:',
    c: 'Thanos',
    a: [{text: "Thanos", isCorrect: true },
        {text: "Doctor Octopus", isCorrect: false},
        {text: "Doctor Doom", isCorrect: false},
        {text: "Green Goblin", isCorrect: false },
    ]
},
{
    id: 4,
    //q: 'Select the correct character below:',
    c: 'Storm',
    a: [{text: "Black Widow", isCorrect: false },
        {text: "Captain Marvel", isCorrect: false},
        {text: "Storm", isCorrect: true},
        {text: "Gamora", isCorrect: false },
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
             },
             $.ajax({
                // url: "https://gateway.marvel.com:443/v1/public/characters?ts=7&apikey=9f52847cde39675d57b1d9a8259671c5&hash=d6875e49b66202cc04525cf5712e2f86&name=Iron%20Man", 
                url: "https://gateway.marvel.com:443/v1/public/characters?ts=7&apikey=9f52847cde39675d57b1d9a8259671c5&hash=d6875e49b66202cc04525cf5712e2f86&name=" + questions[3].c, 
           
               }).then(
                 (data) => {
                   
                   thanosData = data
                   
                   console.log(thanosData)
                  // captainAmericarender(captainAmericaData)    
             }), (error) => {
                   console.log("bad request", error)

  },
  $.ajax({
    // url: "https://gateway.marvel.com:443/v1/public/characters?ts=7&apikey=9f52847cde39675d57b1d9a8259671c5&hash=d6875e49b66202cc04525cf5712e2f86&name=Iron%20Man", 
    url: "https://gateway.marvel.com:443/v1/public/characters?ts=7&apikey=9f52847cde39675d57b1d9a8259671c5&hash=d6875e49b66202cc04525cf5712e2f86&name=" + questions[4].c, 

   }).then(
     (data) => {
       
       stormData = data
       
       console.log(stormData)
      // captainAmericarender(captainAmericaData)    
 }), (error) => {
       console.log("bad request", error)


 }


  
  function hulkrender() {
      //hulk render - need to correct
      let description = hulkData.data.results[0].description;
          descriptionArray = description.split(' ');
         console.log(descriptionArray)
           descriptionArray.splice(15, 3, "_____")
           descriptionArray.splice(24, 2, "_____.")
           descriptionArray.splice(33, 2, "_____")
           descriptionArray.splice(37, 2, "_____")

          descriptionHint = descriptionArray.join(' ');
          //console.log(descriptionHint)
          $question.text(`Q 1/5:  ${descriptionHint}`)
    
  }


  function ironManrender() {
      //iron man render
      let description = ironManData.data.results[0].description;
          descriptionArray = description.split(' ');
          console.log(descriptionArray)
          descriptionArray.splice(13, 2, "_____")
          descriptionArray.splice(35, 1, "_____")
          descriptionArray.splice(50, 2, "_____")
         
          descriptionHint = descriptionArray.join(' ');
          //console.log(descriptionHint)
          $question.text(`Q 2/5:  ${descriptionHint}`)
    console.log(descriptionHint)
 

}

function captainAmericarender() {
    let description = captainAmericaData.data.results[0].description;
        descriptionArray = description.split(' ');
        console.log(descriptionArray)
        descriptionArray.splice(10, 2, "_____")
        descriptionArray.splice(32, 2, "_____")
       
        descriptionHint = descriptionArray.join(' ');
        //console.log(descriptionHint)
        $question.text(`Q 3/5:  ${descriptionHint}`)
        
  console.log(descriptionHint)
  // //$description.append( '<img src="http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg" alt="Iron Man" />')
}
function thanosrender() {
    //iron man render
    let description = thanosData.data.results[0].description;
        descriptionArray = description.split(' ');
        console.log(descriptionArray)
        descriptionArray.splice(3, 1, "_____")
       
        descriptionHint = descriptionArray.join(' ');
        //console.log(descriptionHint)
        $question.text(`Q 4/5:  ${descriptionHint}`)
        
  console.log(descriptionHint)
}
function stormrender() {
    //iron man render
    let description = stormData.data.results[0].description;
        descriptionArray = description.split(' ');
        console.log(descriptionArray)
        descriptionArray.splice(0, 2, "_____")
       
        descriptionHint = descriptionArray.join(' ');
        //console.log(descriptionHint)
        $question.text(`Q 5/5:  ${descriptionHint}`)
        
  console.log(descriptionHint)
}

function iterate(id) {
 
    var result = document.getElementsByClassName('result');
    result[0].innerText = '';

   // const question = document.getElementById('question');
    // let numCorrect = document.getElementsByClassName('right');
    // let numWrong = document.getElementsByClassName('wrong');
    //    let numCorrect = 0;
    //    let numWrong = 0;


    
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
        //numCorrect++;
        //result[0].innerHTML = `${numCorrect++} out of ${questions.length} correct`;

    }else{
        result[0].innerHTML = 'False';
        result[0].style.color = 'red';
        //numWrong++;
        //result[0].innerHTML = `${numWrong++} out of ${questions.length} incorrect`;

    }
       //selected = op1.value;
       //result[0].innerHTML = `${numCorrect++} correct, ${numWrong++} incorrect`

    })
    op2.addEventListener('click',function (evt){
        // evt.preventDefault()
        //op1.style.backgroundColor = "blue";
        //p2.style.backgroundColor = "yellow";
        selected = op2.value;
        if (selected == 'true'){
            result[0].innerHTML = 'True';
            result[0].style.color = 'green';
            //numCorrect++;
            //result[0].innerHTML = `${numCorrect++} out of ${questions.length} correct`  ;
        }else{
            result[0].innerHTML = 'False';
            result[0].style.color = 'red';
            //numWrong++;
            //result[0].innerHTML = `${numWrong++} out of ${questions.length} incorrect`
        }
        //result[0].innerHTML = `${numCorrect++} correct, ${numWrong++} incorrect`
     })
     op3.addEventListener('click',function (evt){
       // op3.style.backgroundColor = "yellow";
        selected = op3.value;
        if (selected == 'true'){
            result[0].innerHTML = 'True';
            result[0].style.color = 'green';
            //numCorrect++;
            //result[0].innerHTML = `${numCorrect++} out of ${questions.length} correct`;

        }else{
            result[0].innerHTML = 'False';
            result[0].style.color = 'red';
            //numWrong++;
            //result[0].innerHTML = `${numWrong++} out of ${questions.length} incorrect`

        }
        //result[0].innerHTML = `${numCorrect++} correct, ${numWrong++} incorrect`

     })
     op4.addEventListener('click',function (evt){
        //op4.style.backgroundColor = "yellow";
        selected = op4.value;
        if (selected == 'true'){
            result[0].innerHTML = 'True';
            result[0].style.color = 'green';
            //numCorrect++;
            //result[0].innerHTML = `${numCorrect++} out of ${questions.length} correct`;

        }else{
            result[0].innerHTML = 'False';
            result[0].style.color = 'red';
            //numWrong++;
           // result[0].innerHTML = `${numWrong++} out of ${questions.length} incorrect`

        }
        //result[0].innerHTML = `${numCorrect++} correct, ${numWrong++} incorrect`

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
        hulkrender();
   

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
        //console.log(captainAmericarender())
        captainAmericarender();
        
    }if (id === 3) {
        // id++;
        // iterate(id);
        //console.log("id is two");
        //console.log(captainAmericarender())
        thanosrender();
        
    }if (id === 4) {
        // id++;
        // iterate(id);
        //console.log("id is two");
        //console.log(captainAmericarender())
        stormrender();
        
    }
});

 }
  });



