//challenges
/* 
challenge 1
in js, instead of adding video link, change to add an image

challenge 2
create another input box, instead of adding video link, input text

challenge 3
the inputted image and text should display on the screen


challenge 4
fetch the existing data from db.json, 

challenge 5 
create data base db.json

*/

//submit 
let form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    buildGrids(e.target["new-video"].value)
    form.reset()
})

function buildGrids(video){
    const parentContainer =document.querySelector('#parent-container-0');
    const childContainers = []
    const items = video.split(',')

    items.forEach((item, index)=>{
        const childContainer = document.createElement('div')
        childContainer.classList.add('child-container')
        childContainer.id=`container-${index}`
        childContainers.push(childContainer)
        parentContainer.appendChild(childContainer)
    })
        
       items.forEach((item, index)=>{
       // <h3>Here is the Video Title</h3>
        const v = document.createElement('video')
        v.src=item
        console.log(v)
        childContainers[index].appendChild(v)
       }) 
}

function handleDelete(e){
    e.target.parentNode.remove()
  
} 


