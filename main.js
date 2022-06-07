const app = new PIXI.Application({
    view: document.getElementById('mycanvas'),
    width: window.innerWidth, 
    height: window.innerHeight
});

// video
const sprite2 = app.stage.addChild(new PIXI.Sprite(PIXI.Texture.from('cta.mp4')));  
sprite2.x = 300;
sprite2.y = 300;
sprite2.anchor.x = 0.5;
sprite2.anchor.y = 0.5;
sprite2.scale.set(0.1, 0.1);
