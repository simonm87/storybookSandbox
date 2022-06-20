import React from 'react';
import { Button } from './Button';


export default {
  title: 'Example/Button',
  component: Button,
  //parameters: {
  //docs: {
  //  source: {
  //      code
  //      }
  //  }
  //},
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => <Button {...args} />;


export const Action = Template.bind({});
Action.args = {
  buttonType: 'action',
  label: 'Become a member',
};

Action.parameters = {
  docs: {
    description: {
      component: "<h3>We use buttons to initiate an action, indicate choice or control for the user and to link content contextually.</h3><p><h4>Guidance:</h4>There are varying levels of emphasis that match each button type to their purpose. Action buttons are used for primary actions and business goals.</p><p><h4>Dependancies:</h4> Bootstrap 4.1.3</p><p><h4>Styles:</h4> <code class='highlighter-rouge'>sass/base/_base.scss</code> <code class='highlighter-rouge'>sass/base/_typography.scss</code> <code class='highlighter-rouge'>sass/abstracts/_mixins.scss</code> <code class='highlighter-rouge'>sass/_buttons.scss</code> <code class='highlighter-rouge'>sass/vendor/_bootstrap.scss</code></p>",
    },
  }
}

export const Outline = Template.bind({});
Outline.args = {
  buttonType: 'outline',
  label: 'Get the latest news',
};

Outline.parameters = {
  docs: {
    description: {
      component: "<h3>We use buttons to initiate an action, indicate choice or control for the user and to link content contextually.</h3><p><h4>Guidance:</h4>There are varying levels of emphasis that match each button type to their purpose. Outline buttons are used for user tasks and controls.</p><p><h4>Dependancies:</h4> Bootstrap 4.1.3</p><p><h4>Styles:</h4> <code class='highlighter-rouge'>sass/base/_base.scss</code> <code class='highlighter-rouge'>sass/base/_typography.scss</code> <code class='highlighter-rouge'>sass/abstracts/_mixins.scss</code> <code class='highlighter-rouge'>sass/_buttons.scss</code> <code class='highlighter-rouge'>sass/vendor/_bootstrap.scss</code></p>",
    },
  }
}

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
