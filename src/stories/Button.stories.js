import React from 'react';
import { Button } from './Button';

//for (let value of Object.values(Button)) {
//    console.log(value);
//}

const code = '<a class="btn--action">Become a member</a>'

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
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;


export const Action = Template.bind({});
Action.args = {
    buttonType: 'action',
    label: 'Become a member',
};

export const Outline = Template.bind({});
Outline.args = {
    buttonType: 'outline',
    label: 'Become a member',
};

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
