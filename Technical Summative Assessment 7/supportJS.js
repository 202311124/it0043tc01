function reset(){
    document.querySelector('.display').style.gap = "0px";

    document.querySelector('.display').style.flexDirection = "row";

    document.querySelector('.display').style.justifyContent = "flex-start";

    document.querySelector('.display').style.alignItems = "stretch";
    
    let grow1 = 0;
    let grow2 = 0;
    let grow3 = 0;
    document.querySelector('.box1').style.flexGrow = grow1;
    document.querySelector('.box2').style.flexGrow = grow2;
    document.querySelector('.box3').style.flexGrow = grow3;
}

function setgap(){
    let gap = document.getElementById('gap').value;
    document.querySelector('.display').style.gap = gap+"px";
}

function flex(direction){
    document.querySelector('.display').style.flexDirection = direction;
}

function justify(content){
    document.querySelector('.display').style.justifyContent = content;
}

function align(items){
    document.querySelector('.display').style.alignItems = items;
}

function setgrow(growbox){
    if (growbox == 1){
        let grow1 = document.getElementById('grow1').value;
        document.querySelector('.box1').style.flexGrow = grow1;
    }

    else if (growbox == 2){
        let grow2 = document.getElementById('grow2').value;
        document.querySelector('.box2').style.flexGrow = grow2;
    }

    else if (growbox == 3){
        let grow3 = document.getElementById('grow3').value;
        document.querySelector('.box3').style.flexGrow = grow3;
    }

    else if (growbox == 0){
        let grow1 = document.getElementById('grow1').value;
        let grow2 = document.getElementById('grow2').value;
        let grow3 = document.getElementById('grow3').value;
        document.querySelector('.box1').style.flexGrow = grow1;
        document.querySelector('.box2').style.flexGrow = grow2;
        document.querySelector('.box3').style.flexGrow = grow3;
    }

    else if (growbox == 4){
        let grow1 = 0;
        let grow2 = 0;
        let grow3 = 0;
        document.querySelector('.box1').style.flexGrow = grow1;
        document.querySelector('.box2').style.flexGrow = grow2;
        document.querySelector('.box3').style.flexGrow = grow3;
    }
}