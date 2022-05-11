import React from 'react';
import PropTypes from 'prop-types';
import '../css/main.css'
import '../js/components/sound-player.js'
import soundFile from '../media/tawnyOwl.mp3'

/**
 * Primary UI component for user interaction
 */

console.log(soundFile)

export const SoundPlayer = ({ variant, paragraphText, heading, imageCredit, imageURL, backgroundColour, ...props }) => {

    let alternatorRowCols = '';
    let imgCreditClass = '';
    let copyContainerClass = '';
    if (variant === 'Default') {
        alternatorRowCols = 'alternator-row__cols';
        imgCreditClass = 'alternator-row__cols__img-credit'
        copyContainerClass = 'alternator-row__cols offset-lg-5 offset-md-4 alternator-row__alternator-content alternator-row__';
    } else {
        alternatorRowCols = 'alternator-row__cols offset-lg-5 offset-md-4';
        imgCreditClass = 'alternator-row__cols__img-credit alternator-row__cols__img-credit--right'
        copyContainerClass = 'alternator-row__cols  alternator-row__alternator-content alternator-row__align-right';
    }

    var elements = document.getElementsByClassName('sb-show-main');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = backgroundColour;
    }

    return (

                    <div className="container">
                        <div className="row clearfix">
                            <div className="column-3">            <div>
                            </div>
                            </div><div className="column-6">            <div>
                                <div className="three-col-spacing">
                        <div className="audio-player" id="audio_12345">
                            <audio crossOrigin="true">
                                <source src={soundFile} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
                        </div>
                        <p className="audio-caption">Caption goes here</p>
                        <p className="audio-source">Audio: text here</p>
                    </div>
                </div>
                            </div><div className="column-3">            <div>
                            </div>
                            </div>      </div>
                    </div>


       

        


  );
};


SoundPlayer.propTypes = {
  variant: PropTypes.oneOf(['Default']),
  heading: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  imageCredit: PropTypes.string.isRequired,
  paragraphText: PropTypes.string.isRequired
};

SoundPlayer.defaultProps = {
  variant: 'Default',
  heading: 'Pests and diseases',
  paragraphText: 'New tree diseases and insect pests are arriving in the UK each year, affecting tree health. In many areas, high and increasing deer numbers prevent new saplings from establishing and can impact woodland ground flora. This hinders progress with restoration.',
  imageURL: 'https://www.woodlandtrust.org.uk/media/1387/muntjack-deer-wtml-1062471-amy-lewis.jpg?center=0.424,0.46396396396396394&amp;mode=crop&amp;width=635&amp;height=357&amp;rnd=132048886220000000',
  imageCredit: 'Credit: Amy Lewis / WTML'
};


