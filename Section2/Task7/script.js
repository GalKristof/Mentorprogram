const GOOD_ANS = 2;
let currentPickedElement = 0;

function PickThis(num)
{
    if(currentPickedElement !== 0) document.getElementById("ans-"+currentPickedElement).classList.remove("picked");
    document.getElementById("ans-"+num).classList.add("picked");
    currentPickedElement = num;
}

function Vote()
{
    if(currentPickedElement !== 0)
    {
        if(currentPickedElement === GOOD_ANS) alert("Helyes, jó a válasz!");
        else alert("Sajnos nem jó a válasz. Próbáld újra!");
        return;
    }

    alert("Válassz ki valamit először!"); 
    return;
}