$(document).ready(function () {

    if ($('#localBanner').length || $('#globalBanner').length) {

        var showGlobalBanner = true;

        if ($('#localBanner').length) {
            var localId = $('#closeLocalBanner').attr("data-banner-id");
            checkSessionStorage(localId, 'local');
        }

        if ($('#globalBanner').length) {
            if (showGlobalBanner) {
                var globalId = $('#closeGlabalBanner').attr("data-banner-id");
                checkSessionStorage(globalId, 'global');
            }
        }

    }

    //Check if banner is in session storage
    function checkSessionStorage(bannerId, bannerType) {
        var hideBannersStorage = sessionStorage.getItem('hideBanners');
        var showBanner = true;

        if (hideBannersStorage) {
            // Parse the serialised data back into an array of objects
            array = JSON.parse(sessionStorage.getItem('hideBanners')) || [];

            array.forEach(function (item, index, array) {
                if (item.id === bannerId) {
                    showBanner = false;
                    return;
                }
            });
        }

        if (showBanner && bannerType === 'local') {
            $('#localBanner').removeClass("d-none");
            showGlobalBanner = false;
        } else if (showBanner && bannerType === 'global') {
            $('#globalBanner').removeClass("d-none");
            $("p").css("background-color");
        }
    }

    //Close the banner and store in session
    $("#closeGlabalBanner, #closeLocalBanner").click(function () {

        var data = { "id": $(this).attr("data-banner-id") };
        var closedBanners = [];

        closedBanners = JSON.parse(sessionStorage.getItem('hideBanners')) || [];
        closedBanners.push(data);
        sessionStorage.setItem('hideBanners', JSON.stringify(closedBanners));

        //$(this).parent().hide();
    });

});