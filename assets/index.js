import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

//Aqui haremos las modificaciones del video
//a query selector hay que pasar un selector, un selector puede ser un video
const video = document.querySelector("video")

//ejecutamos el MediaPlayer
const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay(),
    new AutoPause()
] })

// pasamos el selector button
const button = document.querySelector("button.play")
const buttonMute = document.querySelector("button.mute")

// ejecutar el video con el boton 
button.onclick = () => player.tooglePlay();

// Mute and unmute 
buttonMute.onclick = () => player.toogleMute();


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}