const chestList = document.querySelectorAll('.chest a')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close-modal')
for (const chest of chestList) {
    chest.addEventListener('click',()=>{
        modal.classList.add('modal_opened')
    })
}
closeBtn.addEventListener('click',()=>{
    modal.classList.remove('modal_opened')
})