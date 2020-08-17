
// You can write more code here

/* START OF COMPILED CODE */

class StartSceneOnClick extends EventComponent {
	
	constructor(gameObject) {
		super(gameObject);
		
		gameObject["__StartSceneOnClick"] = this;
		
		/** @type {Phaser.GameObjects.Image} */
		this.gameObject = gameObject;
		/** @type {string} */
		this.sceneKey = "";
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {StartSceneOnClick} */
	static getComponent(gameObject) {
		return gameObject["__StartSceneOnClick"];
	}
	
	/* START-USER-CODE */

	start() {		

		this.gameObject.on("pointerup", () => {

			this.scene.scene.start(this.sceneKey);
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
