let valores = [8,1,7,4,2,9]

//console.log(valores)
/*
for(let pos = 0; pos < valores.length; pos++){ //forma completa
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores){ //forma simplificada
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

