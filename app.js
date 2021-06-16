document.addEventListener('DOMContentLoaded',() => {
    
    const cards = document.querySelectorAll('.slide')

    const deleteActiveClass = () => {
        cards.forEach(value => value.classList.remove('active'))
    }

    cards.forEach(value => {

        value.addEventListener('click',() => {

            deleteActiveClass()

            value.classList.add('active')
        })
    })

})