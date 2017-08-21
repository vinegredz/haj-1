// On load
(function () {

    var body = document.body,
        spinner = body.querySelector('.spinner');

    body.style.overflow = 'hidden';

    if (document.cookie.indexOf("haj-visited") !== -1) {

        body.classList.add('isLoaded');
        spinner.classList.add('hideSpinner');
        body.style.overflow = '';

    }

    else if (location.pathname === '/') {

        $(function () {
            body.classList.add('isLoadedFirst');
            setTimeout(function () {
                spinner.classList.add('hideSpinner');
                body.style.overflow = '';
            }, 12000);
        });

        document.cookie = "haj-visited";

    }

    else {
        body.classList.add('isLoaded');
        spinner.classList.add('hideSpinner');
        body.style.overflow = '';
    }

})();

// Guide grid
(function () {

    function shuffleCards() {

        var cardsStr = '',
            cardsArrayNew = [],
            itemsToShuffle = document.querySelector('.grid'),
            cardsArray = itemsToShuffle.querySelectorAll('.grid .grid-item');

        for (var i = 0; i < cardsArray.length; i++) {
            cardsArrayNew.push(cardsArray[i].outerHTML);
        }

        cardsArrayNew.sort(function () {
            return 0.5 - Math.random();
        });

        cardsStr += cardsArrayNew.join('');

        itemsToShuffle.innerHTML = cardsStr;

    }

    if (location.pathname === '/guide/') {
        shuffleCards();

        window.addEventListener('resize', function () {
            salvattore.recreateColumns(document.querySelector('.grid'))
        })
    }


})();

// Keep selected tab on page refresh
(function () {

    var tabsLink = $('#tabs-guide a');

    tabsLink.click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    tabsLink.on("shown.bs.tab", function (e) {
        var idLink = $(e.target).attr("href").substr(1);
        window.location.hash = idLink;
        $(window).scrollTop(0);
    });

// on load of the page: switch to the currently selected tab
    var hashLink = window.location.hash;
    $('#tabs-guide a[href="' + hashLink + '"]').tab('show');

})();

// Mailchimp
$(function () {
    $('#subscribe').ajaxChimp({
        language: 'human',
        url: '//helpajew.us15.list-manage.com/subscribe/post?u=3a5d8a35f1453d1efb472b4ef&amp;id=f50e194a6d'
    });
});