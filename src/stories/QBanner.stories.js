import { action } from '@storybook/addon-actions';
import { QBanner } from 'quasar';

export default {
  title: 'Quasar/Banner',
  component: QBanner,
  argTypes: {
    'inline-actions': {
      name: 'inline-actions',
      type: { name: 'boolean', required: false },
      description: 'Display actions on same row as content',
      defaultValue: false,
      control: 'boolean',
      table: {
        category: 'Content',
      },
    },
    dense: {
      name: 'dense',
      type: { name: 'boolean', required: false },
      description: 'Display actions on same row as content',
      defaultValue: false,
      control: 'boolean',
      table: {
        category: 'Style',
      },
    },
    rounded: {
      name: 'rounded',
      type: { name: 'boolean', required: false },
      description:
        'Applies a small standard border-radius for a squared shape of the component',
      defaultValue: false,
      control: 'boolean',
      table: {
        category: 'Style',
      },
    },
    dark: {
      name: 'dark',
      type: { name: 'boolean', required: false },
      description: 'Notify the component that the background is a dark color',
      defaultValue: false,
      control: 'boolean',
      table: {
        category: 'Style',
      },
    },
  },
};
const Template = (args) => ({
  components: { QBanner },
  setup() {
    return { args };
  },
  template:
    '<q-banner v-bind="args"><template v-slot:avatar><q-icon name="signal_wifi_off" color="primary" /></template>A conexão com a internet foi perdida. Este app está offline.<template v-slot:action><q-btn flat color="primary" label="Turn on Wifi" @click="action"/></template></q-banner>',
  methods: {
    action: action('clicked!'),
  },
});
export const Standard = Template.bind({});
