import React from 'react';
import PropTypes from 'prop-types';
import '../css/main.css'
//import '../js/lazy/lazy-loading.js'


/**
 * Primary UI component for user interaction
 */
export const ListingComponent = ({ variant, paragraphText, heading, imageCredit, imageURL, backgroundColour, ...props }) => {


    return (
        <div className="container">
            <div className="row clearfix">
                <div className="col-md-12 column">
                    {" "}
                    <div>
                        <div className="woodland-trust-spacing">
                            <div className="list-grid">
                                <ul>
                                    <li>
                                        <a
                                            href="/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/"
                                            className="excerpt-link"
                                            aria-label="A-Z of British trees"
                                        >
                                            <div className="row excerpt-list-card__row">
                                                <div
                                                    className="col-lg-5 excerpt-list-card__image"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://www.woodlandtrust.org.uk/media/4109/hawthorn-blossom-alamy-e14aw6-david-cook.jpg?center=0.5714285714285714,0.32489451476793246&mode=crop&heightratio=0.5617977528089887640449438202&width=100&rnd=132078358680000000")'
                                                    }}
                                                >
                                                    <div
                                                        className="excerpt-list-card__image--bg"
                                                        role="img"
                                                        aria-label="Hawthorn blossom with some flowers yet to bloom"
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://www.woodlandtrust.org.uk/media/4109/hawthorn-blossom-alamy-e14aw6-david-cook.jpg?center=0.5714285714285714,0.32489451476793246&mode=crop&width=445&height=250&rnd=132078358680000000")'
                                                        }}
                                                    />
                                                </div>
                                                <div className="col-lg-7 excerpt-list-card__body">
                                                    <p className="excerpt-list-card__body__category-label">
                                                        Trees woods and wildlife
                                                    </p>
                                                    <h4 className="excerpt-list-card__body__title">
                                                        A-Z of British trees
                                                    </h4>
                                                    <p className="excerpt-list-card__body__summary-paragraph">
                                                        Explore our simple A-Z identification guide to the trees
                                                        of Britain, from natives to naturalised and widely
                                                        planted non-native species. You'll find images, tree
                                                        descriptions and information on where you're likely to
                                                        find them.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/trees-woods-and-wildlife/british-trees/tree-id-app/"
                                            className="excerpt-link"
                                            aria-label="Identify trees with our Tree ID app"
                                        >
                                            <div className="row excerpt-list-card__row">
                                                <div
                                                    className="col-lg-5 excerpt-list-card__image"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://www.woodlandtrust.org.uk/media/43602/woodland-trust-tree-id-app.jpg?anchor=center&mode=crop&heightratio=0.5617977528089887640449438202&width=100&rnd=132120675860000000")'
                                                    }}
                                                >
                                                    <div
                                                        className="excerpt-list-card__image--bg"
                                                        role="img"
                                                        aria-label="Woodland Trust Tree ID App"
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://www.woodlandtrust.org.uk/media/43602/woodland-trust-tree-id-app.jpg?anchor=center&mode=crop&width=445&height=250&rnd=132120675860000000")'
                                                        }}
                                                    />
                                                </div>
                                                <div className="col-lg-7 excerpt-list-card__body">
                                                    <p className="excerpt-list-card__body__category-label">
                                                        Trees woods and wildlife
                                                    </p>
                                                    <h4 className="excerpt-list-card__body__title">
                                                        Identify trees with our Tree ID app
                                                    </h4>
                                                    <p className="excerpt-list-card__body__summary-paragraph">
                                                        <span>
                                                            Download our free Tree ID app for Android and iPhone
                                                            to identify the UK's native and non-native trees. It's
                                                            an A-Z tree guide in your pocket.
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/trees-woods-and-wildlife/british-trees/how-to-identify-trees/"
                                            className="excerpt-link"
                                            aria-label="How to identify trees"
                                        >
                                            <div className="row excerpt-list-card__row">
                                                <div
                                                    className="col-lg-5 excerpt-list-card__image"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://www.woodlandtrust.org.uk/media/1359/identifying-guelder-rose-wtml-1071461-michael-heffernan.jpg?anchor=center&mode=crop&heightratio=0.5617977528089887640449438202&width=100&rnd=132061205580000000")'
                                                    }}
                                                >
                                                    <div
                                                        className="excerpt-list-card__image--bg"
                                                        role="img"
                                                        aria-label="Identifying British trees"
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://www.woodlandtrust.org.uk/media/1359/identifying-guelder-rose-wtml-1071461-michael-heffernan.jpg?anchor=center&mode=crop&width=445&height=250&rnd=132061205580000000")'
                                                        }}
                                                    />
                                                </div>
                                                <div className="col-lg-7 excerpt-list-card__body">
                                                    <p className="excerpt-list-card__body__category-label">
                                                        Trees woods and wildlife
                                                    </p>
                                                    <h4 className="excerpt-list-card__body__title">
                                                        How to identify trees
                                                    </h4>
                                                    <p className="excerpt-list-card__body__summary-paragraph">
                                                        <span>
                                                            All trees have clues and features that can help with
                                                            identification. You just need to know what to look out
                                                            for with our quick guide.
                                                        </span>
                                                        <span />
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/trees-woods-and-wildlife/tree-pests-and-diseases/"
                                            className="excerpt-link"
                                            aria-label="Tree pests and diseases"
                                        >
                                            <div className="row excerpt-list-card__row">
                                                <div
                                                    className="col-lg-5 excerpt-list-card__image"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://www.woodlandtrust.org.uk/media/4140/oak-processionary-moth-caterpillars-feeding-on-leaf-alamy-cnx09f-blickwinkel.jpg?center=0.42040816326530611,0.72183908045977008&mode=crop&heightratio=0.5617977528089887640449438202&width=100&rnd=132100917330000000")'
                                                    }}
                                                >
                                                    <div
                                                        className="excerpt-list-card__image--bg"
                                                        role="img"
                                                        aria-label="Oak processionary moths feeding on oak leaves"
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://www.woodlandtrust.org.uk/media/4140/oak-processionary-moth-caterpillars-feeding-on-leaf-alamy-cnx09f-blickwinkel.jpg?center=0.42040816326530611,0.72183908045977008&mode=crop&width=445&height=250&rnd=132100917330000000")'
                                                        }}
                                                    />
                                                </div>
                                                <div className="col-lg-7 excerpt-list-card__body">
                                                    <p className="excerpt-list-card__body__category-label">
                                                        Trees woods and wildlife
                                                    </p>
                                                    <h4 className="excerpt-list-card__body__title">
                                                        Tree pests and diseases
                                                    </h4>
                                                    <p className="excerpt-list-card__body__summary-paragraph">
                                                        Learn more about the pests and diseases threatening our
                                                        trees. Find out how to spot them, the symptoms and
                                                        outlook, and how you can help.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/trees-woods-and-wildlife/british-trees/ancient-trees/"
                                            className="excerpt-link"
                                            aria-label="Ancient trees"
                                        >
                                            <div className="row excerpt-list-card__row">
                                                <div
                                                    className="col-lg-5 excerpt-list-card__image"
                                                    style={{
                                                        backgroundImage:
                                                            'url("https://www.woodlandtrust.org.uk/media/19220/ancient-beech-tree-wye-valley-alamy-c4xp08-wolstenholme-images.jpg?anchor=center&mode=crop&heightratio=0.5617977528089887640449438202&width=100&rnd=132097268680000000")'
                                                    }}
                                                >
                                                    <div
                                                        className="excerpt-list-card__image--bg"
                                                        role="img"
                                                        aria-label="Ancient beech tree in the Wye Valley"
                                                        style={{
                                                            backgroundImage:
                                                                'url("https://www.woodlandtrust.org.uk/media/19220/ancient-beech-tree-wye-valley-alamy-c4xp08-wolstenholme-images.jpg?anchor=center&mode=crop&width=445&height=250&rnd=132097268680000000")'
                                                        }}
                                                    />
                                                </div>
                                                <div className="col-lg-7 excerpt-list-card__body">
                                                    <p className="excerpt-list-card__body__category-label">
                                                        Trees woods and wildlife
                                                    </p>
                                                    <h4 className="excerpt-list-card__body__title">
                                                        Ancient trees
                                                    </h4>
                                                    <p className="excerpt-list-card__body__summary-paragraph">
                                                        Ancient trees are irreplaceable. Steeped in history,
                                                        these impressive trees have been standing tall for
                                                        hundreds of years and are invaluable homes for wildlife.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


ListingComponent.propTypes = {
    variant: PropTypes.oneOf(['Image left', 'Image right']),
    heading: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    imageCredit: PropTypes.string.isRequired,
    paragraphText: PropTypes.string.isRequired
};

ListingComponent.defaultProps = {
    variant: 'Image left',
    heading: 'Pests and diseases',
    paragraphText: 'New tree diseases and insect pests are arriving in the UK each year, affecting tree health. In many areas, high and increasing deer numbers prevent new saplings from establishing and can impact woodland ground flora. This hinders progress with restoration.',
    imageURL: 'https://www.woodlandtrust.org.uk/media/1387/muntjack-deer-wtml-1062471-amy-lewis.jpg?center=0.424,0.46396396396396394&amp;mode=crop&amp;width=635&amp;height=357&amp;rnd=132048886220000000',
    imageCredit: 'Credit: Amy Lewis / WTML'
};
