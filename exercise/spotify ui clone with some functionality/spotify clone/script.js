//logic for fetching songs 

console.log("script.js loaded");
let currentSong = new Audio();
let songs = [];
let songnames = [];
let songindex = []
let currSongIndex = 0; 
async function fetchMp3Files() {
    const url = "http://127.0.0.1:3000/My%20Songs";

    try {
        const response = await fetch(url);
        const htmlText = await response.text();

        let div = document.createElement("div");
        div.innerHTML = htmlText;
        a = div.getElementsByTagName("a");

        for (let i = 1; i < a.length; i++) {
            let href = a[i].getAttribute("href");
            songindex[i] = i - 1;

            if (href && href.toLowerCase().endsWith(".mp3")) {
                // Extract only the filename
                const fileName = href.split("/").pop();

                // Encode the filename 
                const encodedFileName = encodeURIComponent(fileName);

                // Construct the correct full URL
                const fullUrl = `http://127.0.0.1:3000/My%20Songs/${encodedFileName}`;

                songs.push(fullUrl);
            }
        }

    } catch (err) {
        console.error(err);
    }

    let encodedsnames = []
    for (const s of songs) {

        // Extract filename after 'Songs/'
        let fileNameEncoded = s.split("Songs/")[1];

        // Decode %20 into normal characters
        let fileName = decodeURIComponent(fileNameEncoded);

        songnames.push(fileName);
    }

    // write other js here


    let hamburger = document.getElementsByClassName("hamburger")[0]
    let leftdisplay = document.getElementsByClassName("left")[0]
    let hm = "close"

    hamburger.addEventListener("click", () => {
        if (hm == "close") {
            leftdisplay.style.display = "block"
            hm = "open"
        }

        else {
            leftdisplay.style.display = "none"
            hm = "close"
        }
    })

    // Restoring player close button functionality
    document.querySelector(".playerclose").addEventListener("click", () => {
        document.querySelector(".playercard").style.display = "none";
        currentSong.pause()
    });

    // logic for player full screen close and full screen
    document.querySelector(".volume2").addEventListener("click", () => {

        if (document.querySelector(".playercard").style.height == "100%") {
            document.querySelector(".playercard").style.height = "110px";
            document.getElementById("shrink").style.display = "none"
            document.getElementById("expand").style.display = "block"
            document.getElementsByClassName("songicon")[0].style.display = "none"
        }

        else {
            document.querySelector(".playercard").style.height = "100%";
            document.querySelector("#expand").style.display = "none"
            document.querySelector("#shrink").style.display = "block"
            document.getElementsByClassName("songicon")[0].style.display = "flex"

        }
    });


    // Dynamic card display and playback logic

    let z = 0;
    let songlist = document.querySelector(".rscroll");
    songlist.innerHTML = ""; // Clear existing content 

    for (const i of songnames) {
        songlist.innerHTML += `<div class="rcard" id="rcard${z}">
                            <img class="cover" src="images/cover.jpg" alt="">
                            <img src="images/play.svg" alt="play" class="playbtn">
                            <div class="name">${i}</div>
                            <div class="desc">song description here will come</div>
                        </div>`;
        z += 1;
    }

    // Attach an event listener to each song card
    Array.from(document.getElementsByClassName("rcard")).forEach(e => {
        e.addEventListener("click", () => {
            const trackName = e.querySelector(".name").innerHTML.trim();

            // Show the player card
            document.querySelector(".playercard").style.display = "block";

            // Play the music
            playMusic(trackName);

            document.getElementById("currentpaused").style.display = "block"
            document.getElementById("currentplay").style.display = "none"

        });
    });

    const playMusic = (track, pause = false) => {
        // Use the same server URL as the fetch for consistency
        const songServerBase = "http://127.0.0.1:3000/My Songs/";
        currentSong.src = songServerBase + encodeURIComponent(track);

        currSongIndex = songnames.indexOf(track);

        if (!pause) {
            currentSong.play().catch(error => {
                console.error("Playback failed:", error);
                // If the server on 3000 failed, try the local path as a fallback
                currentSong.src = "/data/My Songs/" + track;
                currentSong.play().catch(err => console.error("Fallback failed too:", err));
            });
        }

        // Update UI with song info
        const songNameDisplay = document.querySelector(".songname");
        if (songNameDisplay) songNameDisplay.innerHTML = track;

        const songArtistDisplay = document.querySelector(".songartist");
        if (songArtistDisplay) songArtistDisplay.innerHTML = "Local Track";
    }

    // stop music and previous next logic 

    let playbtn = document.getElementsByClassName("current")[0]

    playbtn.addEventListener("click", () => {
        if (currentSong.paused) {
            document.getElementById("currentpaused").style.display = "block"
            document.getElementById("currentplay").style.display = "none"
            currentSong.play()
        }
        else {
            document.getElementById("currentpaused").style.display = "none"
            document.getElementById("currentplay").style.display = "block"
            currentSong.pause()
        }
    })

    let previous = document.getElementsByClassName("previous")[0]
    let next = document.getElementsByClassName("next")[0]

    // Logic for previous and next buttons
    previous.addEventListener("click", () => { 
        currSongIndex = (currSongIndex - 1 + songs.length) % songs.length;
        playMusic(songnames[currSongIndex]);
        document.getElementById("currentpaused").style.display = "block"
        document.getElementById("currentplay").style.display = "none"
    })

    next.addEventListener("click", () => { 
        currSongIndex = (currSongIndex + 1) % songs.length;
        playMusic(songnames[currSongIndex]);
        document.getElementById("currentpaused").style.display = "block"
        document.getElementById("currentplay").style.display = "none"
    })




    //logic for time update

    let currentduration = currentSong.currentTime
    let duration = currentSong.duration

    function formatTime(time) {
        if (isNaN(time)) {
            return "00:00";
        }

        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);

        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    currentSong.addEventListener("timeupdate", () => { //better than setinterval
        let playtimetotal = document.getElementsByClassName("timetotal")[0].innerHTML = formatTime(currentSong.duration)
        let playtimenow = document.getElementsByClassName("timenow")[0].innerHTML = formatTime(currentSong.currentTime)
        // to move circle
        document.getElementsByClassName("circle")[0].style.left = ((currentSong.currentTime / currentSong.duration) * 100) + "%"
        document.getElementsByClassName("filledline")[0].style.width = ((currentSong.currentTime / currentSong.duration) * 100) + "%"

        // logic for next song auto play on song complete

        if (currentSong.currentTime == currentSong.duration) {
            next.click(); // 
        }
    })

    // logic for playline click functionality

    document.getElementsByClassName("playline")[0].addEventListener("click", (e) => {
        let percent = e.offsetX / e.target.getBoundingClientRect().width
        document.getElementsByClassName("circle")[0].style.left = percent + "%"
        currentSong.currentTime = percent * currentSong.duration;
    })


// logic of volume 

let volumevalue=document.getElementById("range")
volumevalue.addEventListener("change",(e) => {
  
    currentSong.volume=e.target.value/100
})


    // above it
}
fetchMp3Files()