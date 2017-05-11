window.onload = init;
var context, source1, source2;
var bufferLoader;

function init() {
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





