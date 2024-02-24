function displayMenu(num) {
    if (num == 1) {
        document.getElementById('megamenu1').classList.remove('hidden');
    }
    if (num == 2) {
        document.getElementById('megamenu2').classList.remove('hidden');
    }
    if (num == 3) {
        document.getElementById('megamenu3').classList.remove('hidden');
    }
}
function hideMenu(num) {
    if (num == 1) {
        document.getElementById('megamenu1').classList.add('hidden');
    }
    if (num == 2) {
        document.getElementById('megamenu2').classList.add('hidden');
    }
    if (num == 3) {
        document.getElementById('megamenu3').classList.add('hidden');
    }
}
function displayDropDown() {
    let elem = document.getElementById('drop-D');
    elem.classList.remove('hidden');
}
function hideDropDown() {
    document.getElementById('drop-D').classList.add('hidden')
}
function openOffCanvas() {
    let offCanvas = document.getElementById("offCanvas");
    offCanvas.classList.remove("left-[300%]")
    offCanvas.classList.remove("opacity-0")
    document.getElementById("cover").classList.remove("hidden");
    document.addEventListener('wheel', preventScroll, { passive: false });
}
function closeOffCanvas() {
    let offCanvas = document.getElementById("offCanvas");
    offCanvas.classList.add("left-[300%]")
    offCanvas.classList.add("opacity-0")
    document.getElementById("cover").classList.add("hidden");
    document.removeEventListener('wheel', preventScroll, { passive: false });
}
function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();

    return false;
}