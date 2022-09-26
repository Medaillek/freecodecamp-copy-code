document.addEventListener("click", (e) =>{
    if(e.target.localName == 'code') {
        console.log(e.target.innerText)
        navigator.clipboard.writeText(e.target.innerText);
    }
})

