var acc = document.getElementsByClassName('accordion')
var i

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active')
    var panel = this.nextElementSibling
    if (panel.style.height) {
      panel.style.height = null
    } else {
      panel.style.height = panel.scrollHeight + 'px'
    }
  })
}

// Video popup

$('#video').videoPopup({
  // autoplay on open
  autoplay: false,

  // shows video controls
  showControls: true,

  // colors of controls
  controlsColor: null,

  // infinite loop
  loopVideo: false,

  // shows video information
  showVideoInformations: true,

  // width
  width: null
})

// Scroll to top

//Get the button
var mybutton = document.getElementById('myBtn')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = 'flex'
  } else {
    mybutton.style.display = 'none'
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

// Price change

const checkbox = document.getElementById('price')
const essentials = document.getElementById('essentials')
const professional = document.getElementById('professional')

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    // alert('checked')
    essentials.innerHTML = '$58'
    professional.innerHTML = '$199'
  } else {
    // alert('not checked')
    essentials.innerHTML = '$45'
    professional.innerHTML = '$149'
  }
})

// Video play

var frameNumber = 0, // start video at frame 0
  // lower numbers = faster playback
  playbackConst = 1000,
  // get page height from video duration
  setHeight = document.getElementById('setHeight'),
  // select video element
  vid = document.getElementById('v0')
// var vid = $('#v0')[0]; // jquery option

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function () {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + 'px'
})

// Use requestAnimationFrame for smooth playback
function scrollPlay() {
  var frameNumber = window.pageYOffset / playbackConst
  vid.currentTime = frameNumber
  window.requestAnimationFrame(scrollPlay)
}

window.requestAnimationFrame(scrollPlay)
