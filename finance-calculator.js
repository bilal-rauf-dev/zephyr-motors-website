function getMSRP()
{
    let msrp = parseInt(document.getElementById("price").value);
    let down = parseInt(document.getElementById("down-payment").value);
    let payment = msrp - down;
    let interest = parseInt(document.getElementById("interest").value);
    let term = parseInt(document.getElementById("term").value);
    interest = (interest+100)/100;
    document.getElementById("msrp").value = msrp;

    let overPayment = (payment * interest);

    alert(overPayment);
    

    document.getElementById("estimated-payment").value = overPayment - payment;
    document.getElementById("obligation").value = overPayment;
    document.getElementById("borrowing-cost").value = overPayment/term;
    
    alert(overPayment - payment);
}