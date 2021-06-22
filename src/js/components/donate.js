$(document).ready(function () {

    function updateDonateText(newText) {
        //$('p.wtdonate__extra-text').removeClass('hide-text');
        var donationAmount = $('input.donation-amount-input').val();
        if (donationAmount !== "" && donationAmount <= 0 || isNaN(parseFloat(donationAmount))) {

            $('p.wtdonate__extra-text').html("Please enter a valid donation amount.");
            return;
        }
        $('p.wtdonate__extra-text').html("You are generously donating " + "<span>£" + parseFloat(donationAmount).toFixed(2) + " " + newText + "</span> ");


        if (donationAmount == "") {
            $('p.wtdonate__extra-text').html("");
            $('.wtdonate').removeClass('single');
            $('.wtdonate').removeClass('monthly');
            $('.wtdonate').addClass('empty');
        }
    }

    if ($('.wtdonate').length) {
        var donateText = "";
        $('p.wtdonate__extra-text.hide-text').hide();
        if ($('.wtdonate__suggested-amount-row').hasClass('monthly-donate-text')) {
            $('#donateButton').prop('value', 'Donate monthly');
            donateText = "per month";
            $('.wtdonate__extra-text').removeClass('single');
            $('.wtdonate__extra-text').addClass('monthly');
            $('.wtdonate').removeClass('single');
            $('.wtdonate').removeClass('empty')
            $('.wtdonate').addClass('monthly');
            $('p.wtdonate__extra-text').addClass('hide-text');

            updateDonateText(donateText);
        }
        $('input[name=Frequency]').bind('change', function () {
            var donationAmount = $('input.donation-amount-input').val();
            var sourceCode = "";
            if ($('input[name=Frequency]:checked').val() == "monthly") {

                sourceCode = $('input.monthlySourceCode').val();
                $('input.sourceCode').val(sourceCode);
                var monthlyDonationAmount = $('input.monthlyDefaultAmount').val();

                if (monthlyDonationAmount % 1 != 0) {
                    monthlyDonationAmount = parseFloat(monthlyDonationAmount).toFixed(2);
                }

                $('input.donation-amount-input').val(monthlyDonationAmount);
                donationAmount = $('input.donation-amount-input').val();
                if (donationAmount == 0) {
                    $('input.donation-amount-input').val("");
                }

                if (donationAmount != "") {
                    $('#donateButton').prop('value', 'Donate monthly');
                    donateText = "per month";
                    $('.wtdonate__extra-text').removeClass('single');
                    $('.wtdonate__extra-text').addClass('monthly');
                    $('.wtdonate').removeClass('single');
                    $('.wtdonate').removeClass('empty');
                    $('.wtdonate').addClass('monthly');

                    updateDonateText(donateText);
                }
            }

            if ($('input[name=Frequency]:checked').val() == "single") {
                sourceCode = $('input.singleSourceCode').val();
                $('input.sourceCode').val(sourceCode);
                var singleDonationAmount = $('input.singleDefaultAmount').val();

                if (singleDonationAmount % 1 != 0) {
                    singleDonationAmount = parseFloat(singleDonationAmount).toFixed(2);
                }

                $('input.donation-amount-input').val(singleDonationAmount);
                donationAmount = $('input.donation-amount-input').val();
                if (donationAmount == 0) {
                    $('input.donation-amount-input').val("");
                }

                if (donationAmount != "") {
                    $('#donateButton').prop('value', 'Donate');
                    donateText = "";
                    $('.wtdonate__extra-text').removeClass('monthly');
                    $('.wtdonate__extra-text').addClass('single');
                    $('.wtdonate').removeClass('monthly');
                    $('.wtdonate').removeClass('empty');
                    $('.wtdonate').addClass('single');

                    updateDonateText(donateText);
                }
            }

        });


        $('input.donation-amount-input').bind('change', function () {
            $('p.wtdonate__extra-text').removeClass('hide-text');
            var donationAmount = $('input.donation-amount-input').val();
            if (donationAmount != "") {
                updateDonateText(donateText);
            }
            else {
                $('p.wtdonate__extra-text').html("");
            }

        });
    }

});

//Functions that require Global Scope

//-----------------------------------------------------------------------
//  DONATE AMOUNTS ON SUGGESTED AMOUNT SELECTION
//-----------------------------------------------------------------------

function updateDonateAmount(el, suggestedAmount, amountControlId) {
    //$('#' + amountControlId).val(suggestedAmount);
    //$('input.donation-amount-input').trigger('change');
    //$('input.donation-amount-input').val(suggestedAmount);

    //New method
    if (suggestedAmount % 1 !== 0) {
        suggestedAmount = parseFloat(suggestedAmount).toFixed(2);
    }

    $('#' + amountControlId).val(suggestedAmount);
    $('#' + amountControlId).trigger('change');
    $(el).parent().find('button').attr('aria-pressed', 'false');
    $(el).attr('aria-pressed', 'true');
}

function showSuggestedAmounts(divToShow, divToHide, selectedRadioId) {
    $('#' + divToShow).show();
    $('#' + divToHide).hide();
    $('input[name=Frequency]').trigger('change');

    // Remove highlight from one radio button and highlight selected one
    var $this = $('#' + selectedRadioId);
    $this.closest('.wtdonate__frequency-selection-row').find('div.wtdonate__frequency-selection-item__selected').removeClass('wtdonate__frequency-selection-item__selected');
    $this.closest('.wtdonate__frequency-selection-item').addClass('wtdonate__frequency-selection-item__selected');

    //reset aria-pressed for all amounts in the other section
    $('#' + divToHide).find('button').attr('aria-pressed', 'false');
}
