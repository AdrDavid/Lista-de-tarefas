
var adc = document.querySelector('#adc');

// var li =  document.querySelector('#li');
var li =  document.querySelector('.li');
adc.addEventListener('click', function(e){
    e.preventDefault()
    var texto =  document.querySelector('#texto');
    var form = document.querySelector('.form');
    if(!texto.value == ""){
        var valor = texto.value
        console.log(valor)
        criarLi(valor)
        form.reset()
    }
    
})

function criarLi(dado){
    // var sucess = document.createElement('i')
    var lista = document.querySelector('#ol')
    var li = document.createElement('li')
    li.classList.add('li')
    li.classList.add('color')
    lista.appendChild(li)
    li.appendChild(criarDetails(dado))
    li.appendChild(apagar())
    // li.appendChild(containerCores('cores'))
    console.log(li)
    return li
    
    
   
}

function criarDetails(dado) {
    var details = document.createElement('details')
    details.classList.add('deta')
    details.appendChild(summary(dado, 'summa'))
    var span = document.createElement('span')
    details.appendChild(span)
    span.textContent = 'Anotações:'
    span.classList.add('span')
    var p = document.createElement('p')
    details.appendChild(p)
    details.appendChild(containerCores('cores'))
    p.classList.add('p')
    p.setAttribute('contenteditable', 'true')
    
    return details
}

function summary(valor, classe){
    var summary = document.createElement('summary')
    summary.classList.add(classe)
    summary.textContent = '#'+valor
    return summary
}


