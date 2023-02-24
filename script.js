var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: `arcade`,
  
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

var game = new Phaser.Game(config);

function preload ()
{this.load.image()
  this.load.spritesheet(
    "avatarA",
    "https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FInvaderA_00%402x.png?v=1589228669385",
    {
      frameWidth: 48,
      frameHeight: 32
    }
  );
  this.load.spritesheet(
    "ship",
    "https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2FShip%402x.png?v=1589228730678",
    {
      frameWidth: 60,
      frameHeight: 32
    })
    this.load.spritesheet(
      "explosion",
      "https://cdn.glitch.com/f66772e3-bbf6-4f6d-b5d5-94559e3c1c6f%2Fexplosion57%20(2).png?v=1589491279459",
      {
        frameWidth: 48,
        frameHeight: 48
      }
    );

}

function create ()
{this.add.image()
  this.anims.create({
    key: "explode",
    frames: this.anims.generateFrameNumbers("explosion"),
    frameRate: 20,
    repeat: 0,
    hideOnComplete: true
  });
  this.add.image()
  this.add.image()
}

function update ()
{   if (this.ship.x) {
  this.ship.x = latestShipPosition;
} else {
  this.ship = this.physics.add
    .sprite(latestShipPosition, config.height - 32, "ship")
    .setOrigin(0.5, 0.5);
  this.ship.x = latestShipPosition;
}

}