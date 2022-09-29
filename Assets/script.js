//sidebar icon animation
const currentTab = document.querySelectorAll('#sidebar .list li span');

function removeTag() {
  currentTab.forEach((element) => {
    element.classList.remove('active')
  })
}

function Activate(target) {
  removeTag()
  target.classList.add('active')
}
//sidebar icon animation end

//cat animation
const eyes = document.querySelectorAll(".eyes");
const anchor = document.querySelector("#anchor");
const rekt = anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2;

// main calculation
const angle = (cx, cy, ex = anchorX, ey = anchorY) => {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}

// event listner that listens to cursor and moves the eye accordingly
document.addEventListener("mousemove", (e) => {
  let mouseX = e.clientX;
  let mouseY = e.clientY;
  let angleInDeg;

  angleInDeg = angle(mouseX, mouseY);
  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${angleInDeg}deg)`;
    anchor.style.filter = `hue-rotate(${angleInDeg}deg)`;
  });
});
//cat animation end

//login_logout
function enableForm(...element) {
  document.querySelector("." + element[0]).classList.add("disable")
  document.querySelector("." + element[1]).classList.remove("disable")
  overlayOn();
}


function closeBtn(element) {
  document.querySelector("." + element).classList.add("disable")
  overlayOff();
}

function overlayOn() {
  document.querySelector(".overlay").style.display = "block";
}

function overlayOff() {
  document.querySelector(".overlay").style.display = "none";
}
//login_logout end

//login_logout submit
const signup = document.getElementById('signup-form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('signup_email')
const passwd = document.getElementById('password')
const cpasswd = document.getElementById('cpassword')

signup.addEventListener('submit', (e) => {
  if (passwd.value === '' || passwd.value.length < 8 && passwd.value === cpasswd.value) {
    passwd.placeholder = "password dont match or are empty"
    passwd.style.border = "2px solid red";

  }
  else
    console.log('form submitted')
  e.preventDefault();
})

const signin = document.getElementById('signin')
const signin_email = document.getElementById('email')
const signin_passwd = document.getElementById('passwd')

signin.addEventListener('submit', (e) => {
  if (signin_passwd.value === '' || signin_passwd.value.length < 8) {
    signin_passwd.style.border = "2px solid red";
    signin_passwd.placeholder = "Cannot be empty";
    console.log('fire', signin_passwd.value.length)
  }
  else
    console.log('form submitted')

  e.preventDefault();
})
//login_logout submit end