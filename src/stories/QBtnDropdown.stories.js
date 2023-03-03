import { within, userEvent } from '@storybook/testing-library';
import { action } from '@storybook/addon-actions';
import { QBtnDropdown } from 'quasar';

export default {
  title: 'Quasar/ButtonDropdown',
  component: QBtnDropdown,
  argTypes: {
    'toggle-aria-label': {
      name: 'toggle-aria-label',
      type: { name: 'string', required: false },
      description: 'aria-label to be used on the dropdown toggle element',
      defaultValue: 'Abrir Menu',
      control: 'text',
      table: { category: 'Accessibility' },
    },
    loading: {
      name: 'loading',
      type: { name: 'boolean', required: false },
      description:
        "Put button into loading state (displays a QSpinner -- can be overridden by using a 'loading' slot)",
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    split: {
      name: 'split',
      type: { name: 'boolean', required: false },
      description: 'Split dropdown icon into its own button',
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    'disable-main-btn': {
      name: 'disable-main-btn',
      type: { name: 'boolean', required: false },
      description: "Disable main button (useful along with 'split' prop)",
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    'disable-dropdown': {
      name: 'disable-dropdown',
      type: { name: 'boolean', required: false },
      description:
        "Disables dropdown (dropdown button if using along 'split' prop)",
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    persistent: {
      name: 'persistent',
      type: { name: 'boolean', required: false },
      description:
        'Allows the menu to not be dismissed by a click/tap outside of the menu or by hitting the ESC key',
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    'no-route-dismiss': {
      name: 'no-route-dismiss',
      type: { name: 'boolean', required: false },
      description:
        "Changing route app won't dismiss the popup; No need to set it if 'persistent' prop is also set",
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    'auto-close': {
      name: 'auto-close',
      type: { name: 'boolean', required: false },
      description:
        'Allows any click/tap in the menu to close it; Useful instead of attaching events to each menu item that should close the menu on click/tap',
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    label: {
      name: 'label',
      type: { name: 'string', required: false },
      description: 'The text that will be shown on the button',
      control: 'text',
      table: { category: 'Content' },
    },
    icon: {
      name: 'icon',
      type: { name: 'string', required: false },
      description:
        "Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)",
      control: 'text',
      table: { category: 'Content' },
    },
    'icon-right': {
      name: 'icon-right',
      type: { name: 'string', required: false },
      description:
        "Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)",
      control: 'text',
      table: { category: 'Content' },
    },
    'no-caps': {
      name: 'no-caps',
      type: { name: 'boolean', required: false },
      description:
        'Avoid turning label text into caps (which happens by default)',
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Content' },
    },
    'no-wrap': {
      name: 'no-wrap',
      type: { name: 'boolean', required: false },
      description: 'Avoid label text wrapping',
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Content' },
    },
    align: {
      name: 'align',
      type: { name: 'string', required: false },
      description: 'Label or content alignment',
      defaultValue: 'center',
      control: 'select',
      options: ['left', 'right', 'center', 'around', 'between', 'evenly'],
      table: { category: 'Content' },
    },
    stack: {
      name: 'stack',
      type: { name: 'boolean', required: false },
      description:
        'Stack icon and label vertically instead of on same line (like it is by default)',
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Content' },
    },
    stretch: {
      name: 'stretch',
      type: { name: 'boolean', required: false },
      description:
        "When used on flexbox parent, button will stretch to parent's height",
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Content' },
    },
    split: {
      name: 'split',
      type: { name: 'boolean', required: false },
      description: 'Split dropdown icon into its own button',
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Content' },
    },
    'dropdown-icon': {
      name: 'dropdown-icon',
      type: { name: 'string', required: false },
      description:
        "Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)",
      control: 'text',
      table: { category: 'Content' },
    },
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      description:
        'Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)',
      control: 'text',
      table: { category: 'Style' },
    },
    outline: {
      name: 'outline',
      type: { name: 'boolean', required: false },
      description: "Use 'outline' design",
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Style' },
    },
    flat: {
      name: 'flat',
      type: { name: 'boolean', required: false },
      description: "Use 'flat' design",
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Style' },
    },
    unelevated: {
      name: 'unelevated',
      type: { name: 'boolean', required: false },
      description: 'Remove shadow',
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Style' },
    },
    rounded: {
      name: 'rounded',
      type: { name: 'boolean', required: false },
      description:
        'Applies a more prominent border-radius for a squared shape button',
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Style' },
    },
    push: {
      name: 'push',
      type: { name: 'boolean', required: false },
      description: "Use 'push' design",
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
    glossy: {
      name: 'glossy',
      type: { name: 'boolean', required: false },
      description: 'Applies a glossy effect',
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Style' },
    },
    fab: {
      name: 'fab',
      type: { name: 'boolean', required: false },
      description:
        'Makes button size and shape to fit a Floating Action Button',
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Style' },
    },
    'fab-mini': {
      name: 'fab-mini',
      type: { name: 'boolean', required: false },
      description:
        'Makes button size and shape to fit a small Floating Action Button',
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Style' },
    },
    padding: {
      name: 'padding',
      type: { name: 'string', required: false },
      description:
        'Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set',
      control: 'text',
      table: { category: 'Style' },
    },
    color: {
      name: 'color',
      type: { name: 'string', required: false },
      description: 'Color name for component from the Quasar Color Palette',
      control: 'text',
      table: { category: 'Style' },
    },
    'text-color': {
      name: 'text-color',
      type: { name: 'string', required: false },
      description:
        'Overrides text color (if needed); Color name from the Quasar Color Palette',
      control: 'text',
      table: { category: 'Style' },
    },
    dense: {
      name: 'dense',
      type: { name: 'boolean', required: false },
      description: 'Dense mode; occupies less space',
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Style' },
    },
    ripple: {
      name: 'ripple',
      type: { name: 'boolean', required: false },
      description:
        "Configure material ripple (disable it by setting it to 'false' or supply a config object)",
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Style' },
    },
    'no-icon-animation': {
      name: 'no-icon-animation',
      type: { name: 'boolean', required: false },
      description:
        'Disables the rotation of the dropdown icon when state is toggled',
      defaultValue: false,
      control: 'boolean',
      table: { category: 'Style' },
    },
    'content-style': {
      name: 'content-style',
      type: { name: 'string', required: false },
      description: 'Style definitions to be attributed to the menu',
      control: 'text',
      table: { category: 'Style' },
    },
    'content-class': {
      name: 'content-class',
      type: { name: 'string', required: false },
      description: 'Class definitions to be attributed to the menu',
      control: 'text',
      table: { category: 'Style' },
    },
  },
};
const Template = (args) => ({
  components: { QBtnDropdown },
  setup() {
    return { args };
  },
  template:
    '<div class="q-pa-md"><q-btn-dropdown v-bind="args"><q-list><q-item clickable v-close-popup @click="onItemClick"><q-item-section><q-item-label>Photos</q-item-label></q-item-section></q-item><q-item clickable v-close-popup @click="onItemClick"><q-item-section><q-item-label>Videos</q-item-label></q-item-section></q-item><q-item clickable v-close-popup @click="onItemClick"><q-item-section><q-item-label>Articles</q-item-label></q-item-section></q-item></q-list></q-btn-dropdown></div>',
  methods: {
    action: action('clicked!'),
  },
});
export const Standard = Template.bind({});
