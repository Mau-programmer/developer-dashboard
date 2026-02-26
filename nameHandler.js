const nameInp = document.getElementById('nameInp');
const nameBtn = nameInp.nextElementSibling;
const greetingsText = document.getElementById('greetings');
const container = document.getElementById('namecontainer');
const cookieFuncs = {
    setCookie: (name, value, daysToLive) => {
        const date = new Date();
        date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`
    },
    deleteCookie: (name) => {
        setCookie(name, null, null);
    },
    getCookie: (name) => {
        const cDecoded = decodeURIComponent(document.cookie);
        const cArray = cDecoded.split("; ");
        let result = null;

        cArray.forEach(element => {
            if (element.indexOf(name) == 0) {
                result = element.substring(name.length + 1)
            }
        })
        return result;
    }
}

nameBtn.onclick = () => {
    let value = nameInp.value;

    if (!value) {
        nameInp.classList.add('incorrect')
        nameInp.disabled = true;
        setTimeout(() => {
            nameInp.classList.remove('incorrect')
            nameInp.disabled = false;
            return;
        }, 1000);
    }
    container.style.display = 'none';
    cookieFuncs.setCookie("name", value, 80000);

}
window.addEventListener("load", (event) => {
    if (cookieFuncs.getCookie("name")) {
        let name = cookieFuncs.getCookie("name");
        greetingsText.innerText = `Hello ${name}!`;
        container.style.display = 'none';
    }
});


