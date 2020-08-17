
// You can write more code here

/* START OF COMPILED CODE */

class InteractiveObject {
	
	constructor(gameObject) {
		gameObject["__InteractiveObject"] = this;
		
		/** @type {Phaser.GameObjects.Image} */
		this.gameObject = gameObject;
		
		/* START-USER-CTR-CODE */
		
		this.gameObject.setInteractive();

		/* END-USER-CTR-CODE */
	}
	
	/** @returns {InteractiveObject} */
	static getComponent(gameObject) {
		return gameObject["__InteractiveObject"];
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
