import { QBar } from 'quasar';

export default {
  title: 'Quasar/Bar',
  component: QBar,
  argTypes: {
    dense: {
      name: 'dense',
      type: { name: 'boolean', required: false },
      description: 'Dense mode; occupies less space',
      defaultValue: false,
      control: 'boolean',
      table: {
        category: 'Props',
      },
    },
    dark: {
      name: 'dark',
      type: { name: 'boolean', required: false },
      description:
        "The component background color lights up the parent's background (as opposed to default behavior which is to darken it); Works unless you specify a CSS background color for it",
      defaultValue: false,
      control: 'boolean',
      table: {
        category: 'Props',
      },
    },
  },
};
const TemplateMacOS = (args) => ({
  components: { QBar },
  setup() {
    return { args };
  },
  template:
    '<div class="q-pa-md q-gutter-sm"><q-bar v-bind="args"><q-btn dense flat icon="local_cafe" /><div class="text-weight-bold">App</div><div class="cursor-pointer gt-md">Arquivo</div><div class="cursor-pointer gt-md">Editar</div><div class="cursor-pointer gt-md">Exibir</div><div class="cursor-pointer gt-md">Janela</div><div class="cursor-pointer gt-md">Ajuda</div><q-space /><q-btn dense flat icon="airplay" class="gt-xs" /><q-btn dense flat icon="battery_charging_full" /><q-btn dense flat icon="wifi" /><div>9:41</div><q-btn dense flat icon="search" /><q-btn dense flat icon="list" /></q-bar><q-bar><q-btn dense flat round icon="lens" size="8.5px" color="red" /><q-btn dense flat round icon="lens" size="8.5px" color="yellow" /><q-btn dense flat round icon="lens" size="8.5px" color="green" /><div class="col text-center text-weight-bold">App</div></q-bar></div>',
});
export const MacOS = TemplateMacOS.bind({});

const TemplateWin = (args) => ({
  component: { QBar },
  setup() {
    return { args };
  },
  template:
    '<q-bar v-bind="args"><div class="cursor-pointer">Arquivo</div><div class="cursor-pointer">Editar</div><div class="cursor-pointer gt-xs">Exibir</div><div class="cursor-pointer gt-xs">Janela</div><div class="cursor-pointer">Ajuda</div><q-space /><q-btn dense flat icon="minimize" /><q-btn dense flat icon="crop_square" /><q-btn dense flat icon="close" /></q-bar>',
});
export const Windows = TemplateWin.bind({});

const TemplateIOS = (args) => ({
  component: { QBar },
  setup() {
    return { args };
  },
  template:
    '<q-bar v-bind="args" class="bg-teal text-white"><q-icon name="signal_cellular_4_bar" /><div>mobi-net</div><div>4G</div><q-icon name="signal_wifi_4_bar" /><q-space /><q-icon name="near_me" /><div>100%</div><q-icon name="battery_full" /></q-bar>',
});
export const IOS = TemplateIOS.bind({});
IOS.args = {
  dense: true,
};

const TemplateAndroid = (args) => ({
  component: { QBar },
  setup() {
    return { args };
  },
  template:
    '<q-bar v-bind="args" class="bg-black text-white"><div>mobi-net</div><q-icon name="email" /><q-space /><q-icon name="bluetooth" /><q-icon name="signal_wifi_4_bar" /><q-icon name="signal_cellular_4_bar" /><div class="gt-xs">100%</div><q-icon name="battery_full" /><div>10:00AM</div></q-bar>',
});
export const Android = TemplateAndroid.bind({});
Android.args = {
  dense: true,
};
