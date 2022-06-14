const video = new JSMpeg.Player('cta.ts',  {
    loop: false,
    autoplay: false,
    // audio: false, //2020.04.07 видео jsmpeg вместе с аудио глючит - быстро проигрывается в хроме и сафари вначале (поэтому грузим аудио отдельно)
    // disableGl: !!Settings['force-canvas-renderer'],
    disableWebAssembly: true,
    // progressive: !asset["base64"],
    // throttled: !!asset["throttled"],
    chunkSize: (512 * 1024),
    decodeFirstFrame: true,
    onSourceEstablished: () => console.log('onSourceEstablished'),
    onSourceCompleted: () => {
        console.log('onSourceCompleted');
        video.stop();
        setTimeout(() => asset.video.duration = asset.video.video.timestamps.length / asset.video.video.frameRate, 0);
    }
});

// ts conversion
// ffmpeg -i /Users/dmitrykolesnikovich/workspace/m-s-saatchi-bingo/Video/cta.mp4 -f mpegts -codec:v mpeg1video -s 1080x1920 -b:v 1500k -r 30 -bf 0 -codec:a mp2 -ar 44100 -ac 1 -b:a 128k /Users/dmitrykolesnikovich/workspace/m-s-saatchi-bingo/Video/cta.ts.backup