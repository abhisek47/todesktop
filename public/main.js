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
// var mybutton = document.getElementById('myBtn')

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction()
// }

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 500 ||
//     document.documentElement.scrollTop > 500
//   ) {
//     mybutton.style.display = 'flex'
//   } else {
//     mybutton.style.display = 'none'
//   }
// }

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0
//   document.documentElement.scrollTop = 0
// }

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

// ---------------------

const cards = document.querySelectorAll('.features_item')
const cardsTwo = document.querySelectorAll('.features_item_two')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      entry.target.classList.toggle('show', entry.isIntersecting)
      // entry.target.addEventListener('click', () => {
      //   entry.target.scrollIntoView({ block: 'center' })
      // })
      if (entry.isIntersecting) {
        const intersectingId = entry.target.id
        console.log(intersectingId)
        if (entry.target.id === 'webApp') {
          $('#webApp #feature_icon').css('stroke', '#006DF6')
        } else {
          $('#webApp #feature_icon').css('stroke', '#909EB8')
        }
        if (entry.target.id === 'nativeNotification') {
          $('#nativeNotification #feature_icon').css('stroke', '#006DF6')
        } else {
          $('#nativeNotification #feature_icon').css('stroke', '#909EB8')
        }
        if (entry.target.id === 'panel') {
          $('#panel #feature_icon').css('stroke', '#006DF6')
        } else {
          $('#panel #feature_icon').css('stroke', '#909EB8')
        }
        if (entry.target.id === 'multiWindow') {
          $('#multiWindow #feature_icon').css('stroke', '#006DF6')
        } else {
          $('#multiWindow #feature_icon').css('stroke', '#909EB8')
        }
        if (entry.target.id === 'tabbed') {
          $('#tabbed #feature_icon').css('stroke', '#006DF6')
        } else {
          $('#tabbed #feature_icon').css('stroke', '#909EB8')
        }
        if (entry.target.id === 'tray') {
          $('#tray #feature_icon').css('stroke', '#006DF6')
        } else {
          $('#tray #feature_icon').css('stroke', '#909EB8')
        }
        return buttonEvents(entry.target.id)
      }
    })
  },
  {
    rootMargin: '0% 0% -70% 0%',
    threshold: 1
  }
)

cards.forEach((card) => {
  observer.observe(card)
})

//  -----

let position = ''
if (window.matchMedia('(min-width:1801px) and (max-width: 1920px)')) {
  position = '-32% 0% -32% 0%'
} else if (window.matchMedia('(min-width:1701px) and (max-width: 1800px)')) {
  position = '25% 0% 30% 0%'
} else if (window.matchMedia('(min-width:2000px) and (max-width: 2560px)')) {
  position = '-34% 0% -34% 0%'
}

const observerTwo = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      entry.target.classList.toggle('show', entry.isIntersecting)
      entry.target.addEventListener('click', () => {
        entry.target.scrollIntoView({ block: 'center' })
      })
      if (entry.isIntersecting) {
        const intersectingId = entry.target.id
        console.log(intersectingId)
        if (entry.target.id === 'webApp2') {
          $('#webApp2 #feature_icon').css('stroke', '#006DF6')
        } else {
          $('#webApp2 #feature_icon').css('stroke', '#909EB8')
        }
        if (entry.target.id === 'nativeNotification2') {
          $('#nativeNotification2 #feature_icon').css('stroke', '#006DF6')
        } else {
          $('#nativeNotification2 #feature_icon').css('stroke', '#909EB8')
        }
        if (entry.target.id === 'panel2') {
          $('#panel2 #feature_icon').css('stroke', '#006DF6')
        } else {
          $('#panel2 #feature_icon').css('stroke', '#909EB8')
        }
        if (entry.target.id === 'multiWindow2') {
          $('#multiWindow2 #feature_icon').css('stroke', '#006DF6')
        } else {
          $('#multiWindow2 #feature_icon').css('stroke', '#909EB8')
        }
        if (entry.target.id === 'tabbed2') {
          $('#tabbed2 #feature_icon').css('stroke', '#006DF6')
        } else {
          $('#tabbed2 #feature_icon').css('stroke', '#909EB8')
        }
        if (entry.target.id === 'tray2') {
          $('#tray2 #feature_icon').css('stroke', '#006DF6')
        } else {
          $('#tray2 #feature_icon').css('stroke', '#909EB8')
        }
        return buttonEventsTwo(entry.target.id)
      }
    })
  },
  {
    rootMargin: position,
    threshold: 1
  }
)

cardsTwo.forEach((card) => {
  observerTwo.observe(card)
})

// Video play

var myvideo = document.getElementById('v0')
var myvideoTwo = document.getElementById('v1')

/* add the same event and 
   handler function to each 
   of the three buttons */
var buttons = [
  'webApp',
  'nativeNotification',
  'panel',
  'multiWindow',
  'tabbed',
  'tray'
]

var buttonTwo = [
  'webApp2',
  'nativeNotification2',
  'panel2',
  'multiWindow2',
  'tabbed2',
  'tray2'
]

// window.onload = function () {
//   buttons.forEach(function (bn) {
//     document.getElementById(bn).addEventListener('mouseenter', buttonEvents, !1)
//   })
// }

function buttonEvents(e) {
  /* get the id of the clicked button */
  var element_id = e
  /* E.G. element_id = 'playme', 'jump', or 'jump2' */

  /* declare variables before setting them */
  var timeStart = 0
  var timeEnd = 0

  /* set start and end values depending 
       on which button was clicked */
  switch (element_id) {
    case 'webApp':
      /* example values... */
      timeStart = 0
      timeEnd = 4.65
      break
    case 'nativeNotification':
      timeStart = 4.65
      timeEnd = 5.9
      break
    case 'panel':
      timeStart = 13.15
      timeEnd = 17
      break
    case 'multiWindow':
      timeStart = 16
      timeEnd = 19
      break
    case 'tabbed':
      timeStart = 6.02
      timeEnd = 13
      break
    case 'tray':
      timeStart = 19
      timeEnd = 23.55
      break
  }

  /* call 'playVideo()' */
  playVideo(timeStart, timeEnd)
}

function buttonEventsTwo(e) {
  /* get the id of the clicked button */
  var element_id = e
  /* E.G. element_id = 'playme', 'jump', or 'jump2' */

  /* declare variables before setting them */
  var timeStart = 0
  var timeEnd = 0

  /* set start and end values depending 
       on which button was clicked */
  switch (element_id) {
    case 'webApp2':
      /* example values... */
      timeStart = 0
      timeEnd = 4.65
      break
    case 'nativeNotification2':
      timeStart = 4.65
      timeEnd = 5.9
      break
    case 'panel2':
      timeStart = 13.15
      timeEnd = 17
      break
    case 'multiWindow2':
      timeStart = 16
      timeEnd = 19
      break
    case 'tabbed2':
      timeStart = 6.02
      timeEnd = 13
      break
    case 'tray2':
      timeStart = 19
      timeEnd = 23.55
      break
  }

  /* call 'playVideo()' */
  playVideoTwo(timeStart, timeEnd)
}

function playVideo(startTime, endTime) {
  function checkTime() {
    if (myvideo.currentTime >= endTime) {
      myvideo.pause()
    } else {
      /* call checkTime every 1/10th 
          second until endTime */
      myvideo.play()
      setTimeout(checkTime, 100)
    }
  }

  /* stop if playing (otherwise ignored) */
  myvideo.pause()
  /* set video start time */
  myvideo.currentTime = startTime
  /* play video */
  myvideo.play()
  /* check the current time and 
   pause IF/WHEN endTime is reached */
  checkTime()
}

function playVideoTwo(startTime, endTime) {
  function checkTimeTwo() {
    if (myvideoTwo.currentTime >= endTime) {
      myvideoTwo.pause()
    } else {
      /* call checkTime every 1/10th 
          second until endTime */
      myvideoTwo.play()
      setTimeout(checkTimeTwo, 100)
    }
  }

  /* stop if playing (otherwise ignored) */
  myvideoTwo.pause()
  /* set video start time */
  myvideoTwo.currentTime = startTime
  /* play video */
  myvideoTwo.play()
  /* check the current time and 
   pause IF/WHEN endTime is reached */
  checkTimeTwo()
}

const box = document.querySelector('.feature_container_two')
const video = document.querySelector('#v1')

console.log('Features container', box.offsetHeight)
console.log('Video section', video.offsetHeight)
