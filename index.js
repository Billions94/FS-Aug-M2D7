 /*
        JS Exercises
        EX11) Write a function to add a new link into the navbar
        EX12) Write a function to change the color of the main title
        EX13) Write a function to change the background of the jumbotron
        EX14) Write a function to remove all the links under "Elsewhere"
        EX15) Write a function to change the column size for heading in jumbotron
        EX16) Write a function to remove the "Search" magnifying glass icon
        EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
        EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
        EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
        EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
    */


function addLinkToNav(){
    let link = document.querySelector('.nav-scroller.py-1.mb-2')
    let linkNode = document.createElement('a')
    linkNode.innerText = 'Vibrant'
    linkNode.className = 'p-2 text-muted'
    link.appendChild(linkNode)
}

function changeMainTitle(){
    let h1 = document.querySelector(".display-4.font-italic")
    h1.style.color = 'blue'
}

function changeJumbotronBg(){
    let jumbotron = document.querySelector('.jumbotron')
    jumbotron.classList.remove('bg-dark')
    jumbotron.style.backgroundColor = 'purple'
}

function removeLinksElsewhere() {
        let links = document.querySelectorAll('aside div:last-child ol>li>a')
        for (let i of links) {
            i.remove()
        }
}

function changeJumbotronH1(){
    let h1Jb = document.querySelector('.jumbotron .col-md-6.px-0 .display-4.font-italic')
    h1Jb.classList.remove('col-md-6')
    h1Jb.classList.add('col-md-10')
}

function removeSearchIcon(){
    
}




window.onload = function(){
    addLinkToNav()
    changeMainTitle()
    changeJumbotronBg()
    changeJumbotronH1()
    removeLinksElsewhere()
}