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


// Subscribe card
(function () {

    var cardSubs = $('#card-subscription'),
        footer = $(".footer-main"),
        cardSubsClose = cardSubs.find('.card-subscribe-close');

    $(window).scroll(function () {

        var footerHeight = footer.height(),
            docHeight = $(document).height(),
            delta = docHeight - footerHeight,
            userPos = $(window).scrollTop(),
            checkPoint = (delta - (userPos + 105));

        if ($(window).height() > 600 && $(window).width() > 767) {

            if (checkPoint < 160) {
                cardSubs.addClass('isShown');
            } else {
                cardSubs.removeClass('isShown');
            }

        }

    });

    cardSubsClose.click(function () {
        cardSubs.addClass('isRemoved');
    })


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