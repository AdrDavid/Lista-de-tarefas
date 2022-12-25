function containerCores(classe){
    var divCores = document.createElement('div')
    // divCores.addEventListener('click', function(){
        
    //     if(divCores.classList.contains('colorir')){
    //         divCores.classList.remove('colorir')
    //     }else{
    //         divCores.classList.add('colorir')
    //     }
    // })

    divCores.classList.add(classe)
    // divCores.appendChild(adicionaCores('fa-solid', 'fa-caret-up', 'cima'))
    divCores.appendChild(adicionaCores('dimencoes', 'normal'))
    divCores.appendChild(adicionaCores('dimencoes', 'azul'))
    divCores.appendChild(adicionaCores('dimencoes', 'amarelo'))
    divCores.appendChild(adicionaCores('dimencoes', 'laranja'))
    divCores.appendChild(adicionaCores('dimencoes', 'roxo'))
    divCores.appendChild(adicionaCores('dimencoes', 'verde'))
    // divCores.appendChild(adicionaCores( 'fa-solid', 'fa-palette', 'branco'))
   
    

    


    return divCores
}

function adicionaCores(classe, classe1 ,classe2){
    var cores = document.createElement('i')
    cores.classList.add(classe, classe1, classe2)
    return cores
}


var ulTodas = document.querySelector('#ol')
ulTodas.addEventListener('click', function(e){
    var mudar = e.target
    var azul = mudar.classList.contains('azul')
    var amarelo = mudar.classList.contains('amarelo')
    var laranja = mudar.classList.contains('laranja')
    var roxo = mudar.classList.contains('roxo')
    var normal = mudar.classList.contains('normal')
    var verde = mudar.classList.contains('verde')
    if(azul){        
        mudar.parentNode.parentNode.parentNode.classList.add('azules')
        mudar.parentNode.parentNode.parentNode.classList
        .remove('yellow','orange','purple','color','green')
        console.log(mudar.parentNode.parentNode.parentNode)
    } else if(amarelo){        
        mudar.parentNode.parentNode.parentNode.classList.add('yellow')
        mudar.parentNode.parentNode.parentNode.classList
        .remove('azules','orange','purple','color','green')
        console.log(mudar.parentNode.parentNode.parentNode)
    } else if(laranja){        
        mudar.parentNode.parentNode.parentNode.classList.add('orange')
        mudar.parentNode.parentNode.parentNode.classList
        .remove('yellow','azules','purple','color','green')
        console.log(mudar.parentNode.parentNode.parentNode)
    } else if(roxo){        
        mudar.parentNode.parentNode.parentNode.classList.add('purple')
        mudar.parentNode.parentNode.parentNode.classList
        .remove('yellow','azules','orange','color','green')
        console.log(mudar.parentNode.parentNode.parentNode)
    } else if(normal){        
        mudar.parentNode.parentNode.parentNode.classList.add('color')
        mudar.parentNode.parentNode.parentNode.classList
        .remove('yellow','azules','purple','orange','green')
        console.log(mudar.parentNode.parentNode.parentNode)
    } else if(verde){        
        mudar.parentNode.parentNode.parentNode.classList.add('green')
        mudar.parentNode.parentNode.parentNode.classList
        .remove('yellow','azules','purple','color','orange')
        console.log(mudar.parentNode.parentNode.parentNode)
    }

    
})
