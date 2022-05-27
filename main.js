

function newList(){
    let content = document.querySelector("input[name='list-text']").value
    let ulElement = document.getElementById('list')

    let liElement = document.createElement('li')
    liElement.classList.add('style')
    let newText = document.createElement('div')
    newText.classList.add("text-name")
    newText.innerHTML = content

    let checkText = document.createElement('input')
    checkText.setAttribute('type',"checkbox")
    checkText.setAttribute('onclick', "checkedStyle()")
    //checkText.setAttribute('check', 'styleComplete()')

    let removeButton = createButtonRemove()

    ulElement.appendChild(liElement) 
    liElement.appendChild(checkText)   
    liElement.appendChild(newText)
    liElement.appendChild(removeButton)
}
function createButtonRemove(){
    let removeButton = document.createElement('button')
    removeButton.setAttribute('onclick', 'removeList()')
    removeButton.innerHTML = '-'
    return removeButton
}

function removeList(){
    let liElement = event.target.parentNode
    document.getElementById("list").removeChild(liElement)
}

function checkedStyle(){
    let liElement = event.target.parentNode
    liElement.classList.toggle('checked')
}

