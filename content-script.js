function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
};

waitForElm('#description').then( ()=> {
    let code_elem = document.getElementsByTagName('code');

    for (elem of code_elem) {
        elem.classList = `jqsdjfhe`
    }
})

document.addEventListener("click", (e) =>{
    if(e.path[0].className == 'jqsdjfhe') {
        console.log(e.target.innerText)
        navigator.clipboard.writeText(e.target.innerText);
    }

})

