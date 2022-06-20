import React from 'react';
import { ListingComponent } from './ListingComponent';
import { withDesign } from 'storybook-addon-designs';

export default {
    title: 'Example/ListingComponent',
    component: ListingComponent,
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
        labelText: {
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
                    summary: 'sass/base/_base.scss sass/base/_typography.scss sass/abstracts/_mixins.scss sass/cards.scss sass/vendor/_bootstrap.scss',
                },
            },
            control: {
                type: null,
            }
        }
    },
};

const Template = (args) => <ListingComponent {...args} />;

export const ImageLeft = Template.bind({});
ImageLeft.args = {
    variant: 'Image left',
};

ImageLeft.parameters = {
    docs: {
        description: {
            component: "<h3>Cards in a listing view allow quick scanning of results or signposts - with the goal of swiftly getting users to the content they want to see.</h3><p><h4>Guidance:</h4>For displaying a connected list of related content at the bottom of a page. On smaller devices all cards are discoverable unlike card decks so users can browse without having to interact. Please use the card deck as an alternative if the cards are in context with the content on the page or the cards are related and have a similar theme to the content but have no sense of order.</p><p><h4>Dependancies:</h4> Bootstrap 4.1.3, Intersection Observer API (lazy loading)</p><p><h4>Styles:</h4> <code class='highlighter-rouge'>sass/base/_base.scss</code> <code class='highlighter-rouge'>sass/base/_typography.scss</code> <code class='highlighter-rouge'>sass/abstracts/_mixins.scss</code> <code class='highlighter-rouge'>sass/_cards.scss</code> <code class='highlighter-rouge'>sass/vendor/_bootstrap.scss</code></p>",
        },
    }
}