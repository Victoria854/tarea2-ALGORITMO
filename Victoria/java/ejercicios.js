class ejercicios {
    Limpiar() {//Limpiar todo el texto ingresado
        let d = document
        d.getElementById('finalizar').textContent="";
        d.getElementById('inicio').value="";
        d.getElementById('Fin').value="";
    }
    perfectos() {
        //1.Dado una serie de numeros presentar la suma de los numeros perfectos
        let serieNumeros = document.getElementById("inicio").value
        let textarea = document.getElementById("finalizar")
        serieNumeros = serieNumeros.split(",").map(n => Number(n))
        let sumarPerfectos = 0
        for (let i = 0; i < serieNumeros.length; i++) {
            let contador = 0, acumulador = 0
            let numero = serieNumeros[i]
            while (contador < numero) {
                if (numero % contador == 0) {
                    acumulador += contador
                }
                contador++
            }
            if (acumulador == numero) {
                sumarPerfectos = sumarPerfectos + numero
            }
        }
        textarea.textContent = ("la suma de numeros perfectos es: " + sumarPerfectos)
    } 
    retornoPrimo(num){
        let contador=2
        let bandera=1
        for(let i=0;i<num.length;i++){
            let numero=num[i]
            while(contador<numero && bandera==1){
                if(numero%contador==0){
                    bandera=0
                }else{
                    contador++
                }
            }
        }
        return bandera
    }
    primos(){
     //2.Dado una serie de numeros presentar los numeros primos
     let serieNumeros = document.getElementById("inicio").value
     serieNumeros=serieNumeros.split(",").map(n=>Number(n))
     let textarea = document.getElementById("finalizar")
     let arreglovacio=[]
     for(let i=0;i<serieNumeros.length;i++){
        if(this.retornoPrimo([serieNumeros[i]])==1){
          arreglovacio.push(serieNumeros[i])
        }
     }
     if(arreglovacio.length>0){
        textarea.textContent = ("Los numeros primos son "+ arreglovacio)
     }else{
        textarea.textContent=("No hay numeros primos ")
     }
    }
    retornoPotencia(numero1,numero2){
        let contador=1
        let resultado=1
        while(contador<=numero2){
            resultado=resultado*numero1
            contador++
        }
        return resultado
    }
    potencia(){
        //3.Elaborar una funcion que reciba dos valores base y exponente.
        //la funcion debera retornar la base elavada al exponente
       let n1=0
       let num1=parseFloat(document.getElementById("inicio").value)
       let num2=parseFloat(document.getElementById("Fin").value)
       n1=this.retornoPotencia(num1,num2)
       let textarea=document.getElementById("finalizar")
       textarea.textContent=("La potencia es:" + n1)
    }
    potencia2(){
        //4.Dado una serie de numeros presentar el exponente de cada numero elevado a su propio numero
        let NumerosIngresados = document.getElementById("inicio").value
        NumerosIngresados = NumerosIngresados.split(",").map(n => Number(n))
        let arreglo = []
        for (let i = 0; i < NumerosIngresados.length; i++) {
            let num = NumerosIngresados[i]
            let potencia = this.retornoPotencia(num, num)
            arreglo.push(potencia)
            document.getElementById("finalizar").textContent = ("Exponente de su propio numero " + arreglo)
        }
    }
    tablaMultiplicar(){
        //5.Elabore una funcion de la tabla de multplicar
        let numeroescrito = parseFloat(document.getElementById("inicio").value)
        let tablamulti = ""
        for (let i = 1; i <= 12; i++) {
            let producto = numeroescrito *i 
            tablamulti = tablamulti + numeroescrito + " * " + i + " = " + producto + "\n"
        }
        let textarea = document.getElementById("finalizar")
        textarea.textContent = tablamulti
    }
    retornoDivisores(num,valorini){
        let arregloNumeros=[]
        for(let i=valorini;i<num;i++){
            if(num%i==0){
                arregloNumeros.push(i)
            }
        }
        return arregloNumeros
    }
    divisores(){
        //6.Realizar una funcion que retorne un arreglo con los divisores de cualquier numero
        // de cualquier valor inicial
        let numero1=parseFloat(document.getElementById("inicio").value)
        let valorinicial=parseFloat(document.getElementById("Fin").value)
        let numeros=this.retornoDivisores(numero1,valorinicial)
        let res=document.getElementById("finalizar")
        res.textContent=("Los divisores son:" + numeros.join(","))
    }
    retornoSuma(numero, valor) {
        let numeroIngresado = parseFloat(document.getElementById("inicio").value)
        let valorInicial = parseFloat(document.getElementById("Fin").value)
        let numero1 = this.retornoDivisores(numeroIngresado, valorInicial)
        let acu = 0
        for (let i = 0; i < numero1.length; i++) {
            acu = acu + numero1[i]
        }
        return acu
    }
    sumadivisores(){
        //7.Realizar una funcion que retorne la suma de los divisores de cualquier valor incial
        let numeroIngresado = parseFloat(document.getElementById("inicio").value)
        let valorInicial = parseFloat(document.getElementById("Fin").value)
        let numero = this.retornoSuma(numeroIngresado, valorInicial)
        let textarea = document.getElementById("finalizar")
        textarea.textContent = ("la suma de los divisores es: " + numero)
    }
    retornodigito(num){
        let contador=0
        let arreglo=[]
        while(contador < num){
            let digito=0
            digito=num%10
            num=parseInt(num/10)
            arreglo.push(digito)
        }
        return arreglo
    }
    digitos(){
        //8.Realiazar una funcion que retorne un arreglo con los digitos de cualquier numero
        let numeroIngresado=parseFloat(document.getElementById("inicio").value)
        let numero=this.retornodigito(numeroIngresado)
        let textarea=document.getElementById("finalizar")
        textarea.textContent=("Los digitos son: " + numero)
    }
    sumadigitos(){
        //9.Dado un numero presente la suma de sus digitos
        let numeroIngresado=parseFloat(document.getElementById("inicio").value)
        let numero=this.retornodigito(numeroIngresado)
        let suma=0
        for(let i=0;i<numero.length;i++){
            suma=suma+numero[i]
        }
        let textarea=document.getElementById("finalizar")
        textarea.textContent=("Los suma de los digitos es: " + suma)
    }
    digitospares(){
        //10.Dado un nuemro presente los digitos pares
        let numeroIngresado=parseFloat(document.getElementById("inicio").value)
        let num=this.retornodigito(numeroIngresado)
        let arreglo=[]
        for(let i=0;i<num.length;i++){
            if(num[i]%2==0){
                arreglo.push(num[i])
            }
        }
        let textarea=document.getElementById("finalizar")
        textarea.textContent=("Los digitos pares son: " + arreglo)
    }
    primerdigito(){
        //11.Dado un numero presente su primer digito
        let numeroIngresado=parseFloat(document.getElementById("inicio").value)
        let num=this.retornodigito(numeroIngresado)
        let longitud=num.length-1
        let textarea=document.getElementById("finalizar")
        textarea.textContent=("El primer digito es: " + num[longitud])

    }
    ultimodigito(){
        //12.Dado un numero presente su ultimo digito
        let numeroIngresado=parseFloat(document.getElementById("inicio").value)
        let num=this.retornodigito(numeroIngresado)
        let textarea=document.getElementById("finalizar")
        textarea.textContent=("El último digito es: " + num[0])
    }
    retornoFactorial(num){
        let producto=1
        for(let i=num;i>0;i--){
            producto=producto*i
        }
        return producto
    }
    factorial(){
        //13.Elaborar una funcion que retorne el factorial de un numero
        let numeroIngresado=parseFloat(document.getElementById("inicio").value)
        let numero=this.retornoFactorial(numeroIngresado)
        let textarea=document.getElementById("finalizar")
        textarea.textContent=("El factorial es: " + numero)
    }
    factoriales(){  
        //14.Dado un arreglo de numeros presentar sus factoriales
        let numeroIngresado=(document.getElementById("inicio").value)
        numeroIngresado = numeroIngresado.split(",").map(n => Number(n))
        let arreglo=[]
       for(let i=0;i<numeroIngresado.length;i++){
          let numero=numeroIngresado[i]
          let llamar=this.retornoFactorial(numero)
          arreglo.push(llamar)
          let textarea=document.getElementById("finalizar")
          textarea.textContent=("Los factoriales: " + arreglo)
       }
    }
    retornoRan(num1, num2) {
        let arreglo = []; let i
        if (num1 < num2) {
            for (i = num1; i < num2; i++) {
                arreglo.push(i)
            }
        } else {
            if (num1 > num2) {
                for (i = num1; i > num2; i--) {
                    arreglo.push(i)
                }
            }
        }
        return arreglo
    }
    Rango(){
        let inicio = parseFloat(document.getElementById("inicio").value)
        let fin = parseFloat(document.getElementById("Fin").value)
        let resultado = this.retornoRan(inicio, fin)
        let textarea = document.getElementById("finalizar")
        textarea.textContent = ("el rango de los numeros es: " + resultado)
    }
}
let deber = new ejercicios()