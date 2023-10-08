var sound = "https://teachablemachine.withgoogle.com/models/10jXZ6dMX/"

var bark = 0
var moo = 0
var meow = 0
var roar = 0

console.log(Math.floor(Math.random() * 255))


function start() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/10jXZ6dMX/model.json", modelLoaded)
}

function modelLoaded() {
    console.log("Model Loaded")
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(results)

        var r = Math.floor(Math.random() * 255) + 1
        var g = Math.floor(Math.random() * 255) + 1
        var b = Math.floor(Math.random() * 255) + 1

        var soundName = results[0].label
        document.getElementById("voice").innerHTML = "Detectected voice - " + soundName
        document.getElementById("voice").style.color = "rgb(" + r + "," + g + "," + b +  ")"

        if(soundName == "Bark"){
            document.getElementById("voices").src = "dog.gif"
            bark = bark + 1
            document.getElementById("barkRate").innerHTML = bark
        }else if(soundName == "Meow"){
            document.getElementById("voices").src = "cat.gif"
            meow = meow + 1
            document.getElementById("meowRate").innerHTML = meow
        }else if(soundName == "Moo"){
            document.getElementById("voices").src = "cow.gif"
            moo = moo + 1
            document.getElementById("mooRate").innerHTML = moo
        }else if(soundName == "Roar"){
            document.getElementById("voices").src = "dinosaur.gif"
            roar = roar + 1
            document.getElementById("roarRate").innerHTML = roar
        }
    }
}