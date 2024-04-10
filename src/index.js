

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


