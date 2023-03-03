import { QAvatar } from 'quasar';

export default {
  title: 'Quasar/Avatar',
  component: QAvatar,
  argTypes: {
    icon: {
      name: 'icon',
      type: { name: 'string', required: false },
      description:
        'Icon name following Quasar convention; Make sure you have the icon library installed unless you are using "img:" prefix; If "none" (String) is used as value then no icon is rendered (but screen real estate will still be used for it)',
      control: 'text',
      table: {
        category: 'Content',
      },
    },
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      description:
        'Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)',
      control: 'text',
      table: {
        category: 'Style',
      },
    },
    'font-size': {
      name: 'font-size',
      type: { name: 'string', required: false },
      description:
        'The size in CSS units, including unit name, of the content (icon, text)',
      control: 'text',
      table: {
        category: 'Style',
      },
    },
    color: {
      name: 'color',
      type: { name: 'string', required: false },
      description: 'Color name for component from the Quasar Color Palette',
      control: 'text',
      table: {
        category: 'Style',
      },
    },
    'text-color': {
      name: 'text-color',
      type: { name: 'string', required: false },
      description:
        'Overrides text color (if needed); Color name from the Quasar Color Palette',
      control: 'text',
      table: {
        category: 'Style',
      },
    },
  },
};
const Template = (args) => ({
  components: { QAvatar },
  setup() {
    return { args };
  },
  template: '<q-avatar v-bind="args" />',
});
const TemplateSlot = (args) => ({
  components: { QAvatar },
  setup() {
    return { args };
  },
  template:
    '<q-avatar v-bind="args" ><img src="https://cdn.quasar.dev/img/avatar.png"></q-avatar>',
});
export const Standard = Template.bind({});
Standard.args = {
  color: 'red',
  'text-color': 'white',
  icon: 'directions',
  size: '55px',
};
export const StandardSlot = TemplateSlot.bind({});
StandardSlot.args = {
  size: '55px',
};
