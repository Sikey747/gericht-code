const radio = document.querySelectorAll('[type="radio"]');

if (radio.length) {
    radio.forEach(r => {
        r.addEventListener("click", function () {
            radio.forEach(radioElement => {
                if (radioElement !== r) {
                    radioElement.removeAttribute("checked");
                }
            });
            r.setAttribute("checked", "");
        });
    });
}
