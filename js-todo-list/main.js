// TO DO
document.addEventListener('DOMContentLoaded', function() {
    const checkedlist = document.querySelectorAll('li')
    for (let i = 0; i < checkedlist.length; i++) {
        checkedlist[i].addEventListener('click', function() {
            checkedlist[i].classList.add('checked')
        })
    }


    const closelist = document.querySelectorAll('li span')
    for (let n = 0; n < closelist.length; n++) {
        closelist[n].addEventListener('click', function() {
            closelist[n].parentElement.remove()
        })
    }




})