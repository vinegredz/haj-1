// On load
(function () {

    var body = document.body,
        spinner = body.querySelector('.spinner');

    body.style.overflow = 'hidden';

    if (document.cookie.indexOf("haj-visited") >= 0) {

        body.classList.add('isLoaded');
        spinner.classList.add('hideSpinner');
        body.style.overflow = '';

    }
    else {

        window.onload = function () {
            body.classList.add('isLoadedFirst');
            setTimeout(function () {
                spinner.classList.add('hideSpinner');
                body.style.overflow = '';
            }, 12000);

        };

        document.cookie = "haj-visited";

    }

})();


$('.btn-skip').on('click', function () {

    document.cookie = "haj-visited";

    location.reload();


});




