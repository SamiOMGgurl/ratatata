song = "";
song2 = "";


function preload()
{
song = loadSound("music.mp3");
song2 = loadSound("music 2.mp3");
}

function setup()
{
    canvas = createCanvas(540, 300);
    canvas.position(370,200);

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 540, 300);
}

function music()
{
    song.play();
}