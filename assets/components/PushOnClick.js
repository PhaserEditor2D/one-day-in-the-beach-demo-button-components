
// You can write more code here

/* START OF COMPILED CODE */

class PushOnClick extends EventComponent {
	
	constructor(gameObject) {
		super(gameObject);
		
		gameObject["__PushOnClick"] = this;
		
		/** @type {Phaser.GameObjects.Image} */
		this.gameObject = gameObject;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {PushOnClick} */
	static getComponent(gameObject) {
		return gameObject["__PushOnClick"];
	}
	
	/* START-USER-CODE */

	start() {

		this.initialScale = this.gameObject.scaleX;

		this.gameObject.on("pointerdown", () => {

			this.gameObject.setScale(0.9 * this.initialScale);
		});

		this.gameObject.on("pointerup", () => {

			this.gameObject.setScale(this.initialScale);
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
