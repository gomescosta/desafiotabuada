function tabuada(){
    var num = window.document.getElementById('num')
    var end = document.getElementById('end')
    if(num.value.length == 0 || end.value.length == 0){
        window.alert('[ERRO] Confira os dados')

    } else{

    var n = Number(num.value)
    var e = Number(end.value)

    var x = 0
    var r = ''
    var resp = document.getElementById('resposta')
    resp.innerHTML = `A tabuada de ${n} é : <br> `

    do{
        r = n*x
        resp.innerHTML += `${x} X ${n} = ${r}<br>`
        x++

    }while(x <= e)

}
    }