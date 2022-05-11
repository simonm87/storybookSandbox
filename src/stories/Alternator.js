import React from 'react';
import PropTypes from 'prop-types';
import '../css/main.css'
//import '../js/lazy/lazy-loading.js'
import placeHolderImg from '../images/Alternator-100w.jpg';
import medResImg from '../images/Alternator-542w.jpg';
import highResImg from '../images/Alternator-647w.jpg';

/**
 * Primary UI component for user interaction
 */
export const Alternator = ({ variant, paragraphText, heading, imageCredit, imageURL, backgroundColour, ...props }) => {

    let alternatorRowCols = '';
    let imgCreditClass = '';
    let copyContainerClass = '';
    if (variant === 'Image left') {
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
            <div className="row">
                <div className="col-md-12">
                    <article tabIndex="-1">
                        <div className="alternator-row">
                            <div className={alternatorRowCols}>
                                <img src={imageURL} title="Muntjac deer peeking its head out of long grass" alt="" />
                                <figcaption>
                                    <p className={imgCreditClass}>{imageCredit}</p>
                                </figcaption>
                            </div>
                            <div className={copyContainerClass}>
                                <div className="title"><h3>{heading}</h3></div>
                                <h3>Another to test visual checks</h3>
                                <p>{paragraphText}</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};


Alternator.propTypes = {
    variant: PropTypes.oneOf(['Image left', 'Image right']),
    heading: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    imageCredit: PropTypes.string.isRequired,
    paragraphText: PropTypes.string.isRequired
};

Alternator.defaultProps = {
    variant: 'Image left',
    heading: 'Pests and diseases',
    paragraphText: 'New tree diseases and insect pests are arriving in the UK each year, affecting tree health. In many areas, high and increasing deer numbers prevent new saplings from establishing and can impact woodland ground flora. This hinders progress with restoration.',
    imageURL: 'https://www.woodlandtrust.org.uk/media/1387/muntjack-deer-wtml-1062471-amy-lewis.jpg?center=0.424,0.46396396396396394&amp;mode=crop&amp;width=635&amp;height=357&amp;rnd=132048886220000000',
    imageCredit: 'Credit: Amy Lewis / WTML'
};
