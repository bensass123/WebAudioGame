// game logic
var gradientInterval;
var corrects = 0;

// data
// collective soul - shine
var yeahs = [
    41.5, 48, 118, 125, 208, 215
];

var whoahs = [
    52, 58, 64, 72, 129, 135, 142, 148
];


function checkCurrentTimeYeahs(time) {

    var actualTime = time - timeToLoad;

    for (i in yeahs) {
        if ( (yeahs[i] - 1.5) <= actualTime && actualTime <= (yeahs[i] + 1.5) ){
            return true;
        }
    }

    return false;
}

function checkCurrentTimeWhoahs(time) {

    var actualTime = time - timeToLoad;
    console.log(actualTime);

    for (i in whoahs) {
        if ( (whoahs[i] - 1.5) <= actualTime && actualTime <= (whoahs[i] + 1.5) ){
            return true;
        }
    }

    return false;
}


function createYeahButton() {
    var b = $('<button/>',{
        text: 'Yeah',
        id: 'yeahBtn',
        class: 'btn-sm',
        click: function () {
            let time = context.currentTime;
            //yeah is between 43.5-45.5 and also 50-52
            if (checkCurrentTimeYeahs(time)) {
                gotOne();
                corrects++;
                if (corrects >= 4) {
                    console.log('you win!');
                    win();
                }
                
                console.log('good');
            } else {
                missedOne();
                console.log('lose');
            }
            
        }
    } )
    $('#game').append(b);
}

createYeahButton();


function createWhoah() {
    var b = $('<button/>',{
        text: 'Whoah',
        id: 'whoahBtn',
        class: 'btn-sm',
        click: function () {
            let time = context.currentTime;
            //yeah is between 43.5-45.5 and also 50-52
            if (checkCurrentTimeWhoahs(time)) {
                gotOne();
                corrects++;
                if (corrects >= 4) {
                    console.log('you win!');
                    win();
                }
                
                console.log('good');
            } else {
                missedOne();
                console.log('lose');
            }
            
        }
    } )
    $('#game').append(b);
}

createWhoah();

function createStopButton() {
    var b = $('<button/>',{
        text: 'Stop',
        id: 'stopBtn',
        class: 'btn-sm',
        click: function () {
            source1.stop();
        }
    } )
    $('#game').append(b);
}

createStopButton();

function gotOne() {
    $('body').removeClass('wrong');
     gradientInterval = setInterval(updateGradient,1);
}

function missedOne() {
    shakeGame();
    clearInterval(gradientInterval);
    setTimeout(()=>{
        $('body').addClass('wrong');
        $('#game').css('background', 'orange');
    }, 600)
    
}

function win(){
    //make game div transparent
    $('#game').css('opacity', '0.5');
    clearInterval(gradientInterval);
    gradientInterval = setInterval(updateGradient,1);
    //method from strobe.js to strobe
    strobe();
}

function createToggleButton() {
    var b = $('<button/>',{
        text: 'Toggle',
        id: 'toggleBtn',
        class: 'btn-lg',
        click: function () {
            toggleContextState();
        }
    } )
    $('#game').append(b);
}

function shakeGame() {
     $('body').addClass('noScroll');
    $("#game").effect( "shake" );
    setTimeout(()=>{
        $('body').removeClass('noScroll');},
        800);
}