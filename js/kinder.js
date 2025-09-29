function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('kinder-canvas');

    colorMode(RGB);
    angleMode(DEGREES);
}

function draw() {

    // draw face
    fill(229, 200, 168);
    ellipse(200, 220, 280, 300);

    // draw mouth
    fill(150, 0, 0);
    ellipse(200, 300, 50, 50);

    // left eye
    let leftX = 150;
    let leftY = 200;

    // angle between left eye and mouse
    let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

    push();
    translate(leftX, leftY);
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(leftAngle);
    fill(0);
    ellipse(12.5, 0, 25, 25);
    pop();

    // right eye
    let rightX = 250;
    let rightY = 200;

    let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

    push();
    translate(rightX, rightY);
    fill(255);
    ellipse(0, 0, 50, 50);
    rotate(rightAngle);
    fill(0);
    ellipse(12.5, 0, 25, 25);
    pop();

    // draw bangs
    fill(0);
    arc(200, 170, 220, 200, 200, 340);
    pop();

    // draw hair
    ellipse(80, 90, 100, 100);
    ellipse(310, 90, 100, 100);
    fill(0);

    // little bows on hair
    fill(255, 0, 200);

    // left bow
    triangle(60, 90, 80, 110, 60, 130);
    triangle(100, 90, 80, 110, 100, 130);

    // right bow
    triangle(300, 90, 320, 110, 300, 130);
    triangle(340, 90, 320, 110, 340, 130);
}

window.addEventListener('DOMContentLoaded', () => {
    let item_counter = 0;

    const nextButton = document.getElementById('nextBtn');

    function checkReveal() {
        if (item_counter >= 3) {
            nextButton.style.visibility = 'visible';
        }
    }

    // attach handlers safely (only if the elements exist)
    const backpack = document.getElementById('backpack');
    backpack.addEventListener('click', () => {
        alert('My first backpack!');
        item_counter += 1;
        checkReveal();
    });

    const supplies = document.getElementById('school-supplies');
    supplies.addEventListener('click', () => {
        alert('Do I even need these?');
        item_counter += 1;
        checkReveal();
    });

    const bus = document.getElementById('school-bus');
    bus.addEventListener('click', () => {
        alert('Why can\'t I ride the bus?');
        item_counter += 1;
        checkReveal();
    });
});