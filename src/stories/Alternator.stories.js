import React from 'react';
import { Alternator } from './Alternator';
import { withDesign } from 'storybook-addon-designs';

export default {
    title: 'Example/Alternator',
    component: Alternator,
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
        imageURL: {
            table: {
                category: 'Image'
            }
        },
        imageCredit: {
            table: {
                category: 'Image'
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

const Template = (args) => <Alternator {...args} />;

export const ImageLeft = Template.bind({});
ImageLeft.args = {
    variant: 'Image left',
};

ImageLeft.parameters = {
    docs: {
        description: {
            component: '<h3>We use the right, left alternator to visually demonstrate features and benefits and describe the appearance and behaviour of trees, woods and wildlife.</h3><p>Guidance Image - Alternator image ratio is 16: 9 with a maximum crop size of 690px x 388px on medium devices(e.g iPad portrait)</p><p> This component is dependent on: <b>Bootstrap 4.1.3</b></p> ',
        },
    },
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/evEb4d2dF2cyrzz8tG5LQq/Core-Components?node-id=98%3A1926',
    }
}

export const ImageRight = Template.bind({});
ImageRight.args = {
    variant: 'Image right',
};