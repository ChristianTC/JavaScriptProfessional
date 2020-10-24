//funcion para reprodcuir o pausar el video

//funcion mediaPLayer
class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this.initPlugins();
    }
    private initPlugins() {
       
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    pause() {
        this.media.pause();
    }
    play() {
        this.media.play();
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    tooglePlay() {
        //estado de la reproduccion
        let statusMedia = this.media.paused;
        //resultado true o false
        console.log(statusMedia);
        //condiciones para reproducir o pausar el video
        (statusMedia)
            ? this.play()
            : this.pause();
    }
    /**
     * Mute and Unmute toogle
     */
    toogleMute() {
        console.log(this.media.muted);

        (this.media.muted === false)
            ? this.mute()
            : this.unmute();
    }
};




export default MediaPlayer;