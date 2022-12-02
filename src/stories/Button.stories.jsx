import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ChoiceButton',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    handleClick:{action :"activate query"},
    onHover:{action: "hovering"},
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Pilotes = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Pilotes.args = {
  primary: true,
  backgroundColor: 'rgba(249, 154, 65, 1)',
  size: "lg",
  label: 'Pilotes',
};

export const Bateaux = Template.bind({});
Bateaux.args = {
  backgroundColor: 'rgba(249, 154, 65, 1)',
  size: "lg",
  label: 'Bateaux',
};

export const Conteneurs = Template.bind({});
Conteneurs.args = {
  backgroundColor: 'rgba(249, 154, 65, 1)',
  size: "lg",
  label: 'Conteneurs',
};

export const Modifier = Template.bind({});
Modifier.args = {
  backgroundColor: 'rgba(249, 154, 65, 1)',
  size: "lg",
  label: 'Modifier',
};
