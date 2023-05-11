var vid = document.getElementById("vidbg");
function bgplay(){
    vid.play();
    anime({
        targets: '#vidbg',
        rotateZ: 360,
        duration: 60000,
        loop: true,
        easing: "linear"
    });
}

var arc = 2;

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
            targets: "#projectsdiv",
            opacity: 1,
            duration: 500,
            easing: "cubicBezier(.5, .05, .1, .3)"
        });
    }, 510);
});

$("#larrow").click(function(){

    anime({
        targets: "#projectsdiv",
        opacity: 0,
        easing: "cubicBezier(.5, .05, .1, .3)",
        duration: 500
    });

    setTimeout(function(){
        if(arc == 2){
            arc = 1;
            document.getElementById("projecttitle").innerHTML = "cipher";
            document.getElementById("projecttitle").style.fontFamily = "lato";
            document.getElementById("proimg").style.visibility = "hidden";
            document.getElementById("projectdisc").innerHTML = "Cipher is an innovative approach towards password generators. Using state of the art NLP algorithms and military grade encryption to store passwords, all this and more while maintaining a modern UI incorporating neomorphism design style.";
        }
        else if(arc == 1){
            arc = 3;
            document.getElementById("projecttitle").innerHTML = "atom";
            document.getElementById("projecttitle").style.fontFamily = "monospace";
            document.getElementById("proimg").style.visibility = "visible";
            document.getElementById("proimg").src = "assets/atomlogo.svg";
            document.getElementById("proimg").style.filter = "brightness(0%) invert(100%)";
            document.getElementById("projectdisc").innerHTML = "Atom the weather app, is a weather app made using html, css & javascript. Atom boasts a responsive and modern UI whilst also having a feature to calculate the weather for the next day. The app uses the open-weather api to fetch weather details.";
        }
        else if(arc == 3){
            arc = 2;
            document.getElementById("projecttitle").innerHTML = "Mercurial";
            document.getElementById("projecttitle").style.fontFamily = "mrsd";
            document.getElementById("proimg").style.visibility = "visible";
            document.getElementById("proimg").src = "assets/mercuriallogo.png";
            document.getElementById("projectdisc").innerHTML = "Mercurial is an intelligent music recommendation app that uses cutting-edge machine learning algorithms to suggest incredible tracks to the user, based on their vibe. <a href = 'https://github.com/ranveerchaudhary/Mercurial' target = '_blank'>Github ↗</a>";
        }
    }, 500);

    setTimeout(function(){
        anime({
            targets: "#projectsdiv",
            opacity: 1,
            easing: "cubicBezier(.5, .05, .1, .3)",
            duration: 460
        });
    }, 960);

});

$("#rarrow").click(function(){

    anime({
        targets: "#projectsdiv",
        opacity: 0,
        easing: "cubicBezier(.5, .05, .1, .3)",
        duration: 500
    });

    setTimeout(function(){
        if(arc == 3){
            arc = 1;
            document.getElementById("projecttitle").innerHTML = "cipher";
            document.getElementById("projecttitle").style.fontFamily = "lato";
            document.getElementById("proimg").style.visibility = "hidden";
            document.getElementById("projectdisc").innerHTML = "Cipher is an innovative approach towards password generators, using state of the art NLP algorithms and military grade encryption to store passwords, all this while maintaining a modern UI incorporating neomorphism design style.";
        }
        else if(arc == 2){
            arc = 3;
            document.getElementById("projecttitle").innerHTML = "atom";
            document.getElementById("projecttitle").style.fontFamily = "monospace";
            document.getElementById("proimg").style.visibility = "visible";
            document.getElementById("proimg").src = "assets/atomlogo.svg";
            document.getElementById("proimg").style.filter = "brightness(0%) invert(100%)";
            document.getElementById("projectdisc").innerHTML = "Atom the weather app, is a weather app made using HTML, CSS & Javascript. Atom boasts a responsive and modern UI whilst also having a feature to calculate the weather for the next day. The app uses the open-weather api to fetch weather details.";
        }
        else if(arc == 1){
            arc = 2;
            document.getElementById("projecttitle").innerHTML = "Mercurial";
            document.getElementById("projecttitle").style.fontFamily = "mrsd";
            document.getElementById("proimg").style.visibility = "visible";
            document.getElementById("proimg").src = "assets/mercuriallogo.png";
            document.getElementById("projectdisc").innerHTML = "Mercurial is an intelligent music recommendation app that uses cutting-edge machine learning algorithms to suggest incredible tracks to the user.  based on their vibe. <a href = 'https://github.com/ranveerchaudhary/Mercurial' target = '_blank'>Github ↗</a>";
        }
    }, 500);

    setTimeout(function(){
        anime({
            targets: "#projectsdiv",
            opacity: 1,
            easing: "cubicBezier(.5, .05, .1, .3)",
            duration: 460
        });
    }, 960);
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
        duration: 490,
        easing: "cubicBezier(.5, .05, .1, .3)"
    });
    setTimeout(function(){
        document.getElementById("philosophydiv").style.visibility = "visible";

        document.getElementById("intropara").style.visibility = "hidden";
        document.getElementById("contactinfodiv").style.visibility = "hidden";
        document.getElementById("projectsdiv").style.visibility = "hidden";
        anime({
            targets: "#philosophydiv",
            opacity: 1,
            duration: 500,
            easing: "cubicBezier(.5, .05, .1, .3)"
        });
    }, 510);
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
        $("#themebar").animate({rotate: '+=360deg'}, 500, "swing");

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

function statupanim(){
    anime({
        targets: "#wtext",
        opacity: 0,
        duration: 1500,
        easing: "cubicBezier(.5, .05, .1, .3)"
    });
    setTimeout(function(){
        anime({
            targets: "#wtext",
            opacity: 1,
            duration: 1500,
            easing: "cubicBezier(.5, .05, .1, .3)"
        });
    }, 1500); 
}   

statupanim();

var sai = setInterval(function(){
    statupanim();
}, 3000);

sai;

$("#welcome").click(function(){
    clearInterval(sai);
    anime({
        targets: ["#wtext", "#welcome"],
        opacity: 0,
        duration: 1000,
        easing: "cubicBezier(.5, .05, .1, .3)"
    });
    bgplay();
    setTimeout(function(){
        document.getElementById("welcome").style.visibility = "hidden";
        document.getElementById("welcome").style.visibility = "hidden";
    }, 1200);
});
