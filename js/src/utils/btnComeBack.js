const btnComeBack = document.querySelector('.comeBack .btn')

export function showBtnComeBack(show) {
    if (show) {
        btnComeBack.classList.remove('hidden')
    } else {
        btnComeBack.classList.add('hidden')
    }
}

export function resetData(resetFunction) {
    btnComeBack.onclick = () => {
        btnComeBack.classList.add('hidden')
        resetFunction()
    }
}
