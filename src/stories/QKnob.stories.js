import { action } from '@storybook/addon-actions';
import { QKnob } from 'quasar';

export default {
  title: 'Quasar/Knob',
  component: QKnob,
  argTypes: {
    name: {
      name: 'name',
      type: { name: 'string', required: false },
      description:
        'Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL',
      control: 'text',
      table: {
        category: 'Behaviour',
      },
    },
  },
};
const Template = (args) => ({
  components: { QKnob },
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<q-knob v-bind="args" @change="change"/>',
  methods: {
    change: action('change!'),
  },
});
export const Standard = Template.bind({});
Standard.args = {
  size: '50px',
  color: 'orange',
  class: 'q-ma-md',
  'v-model': 33,
};
