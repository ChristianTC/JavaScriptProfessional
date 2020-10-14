//funcion para reprodcuir o pausar el video

//funcion mediaPLayer
function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
};

MediaPlayer.prototype._initPlugins = function() {
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
}

MediaPlayer.prototype.pause = function() {
    this.media.pause()
}
MediaPlayer.prototype.play = function() {
    this.media.play()
}
MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}
MediaPlayer.prototype.unmute = function() {
    this.media.muted = false;
}

MediaPlayer.prototype.tooglePlay = function() {
    //estado de la reproduccion
    let statusMedia = this.media.paused
    //resultado true o false
    console.log(statusMedia);
    //condiciones para reproducir o pausar el video
    (statusMedia)
        ? this.play()
        : this.pause()
}

/**
 * Mute and Unmute toogle
 */
MediaPlayer.prototype.toogleMute = function() {
    console.log(this.media.muted);
    
    (this.media.muted === false)
        ? this.mute()
        : this.unmute()
}
export default MediaPlayer;