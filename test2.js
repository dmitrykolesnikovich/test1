const video = document.createElement("video");
video.src = 'video.mp4';
video.setAttribute('playsinline', 'playsinline');
video.setAttribute('webkit-playsinline', 'webkit-playsinline');
video.crossOrigin = "anonymous";
video.style.width = '400px';
video.style.height = '400px';
video.style.zIndex = '100';
video.style.pointerEvents = 'none';
video.style.position = 'absolute';
video.style.left = '200px';
video.style.top = '0px';

document.body.appendChild(video);

window.addEventListener('mousedown', () => video.play());
window.addEventListener('touchstart', () => video.play());
