const canvas=document.querySelector('canvas')
const ctx=canvas.getContext('2d');
const brushWidth=document.querySelector('#brush-width');
const brushColor=document.querySelector('#color-picker')
const brush=document.querySelector('.brush')
const eraser=document.querySelector('.eraser')
const clearBtn=document.querySelector('.clear')
const saveBtn=document.querySelector('.save')




let isDrawing =false
let currentWidth =5
let currentColor =''


window.addEventListener('load' , ()=>{
    canvas.width=canvas.offsetWidth
    canvas.height=canvas.offsetHeight
    ctx.fillStyle='white'
    ctx.fillRect(0,0,canvas.width,canvas.height)
})


function startDraw(){
    isDrawing=true;
    ctx.beginPath()
    ctx.lineWidth = currentWidth
}


function drawing(e){
    if(!isDrawing)return
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.strokeStyle =`${currentColor}`
    ctx.stroke()
}

function endDraw(){
    isDrawing=false
}
canvas.addEventListener('mousedown' ,startDraw)
canvas.addEventListener('mousemove' ,drawing)
canvas.addEventListener('mouseup' ,endDraw)


brushWidth.addEventListener('change' , ()=>{
    currentWidth = brushWidth.value
})


brushColor.addEventListener('change' , ()=>{
    currentColor = brushColor.value
})

eraser.addEventListener('click' , ()=>{
    eraser.classList.add('active')
    brush.classList.remove('active')
    currentColor='white'
})

brush.addEventListener('click' , ()=>{
    brush.classList.add('active')
    eraser.classList.remove('active')
    currentColor=brushColor.value
})
clearBtn.addEventListener('click' , ()=>{
    ctx.fillRect(0,0,canvas.width,canvas.height)
})
saveBtn.addEventListener('click' , ()=>{
    let link=document.createElement('a')
    link.download='minoo.jpg'
    link.href=canvas.toDataURL()
    link.click()
})