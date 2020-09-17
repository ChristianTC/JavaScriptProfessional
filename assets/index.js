import MediaPlayer from './MediaPlayer.js'

//Aqui haremos las modificaciones del video
//a query selector hay que pasar un selector, un selector puede ser un video
const video = document.querySelector("video")

//ejecutamos el MediaPlayer
const player = new MediaPlayer({ el: video })

// pasamos el selector button
const button = document.querySelector("button")

// ejecutar el video con el boton 
button.onclick = () => player.tooglePlay();