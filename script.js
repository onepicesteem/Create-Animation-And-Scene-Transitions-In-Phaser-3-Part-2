//Let's create the scene object for config.
var outScene=new OutScene();
var inScene=new IcSahne();



var config={
    type:Phaser.AUTO,
    width:768,
    height:512,
    //Define two scenes in the scene property in config
    scene:[inScene,outScene],
    physics:{
        default:'arcade',
        arcade:{
            gravity:{y:0}
        }
    }

};

var game=new Phaser.Game(config);