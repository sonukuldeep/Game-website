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