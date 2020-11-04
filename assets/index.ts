import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads'


//Aqui haremos las modificaciones del video
//a query selector hay que pasar un selector, un selector puede ser un video
const video = document.querySelector("video")

//ejecutamos el MediaPlayer
const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay(),
    new AutoPause(),
    new Ads(),
] })

// pasamos el selector button
const button: HTMLElement = document.querySelector("button.play")
const buttonMute: HTMLElement = document.querySelector("button.mute")

// ejecutar el video con el boton 
button.onclick = () => player.tooglePlay();

// Mute and unmute 
buttonMute.onclick = () => player.toogleMute();


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}