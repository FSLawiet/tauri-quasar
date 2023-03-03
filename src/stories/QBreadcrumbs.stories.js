import { QBreadcrumbs } from 'quasar';
import { stringify } from 'querystring';

export default {
  title: 'Quasar/Breadcrumbs',
  component: QBreadcrumbs,
  argTypes: {
    separator: {
      name: 'separator',
      type: { name: 'string', required: false },
      description: 'The string used to separate the breadcrumbs.',
      defaultValue: '/',
      control: 'text',
      table: { category: 'Content' },
    },
    gutter: {
      name: 'gutter',
      type: { name: 'string', required: false },
      description:
        'The gutter value allows you control over the space between the breadcrumb elements.',
      defaultValue: 'sm',
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      table: { category: 'Content' },
    },
    align: {
      name: 'align',
      type: { name: 'string', required: false },
      description: 'Specify how to align the breadcrumbs horizontally.',
      defaultValue: 'left',
      control: 'select',
      options: ['left', 'center', 'right', 'between', 'around', 'evenly'],
      table: { category: 'Content' },
    },
    'active-color': {
      name: 'active-color',
      type: { name: 'string', required: false },
      description:
        'The color of the active breadcrumb, which can be any color from the Quasar Color Palette',
      defaultValue: 'primary',
      control: 'text',
      table: { category: 'Style' },
    },
    'separator-color': {
      name: 'separator-color',
      type: { name: 'string', required: false },
      description:
        'The color used to color the separator, which can be any color from the Quasar Color Palette',
      control: 'text',
      table: { category: 'Style' },
    },
  },
};
const Template = (args) => ({
  components: { QBreadcrumbs },
  setup() {
    return { args };
  },
  template:
    '<q-breadcrumbs v-bind="args"><q-breadcrumbs-el label="Home" icon="home" /><q-breadcrumbs-el label="Components" icon="widgets" /><q-breadcrumbs-el label="Breadcrumbs" /></q-breadcrumbs>',
});
export const Standard = Template.bind({});
