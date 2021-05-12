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
            component: '<p>The alternator uses a Z shaped pattern, which is the most natural eye movement when scanning web content. We use it as a viewing aid when imagery can descrive or support the copy.</p><p> This component is dependent on: <b>Bootstrap 4.1.3</b></p> ',
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