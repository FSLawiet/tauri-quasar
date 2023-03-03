import { within, userEvent } from '@storybook/testing-library';
import { action } from '@storybook/addon-actions';
import { QBtnGroup } from 'quasar';

export default {
  title: 'Quasar/ButtonGroup',
  component: QBtnGroup,
  argTypes: {
    spread: {
      name: 'spread',
      type: { name: 'boolean', required: false },
      description: 'Spread horizontally to all available space',
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Content' },
    },
    stretch: {
      name: 'stretch',
      type: { name: 'boolean', required: false },
      description:
        "When used on flexbox parent, buttons will stretch to parent's height",
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Content' },
    },
    outline: {
      name: 'outline',
      type: { name: 'boolean', required: false },
      description: "Use 'outline' design for buttons",
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Style' },
    },
    flat: {
      name: 'flat',
      type: { name: 'boolean', required: false },
      description: "Use 'flat' design for buttons",
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Style' },
    },
    unelevated: {
      name: 'unelevated',
      type: { name: 'boolean', required: false },
      description: 'Remove shadow on buttons',
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Style' },
    },
    rounded: {
      name: 'rounded',
      type: { name: 'boolean', required: false },
      description:
        'Applies a more prominent border-radius for squared shape buttons',
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Style' },
    },
    square: {
      name: 'square',
      type: { name: 'boolean', required: false },
      description: 'Removes border-radius so borders are squared',
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Style' },
    },
    push: {
      name: 'push',
      type: { name: 'boolean', required: false },
      description: "Use 'push' design for buttons",
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Style' },
    },
    glossy: {
      name: 'glossy',
      type: { name: 'boolean', required: false },
      description: 'Applies a glossy effect',
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Style' },
    },
  },
};

const Template = (args) => ({
  components: { QBtnGroup },
  setup() {
    return { args };
  },
  template:
    '<div class="q-pa-md q-gutter-y-md column items-start"><q-btn-group v-bind="args"><q-btn color="secondary" label="First" @click="action"/><q-btn color="secondary" label="Second" @click="action"/><q-btn color="secondary" label="Third" @click="action"/><q-btn color="secondary" label="Fourth" @click="action"/></q-btn-group></div>',
  methods: {
    action: action('clicked!'),
  },
});
export const Standard = Template.bind({});
Standard.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText('First'));
  await userEvent.click(canvas.getByText('Second'));
  await userEvent.click(canvas.getByText('Third'));
  await userEvent.click(canvas.getByText('Fourth'));
};
