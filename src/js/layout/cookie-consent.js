$(document).ready(function () {

    window.addEventListener("load", function () {
        window.cookieconsent.initialise({
            "palette": {
                "popup": {
                    "background": "rgba(0, 0, 0, .75)"
                }
            },
            "theme": "classic",
            "content": {
                "href": "/cookie-policy/"
            }
        });
    });
});


