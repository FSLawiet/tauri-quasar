import { within, userEvent } from '@storybook/testing-library';
import { action } from '@storybook/addon-actions';
import { QAjaxBar } from 'quasar';

export default {
  title: 'Quasar/AjaxBar',
  component: QAjaxBar,
  argTypes: {
    reverse: {
      name: 'reverse',
      type: { name: 'boolean', required: false },
      description: 'Reverse direction of progress',
      defaultValue: false,
      control: 'boolean',
      table: {
        category: 'Behaviour',
      },
    },
    'skip-hijack': {
      name: 'skip-hijack',
      type: { name: 'boolean', required: false },
      description: 'Skip Ajax hijacking (not a reactive prop)',
      defaultValue: false,
      control: 'boolean',
      table: {
        category: 'Behaviour',
      },
    },
    'hijack-filter': {
      name: 'hijack-filter',
      type: { name: 'function', required: false },
      description: 'Filter which URL should trigger start() + stop()',
      table: {
        category: 'Behaviour',
      },
    },
    position: {
      name: 'position',
      type: { name: 'string', required: false },
      description:
        'Position within window of where QAjaxBar should be displayed',
      defaultValue: 'top',
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      table: {
        category: 'Style',
      },
    },
    size: {},
    color: {},
  },
};
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { QAjaxBar },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<q-ajax-bar v-bind="args" @start="start" @stop="stop"/>',
  methods: {
    start: action('start'),
    stop: action('stop'),
  },
});
export const Standard = Template.bind({});
Standard.args = {
  position: 'bottom',
  color: 'accent',
  size: '10px',
};
Standard.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
