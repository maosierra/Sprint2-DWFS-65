// Nodos HTML
let btnEmpezar = document.getElementById('empezar');
let btnTerminar = document.getElementById('terminar');
let video = document.getElementById('video');
let mostrarGif = document.getElementById('mostrarGif');
let recorder = null;
let myGifs = [];

let apiKey = 'XMxhHwKl7vxxotFk5I9kn8rVJwA6qtP7';
let pathSubirGif = `https://upload.giphy.com/v1/gifs?api_key=${apiKey}`;

window.onload = () => {
    let gifs = JSON.parse(localStorage.getItem('myGifs'));
    if (gifs) {
        myGifs = gifs;
    }
    console.log('Mis gifs cargados');
    console.log(myGifs);
    download();
}

async function download() {
    const a = document.createElement("a");
    a.href = await descargarGif();
    a.download = "myImage.gif";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

async function descargarGif() {
    var source = 'https://api.giphy.com/v1/gifs/cRfP1TiNrxLDtRrkPl?api_key=XMxhHwKl7vxxotFk5I9kn8rVJwA6qtP7';
    let response = await fetch(source);
    let info = await response.json();

    return fetch(info.data.images.downsized_large.url).then((response) => {
        return response.blob();
    }).then(blob => {
        return URL.createObjectURL(blob);
    });
}

btnEmpezar.addEventListener('click', () => {
    getStreamAndRecord();
});

btnTerminar.addEventListener('click', () => {
    recorder.stopRecording(async () => {
        let blob = recorder.getBlob();
        let uri = URL.createObjectURL(blob);
        mostrarGif.src = uri;
        let form = new FormData();
        form.append('file', blob, 'myGif.gif');
        createGif(form);
    });
});

async function createGif(formData) {
    const response = await fetch(pathSubirGif, {
        method: 'POST',
        body: formData
    });
    const result = await response.json();
    console.log(result);
    myGifs.push(result.data.id);
    localStorage.setItem('myGifs', JSON.stringify(myGifs));
    console.log(myGifs);
}

async function getStreamAndRecord() {
    let stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            height: { max: 480 }
        }
    });
    video.scrObject = stream;
    video.play();
    recorder = RecordRTC(stream, {
        type: 'gif',
        frameRate: 1,
        quality: 10,
        width: 360,
        hidden: 240,
        onGifRecordingStarted: function () {
            console.log('Started');
        }
    });
    recorder.startRecording();
}