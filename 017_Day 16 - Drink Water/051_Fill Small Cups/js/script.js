const smallCups = document.querySelectorAll('.cup-small')
const listers = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

smallCups.forEach((cup, idx) => {
    // console.log(idx)
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    // console.log(idx)
    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
}