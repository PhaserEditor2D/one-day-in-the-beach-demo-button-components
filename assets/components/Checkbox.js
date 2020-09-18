
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
		/** @type {{key:string,frame?:string|number}} */
		this.checkedTexture;
		/** @type {{key:string,frame?:string|number}} */
		this.unckeckedTexture;
		
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

		const textureConfig = this.checked ? this.checkedTexture : this.unckeckedTexture;

		this.gameObject.setTexture(textureConfig.key, textureConfig.frame);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
