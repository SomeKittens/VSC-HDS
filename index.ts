import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Hot Dog Stand';
const colors = {
  black: '#ff0000',
  white: '#aa0000',
  blue: '#cccc00',
  red: '#dddd00',
  green: '#eeee00',
  yellow: '#ffff00'
}

const colorSet: IColorSet = {
  base: {
    background: colors.black,
    foreground: colors.white,
    color1: colors.blue,
    color2: colors.red,
    color3: colors.green,
    color4: colors.yellow
  }
};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
