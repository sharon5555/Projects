const cards = document.querySelectorAll(".card");

let current = 0;

function updateCoverflow(){

    cards.forEach((card,index)=>{

        let offset = index - current;

        if(offset < -2) offset += cards.length;
        if(offset > 2) offset -= cards.length;

        if(offset === 0){

            card.style.transform =
            "translate(-50%, -50%) scale(1.2)";

            card.style.zIndex = 5;

            card.style.filter = "brightness(1)";

        }

        else if(offset === -1){

            card.style.transform =
            "translate(-180%, -50%) rotateY(40deg) scale(.9)";

            card.style.zIndex = 4;

            card.style.filter = "brightness(.7)";
        }

        else if(offset === -2){

            card.style.transform =
            "translate(-300%, -50%) rotateY(55deg) scale(.7)";

            card.style.zIndex = 3;

            card.style.filter = "brightness(.5)";
        }

        else if(offset === 1){

            card.style.transform =
            "translate(80%, -50%) rotateY(-40deg) scale(.9)";

            card.style.zIndex = 4;

            card.style.filter = "brightness(.7)";
        }

        else if(offset === 2){

            card.style.transform =
            "translate(200%, -50%) rotateY(-55deg) scale(.7)";

            card.style.zIndex = 3;

            card.style.filter = "brightness(.5)";
        }

    });

}

updateCoverflow();

setInterval(()=>{

    current++;

    if(current >= cards.length){
        current = 0;
    }

    updateCoverflow();

},3000);