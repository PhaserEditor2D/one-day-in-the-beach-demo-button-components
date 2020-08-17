
// You can write more code here

/* START OF COMPILED CODE */

class ClickHandler {
	
	constructor(gameObject) {
		gameObject["__ClickHandler"] = this;
		
		/** @type {Phaser.GameObjects.Image} */
		this.gameObject = gameObject;
		/** @type {()=>void} */
		this.callback;
		
		/* START-USER-CTR-CODE */
		
		this.gameObject.on("pointerup", () => {

			this.callback();
		});

		/* END-USER-CTR-CODE */
	}
	
	/** @returns {ClickHandler} */
	static getComponent(gameObject) {
		return gameObject["__ClickHandler"];
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
