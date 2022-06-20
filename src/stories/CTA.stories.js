import React from 'react';
import { CTA } from './CTA';
import { withDesign } from 'storybook-addon-designs';
import { getByLabelText } from '@testing-library/react';

export default {
    title: 'Example/CTA',
    component: CTA,
    decorators: [withDesign],
    argTypes: {
        variant: {
            table: {
                category: 'Configuration'
            }
        },
        heading: {
            table: {
                category: 'Text'
            }
        },
        paragraphText: {
            table: {
                category: 'Text'
            }
        },
        buttonLabel: {
            table: {
                category: 'Text'
            }
        },
        softActionBackground: {
            table: {
                category: 'Configuration'
            }
        },
        styles: {
            description: 'file paths:',
            table: {
                category: 'dependencies',
                type: {
                    summary: 'sass/base/_base.scss sass/base/_typography.scss sass/abstracts/_mixins.scss sass/_alternator.scss sass/vendor/_bootstrap.scss',
                },
            },
            control: {
                type: null,
            }
        }
    },
};

const Template = (args) => <CTA {...args} />;

export const Overlap = Template.bind({});
Overlap.args = {
    variant: 'Overlap'
};

Overlap.parameters = {
    docs: {
        description: {
            component: "<h3>CTA's encourage people to take action and support us - these should reflect the primary conversion goal for a specific page or journey...</h3><p><h4>Guidance (Overlap):</h4>These can be used as an excerpt CTA's that pull content from their destination page or as a shared CTA. They are designed to be highly visual and disruptive to break the flow of content and demand attention. CTA's are best for presenting imagery of scenic landscapes, dense habitats and crowded spaces.</p><p><h4>Dependancies:</h4> Bootstrap 4.1.3, Intersection Observer API (lazy loading)</p><p><h4>Styles:</h4> <code class='highlighter-rouge'>sass/base/_base.scss</code> <code class='highlighter-rouge'>sass/base/_colours.scss</code> <code class='highlighter-rouge'>sass/base/_typography.scss</code> <code class='highlighter-rouge'>sass/abstracts/_mixins.scss</code> <code class='highlighter-rouge'>sass/_card.scss</code> <code class='highlighter-rouge'>sass/vendor/_bootstrap.scss</code></p>",
        },
    },
    grid: {
        columns: 12,
    }
}


export const ImageLeft = Template.bind({});
ImageLeft.args = {
    variant: 'Image left',
};

ImageLeft.parameters = {
    docs: {
        description: {
            component: "<h3>CTA's encourage people to take action and support us - these should reflect the primary conversion goal for a specific page or journey.</h3><p><h4>Guidance (Text over image):</h4>They are used to capture attention with stunning macro photography and powerful messaging. Use an image where the subject matter is primarily on the left or right, leaving clear space for text to overlay. Macro photography of trees, plants and wildlife is the ideal image type.</p><p><h4>Dependancies:</h4> Bootstrap 4.1.3</p><p><h4>Styles:</h4> <code class='highlighter-rouge'>sass/base/_base.scss</code> <code class='highlighter-rouge'>sass/base/_typography.scss</code> <code class='highlighter-rouge'>sass/abstracts/_mixins.scss</code> <code class='highlighter-rouge'>sass/_buttons.scss</code> <code class='highlighter-rouge'>sass/vendor/_bootstrap.scss</code></p>",
        },
    },
    grid: {
        columns: 12,
    }
}

export const ImageRight = Template.bind({});
ImageRight.args = {
    variant: 'Image right',
};

ImageRight.parameters = {
    docs: {
        description: {
            component: "<h3>CTA's encourage people to take action and support us - these should reflect the primary conversion goal for a specific page or journey.</h3><p><h4>Guidance (Text over image):</h4>They are used to capture attention with stunning macro photography and powerful messaging. Use an image where the subject matter is primarily on the left or right, leaving clear space for text to overlay. Macro photography of trees, plants and wildlife is the ideal image type.</p><p><h4>Dependancies:</h4> Bootstrap 4.1.3</p><p><h4>Styles:</h4> <code class='highlighter-rouge'>sass/base/_base.scss</code> <code class='highlighter-rouge'>sass/base/_typography.scss</code> <code class='highlighter-rouge'>sass/abstracts/_mixins.scss</code> <code class='highlighter-rouge'>sass/_buttons.scss</code> <code class='highlighter-rouge'>sass/vendor/_bootstrap.scss</code></p>",
        },
    },
    grid: {
        columns: 12,
    }
}

export const Soft = Template.bind({});
Soft.args = {
    variant: 'Soft',
    softActionBackground: false
};

Soft.parameters = {
    docs: {
        description: {
            component: "<h3>CTA's encourage people to take action and support us - these should reflect the primary conversion goal for a specific page or journey.</h3><p><h4>Guidance (Soft):</h4>Uses space to remove distractions and create focus around the messaging</p><p><h4>Dependancies:</h4> Bootstrap 4.1.3</p><p><h4>Styles:</h4> <code class='highlighter-rouge'>sass/base/_base.scss</code> <code class='highlighter-rouge'>sass/base/_typography.scss</code> <code class='highlighter-rouge'>sass/abstracts/_mixins.scss</code> <code class='highlighter-rouge'>sass/_buttons.scss</code> <code class='highlighter-rouge'>sass/vendor/_bootstrap.scss</code></p>",
        },
    },
    grid: {
        columns: 12,
    }
}