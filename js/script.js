function calcular()
{
    let n1= Number(document.getElementById("numero1").value);
    let n2= Number(document.getElementById("numero2").value);

    let operacion= document.getElementById("operacion").value;
    let result= 0;
    if (operacion== "suma")
    {
        result=n1+n2
    }
    if (operacion== "resta")
    {
        result=n1-n2
    }
    if (operacion== "multiplicacion")
    {
        result=n1*n2
    }
    if (operacion== "division")
    {
        if (n2==0)
            result= "Divisor no pude ser 0"
        else
            result=n1/n2
    }      
    
    document.getElementById("resultado").innerHTML= result;

}

function calcEdad()
{
    let fecNac= new Date(document.getElementById("fecNac").value);
    let fecAct= new Date();

    let edad= fecAct.getFullYear() - fecNac.getFullYear();

    document.getElementById("edad").innerHTML= edad;
}