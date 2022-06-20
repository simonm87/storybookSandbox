import React from 'react';
import { FeatureCard } from './FeatureCard';
import { withDesign } from 'storybook-addon-designs';

export default {
    title: 'Example/FeatureCard',
    component: FeatureCard,
    decorators: [withDesign],
    argTypes: {
        variant: {
            table: {
                category: 'Configuration'
            }
        },
        backgroundColour: {
            control: 'color',
            table: {
                category: 'Colours'
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
        hyperlink: {
            table: {
                category: 'Text'
            }
        },
        styles: {
            description: 'file paths:',
            table: {
                category: 'dependencies',
                type: {
                    summary: 'sass/base/_base.scss sass/base/_typography.scss sass/abstracts/_mixins.scss sass/_cards.scss sass/vendor/_bootstrap.scss',
                },
            },
            control: {
                type: null,
            }
        }
    },
};

const Template = (args) => <FeatureCard {...args} />;

export const ImageLeft = Template.bind({});
ImageLeft.args = {
    variant: 'Image left',
};

ImageLeft.parameters = {
    docs: {
        description: {
            component: "<h3>Feature cards promote related content that expands on our story, our cause and the difference we make through the work that we do. The goal is to guide users toward an action.</h3><p><h4>How we use it:</h4>Use a feature card to move users forwards in the journey funnel or maintain their position. Avoid using it to move users back to awareness level content if they are already on expansion or action pages.</p><p><h4>Dependancies:</h4> Bootstrap 4.1.3, Intersection Observer API (lazy loading)</p><p><h4>Styles:</h4> <code class='highlighter-rouge'>sass/base/_base.scss</code> <code class='highlighter-rouge'>sass/base/_typography.scss</code> <code class='highlighter-rouge'>sass/abstracts/_mixins.scss</code> <code class='highlighter-rouge'>sass/_cards.scss</code> <code class='highlighter-rouge'>sass/vendor/_bootstrap.scss</code></p>",
        },
    }
}