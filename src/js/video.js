window.addEventListener('scroll', function() {
    var videoSection = document.getElementById('videoSection');
    var videoPlayer = document.getElementById('video-player');
  
    var rect = videoSection.getBoundingClientRect();
    if(rect.top >= 0 && rect.bottom <= window.innerHeight) {
      // The video section is in the viewport
      if(!videoPlayer.src) {
        // Set the YouTube video URL with autoplay parameter if it's not set yet
        videoPlayer.src = "https://www.youtube-nocookie.com/embed/GRiD3tz4AM4?si=L79OIJiQlLhEFzuB&amp;controls=1";
      }
    } else {
      // The video section is not in the viewport
      if(videoPlayer.src) {
        // Pause and reset the video if it's playing
        videoPlayer.src = "";
      }
    }
  });
  