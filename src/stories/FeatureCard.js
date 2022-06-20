import React from 'react';
import PropTypes from 'prop-types';
import '../css/main.css'


/**
 * Primary UI component for user interaction
 */
export const FeatureCard = ({ variant, paragraphText, heading, imageCredit, imageURL, backgroundColour, ...props }) => {

    return (
        <div className="container">
            <div className="row clearfix">
                <div className="col-md-12 column">
                    <div>
                        <article className="" tabIndex={-1}>
                            <div className="feature-card">
                                <div className="feature-card__img-box col-lg-8">
                                    <img
                                        className=""
                                        data-src="https://www.woodlandtrust.org.uk/media/1066/nd-leaves-in-hainault-michael-heffernan-wtml.jpg?anchor=center&mode=crop&width=825&height=464&rnd=132028191030000000"
                                        data-srcset="https://www.woodlandtrust.org.uk/media/1066/nd-leaves-in-hainault-michael-heffernan-wtml.jpg?anchor=center&mode=crop&width=825&height=464&rnd=132028191030000000 740w,
                                https://www.woodlandtrust.org.uk/media/1066/nd-leaves-in-hainault-michael-heffernan-wtml.jpg?anchor=center&mode=crop&heightratio=0.5624242424242424242424242424&width=690&rnd=132028191030000000 690w,
                                https://www.woodlandtrust.org.uk/media/1066/nd-leaves-in-hainault-michael-heffernan-wtml.jpg?anchor=center&mode=crop&heightratio=0.5624242424242424242424242424&width=510&rnd=132028191030000000 510w"
                                        sizes="(min-width: 1200px) 740px, (min-width: 768px) 690px, (min-width: 576px) 510px, 100vw"
                                        src="https://www.woodlandtrust.org.uk/media/1066/nd-leaves-in-hainault-michael-heffernan-wtml.jpg?anchor=center&mode=crop&width=825&height=464&rnd=132028191030000000"
                                        title="Child and parent looking at autumn leaves with magnifying glass"
                                        alt=""
                                        srcSet="https://www.woodlandtrust.org.uk/media/1066/nd-leaves-in-hainault-michael-heffernan-wtml.jpg?anchor=center&mode=crop&width=825&height=464&rnd=132028191030000000 740w,
                                https://www.woodlandtrust.org.uk/media/1066/nd-leaves-in-hainault-michael-heffernan-wtml.jpg?anchor=center&mode=crop&heightratio=0.5624242424242424242424242424&width=690&rnd=132028191030000000 690w,
                                https://www.woodlandtrust.org.uk/media/1066/nd-leaves-in-hainault-michael-heffernan-wtml.jpg?anchor=center&mode=crop&heightratio=0.5624242424242424242424242424&width=510&rnd=132028191030000000 510w"
                                    />
                                </div>
                                <div className="feature-card__body col-md-11 offset-md-1 col-lg-8 offset-lg-4">
                                    <h4 className="feature-card__body__title">
                                        Spot the changing seasons
                                    </h4>
                                    <p className="feature-card__body__card-text">
                                        Have you noticed buds bursting into leaf or fruit ripening in
                                        the hedgerows? Tell us what's happening to the trees around you
                                        and help scientists track the effects of climate change on
                                        wildlife.
                                    </p>
                                    <a
                                        href="https://naturescalendar.woodlandtrust.org.uk/"
                                        className="feature-card__body__card-link"
                                    >
                                        Take part in our Nature's Calendar survey
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>


    );
};


FeatureCard.propTypes = {
    variant: PropTypes.oneOf(['Image left', 'Image right']),
    heading: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    imageCredit: PropTypes.string.isRequired,
    paragraphText: PropTypes.string.isRequired
};

FeatureCard.defaultProps = {
    variant: 'Image left',
    heading: 'Pests and diseases',
    paragraphText: 'New tree diseases and insect pests are arriving in the UK each year, affecting tree health. In many areas, high and increasing deer numbers prevent new saplings from establishing and can impact woodland ground flora. This hinders progress with restoration.',
    imageURL: 'https://www.woodlandtrust.org.ukhttps://www.woodlandtrust.org.uk/media/1387/muntjack-deer-wtml-1062471-amy-lewis.jpg?center=0.424,0.46396396396396394&amp;mode=crop&amp;width=635&amp;height=357&amp;rnd=132048886220000000',
    imageCredit: 'Credit: Amy Lewis / WTML'
};
