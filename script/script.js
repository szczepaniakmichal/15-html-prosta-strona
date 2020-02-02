const str = document.querySelector('p').textContent;
console.log(str);

let count = 0;

for (i = 0; i < str.length; i++) {
    if (str.charAt(i) === "a") {
        count++;
    }
}

console.log(count);


// setTimeout(() => {
//     let head  = document.getElementsByTagName('head')[0];
//     let link  = document.createElement('link');
//     // link.id   = cssId;
//     link.rel  = 'stylesheet';
//     link.type = 'text/css';
//     link.href = 'css/style.css';
//     link.media = 'all';
//     head.appendChild(link);
// }, 8000);



