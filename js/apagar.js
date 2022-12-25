

function apagar(){
    var lixo = document.createElement('i')
    lixo.classList.add('lixo')
    lixo.classList.add('fa-solid')
    lixo.classList.add('fa-trash')

    var ulTodas = document.querySelector('#ol')
    ulTodas.addEventListener('click', function(e){
    // e.preventDefault()
    var tarefa = e.target
    if(tarefa.classList.contains('lixo')){
        console.log('lixo')
        tarefa.parentNode.classList.add('fadeOut')
        setTimeout(function(){
            tarefa.parentNode.remove()

        },400)
    }
    console.log(e.target)
})
    return lixo
}




