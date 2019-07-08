
var player;
//use activate the cursor keys
var cursor;
var keyObj;

class IcSahne extends Phaser.Scene{
    constructor(config){
        super(config);
        Phaser.Scene.call(this,{key:'in'});
    }
    init(data) {}
    preload(){

        this.load.image('background2','./assets/housein.png');
        this.load.spritesheet('character',
        './assets/character.png',
        {frameWidth:150,frameHeight:117});
    }

    create(){

        this.add.image(384,256,'background2');

        player=this.physics.add.sprite(100,350,'character');
        //activate specific keyset
        cursor=this.input.keyboard.createCursorKeys();
        console.log(cursor);
        
        //add W key
        keyObj=this.input.keyboard.addKey('w');
        //enable player collision with playing field
        player.setCollideWorldBounds(true);

        this.anims.create({
            key:'rightstop',
            frames:[{key:'character',frame:0}],
            frameRate:20
        });

        this.anims.create({
            key:'rightdown',
            frames:[{key:'character',frame:1}],
            frameRate:20
        });

        this.anims.create({
            key:'rightwalk',
            frames:this.anims.generateFrameNumbers('character',{start:2,end:7}),
            frameRate:10,
            repeat:-1
        });

        this.anims.create({
            key:'leftstop',
            frames:[{key:'character',frame:8}],
            frameRate:20
        });

        this.anims.create({
            key:'leftdown',
            frames:[{key:'character',frame:9}],
            frameRate:20
        });

        this.anims.create({
            key:'leftwalk',
            frames:this.anims.generateFrameNumbers('character',{start:10,end:15}),
            frameRate:10,
            repeat:-1
        });

    }

    update(){

        //check left button pressed
        if(cursor.left.isDown){
            //move left
            player.setVelocityX(-100);
            //play left walk animation
            player.anims.play('leftwalk',true);
            //set left direction
            this.direction='left';
        }

        //check right button pressed
        if(cursor.right.isDown){
            //move right
            player.setVelocityX(100);
            //play right walk animation
            player.anims.play('rightwalk',true);
            //set right direction
            this.direction='right';
        }

      
        
        if(cursor.up.isDown){
            if(this.direction=='right'){
                //move right
                player.setVelocityX(0);
                //play right walk animation
                player.anims.play('rightstop',true);
            }else{
                //move right
                player.setVelocityX(0);
                //play right walk animation
                player.anims.play('leftstop',true);
            }
        }

        //check location
        if((player.x>50&&player.x<100)&&keyObj.isDown){
            //run other scene if position is correct
            this.scene.start('out');
        }

    }
}