const emoji = ['😎','😊','😛','😁','😍','😴','🤤','😒','😓','😧','😨','😷','🤬','😡','👻','👽','👾','🤖','😺'];
const btn= ducument.querySelectorAll('.b')

const btnHandler =()=>{
    const btnName= e.originalTarget.textContent
    const modal = document.querySelecter('.model-win')
    modal.innerHTML=`
    ${emoji[Math.floor(Math.random()*19)]}
    <small class = "modal-contents">${btnName} button Click</small>
    `

    modal.animate([
        { width:'0px'},
        { width:'100px'},
        { width:'200px'},
        { width:'250px'},
        { width:'250px'},
        { width:'250px'},
        { width:'250px',opacity:1},
        { width:'250px',opacity:1},
        { width:'250px',opacity:1},
        { width:'250px',opacity:0.5},
        { width:'250px',opacity:0.2},
        { width:'250px',opacity:0}
    ],{
        duration :3000,
        delay:7
    })

}

btn.foreach((e)=>{
    e.addEventListener('click',btnHandler)
})
