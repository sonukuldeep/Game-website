let loginStatus = false 

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
  try {
    const tooltip = document.getElementById('tooltip')
    if (tooltip.parentNode) tooltip.parentNode.removeChild(tooltip)
  } catch (error) {
    console.log(error)
  }
}


function closeBtn(element) {
  document.querySelector(element).classList.add("disable")
  overlayOff();
}

function overlayOn() {
  document.querySelector(".overlay").style.display = "block";
}

function overlayOff() {
  document.querySelector(".overlay").style.display = "none";
}
//login_logout end

//login_logout form validation
const signup = document.getElementById('signup-form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('signup_email')
const passwd = document.getElementById('password')
const cpasswd = document.getElementById('cpassword')


signup.addEventListener('submit', (e) => {
  if (passwd.value.length < 8) {
    tooltip(signup, "Password should be more than 8 characters");
    passwd.style.border = '2px solid red'
  }
  if (passwd.value !== cpasswd.value) {
    tooltip(signup, "Password don't match");
    passwd.style.border = '2px solid red'
    cpasswd.style.border = '2px solid red'
  }

  console.log('form submitted')
  e.preventDefault();

  //saving on localstorage
  const userdata = { "name": fname.value + " " + lname.value, "email": email.value, "passwd": passwd.value }
  localStorage.setItem("userdata", JSON.stringify(userdata))
})

const signin = document.getElementById('signin')
const signin_email = document.getElementById('email')
const signin_passwd = document.getElementById('passwd')
// 
// 
// 
// 
// 
signin.addEventListener('submit', (e) => {
  if(loginStatus) {
    const x = document.querySelector(".logout-box")
    console.log(x)
    return
  }
  // 
  // 
  // 
  // 
  const userdata = JSON.parse(localStorage.getItem("userdata"))
  try {

    if (userdata.email !== signin_email.value || userdata.passwd !== signin_passwd.value)
      tooltip(signin, "Email Or Password don't match!");
    else {
      // console.log("success")
      loginSuccess(userdata.name)
      closeBtn(".signin-box")
    }
  } catch (error) {
    console.log(error)
    tooltip(signin, "User doesn't exist");
  }
  console.log('form submitted')

  e.preventDefault();
})
//login_logout form validation end


function tooltip(element, msg) {
  if (document.getElementById('tooltip') !== null)
    return
  const tip = document.createElement("p")
  tip.setAttribute('id', 'tooltip')
  tip.innerText = msg;
  element.appendChild(tip)
  // console.log(element.childNodes)
  tip.style =
    "padding: 8px; width: fit-content; margin: auto; color: red"

}

function loginSuccess(name) {
  const user = document.querySelector("#username")
  user.lastChild.innerText = `HI! ${name}` 
  user.firstChild.remove() 
  loginStatus = true

  // user.after
  // console.log(user.parentNode.classList)
}

//logout function
function logout(element){
  loginStatus = false
  console.log(element.parentNode.classList)

}