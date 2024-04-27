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
    document.getElementById("openOffCanvas").classList.add("hidden");
    document.getElementById("closeOffCanvas").classList.remove("hidden");
}
function closeOffCanvas() {
    let offCanvas = document.getElementById("offCanvas");
    offCanvas.classList.add("left-[300%]")
    offCanvas.classList.add("opacity-0")
    document.getElementById("cover").classList.add("hidden");
    document.removeEventListener('wheel', preventScroll, { passive: false });
    document.getElementById("openOffCanvas").classList.remove("hidden");
    document.getElementById("closeOffCanvas").classList.add("hidden");
}
function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();

    return false;
}

let wrapper1 = document.getElementById("wrapper1");
var wrapper3 = document.getElementById('wrapper3');
var wrapper4 = document.getElementById('wrapper4');

if (window.innerWidth > 768) {
    wrapper1.children.item(1).classList.add("hidden");
    wrapper1.children.item(0).classList.remove("hidden");
} else if (window.innerWidth < 768) {
    wrapper1.children.item(0).classList.add("hidden");
    wrapper1.children.item(1).classList.remove("hidden");
}

window.addEventListener('resize', () => {

    if (window.innerWidth > 768) {
        wrapper1.children.item(1).classList.add("hidden");
        wrapper1.children.item(0).classList.remove("hidden");
    } else if (window.innerWidth < 768) {
        wrapper1.children.item(0).classList.add("hidden");
        wrapper1.children.item(1).classList.remove("hidden");
    }
})

function changeList(num) {
    let wrapper2 = document.getElementById("wrapper2");

    if (window.innerWidth > 768) {
        for (let index = 0; index < wrapper3.children.length; index++) {
            if (!(wrapper3.children.item(index).children.item(0).classList.contains('hidden'))) {
                wrapper3.children.item(index).children.item(0).classList.add('hidden');
            }
            wrapper2.children.item(index).classList.remove("main-color");
        }
        wrapper3.children.item(num).children.item(0).classList.remove('hidden');
        wrapper2.children.item(num + 1).classList.add("main-color");
    }
    if (window.innerWidth < 768) {
        for (let index = 2; index < wrapper4.children.length + 1; index++) {
            if (index % 2 === 0) {
                wrapper4.children.item(index).children.item(0).classList.add("max-h-0");
                wrapper4.children.item(index).children.item(0).classList.remove("max-h-[1000px]");

            }
            wrapper4.children.item(num).children.item(0).classList.remove("max-h-0");
            wrapper4.children.item(num).children.item(0).classList.add("max-h-[1000px]");

        }
    }
}

class ListItem extends HTMLElement {
    constructor() {
        super();
        let divElem = document.createElement("div");
        this.append(Object.assign(divElem, { className: 'flex flex-col ps-8 border-s-[1px] overflow-hidden transition-all duration-500 transform-gpu' }));
        divElem.innerHTML += `<h6 class=" text-black font-[500]">${this.getAttribute("data-value1")}</h6>`
        divElem.innerHTML += `<h4 class=" font-bold mt-6">${this.getAttribute("data-value2")}</h4>`
        divElem.innerHTML += `<p class=" mt-4">${this.getAttribute("data-value3")}</p>`
        divElem.innerHTML += `<h4 class=" font-bold mt-6">${this.getAttribute("data-value4")}</h4>`
        divElem.innerHTML += `<p class=" mt-4">${this.getAttribute("data-value5")}</p>`
        divElem.innerHTML += `<h4 class=" font-bold mt-6">${this.getAttribute("data-value6")}</h4>`
        divElem.innerHTML += `<p class=" mt-4">${this.getAttribute("data-value7")}</p>`
        divElem.innerHTML += `<h4 class=" font-bold mt-6">${this.getAttribute("data-value8")}</h4>`
        divElem.innerHTML += `<p class=" mt-4">${this.getAttribute("data-value9")}</p>`
    }
}

customElements.define('list-item', ListItem);

wrapper3.children.item(0).children.item(0).classList.remove('hidden');
wrapper4.children.item(2).children.item(0).classList.remove('hidden');

if (window.innerWidth > 768) {
    changeList(0);
} else if (window.innerWidth < 768) {
    changeList(2);
}

function changeList2(num){
    let wrapper11 = document.getElementById('wrapper11');

    for (let index = 2; index < wrapper11.children.length; index++) {
        wrapper11.children.item(index).classList.add('hidden');       
    }

    for (let index = 0; index < wrapper11.children.item(1).children.length; index++) {
        wrapper11.children.item(1).children.item(0).classList.remove('border-[#efcb19]');
        wrapper11.children.item(1).children.item(0).classList.remove('text-[#efcb19]');
    }

    if(num == 1){
        wrapper11.children.item(2).classList.remove('hidden');
        wrapper11.children.item(1).children.item(0).classList.add('border-[#efcb19]');
        wrapper11.children.item(1).children.item(0).classList.add('text-[#efcb19]');
    }
    if(num == 2){
        wrapper11.children.item(3).classList.remove('hidden');
        wrapper11.children.item(1).children.item(1).classList.add('border-[#efcb19]');
        wrapper11.children.item(1).children.item(1).classList.add('text-[#efcb19]');
    }
    if(num == 3){
        wrapper11.children.item(4).classList.remove('hidden');
        wrapper11.children.item(1).children.item(2).classList.add('border-[#efcb19]');
        wrapper11.children.item(1).children.item(2).classList.add('text-[#efcb19]');
    }
    if(num == 4){
        wrapper11.children.item(5).classList.remove('hidden');
        wrapper11.children.item(1).children.item(3).classList.add('border-[#efcb19]');
        wrapper11.children.item(1).children.item(3).classList.add('text-[#efcb19]');
    }
    if(num == 5){
        wrapper11.children.item(6).classList.remove('hidden');
        wrapper11.children.item(1).children.item(4).classList.add('border-[#efcb19]');
        wrapper11.children.item(1).children.item(4).classList.add('text-[#efcb19]');
    }
}