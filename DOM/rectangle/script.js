var rect = document.querySelector(".center");


// rect.style.color = "rgb(139,12,33)";

rect.addEventListener("mousemove", function (details) {
    var rectloc = rect.getBoundingClientRect();
    var insiderect = details.clientX - rectloc.left;

    console.log(insiderect);

    if (insiderect < rectloc.width / 2) {
        let red = utils.mapRange(0, 250, 255, 0, insiderect);
        gsap.to(rect,{
            color: `rgb(0,0,${red})`
           }
        );
        console.log('left');
    } else {
        var red = utils.mapRange(250, 0, 0, 255, insiderect);
        gsap.to(rect,{
            color: `rgb(0,0,${red})`
        }
        );
        console.log('right');
    }
})