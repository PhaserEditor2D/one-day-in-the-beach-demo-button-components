
class EventComponent {

    /**
     * @param {Phaser.GameObjects.GameObject} gameObject
     */
    constructor(gameObject) {

        gameObject.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
        gameObject.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

        this.scene = gameObject.scene;
    }

    start() {

    }

    update() {

    }
}