
// You can write more code here

/* START OF COMPILED CODE */

class OpenURLOnClick {
	
	constructor(gameObject) {
		gameObject["__OpenURLOnClick"] = this;
		
		/** @type {Phaser.GameObjects.GameObject} */
		this.gameObject = gameObject;
		/** @type {string} */
		this.url = "";
		
		/* START-USER-CTR-CODE */
		
		this.gameObject.on("pointerup", () => {

			open(this.url);
		});

		/* END-USER-CTR-CODE */
	}
	
	/** @returns {OpenURLOnClick} */
	static getComponent(gameObject) {
		return gameObject["__OpenURLOnClick"];
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
