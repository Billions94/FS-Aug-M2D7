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

// Ex 11
function addLinkToNav(){
    let link = document.querySelector('.nav-scroller.py-1.mb-2')
    let linkNode = document.createElement('a')
    linkNode.innerText = 'Vibrant'
    linkNode.className = 'p-2 text-muted'
    link.appendChild(linkNode)
}
// Ex 12
function changeMainTitle(){
    let h1 = document.querySelector(".display-4.font-italic")
    h1.style.color = 'blue'
}
// Ex 13
function changeJumbotronBg(){
    let jumbotron = document.querySelector('.jumbotron')
    jumbotron.classList.remove('bg-dark')
    jumbotron.style.backgroundColor = 'purple'
}
// Ex 14
function removeLinksElsewhere() {
        let links = document.querySelectorAll('aside div:last-child ol>li>a')
        for (let i of links) {
            i.remove()
        }
}
// Ex 15
function changeJumbotronH1(){
    let h1Jb = document.querySelector('.jumbotron .col-md-6.px-0 .display-4.font-italic')
    h1Jb.classList.remove('col-md-6')
    h1Jb.classList.add('col-md-10')
}
// Ex 16
function removeSearchIcon(){
    let searchIcon = document.querySelector('svg')
    searchIcon.remove('svg')
}
// Ex 17
// function trim50Char(){
//     let trim = document.querySelectorAll('main.container .blog-post p:nth-of-type(2)')
//        for (let i = 0; i < trim.length; i++) {
//             let result = trim[i].subStr(0, trim.length - 10)
//            trim[i].innerText = result
           
//        }
// }
// Ex 18 
// function addNewBlogPost(){
//     let blog = document.createElement('div')
//     blog.innerText = `Title: The Last Don`
//     blog.classList.add('blog-post')
//     document.getElementsByTagName('main')[0].appendChild(blog)
// }

function addNewBlogPost(){
    const parentElement = document.querySelector(".blog-main");
    const nextSibling = document.querySelector(".blog-pagination");
    
    let blog = document.createElement('div')
    blog.classList.add('blog-post')

    let blogNode = document.createElement('h2')
    blogNode.classList.add('blog-post-title')
    blogNode.innerText = `The Last Don`
    
    blog.appendChild(blogNode)
    parentElement.insertBefore(blog, nextSibling)
}

function removeDisabled(){
    let btn = document.querySelector('.btn.btn-outline-secondary.disabled')
    btn.classList.remove('disabled')
}

window.onload = function(){
    addLinkToNav()
    changeMainTitle()
    changeJumbotronBg()
    changeJumbotronH1()
    removeLinksElsewhere()
    removeSearchIcon()
    // trim50Char()
    // addNewBlogPost()
    removeDisabled()
}  
