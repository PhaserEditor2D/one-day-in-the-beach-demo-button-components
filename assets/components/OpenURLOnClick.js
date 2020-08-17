
// You can write more code here

/* START OF COMPILED CODE */

class OpenURLOnClick extends EventComponent {
	
	constructor(gameObject) {
		super(gameObject);
		
		gameObject["__OpenURLOnClick"] = this;
		
		/** @type {Phaser.GameObjects.Image} */
		this.gameObject = gameObject;
		/** @type {string} */
		this.url = "";
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {OpenURLOnClick} */
	static getComponent(gameObject) {
		return gameObject["__OpenURLOnClick"];
	}
	
	/* START-USER-CODE */

	start() {

		this.gameObject.on("pointerup", () => {

			open(this.url);
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
