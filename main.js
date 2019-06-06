/// <reference path="./jquery-3.4.1.js" />

$(document).ready(function(){

    $("#btnAdd").on("click",function(){

        // get input value from TextBox
        let _txtInputValue=$("#txtToDoList").val();
       
        let _span=$("<span>").html("-x-");
        let _div=$("<div>").html(_txtInputValue);

        $("#List")
            .append(
                $("<li>")
                    .append(_span,_div)
            );
        
    });


    // dynamic
    $("#List").on("click", "li span", function () {
        console.log($(this));
        $(this).parent().remove();
        //console.log("Click");

    });

    // static 
    $("#list1 span").on("click", function () {
        $(this).parent().remove();
    });
});