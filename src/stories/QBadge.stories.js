import { QBadge } from 'quasar';

export default {
  title: 'Quasar/Badge',
  component: QBadge,
  argTypes: {
    floating: {
      name: 'floating',
      type: { name: 'boolean', required: false },
      description:
        'Tell QBadge if it should float to the top right side of the relative positioned parent element or not',
      defaultValue: false,
      control: 'boolean',
      table: {
        category: 'Content',
      },
    },
    'multi-line': {
      name: 'multi-line',
      type: { name: 'boolean', required: false },
      description: 'Content can wrap to multiple lines',
      defaultValue: false,
      control: 'boolean',
      table: {
        category: 'Content',
      },
    },
    label: {
      name: 'label',
      type: { name: 'string', required: false },
      description:
        "Badge's content as string; overrides default slot if specified",
      control: 'text',
      table: {
        category: 'Content',
      },
    },
    align: {
      name: 'align',
      type: { name: 'string', required: false },
      description: 'Sets vertical-align CSS prop',
      control: 'select',
      options: ['top', 'middle', 'bottom'],
      table: {
        category: 'Content',
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
    transparent: {
      name: 'transparent',
      type: { name: 'boolean', required: false },
      description:
        'Applies a 0.8 opacity; Useful especially for floating QBadge',
      defaultValue: false,
      control: 'boolean',
      table: {
        category: 'Style',
      },
    },
    outline: {
      name: 'outline',
      type: { name: 'boolean', required: false },
      description: "Use 'outline' design (colored text and borders only)",
      defaultValue: false,
      control: 'boolean',
      table: {
        category: 'Style',
      },
    },
    rounded: {
      name: 'rounded',
      type: { name: 'boolean', required: false },
      description: 'Makes a rounded shaped badge',
      defaultValue: false,
      control: 'boolean',
      table: {
        category: 'Style',
      },
    },
  },
};
const Template = (args) => ({
  components: { QBadge },
  setup() {
    return { args };
  },
  template: '<q-badge v-bind="args"/>',
});
export const Standard = Template.bind({});
Standard.args = {
  color: 'orange',
  'text-color': 'black',
  label: '2',
};
