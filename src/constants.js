import { generate, grommet, dark } from 'grommet/themes';
import { hpe } from 'grommet-theme-hpe';
import { aruba } from 'grommet-theme-aruba';
import { hp } from 'grommet-theme-hp';
import { dxc } from 'grommet-theme-dxc';
import { v1 } from 'grommet-theme-v1';
import { deepMerge } from 'grommet/utils';

import { ColorBuilder, BasicForm } from './components/forms';

export const forms = {
  Colors: {
    name: 'Colors',
    desc: "Modify the theme's colors",
    Component: ColorBuilder,
    themeArea: 'global.colors',
  },
  Button: {
    name: 'Button',
    desc: 'Modify default button theme properties',
    Component: BasicForm,
    themeArea: 'button',
  },
  Calendar: {
    name: 'Calendar',
    desc: 'Modify default calendar theme properties',
    Component: BasicForm,
    themeArea: 'calendar',
  },
  Global: {
    name: 'Global',
    desc: 'Modify global properties',
    Component: BasicForm,
    themeArea: 'global',
  },
  Anchor: {
    name: 'Anchor',
    desc: 'Modify default anchor theme properties',
    Component: BasicForm,
    themeArea: 'anchor',
  },
  Checkbox: {
    name: 'Checkbox',
    desc: 'Modify default checkbox theme properties',
    Component: BasicForm,
    themeArea: 'checkbox',
  },
  Tabs: {
    name: 'Tabs',
    desc: 'Modify default tab theme properties',
    Component: BasicForm,
    themeArea: 'tab',
  },
  Table: {
    name: 'Table',
    desc: 'Modify default table theme properties',
    Component: BasicForm,
    themeArea: 'table',
  },
  DataTable: {
    name: 'Data.Table',
    desc: 'Modify default DataTable theme properties',
    Component: BasicForm,
    themeArea: 'dataTable',
  },
};

const base = generate();
const grommetTheme = deepMerge(base, grommet);
const darkTheme = deepMerge(base, dark);
const hpeTheme = deepMerge(base, hpe);
const hpTheme = deepMerge(base, hp);
const arubaTheme = deepMerge(base, aruba);
const dxcTheme = deepMerge(base, dxc);
const v1Theme = deepMerge(base, v1);


export const themes = {
  base,
  grommet: grommetTheme,
  dark: darkTheme,
  hpe: hpeTheme,
  hp: hpTheme,
  aruba: arubaTheme,
  dxc: dxcTheme,
  v1: v1Theme,
};
