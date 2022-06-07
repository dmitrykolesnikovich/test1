// 1.
// Screen.Pixi.js:415

// 2.
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
