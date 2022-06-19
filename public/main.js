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
    mybutton.style.display = 'block'
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
