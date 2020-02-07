$(document).ready(function () {
    $(".residential").hide();
    $(".commercial").hide();
    $(".corporative").hide();
    $(".hybrid").hide();
});


$("#choose").change(function () {
    var button = $(this).val();

    if (button === "residential"){
        $(".residential").show();
        $(".commercial").hide();
        $(".corporative").hide();
        $(".hybrid").hide();

        $("#resapparts").val("");
        $("#resfloors").val("");
        $("#resbasements").val("");
        
    }

    else if (button === "commercial"){
        $(".residential").hide();
        $(".commercial").show();
        $(".corporative").hide();
        $(".hybrid").hide();

        $(".comfloors").val("");
        $(".combasements").val("");
        $(".combusiness").val("");
        $(".comparking").val("");
        $(".comcolumns").val("");
    }
    
    else if (button === "corporate"){
        $(".residential").hide();
        $(".commercial").hide();
        $(".corporative").show();
        $(".hybrid").hide();
        
        $(".corcompanies").val("");
        $(".corfloors").val("");
        $(".corbasements").val("");
        $(".corparking").val('');
        $(".cormaxoccupants").val("");
    }

    else if (button === "hybrid"){
        $(".residential").hide();
        $(".commercial").hide();
        $(".corporative").hide();
        $(".hybrid").show();

        $(".hybfloors").val("");
        $(".hybbasements").val("");
        $(".hybbusiness").val("");
        $(".hybparking").val("");
        $(".hybmaxoccupantsperfloor").val("");
        $(".hybhoursofactivity").val("");
    }

    else  {
        $(".residential").hide();
        $(".commercial").hide();
        $(".corporative").hide();
        $(".hybrid").hide();
    }

    $("#elevatorsneeded").val("");

});



    

// $(document).ready(function () {
//     $("#eventClick1").click(function () {
//         $(".residential").show();
//     });
// });

// $(document).ready(function () {
//     $("#choose").click(function () {
//         $(".commercial").show();
//     });
// });

// $(document).ready(function () {
//     $("#choose").click(function () {
//         $(".corporative").show();
//     });
// });

// $(document).ready(function () {
//     $("#choose").click(function () {
//         $(".hybrid").show();
//     });
// });

// $(document).ready(function () {
//     $("#choose").change(function () {
//         var value = $(this).val();
//         $(".residential").show();
//         $(".commercial").hide();
//         $(".corporative").hide();
//         $(".hybrid").hide();
        
//     });
// });

// $(document).ready(function () {
//     $("#choose").change(function () {
//         var value = $(this).val();
//         $(".residential").hide();
//         $(".commercial").show();
//         $(".corporative").hide();
//         $(".hybrid").hide();
//     });
// });

// $(document).ready(function () {
//     $("#choose").change(function () {
//         var value = $(this).val();
//         $(".residential").hide();
//         $(".commercial").hide();
//         $(".corporative").show();
//         $(".hybrid").hide(); 
//     });
// });

// $(document).ready(function () {
//     $("#choose").change(function () {
//         var value = $(this).val();
//         $("hybrid").click(function (){
//             $(".residential").hide();
//             $(".commercial").hide();
//             $(".corporative").hide();
//             $(".hybrid").show();
//         });
//     });
// });       



/* $(document).ready(function () {
    $("residential").click(function () {
            $(".residential").show();
            $(".commercial").hide();
            $(".corporative").hide();
            $(".hybrid").hide();
        });
    });*/

/* $(document).ready(function () {
$("commercial").click(function () {
        $(".residential").hide();
        $(".commercial").show();
        $(".corporative").hide();
        $(".hybrid").hide();
    });
});*/

/* $(document).ready(function () {
    $("corporative").click(function () {
            $(".residential").hide();
            $(".commercial").hide();
            $(".corporative").show();
            $(".hybrid").hide();
        });
    });*/

/* $(document).ready(function () {
$("hybrid").click(function () {
        $(".residential").hide();
        $(".commercial").hide();
        $(".corporative").hide();
        $(".hybrid").show();
    });
});*/
   


    // $("#resapparts").hide();
    // $("#resfloors").hide();
    // $("#resbasements").hide();
    // $("#comfloors").hide();
    // $("#combasements").hide();
    // $("#combusiness").hide();
    // $("#comparking").hide();
    // $("#comcolums").hide();
    // $("#corcompanies").hide();
    // $("#corfloors").hide();
    // $("#corbasements").hide();
    // $("#corparking").hide();
    // $("#cormaxoccupants").hide();
    // $("#hybfloors").hide();
    // $("#hybbusiness").hide();
    // $("#hybparking").hide();
    // $("#hybbusiness").hide();
    // $("#hybmaxoccupantsperfloor").hide();
    // $("#hybhoursofactivity").hide();