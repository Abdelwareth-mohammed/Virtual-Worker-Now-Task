var inpValues = [];
var sum = 0;
function calc() {


    var num1 = document.getElementById("venBillsInput").value;
    var num2 = document.getElementById("mediAddInput").value;
    var num3 = document.getElementById("corpSpenInput").value;
    var num4 = document.getElementById("teamProInput").value;
    // if we need not accept negative values because this is financial cala we will
    // refresh the page and show alert to the user
    // if (num1 < 0 || num2 < 0 || num3 < 0 || num4 < 0) {
    //     alert("Please Enter Positive Values");
    //      window.location.reload();
    // }


    if (num1 != "" && num2 != "" && num3 != "" && num4 != "") {
        sum = parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4);

        document.getElementById("unlimRew").innerText = "$" + sum * 1.1;
        document.getElementById("lifTim").innerText = "$ " + sum * 1.2;
    }
    else {
        alert("Please Enter All Values")
        window.location.reload();
    }

}


function calc2() {
    document.getElementById("bName").innerText = "BREX Business Card ";
    document.getElementById("bVal").innerText = "$ " + sum * 0.3;


}
function calc3() {
    document.getElementById("bName").innerText = "STRIPE Business Card ";
    document.getElementById("bVal").innerText = "$ " + sum * 2.9;


}
function calc4() {
    document.getElementById("bName").innerText = "AMEX Business Card ";
    document.getElementById("bVal").innerText = "$ " + sum * 1.3;


}



