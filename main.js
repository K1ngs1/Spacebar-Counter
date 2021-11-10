hits = 0;        
components = document.getElementById("components")

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        document.getElementById("clicks").innerHTML = hits;
        add();
        console.log("Keyboard clicked")
    }
})

function add(e) {
    hits += 1;
    document.getElementById("clicks").innerHTML = hits;
}
function reset(e){
    hits = 0;
    document.getElementById("clicks").innerHTML = hits;
}