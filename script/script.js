console.log('jest')

setTimeout(() => {
    let head  = document.getElementsByTagName('head')[0];
    let link  = document.createElement('link');
    // link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/style.css';
    link.media = 'all';
    head.appendChild(link);
}, 8000);



