const shelfList = document.querySelectorAll('.observ-02')
const modal02 = document.querySelector('.modal-02')
const closeBtn02 = document.querySelector('.close-modal-02')
for (const shelf of shelfList) {
    shelf.addEventListener('click',()=>{
        modal02.classList.add('modal_opened-02')
    })
}
closeBtn02.addEventListener('click',()=>{
    modal02.classList.remove('modal_opened-02')
})