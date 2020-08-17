
// You can write more code here

/* START OF COMPILED CODE */

class Checkbox extends EventComponent {
	
	constructor(gameObject) {
		super(gameObject);
		
		gameObject["__Checkbox"] = this;
		
		/** @type {Phaser.GameObjects.Image} */
		this.gameObject = gameObject;
		/** @type {boolean} */
		this.checked = true;
		/** @type {string} */
		this.atlasTextureKey = "";
		/** @type {string} */
		this.checkedTextureFrame = "";
		/** @type {string} */
		this.unckeckedTextureFrame = "";
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {Checkbox} */
	static getComponent(gameObject) {
		return gameObject["__Checkbox"];
	}
	
	/* START-USER-CODE */

	start() {

		this.gameObject.on("pointerdown", () => {

			this.checked = !this.checked;

			this.updateTexture();
		});

		this.updateTexture();
	}

	updateTexture() {

		const frame = this.checked ? this.checkedTextureFrame : this.unckeckedTextureFrame;

		this.gameObject.setTexture(this.atlasTextureKey, frame);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
