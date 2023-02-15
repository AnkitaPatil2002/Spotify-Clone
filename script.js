console.log("Welcome to spotify");
let songIndex=0;
let audioElement=new Audio('song/2.mp3');
let masterPlay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');

let songs=[
    {songName: "Salam-e-ishq",filePath:"song/1.mp3",coverPath:"covers/cover1.jfif"},
    {songName: "Salam-e-ishq",filePath:"song/1.mp3",coverPath:"covers/cover1.jfif"},
    {songName: "Salam-e-ishq",filePath:"song/1.mp3",coverPath:"covers/cover1.jfif"},
    {songName: "Salam-e-ishq",filePath:"song/1.mp3",coverPath:"covers/cover1.jfif"},
    {songName: "Salam-e-ishq",filePath:"song/1.mp3",coverPath:"covers/cover1.jfif"},
    {songName: "Salam-e-ishq",filePath:"song/1.mp3",coverPath:"covers/cover1.jfif"}
]

//handle play /pause calls 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//listen to event
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})