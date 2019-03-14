function clickHandler(){
    var result = "You should wear\n";

    var One = document.getElementById("dropDownOne");
    var Two = document.getElementById("dropDownTwo");

    switch(One.value) {
        case "lessthan54": 
            result += "a coat + ";
            break;
        case "54To70":
            result += "a jacket + ";
            break;
        default: 
            result += "no jacket + ";
    }

    switch(Two.value) {
        case "casual": 
            result += "something comfy";
            break;
        case "semiformal":
            result += "a polo";
            break;
        default: 
            result += "a suit";
    }

    alert(result);
}

