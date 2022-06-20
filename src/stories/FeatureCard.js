import React from 'react';
import PropTypes from 'prop-types';
import '../css/main.css'


/**
 * Primary UI component for user interaction
 */
export const FeatureCard = ({ paragraphText, heading, backgroundColour, hyperlink, ...props }) => {

    return (
        <div className="container"
            style={{
                backgroundColor: backgroundColour
            }}
        >
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
                                        {heading}
                                    </h4>
                                    <p className="feature-card__body__card-text">
                                        {paragraphText}
                                    </p>
                                    <a
                                        href="https://naturescalendar.woodlandtrust.org.uk/"
                                        className="feature-card__body__card-link"
                                    >
                                        {hyperlink}
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
    variant: PropTypes.oneOf(['Image left']),
    heading: PropTypes.string.isRequired,
    paragraphText: PropTypes.string.isRequired,
    hyperlink: PropTypes.string.isRequired,
};

FeatureCard.defaultProps = {
    variant: 'Image left',
    heading: 'Spot the changing seasons',
    paragraphText: 'Have you noticed buds bursting into leaf or fruit ripening in the hedgerows? Tell us what is happening to the trees around you and help scientists track the effects of climate change on wildlife.',
    hyperlink: "Take part in our Nature's Calendar survey"
};
