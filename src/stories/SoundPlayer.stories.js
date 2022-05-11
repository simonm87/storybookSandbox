import React from 'react';
import { Alternator } from './Alternator';
import { withDesign } from 'storybook-addon-designs';
import { SoundPlayer } from './SoundPlayer';
import soundFile from '../media/tawnyOwl.mp3'

export default {
    title: 'Example/Sound Player',
    component: SoundPlayer,
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

const Template = (args) => <SoundPlayer {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: 'Default',
};

Default.parameters = {
    docs: {
        description: {
            component: "<h3>We use the right, left alternator to visually demonstrate features and benefits and describe the appearance and behaviour of trees, woods and wildlife.</h3><p><h4>Guidance:</h4>This component relies on the bootstrap responsive grid system and uses <code class='highlighter- rouge'>.col-md-8</code> and <code class='highlighter- rouge'>.col-lg-7</code> for both image and copy columns. The copy column also uses offset to overlay it over the image on larger devices with <code class='highlighter- rouge'>.offset-lg-5</code> and <code class='highlighter- rouge'>.offset-md-4</code>. Alternator image ratio is 16:9 with a maximum crop size of 690px x 388px on medium devices (e.g iPad portrait). We do implement srcset to define a list of different images along with size information so that browsers can pick the most appropriate image based on the actual device's resolution. Lazy loading images is achieved via Intersection Observer API.  </p><p><h4>Dependancies:</h4> Bootstrap 4.1.3, Intersection Observer API (lazy loading)</p><p><h4>Styles:</h4> <code class='highlighter-rouge'>sass/base/_base.scss</code> <code class='highlighter-rouge'>sass/base/_typography.scss</code> <code class='highlighter-rouge'>sass/abstracts/_mixins.scss</code> <code class='highlighter-rouge'>sass/_alternator.scss</code> <code class='highlighter-rouge'>sass/vendor/_bootstrap.scss</code></p> ",
        },
    },
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/evEb4d2dF2cyrzz8tG5LQq/Core-Components?node-id=98%3A1926',
    }
}