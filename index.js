document.addEventListener("DOMContentLoaded", () => {
  const videos = [
    document.getElementById("video1"),
    document.getElementById("video2"),
  ];

  videos.forEach((video) => {
    video.addEventListener("loadedmetadata", () => {
      // Check if the video duration is greater than 3 seconds
      if (video.duration > 3) {
        video.currentTime = 3; // Seek to the 3rd second
      }

      // Pause the video after seeking
      video.addEventListener("seeked", () => {
        video.pause();
      });

      // Start loading video to display the frame
      video.play();
    });
  });
});

const videoList = document.querySelectorAll("video.videoContent");
videoList.forEach((video) => {
  video.addEventListener("click", () => {
    const newVideo = document.createElement("video");
    newVideo.src = video.src;
    newVideo.controls = true;
    const box = document.getElementById("fullBox");
    box.innerHTML = "";
    box.appendChild(newVideo);
  });
});
