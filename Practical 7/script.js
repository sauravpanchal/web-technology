function numberPress(digit)
{
    if (document.getElementById("display").value == "0" || document.getElementById("display").value == "" || document.getElementById("display").value == "Error")
    {
        document.getElementById("display").value = "";
        document.getElementById("display").value += digit;
    }
    else
    {
        document.getElementById("display").value += digit;
    }
}

function clearPress()
{
    document.getElementById("display").value = "0";
}

function operationPress()
{
    let x = document.getElementById("display").value;
    let x_char = x.charAt(x.length - 1);
    let x_x_char = x.charAt(x.length - 2);
    if (x_char == "+" || x_char == "-" || x_char == "*" || x_char == "/")
    {
        document.getElementById("display").value = "Error";
    }
    else if (x_x_char == "." && x_char == ".")
    {
        document.getElementById("display").value = "Error";
    }
    else
    {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    }
}