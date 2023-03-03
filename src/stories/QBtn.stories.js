import { within, userEvent } from '@storybook/testing-library';
import { action } from '@storybook/addon-actions';
import { QBtn } from 'quasar';

export default {
  title: 'Quasar/Button',
  component: QBtn,
  argTypes: {
    loading: {
      name: 'loading',
      type: { name: 'boolean', required: false },
      description:
        'Put button into loading state (displays a QSpinner -- can be overridden by using a "loading" slot)',
      defaultValue: false,
      control: 'boolean',
      table: {
        category: 'State',
      },
    },
    disable: {
      name: 'disable',
      type: { name: 'boolean', required: false },
      description: 'Put component in disabled mode',
      defaultValue: false,
      control: 'boolean',
      table: {
        category: 'State',
      },
    },
    percentage: {
      name: 'percentage',
      type: { name: 'number', required: false },
      description:
        'Percentage (0.0 < x < 100.0); To be used along "loading" prop; Display a progress bar on the background',
      defaultValue: 0,
      control: 'number',
      table: {
        category: 'Behaviour',
      },
    },
    'dark-percentage': {
      name: 'dark-percentage',
      type: { name: 'boolean', required: false },
      description:
        'Progress bar on the background should have dark color; To be used along with "percentage" and "loading" props',
      defaultValue: false,
      control: 'boolean',
      table: {
        category: 'Behaviour',
      },
    },
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      description: 'The text that will be shown on the button',
      defaultValue: 'Button',
      control: 'text',
      table: {
        category: 'Content',
      },
    },
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
    'icon-right': {
      name: 'icon-right',
      type: { name: 'string', required: false },
      description:
        'Icon name following Quasar convention; Make sure you have the icon library installed unless you are using "img:" prefix; If "none" (String) is used as value then no icon is rendered (but screen real estate will still be used for it)',
      control: 'text',
      table: {
        category: 'Content',
      },
    },
    'no-caps': {
      name: 'no-caps',
      type: { name: 'boolean', required: false },
      description:
        'Avoid turning label text into caps (which happens by default)',
      defaultValue: false,
      control: 'boolean',
      table: {
        category: 'Content',
      },
    },
    'no-wrap': {
      name: 'no-wrap',
      type: { name: 'boolean', required: false },
      description: 'Avoid label text wrapping',
      defaultValue: false,
      control: 'boolean',
      table: {
        category: 'Content',
      },
    },
    align: {
      name: 'align',
      type: { name: 'string', required: false },
      description: 'Label or content alignment',
      defaultValue: 'center',
      control: 'select',
      options: ['left', 'center', 'right', 'around', 'between', 'evenly'],
      table: {
        category: 'Content',
      },
    },
    stack: {
      name: 'stack',
      type: { name: 'boolean', required: false },
      description:
        'Stack icon and label vertically instead of on same line (like it is by default)',
      defaultValue: false,
      control: 'boolean',
      table: {
        category: 'Content',
      },
    },
    stretch: {
      name: 'stretch',
      type: { name: 'boolean', required: false },
      description:
        "When used on flexbox parent, button will stretch to parent's height",
      control: 'boolean',
      table: {
        category: 'Content',
      },
    },
    type: {
      name: 'type',
      type: { name: 'string', required: false },
      description:
        "1) Define the button native type attribute (submit, reset, button) or 2) render component with <a> tag so you can access events even if disable or 3) Use 'href' prop and specify 'type' as a media tag",
      defaultValue: 'button',
      control: 'text',
      table: {
        category: 'General',
      },
    },
    tabindex: {
      name: 'tabindex',
      type: { name: 'number', required: false },
      description: 'Tabindex HTML attribute value',
      control: 'number',
      table: {
        category: 'General',
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
    outline: {
      name: 'outline',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: "Use 'outline' design",
      control: 'boolean',
      table: {
        category: 'Style',
      },
    },
    flat: {
      name: 'flat',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: "Use 'flat' design",
      control: 'boolean',
      table: {
        category: 'Style',
      },
    },
    unelevated: {
      name: 'unelevated',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Remove shadow',
      control: 'boolean',
      table: {
        category: 'Style',
      },
    },
    rounded: {
      name: 'rounded',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description:
        'Applies a more prominent border-radius for a squared shape button',
      control: 'boolean',
      table: {
        category: 'Style',
      },
    },
    push: {
      name: 'rounded',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: "Use 'push' design",
      control: 'boolean',
      table: {
        category: 'Style',
      },
    },
    square: {
      name: 'square',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Removes border-radius so borders are squared',
      control: 'boolean',
      table: {
        category: 'Style',
      },
    },
    glossy: {
      name: 'glossy',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Applies a glossy effect',
      control: 'boolean',
      table: {
        category: 'Style',
      },
    },
    fab: {
      name: 'fab',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description:
        'Makes button size and shape to fit a Floating Action Button',
      control: 'boolean',
      table: {
        category: 'Style',
      },
    },
    'fab-mini': {
      name: 'fab-mini',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description:
        'Makes button size and shape to fit a small Floating Action Button',
      control: 'boolean',
      table: {
        category: 'Style',
      },
    },
    padding: {
      name: 'padding',
      type: { name: 'string', required: false },
      description:
        'Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set',
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
    dense: {
      name: 'dense',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Dense mode; occupies less space',
      control: 'boolean',
      table: {
        category: 'Style',
      },
    },
    ripple: {
      name: 'ripple',
      type: { name: 'boolean' | 'object', required: false },
      description:
        'Configure material ripple (disable it by setting it to "false" or supply a config object)',
      defaultValue: true,
      control: 'boolean',
      table: {
        category: 'Style',
      },
    },
    round: {
      name: 'round',
      type: { name: 'boolean', required: false },
      description: 'Makes a circle shaped button',
      control: 'boolean',
      table: {
        category: 'Style',
      },
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QBtn },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<q-btn v-bind="args" @click="action"/>',
  methods: {
    action: action('clicked!'),
  },
});
export const Standard = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Amber = Template.bind({});
export const Brown5 = Template.bind({});
export const DeepOrange = Template.bind({});
export const Purple = Template.bind({});
export const Black = Template.bind({});
Standard.args = {
  color: 'white',
  'text-color': 'black',
  label: 'Standard',
};
Standard.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
};
Primary.args = {
  color: 'primary',
  label: 'Primary',
};
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
};
Secondary.args = {
  color: 'secondary',
  label: 'Secondary',
};
Secondary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
};
Amber.args = {
  color: 'amber',
  glossy: true,
  label: 'Amber',
};
Amber.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
};
Brown5.args = {
  color: 'brown-5',
  label: 'Brown 5',
};
Brown5.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
};
DeepOrange.args = {
  color: 'deep-orange',
  glossy: true,
  label: 'Deep Orange',
};
DeepOrange.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
};
Purple.args = {
  color: 'purple',
  label: 'Purple',
};
Purple.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
};
Black.args = {
  color: 'black',
  label: 'Black',
};
Black.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
};
