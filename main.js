// const app = new PIXI.Application({
//     view: document.getElementById('mycanvas'),
//     width: window.innerWidth, 
//     height: window.innerHeight
// });

// const sprite = app.stage.addChild(new PIXI.Sprite(PIXI.Texture.from('https://samplelib.com/lib/preview/mp4/sample-5s.mp4')));  
// sprite.x = 300;
// sprite.y = 300;
// sprite.anchor.x = 0.5;
// sprite.anchor.y = 0.5;

// sprite.interactive = true;
// sprite.buttonMode = true;

const video = document.createElement("video");
video.setAttribute('muted', 'muted');
video.setAttribute('playsinline', 'playsinline');
video.setAttribute('webkit-playsinline', 'webkit-playsinline');
video.setAttribute('preload', 'auto');
video.crossOrigin = "anonymous";
video.style.width = '400px';
video.style.height = '400px';
video.style.zIndex = '100';
video.style.pointerEvents = 'none';
video.style.position = 'absolute';
video.style.left = '0px';
video.style.top = '0px';
document.body.appendChild(video);

const url = 'cta.mp4';
const xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onload = function() {
    video.src = url;
    video.load();
};
xhr.send();

window.addEventListener('mousedown', () => video.play());
window.addEventListener('touchstart', () => video.play());
