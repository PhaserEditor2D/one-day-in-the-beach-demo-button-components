
// You can write more code here

/* START OF COMPILED CODE */

class Component {
	
	constructor(gameObject) {
		gameObject["__Component"] = this;
		
		/** @type {Phaser.GameObjects.Image} */
		this.gameObject = gameObject;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {Component} */
	static getComponent(gameObject) {
		return gameObject["__Component"];
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
