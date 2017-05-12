// var analyser;
// var distortionper;
// var gainNode;
// var biquadFilterlter;
// var convolverr;

// // connect the nodes together

//  function distort(source) {

//     analyser = context.createAnalyser();
//     distortion = context.createWaveShaper();
//     gainNode = context.createGain();
//     biquadFilter = context.createBiquadFilter();
//     convolver = context.createConvolver();

//     source.connect(analyser);
//     analyser.connect(distortion);
//     distortion.connect(biquadFilter);
//     biquadFilter.connect(convolver);
//     convolver.connect(gainNode);
//     gainNode.connect(context.destination);

//     // manipulate the biquad filter

//     biquadFilter.type = 'lowshelf';
//     biquadFilter.frequency.value = 1000;
//     biquadFilter.gain.value = 25;

//  }



// var distortion = context.createWaveShaper();

// function makeDistortionCurve(amount) {
//     var k = typeof amount === 'number' ? amount : 50,
//         n_samples = 44100,
//         curve = new Float32Array(n_samples),
//         deg = Math.PI / 180,
//         i = 0,
//         x;
//     for ( ; i< n_samples; i++) {
//         x = i * 2 / n_samples - 1;
//         curve[i] = (3+k) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
//     }
//     return curve;
// }

// distortion.curve = makeDistortionCurve(400);
// distortion.oversample = '4x';