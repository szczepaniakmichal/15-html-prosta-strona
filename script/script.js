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













