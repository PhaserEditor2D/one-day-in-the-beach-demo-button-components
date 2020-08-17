class GameSounds {

    /** @type {Phaser.Sound.WebAudioSound} */
    static musicSound;

    /** @type {Phaser.Sound.WebAudioSound} */
    static bubbleSound;

    /** @type {boolean} */
    static effectsEnabled;

    /**
     * @param {Phaser.Scene} scene
     */
    static init(scene) {

        if (GameSounds.musicSound) {
            
            return;
        }

        GameSounds.musicSound = scene.sound.add("music");
        GameSounds.musicSound.play({ loop: true, volume: 0.2 });

        GameSounds.bubbleSound = scene.sound.add("bubble");
        GameSounds.effectsEnabled = true;        
    }

    static toggleMusic() {

        if (GameSounds.musicEnabled) {

            GameSounds.musicSound.pause();

        } else {

            GameSounds.musicSound.resume();
        }
    }

    static get musicEnabled() {

        return  GameSounds.musicSound && GameSounds.musicSound.isPlaying;
    }

    static toggleEffects() {

        GameSounds.effectsEnabled = !GameSounds.effectsEnabled;
    }

    static playBubble() {

        if (GameSounds.effectsEnabled) {

            GameSounds.bubbleSound.play();
        }
    }
}