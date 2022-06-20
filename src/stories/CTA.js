import React from 'react';
import PropTypes from 'prop-types';
import '../css/main.css'
import { Button } from '../stories/Button'
import classNames from "classnames";

export const CTA = ({ variant, softActionBackground, paragraphText, heading, buttonLabel, ...props }) => {

    return (
        <div className="container">
            <div className="row clearfix">
                <div className="col-md-12 column">
                    <div>
                        <div className="woodland-trust-spacing">
                            <article>
                                <div
                                    className={classNames({
                                        'ctacard': (variant ? true : false),
                                        'image-left': (variant === 'Image left' ? true : false),
                                        'image-right': (variant === 'Image right' ? true : false),
                                        'overlap': (variant === 'Overlap' ? true : false),
                                        'soft': (variant === 'Soft' ? true : false),
                                        'action': (variant === 'Soft' && softActionBackground ? true : false)
                                    })}
                                >
                                    {variant !== "Soft" ?
                                        <div className="ctacard__skeletal-screen">
                                            <img
                                                className=""
                                                data-src="https://www.woodlandtrust.org.uk//media/49107/aerial-view-of-pepper-wood-at-sunset-wtml-james-reader.jpg?anchor=center&mode=crop&width=1110&height=624&rnd=132489758860000000"
                                                data-srcset="https://www.woodlandtrust.org.uk//media/49107/aerial-view-of-pepper-wood-at-sunset-wtml-james-reader.jpg?anchor=center&mode=crop&width=1110&height=624&rnd=132489758860000000 1110w,
                                                             https://www.woodlandtrust.org.uk//media/49107/aerial-view-of-pepper-wood-at-sunset-wtml-james-reader.jpg?anchor=center&mode=crop&heightratio=0.5621621621621621621621621622&width=930&rnd=132489758860000000 930w,
                                                             https://www.woodlandtrust.org.uk//media/49107/aerial-view-of-pepper-wood-at-sunset-wtml-james-reader.jpg?anchor=center&mode=crop&heightratio=0.5621621621621621621621621622&width=690&rnd=132489758860000000 690w,
                                                             https://www.woodlandtrust.org.uk//media/49107/aerial-view-of-pepper-wood-at-sunset-wtml-james-reader.jpg?anchor=center&mode=crop&heightratio=0.5621621621621621621621621622&width=510&rnd=132489758860000000 510w"
                                                sizes="(min-width: 1200px) 1110px, (min-width: 992px) 930px, (min-width: 768px) 690px, (min-width: 576px) 510px, 100vw"
                                                src="https://www.woodlandtrust.org.uk//media/49107/aerial-view-of-pepper-wood-at-sunset-wtml-james-reader.jpg?anchor=center&mode=crop&width=1110&height=624&rnd=132489758860000000"
                                                title="Aerial view of Pepper Wood at sunset"
                                                alt="Aerial view of Pepper Wood at sunset"
                                                srcSet="https://www.woodlandtrust.org.uk//media/49107/aerial-view-of-pepper-wood-at-sunset-wtml-james-reader.jpg?anchor=center&mode=crop&width=1110&height=624&rnd=132489758860000000 1110w,
                                                        https://www.woodlandtrust.org.uk//media/49107/aerial-view-of-pepper-wood-at-sunset-wtml-james-reader.jpg?anchor=center&mode=crop&heightratio=0.5621621621621621621621621622&width=930&rnd=132489758860000000 930w,
                                                        https://www.woodlandtrust.org.uk//media/49107/aerial-view-of-pepper-wood-at-sunset-wtml-james-reader.jpg?anchor=center&mode=crop&heightratio=0.5621621621621621621621621622&width=690&rnd=132489758860000000 690w,
                                                        https://www.woodlandtrust.org.uk//media/49107/aerial-view-of-pepper-wood-at-sunset-wtml-james-reader.jpg?anchor=center&mode=crop&heightratio=0.5621621621621621621621621622&width=510&rnd=132489758860000000 510w"
                                            />
                                        </div> :
                                        <div></div>
                                    }


                                    <div className="ctacard__body d-flex justify-content-center">
                                        <div className="col-md-10 col-lg-6 text-center">
                                            <h4 className="ctacard__body__title">
                                                {heading}
                                            </h4>
                                            <p className="ctacard__body__summary" />
                                            <p>
                                                {paragraphText}
                                            </p>
                                            <p />
                                            <Button size="large" buttonType="action" label={buttonLabel}></Button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};


CTA.propTypes = {
    variant: PropTypes.oneOf(['Overlap', 'Image left', 'Image right', 'Soft']),
    softActionBackground: PropTypes.bool,
    heading: PropTypes.string.isRequired,
    paragraphText: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired
};


CTA.defaultProps = {
    variant: 'Overlap',
    softActionBackground: false,
    heading: 'Urge Government to set ambitious targets for nature',
    paragraphText: 'Help create a lasting commitment to woods and trees. Create change for our wildlife and climate.',
    buttonLabel: 'Respond now'
};
