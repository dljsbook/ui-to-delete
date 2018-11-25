/* tslint:disable:max-line-length */

export const lighten = (color: string, amount: number) => {
  const [
    h,
    s,
    l,
  ] = color.split(',');
  return `hsl(${h}, ${s}%, ${parseInt(l, 10) + amount}%)`;
};

export const colors = {
  brand: 'hsl(210, 10%, 23%)',
  strongBrand: 'hsl(210, 100%, 68%)',

  categories: [
    [199, 100, 57],
    [33, 100, 50],
  ],

  lilac: '#9d7cbf',
  accent: '#ffb238',
  success: '#37b635',
  warning: '#ec1818',
  ui: {
    bright: '#e0d6eb',
    light: '#f5f3f7',
    whisper: '#fbfafc'
  },
  code: '#fcf6f0',
  gray: {
    dark: 'hsla(270, 17.119554496%, 0%, 0.92)',
    copy: 'hsla(270, 15.797828016000002%, 0%, 0.88)',
    calm: 'rgba(0, 0, 0, 0.54)'
  },
  white: '#fff',
  black: '#212529'
};

