
// You can write more code here

/* START OF COMPILED CODE */

class FloatingObject extends EventComponent {
	
	constructor(gameObject) {
		super(gameObject);
		
		gameObject["__FloatingObject"] = this;
		
		/** @type {Phaser.GameObjects.Image} */
		this.gameObject = gameObject;
		/** @type {number} */
		this.offset = 20;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {FloatingObject} */
	static getComponent(gameObject) {
		return gameObject["__FloatingObject"];
	}
	
	/* START-USER-CODE */

	start() {

		this.gameObject.scene.add.tween({
			targets: this.gameObject,
			props: {
				y: "-=" + this.offset,
			},
			yoyo: true,
			repeat: -1,
			duration: 1000,
			delay: Phaser.Math.Between(100, 500)
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
