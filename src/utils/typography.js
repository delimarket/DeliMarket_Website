import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.666,
  bodyFontFamily: ['Montserrat'],
  headerFontFamily: ['Montserrat'],
  headerWeight: '700',
  bodyWeight: '400',
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['700', '400'],
    },
  ],
});

export default typography;
