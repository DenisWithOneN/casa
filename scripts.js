function setup() {

    createCanvas(400, 400)
}


function draw() {

    background("#ade1ff")
    casa();

}

function casa() {


    noStroke();
    fill("#8a5234");
    square(150, 180, 120, 40);
    rect(100, 240, 170, 60, 20, 15, 10, 5);

    stroke(0);
    fill("#fcff61")
    circle(210, 230, 65);
    stroke(0);
    line(210, 197, 210, 263);
    line(178, 230, 242, 230);
    
}



