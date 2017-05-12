// game logic
var gradientInterval;
var corrects = 0;

function createYeahButton() {
    var b = $('<button/>',{
        text: 'Yeah',
        id: 'yeahBtn',
        class: 'btn-sm',
        click: function () {
            let time = context.currentTime;
            //yeah is between 43.5-45.5 and also 50-52
            if ((time >= 43.5 && time <= 45.5) || (time >= 50 && time <= 52)) {
                gotOne();
                corrects++;
                if (corrects > 1) {
                    console.log('you win!');
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
    $('body').addClass('wrong');
    clearInterval(gradientInterval);
    $('#game').css('background', 'orange');
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