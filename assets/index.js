//Aqui haremos las modificaciones del video
//a query selector hay que pasar un selector, un selector puede ser un video
const video = document.querySelector("video")
// pasamos el selector button
const button = document.querySelector("button")

//funcion mediaPLayer
function MediaPLayer(config) {
    this.media = config.el
}

//funcion para reprodcuir o pausar el video
MediaPLayer.prototype.play = function() {
    //estado de la reproduccion
    let statusMedia = video.paused
    //resultado true o false
    console.log(statusMedia);
    //condiciones para reproducir o pausar el video
    (statusMedia)
        ? this.media.play()
        : this.media.pause()
    
}
//ejecutamos el MediaPlayer
const player = new MediaPLayer({ el: video })

// ejecutar el video con el boton 
button.onclick = () => player.play();