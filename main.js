let videoList = document.querySelectorAll(".video-list-container .list");

// Save references to main containers, only once
let mainVideo = document.querySelector(".main-video-container .main-video");
let mainTitle = document.querySelector(".main-video-container .main-vid-title");
let mainInfo  = document.querySelector(".main-video-container .main-vid-infobox");

// Assign eventListeners
videoList.forEach((vid) => {
    vid.onclick = () => {
        videoList.forEach((remove) => { remove.classList.remove("active"); });

        selectVideo(vid); // Nicely hidden inside a 'black box'
    };
});

// Moved to a function to have a 'First Run' capability
const selectVideo = (vid) => {
    vid.classList.add("active");

    mainVideo.src       = vid.querySelector(".list-video").src;
    mainTitle.innerHTML = vid.querySelector(".list-title").innerHTML;

    // If info available use that, otherwise empty string
    mainInfo.innerHTML = (vid.dataset.info) ? vid.dataset.info : "" ;
};

// First Run, select the first video in the list, if any... 
if (videoList.length > 0) selectVideo(videoList[0]);
