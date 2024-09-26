let totalamount = 50000

function passward() {
    let input = document.getElementById("pin").value
   
    if (input == "123") {
        alert(" Welcome! Login Successfully")
        document.getElementById("option").style.display = "block"
        document.getElementById("box").style.display = "none"

    }
    else {
        alert("Please enter Valid Details").style.color = "red"
    }
}

function selectwithdraw() {
   
    
    document.getElementById("withdraw").style.display = "block"
    document.getElementById("option").style.display = "none"
    document.getElementById("goback").style.display = "block"
}
function selectdeposite() {
    let deposite = document.getElementById("deposite-ammount")

    if (deposite.value > totalamount) {
        alert("insufficient ammount")
    }
    else if (deposite.value == "") {
        alert("please enter valid value")
    }
    else {
        totalamount += deposite.value
        document.write("you have " + totalamount + "in your account")
    }
    document.getElementById("deposite").style.display = "block"
    document.getElementById("option").style.display = "none"
}
function selecttransfer() {

    let transfer = document.getElementById("transfer-ammount")
    if (transfer.value > totalamount) {
        alert("insufficient ammount")
    }
    else if (transfer.value == "") {
        alert("please enter valid value")
    }
    else if (transfer.value % 100 != 0) {
        alert("Please Enter valid value ")

    }
    else {
        totalamount -= transfer.value
        document.write("you have " + totalamount + "in your account")
    }


    document.getElementById("transfer").style.display = "block"
    document.getElementById("option").style.display = "none"
}
function withdraw(){
    let withdraw = document.getElementById("withdraw-ammount")
    if (withdraw.value > totalamount) {
        alert("insufficient ammount")
    }
    else if (withdraw.value == "") {
        alert("please enter valid value")
    }
    else if (withdraw.value % 100 != 0) {
        alert("Please Enter valid value")

    }
    else {

        totalamount -= withdraw.value
   document.getElementById("output").innerHTML = totalamount 
      
         
    }
    document.getElementById("goback").style.display = "block"
}
function back(){
    document.getElementById("option").style.display = "block"
    document.getElementById("withdraw").style.display = "none"
}