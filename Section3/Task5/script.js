var elements = ['little-card', 'medium-card', 'wide-card'];
var i = 1;

function SwitchCard()
{
    document.getElementById(elements[i]).classList.toggle("activated");
    if(i < 2) i++;
    else if(i == 2) i = 0;
    document.getElementById(elements[i]).classList.toggle("activated");
}