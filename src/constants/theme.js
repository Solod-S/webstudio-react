export const theme = {
  colors: {
    primaryAccentColor: '#2196f3',
    primaryWhiteColor: '#ffffff',
    primaryBlackColor: '#000000',
    primaryTextColor: '#757575',
    primaryTitleColor: '#212121',
    primaryBgColor: '#f5f4fa',
    secondaryBgColor: '#2f303a',
    thrdBgColor: '#afb1b8',
    labelColor: '#757575',
  },
  breakpoints: {
    beeforeTell: '479px',
    tell: '480px',
    beeforeTablet: '767px',
    tablet: '768px',
    beeforeDesktop: '1199px',
    desktop: '1200px',
  },
  spacing: value => `${4 * value}px`,
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    btn: 'system-ui, sans-serif',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '32px',
    xl: '64px',
  },
  fontWeight: {
    normal: 400,
    bolt: 700,
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
  fontFamily: { roboto: "'Roboto', sans-serif" },
};
