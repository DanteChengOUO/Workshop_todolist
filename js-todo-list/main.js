// TO DO
document.addEventListener('DOMContentLoaded', function() {
    const checkedlist = document.querySelectorAll('li')
        // console.log(checkedlist)
    for (let i = 0; i < checkedlist.length; i++) {
        checkedlist[i].addEventListener('click', function() {
            checkedlist[i].classList.add('checked')
        })
    }

})