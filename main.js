const app = new PIXI.Application({
    view: document.getElementById('mycanvas'),
    width: window.innerWidth, 
    height: window.innerHeight
});

// image
const sprite1 = appendSprite('icon.png', 100, 300);

// video
const sprite2 = app.stage.addChild(new PIXI.Sprite(PIXI.Texture.from('cta.mp4')));  
sprite2.x = 300;
sprite2.y = 300;
sprite2.anchor.x = 0.5;
sprite2.anchor.y = 0.5;
sprite2.scale.set(0.1, 0.1);
const video = sprite2.texture.baseTexture.source;

sprite2.interactive = true;
sprite2.on('pointerdown', function (e) {
    video.play();
});

/*main loop*/

app.ticker.add(animate);

function animate() {
    sprite1.rotation += 0.1;
}

/*convenience*/

function appendSprite(imagePath, x, y) {
    const img = new PIXI.Sprite(PIXI.Texture.from(imagePath));
    img.x = x;
    img.y = y;
    img.anchor.x = 0.5;
    img.anchor.y = 0.5;
    app.stage.addChild(img);  
    return img;  
}
