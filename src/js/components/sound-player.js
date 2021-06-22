$(document).ready(function () {

    if ($('.audio-player').length) {
        $('.audio-player').each(function (index) {

            var audioId = '#' + $(this).attr('id');
            //new GreenAudioPlayer(audioId, { stopOthersOnPlay: true, showDownloadButton: true });

            GreenAudioPlayer.init({
                selector: audioId,
                stopOthersOnPlay: true,
                showDownloadButton: false
            });

        });
    }

});