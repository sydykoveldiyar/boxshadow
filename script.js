let box = document.querySelector('.box')
let inpArr = Array.from(document.querySelectorAll('.inputs input'))

inpArr.forEach(el => el.addEventListener('input', () => {
    setShadow()
}))

function setShadow(){
    const property = `${horizontal.value}px ${vertical.value}px ${blurSh.value}px ${spread.value}px ${color.value}`
    box.style.boxShadow = property  
    document.querySelector('.sm-box .shadow').textContent = `box-shadow: ${property}`
}
setShadow()