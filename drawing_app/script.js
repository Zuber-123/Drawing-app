const canvas = document.getElementById('canvas');
const increase_btn = document.getElementById('increase');
const decrease_btn = document.getElementById('decrease');

const size_el = document.getElementById('size');
const color_el = document.getElementById('color');



const ctx = canvas.getContext('2d');

let size = 2;
let is_pressed = false;
let color = 'black';


canvas.addEventListener("mousedown", () => {
    is_pressed = true;

});

canvas.addEventListener("mouseup", () => {
    is_pressed = false;
});

canvas.addEventListener("mousemove", (e) => {
    if (is_pressed) {
        const x = e.offsetX;
        const y = e.offsetY;

        draw_circle(x, y);
    }
})

function draw_circle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

increase_btn.addEventListener('click', () => {
    size += 2;
    if (size > 30) {
        size = 30;

    }
    manage_size();


});

decrease_btn.addEventListener('click', () => {
    size -= 2;
    if (size < 5) {
        size = 5;

    }
    manage_size();
});

color_el.addEventListener('change', (e)=>{
    color = e.target.value;
});

function manage_size() {
    size_el.innerText = size;
}



// function draw(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);


//     draw_circle(x, y);
//     requestAnimationFrame(draw);
// }

// draw();