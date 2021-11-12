var hits = 0;

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        add();
        document.getElementById("clicks").innerHTML = hits;
    }
})

function add(e) {
    hits += 1;
}


function reset() {
    hits = 0;
    document.getElementById("clicks").innerHTML = hits;
}