const app = new PIXI.Application({
    view: document.getElementById('mycanvas'),
    width: window.innerWidth, 
    height: window.innerHeight
});

const sprite = app.stage.addChild(new PIXI.Sprite(PIXI.Texture.from('earth.mp4')));  
sprite.x = 300;
sprite.y = 300;
sprite.anchor.x = 0.5;
sprite.anchor.y = 0.5;
sprite.scale.set(0.1, 0.1);

sprite.interactive = true;
sprite.buttonMode = true;
