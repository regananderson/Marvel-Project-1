$(document).ready(function () {

    const $options = $('.option-container');
    $options.hide();
    const $hintBody = $('.question-container');
    const $begin = $('.begin');
    const $next = $('.next');
    const $question = $('#question');
    const $h2 = $('h2');

    //Character object
    const character = [{
            id: 0,
            c: 'Hulk',
            a: [{
                    text: 'Black Panther',
                    isCorrect: false
                },
                {
                    text: 'Spider-Man',
                    isCorrect: false
                },
                {
                    text: 'Thor',
                    isCorrect: false
                },
                {
                    text: 'Hulk',
                    isCorrect: true
                },
            ]

        },
        {
            id: 1,
            c: 'Iron Man',
            a: [{
                    text: 'Professor X',
                    isCorrect: false,
                    isSelected: false
                },
                {
                    text: 'Iron Man',
                    isCorrect: true
                },
                {
                    text: 'Doctor Strange',
                    isCorrect: false
                },
                {
                    text: 'Wolverine',
                    isCorrect: false
                },
            ]

        },
        {
            id: 2,
            c: 'Captain America',
            a: [{
                    text: 'Hawkeye',
                    isCorrect: false
                },
                {
                    text: 'Deadpool',
                    isCorrect: false
                },
                {
                    text: 'Captain America',
                    isCorrect: true
                },
                {
                    text: 'Ant-Man',
                    isCorrect: false
                },
            ]
        },
        {
            id: 3,
            c: 'Thanos',
            a: [{
                    text: 'Thanos',
                    isCorrect: true
                },
                {
                    text: 'Doctor Octopus',
                    isCorrect: false
                },
                {
                    text: 'Doctor Doom',
                    isCorrect: false
                },
                {
                    text: 'Green Goblin',
                    isCorrect: false
                },
            ]
        },
        {
            id: 4,
            c: 'Storm',
            a: [{
                    text: 'Black Widow',
                    isCorrect: false
                },
                {
                    text: 'Captain Marvel',
                    isCorrect: false
                },
                {
                    text: 'Storm',
                    isCorrect: true
                },
                {
                    text: 'Gamora',
                    isCorrect: false
                },
            ]

        },
        {
            id: 5,
            c: 'test',
            a: [{
                    text: 'A',
                    isCorrect: false
                },
                {
                    text: 'B',
                    isCorrect: false
                },
                {
                    text: 'C',
                    isCorrect: true
                },
                {
                    text: 'D',
                    isCorrect: false
                },
            ]
        }

    ]

    var start = true;




    $begin.on('click', handleGetData)

    function handleGetData(event) {
        event.preventDefault()
        $options.show();

        $.ajax({
                url: 'https://gateway.marvel.com:443/v1/public/characters?ts=7&apikey=9f52847cde39675d57b1d9a8259671c5&hash=d6875e49b66202cc04525cf5712e2f86&name=' + character[0].c,

            }).then(
                (data) => {

                    hulkData = data

                    console.log(hulkData)
                    hulkrender(hulkData)
                }), (error) => {
                console.log('bad request', error)
            },

            $.ajax({
                url: 'https://gateway.marvel.com:443/v1/public/characters?ts=7&apikey=9f52847cde39675d57b1d9a8259671c5&hash=d6875e49b66202cc04525cf5712e2f86&name=' + character[1].c,

            }).then(
                (data) => {
                    ironManData = data
                    console.log(ironManData)
                }), (error) => {
                console.log("bad request", error)
            },
            $.ajax({
                url: 'https://gateway.marvel.com:443/v1/public/characters?ts=7&apikey=9f52847cde39675d57b1d9a8259671c5&hash=d6875e49b66202cc04525cf5712e2f86&name=' + character[2].c,

            }).then(
                (data) => {
                    captainAmericaData = data
                    console.log(captainAmericaData)
                }), (error) => {
                console.log('bad request', error)
            },
            $.ajax({
                url: 'https://gateway.marvel.com:443/v1/public/characters?ts=7&apikey=9f52847cde39675d57b1d9a8259671c5&hash=d6875e49b66202cc04525cf5712e2f86&name=' + character[3].c,

            }).then(
                (data) => {
                    thanosData = data
                    console.log(thanosData)
                }), (error) => {
                console.log("bad request", error)

            },
            $.ajax({
                url: 'https://gateway.marvel.com:443/v1/public/characters?ts=7&apikey=9f52847cde39675d57b1d9a8259671c5&hash=d6875e49b66202cc04525cf5712e2f86&name=' + character[4].c,
            }).then(
                (data) => {
                    stormData = data
                    console.log(stormData)
                }), (error) => {
                console.log('bad request', error)


            }


        function hulkrender() {
            let description = hulkData.data.results[0].description;
            descriptionArray = description.split(' ');
            console.log(descriptionArray)
            descriptionArray.splice(15, 3, '_____')
            descriptionArray.splice(24, 2, '_____.')
            descriptionArray.splice(33, 2, '_____')
            descriptionArray.splice(37, 2, '_____')

            descriptionHint = descriptionArray.join(' ');
            $question.text(`Q 1/5:  ${descriptionHint}`)

        }


        function ironManrender() {
            let description = ironManData.data.results[0].description;
            descriptionArray = description.split(' ');
            console.log(descriptionArray)
            descriptionArray.splice(13, 2, '_____')
            descriptionArray.splice(35, 1, '_____')
            descriptionArray.splice(50, 2, '_____')

            descriptionHint = descriptionArray.join(' ');

            $question.text(`Q 2/5:  ${descriptionHint}`)
            console.log(descriptionHint)


        }

        function captainAmericarender() {
            let description = captainAmericaData.data.results[0].description;
            descriptionArray = description.split(' ');
            console.log(descriptionArray)
            descriptionArray.splice(10, 2, '_____')
            descriptionArray.splice(32, 2, '_____')

            descriptionHint = descriptionArray.join(' ');

            $question.text(`Q 3/5:  ${descriptionHint}`)

            console.log(descriptionHint)
        }

        function thanosrender() {

            let description = thanosData.data.results[0].description;
            descriptionArray = description.split(' ');
            console.log(descriptionArray)
            descriptionArray.splice(3, 1, '_____')

            descriptionHint = descriptionArray.join(' ');

            $question.text(`Q 4/5:  ${descriptionHint}`)

            console.log(descriptionHint)
        }

        function stormrender() {
            let description = stormData.data.results[0].description;
            descriptionArray = description.split(' ');
            console.log(descriptionArray)
            descriptionArray.splice(0, 2, '_____')

            descriptionHint = descriptionArray.join(' ');
            $question.text(`Q 5/5:  ${descriptionHint}`)

            console.log(descriptionHint)


        }

        function iterate(id) {

            let $result = $('.result');
            $result.text('');
            numCorrect = 0;
            var selected = '';

            //getting question options

            $choice1 = $('#choice1')
            $choice2 = $('#choice2')
            $choice3 = $('#choice3')
            $choice4 = $('#choice4')


            //adding text
            $choice1.text(character[id].a[0].text);
            $choice2.text(character[id].a[1].text);
            $choice3.text(character[id].a[2].text);
            $choice4.text(character[id].a[3].text);


            //providing true or false to the options
            $choice1.val(character[id].a[0].isCorrect);
            $choice2.val(character[id].a[1].isCorrect);
            $choice3.val(character[id].a[2].isCorrect);
            $choice4.val(character[id].a[3].isCorrect);

            //adding event listeners for question choices
            $choice1.on('click', function (evt) {
                selected = $choice1.val();
                if (selected == 'true') {
                    $result.css('color', 'green');
                    numCorrect = numCorrect + 1;
                    $result.html(`TRUE - total points: ${numCorrect}`);

                } else {
                    $result.html('False');
                    $result.css('color', 'red');
                }
                console.log('points' + numCorrect)
            })
            $choice2.on('click', function (evt) {
                selected = $choice2.val();
                if (selected == 'true') {
                    $result.css('color', 'green');
                    numCorrect = numCorrect + 1;
                    $result.html(`TRUE - total points: ${numCorrect}`);
                } else {
                    $result.html('False');
                    $result.css('color', 'red');
                }
            })
            $choice3.on('click', function (evt) {
                selected = $choice3.val();
                if (selected == 'true') {
                    $result.css('color', 'green');
                    numCorrect = numCorrect + 1;
                    $result.html(`TRUE - total points: ${numCorrect}`);
                } else {
                    $result.html('False');
                    $result.css('color', 'red');

                }
            })
            $choice4.on('click', function (evt) {
                selected = $choice4.val();
                if (selected == 'true') {
                    $result.css('color', 'green');
                    numCorrect = numCorrect + 1;
                    $result.html(`TRUE - total points: ${numCorrect}`);
                } else {
                    $result.html('False');
                    $result.css('color', 'red');
                }
            })
            console.log("TOTAL:" + numCorrect)
        }

        if (start) {
            iterate('0');
        }

        //adding next button
        var id = 0;

        $next.on('click', function () {
            start = false
            id++
            iterate(id)
            console.log(id);

            if (id === 0) {

                console.log(hulkrender())
                //hulkrender();
            }
            if (id === 1) {
                $begin.hide();
                ironManrender();
            }
            if (id === 2) {
                captainAmericarender();
            }
            if (id === 3) {
                thanosrender();
            }
            if (id === 4) {
                stormrender();
                $next.text('END');
            }
            if (id === 5) {
                $options.hide();
                $hintBody.hide();
                $next.hide();
                $h2.html(`Thanks for playing!`)
            }

        });

    }
});