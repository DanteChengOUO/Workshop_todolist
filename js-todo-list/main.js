// TO DO
document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('addBtn').addEventListener('click', function() {
        const li = document.createElement('li')
        const addtext = document.getElementById('input').value
        li.innerHTML = addtext + '<span class="close">x</span>'
        document.querySelector('ul').appendChild(li)





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