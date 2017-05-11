// game logic

var corrects = 0;

function createYeahButton() {
    var b = $('<button/>',{
        text: 'Yeah',
        id: 'yeahBtn',
        class: 'btn-lg',
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
    setInterval(updateGradient,6);
}

function missedOne() {
    $('body').addClass('wrong');
}
