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
  console.log("fire")
}

function overlayOff() {
  document.querySelector(".overlay").style.display = "none";
}