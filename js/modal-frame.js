const frameList = document.querySelectorAll('.observ-03')
const modal03 = document.querySelector('.modal-03')
const closeBtn03 = document.querySelector('.close-modal-03')
for (const frame of frameList) {
    frame.addEventListener('click',()=>{
        modal03.classList.add('modal_opened-03')
    })
}
closeBtn03.addEventListener('click',()=>{
    modal03.classList.remove('modal_opened-03')
})