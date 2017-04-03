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


// Skip onload animation
/*$('.btn-skip').on('click', function (e) {
 e.preventDefault();
 document.cookie = "haj-visited";

 location.reload();

 });*/


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


// Masonry grid
function buildMsnrGrid() {

    var msnrGridArray = document.getElementsByClassName('grid');

    for (var i = 0; i < msnrGridArray.length; i++) {

        var msnry = new Masonry(msnrGridArray[i], {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
            percentPosition: true
        });

        imagesLoaded(msnrGridArray[i]).on('progress', function () {
            msnry.layout();
        });

    }

}

window.onload = function () {
    buildMsnrGrid();
};


$('a[data-toggle="tab"]').on('shown.bs.tab', function () {
    buildMsnrGrid();
});


