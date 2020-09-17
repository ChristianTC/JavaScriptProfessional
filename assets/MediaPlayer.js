//funcion para reprodcuir o pausar el video

//funcion mediaPLayer
function MediaPlayer(config) {
    this.media = config.el
};

MediaPlayer.prototype.pause = function() {
    this.media.pause()
}
MediaPlayer.prototype.play = function() {
    this.media.play()
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

export default MediaPlayer;