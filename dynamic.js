var vid = document.getElementById("vidbg");
function bgplay(){
    vid.play();
    /*anime({
        targets: '#vidbg',
        rotateZ: 360,
        duration: 60000,
        loop: true,
        easing: "linear"
    });*/
    
}


function disppro(){

}

$("#home").click(function(){
    anime({
        targets: ["#bl2", "#bl3", "#bl4"],
        opacity: 0,
        duration: 250,
        easing: "cubicBezier(.5, .05, .1, .3)"
    })
    setTimeout(function(){
        anime({
            targets: "#bl1",
            opacity: 1,
            duration: 250,
            easing: "cubicBezier(.5, .05, .1, .3)"
        })
    },250);
    anime({
        targets: ["#contactinfodiv", "#projectsdiv", "#philosophydiv"],
        opacity: 0,
        duration: 490,
        easing: "cubicBezier(.5, .05, .1, .3)"
    });
    setTimeout(function(){
        document.getElementById("intropara").style.visibility = "visible";
        document.getElementById("contactinfodiv").style.visibility = "hidden";
        document.getElementById("projectsdiv").style.visibility = "hidden";
        document.getElementById("philosophydiv").style.visibility = "hidden";

        setTimeout(function(){
            anime({
                targets: "#intropara",
                opacity: 1,
                duration: 500,
                easing: "cubicBezier(.5, .05, .1, .3)"
            });
        }, 50);
    }, 510);
});

$("#projects").click(function(){
    anime({
        targets: ["#bl1", "#bl3", "#bl4"],
        opacity: 0,
        duration: 250,
        easing: "cubicBezier(.5, .05, .1, .3)"
    })
    setTimeout(function(){
        anime({
            targets: "#bl2",
            opacity: 1,
            duration: 250,
            easing: "cubicBezier(.5, .05, .1, .3)"
        })
    },250);

    anime({
        targets: ["#contactinfodiv", "#intropara", "#philosophydiv"],
        opacity: 0,
        duration: 490,
        easing: "cubicBezier(.5, .05, .1, .3)"
    });
    setTimeout(function(){
        document.getElementById("projectsdiv").style.visibility = "visible";
        document.getElementById("intropara").style.visibility = "hidden";
        document.getElementById("contactinfodiv").style.visibility = "hidden";
        document.getElementById("philosophydiv").style.visibility = "hidden";
        anime({
            targets: "#intropara",
            opacity: 1,
            duration: 500,
            easing: "cubicBezier(.5, .05, .1, .3)"
        });
    }, 510);
});

$("#philosophy").click(function(){
    anime({
        targets: ["#bl1", "#bl2", "#bl4"],
        opacity: 0,
        duration: 250,
        easing: "cubicBezier(.5, .05, .1, .3)"
    })
    setTimeout(function(){
        anime({
            targets: "#bl3",
            opacity: 1,
            duration: 250,
            easing: "cubicBezier(.5, .05, .1, .3)"
        })
    },250);

    anime({
        targets: ["#contactinfodiv", "#projectsdiv", "#intropara"],
        opacity: 0,
        duration: 400,
        easing: "cubicBezier(.5, .05, .1, .3)"
    });
    setTimeout(function(){
        document.getElementById("philosophydiv").style.visibility = "visible";
        document.getElementById("intropara").style.visibility = "hidden";
        document.getElementById("contactinfodiv").style.visibility = "hidden";
        document.getElementById("projectsdiv").style.visibility = "hidden";
        anime({
            targets: "#intropara",
            opacity: 1,
            duration: 400,
            easing: "cubicBezier(.5, .05, .1, .3)"
        });
    }, 400);
});


$("#contact").click(function(){
    anime({
        targets: ["#bl1", "#bl2", "#bl3"],
        opacity: 0,
        duration: 250,
        easing: "cubicBezier(.5, .05, .1, .3)"
    })
    setTimeout(function(){
        anime({
            targets: "#bl4",
            opacity: 1,
            duration: 250,
            easing: "cubicBezier(.5, .05, .1, .3)"
        })
    },250);
    
    anime({
        targets: ["#intropara", "#projectsdiv", "#philosophydiv"],
        opacity: 0,
        duration: 490,
        easing: "cubicBezier(.5, .05, .1, .3)"
    });
    setTimeout(function(){
        document.getElementById("contactinfodiv").style.visibility = "visible";
        document.getElementById("intropara").style.visibility = "hidden";
        document.getElementById("projectsdiv").style.visibility = "hidden";
        document.getElementById("philosophydiv").style.visibility = "hidden";
        setTimeout(function(){
            anime({
                targets: "#contactinfodiv",
                opacity: 1,
                duration: 500,
                easing: "cubicBezier(.5, .05, .1, .3)"
            });
        }, 50);
    }, 510);
});

/*
$("#contactinfo1").hover(function(){
    try{
        navigator.clipboard.writeText("ranveerchaudhary1000@gmail.com");
    }
    catch(err){
        console.log(err);
    }
});
*/

$("#themetype").click(function(){

    var flag = 0;

    anime({
        targets: "#themetype",
        opacity: 0,
        duration: 250,
        easing: "cubicBezier(.5, .05, .1, .3)"
    })

    setTimeout(function(){
        $("#themebar").animate({rotate: '+=180deg'}, 500, "swing");

        if(document.getElementById("themetype").innerHTML == "Light "){

            document.getElementById("themetype").innerHTML = "Dark ";
            anime({
                targets: '#vidbg',
                opacity: 0,
                duration: 1250,
                easing: "linear"
            });

            setTimeout(function(){
                document.getElementById("vidbg").style.filter = "";
                setTimeout(function(){
                    anime({
                        targets: '#vidbg',
                        opacity: 1,
                        duration: 1250,
                        easing: "linear"
                    });
                }, 200);
            }, 1300)
            
        }
        else{
            document.getElementById("themetype").innerHTML = "Light ";
            anime({
                targets: '#vidbg',
                opacity: 0,
                duration: 1250,
                easing: "linear"
            });

            setTimeout(function(){
                $("#vidbg").css("filter", "hue-rotate(320deg) contrast(1.25)");

                setTimeout(function(){
                    anime({
                        targets: '#vidbg',
                        opacity: 0.45,
                        duration: 1250,
                        easing: "linear"
                    });
                }, 200);
            }, 1300);


        }   
    }, 250);
    
    setTimeout(function(){
        anime({
            targets: "#themetype",
            opacity: 1,
            duration: 250,
            easing: "cubicBezier(.5, .05, .1, .3)"
        })
    }, 500);
});

