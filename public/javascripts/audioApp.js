window.onload = init;
var context, source1, source2;
var bufferLoader, t0, t1, timeToLoad;



function init() {
  // start initial timer
  t0 = performance.now();


    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();

    bufferLoader = new BufferLoader(
        context,
        ['../audio/shine.mp3','../audio/come_together.mp3'],
        finishedLoading
    );
    
    bufferLoader.load();
}



function finishedLoading(bufferList) {
    //create two sources and play both together
    source1 = context.createBufferSource();
    source2 = context.createBufferSource();
    source1.buffer = bufferList[0];
    source2.buffer = bufferList[1];

    source1.connect(context.destination);
    source2.connect(context.destination);

    //end initial timer
    var t1 = performance.now();
    console.log('time diff:');
    console.log(t1-t0);
    timeToLoad = ((t1-t0)/1000);
    source1.start(0);
    // source2.start(0);
}


//plays a buffer at a specified time
function playSound(buffer, time) {
  var source = context.createBufferSource();
  source.buffer = buffer;
  source.connect(context.destination);
  source.start(time);
}

function toggleContextState() {
  if(context.state === 'running') {
    context.suspend().then(function() {
      $('#toggleBtn').text('Resume context');
    });
  } else if(context.state === 'suspended') {
    context.resume().then(function() {
      $('#toggleBtn').text('Suspend context');
    });  
  }
}

// shows current time - context

function updateWithTime() {
    var p = $('<p/>',{
        text: '0 secs',
        id: 'time'
    });
    $('#game').append(p);
}

// updateWithTime();



// function thisTimer() {
//     setInterval(500, function(){
//         console.log('tick');
//         $('#time').text(context.currentTime);
//         timer();
//     });
    
// }

// function doit(){
//     console.log('tick');
//     $('#time').text(context.currentTime);
// }

// setInterval(doit, 500);

// thisTimer();




