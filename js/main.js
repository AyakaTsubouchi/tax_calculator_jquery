$(function(){
    var calcTax = function(){
    //input the amount
    var price = $("#price").val() * 1;
    var gstRate = $("#gstRate").val() * 1;
    var pstRate = $("#pstRate").val() * 1;

    //calcurate the amount
    var taxAmount = Math.floor(price * (gstRate + pstRate)/100);
    var taxIncluded = price + taxAmount;

    //output the amount
    $("#taxAmount").val(taxAmount);
    $("#taxIncluded").val(taxIncluded);
};
    //add the event to button
    $("#btnExec").click(calcTax);
});
