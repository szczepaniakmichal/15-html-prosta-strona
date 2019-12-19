// console.log("działa");
//
// const p = document.createElement('p');
// p.textContent = 'Hello word!';
// window.document.body.appendChild(p);


const checkk = () => {
    let getEl = [...document.querySelectorAll("input")];
    // console.log(getEl);
    let howManyInputs = 0;

    getEl.forEach(e => {
        if (e.checked) {
            e.checked = false;
        }
        else if (e.checked === false) {
            e.checked = true;
        }
        if (e.value === '') {
            e.value = "przykładowy text";
        }
        howManyInputs++;
    });
    console.log(howManyInputs);
};










document.querySelector("#content-dane-fatca-8768550871eca148a120addb7ff2b478 > form > div > div.panel-navigation.align-bottom.text-right > button.btn.btn-submit.btn-dalej").addEventListener("click", function() {console.log("bleeeee"));

function() {
    alert('I am anonymous');
}

const zzz = function() {
    alert('I am anonymous');
};

zzz()

document.querySelector("#content-dane-fatca-8768550871eca148a120addb7ff2b478 > form > div > div.panel-navigation.align-bottom.text-right > button.btn.btn-submit.btn-dalej").addEventListener("click", zzz);





