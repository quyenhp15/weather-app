type themeColorsProps = {
  primary: string;
  secondary: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
  backgroundOverlay: string;

  textTitle: string;
  textPrimary: string;
  textSecondary: string;
  textDisabled: string;
  textSupport: string;
  success: string;
  error: string;
  info: string;
  warning: string;

  borderPrimary: string;
  borderSecondary: string;
  shadowPrimary: string;
  iconPrimary: string;
  hoverPrimary: string;

  fontColorSuccess: string;
  fontColorError: string;
  fontColorActive: string;
  fontColorDefault: string;
  borderActive: string;
  borderSuccess: string;
  borderError: string;
  borderDefault: string;
  bgActive: string;
  bgSuccess: string;
  bgError: string;
  bgDefault: string;
};

const grayColor = {
  gray1: '#ffffff',
  gray2: '#fafafa',
  gray3: '#f2f2f2',
  gray4: '#f0f0f0',
  gray5: '#e9e9e9',
  gray6: '#e3e4e5',
  gray7: '#e3e4e6',
  gray8: '#dadce0',
  gray9: '#d6d6d6',
  gray10: '#9A9A9A',
  gray11: '#616161',
  gray12: '#333333',
  gray13: '#000000',
  grey14: '#e1e5e9',
  grey20: '#F9FAFB',
  grey30: '#F0F3F5',
  grey40: '#E4E9EC',
  grey70: '#80888C',
  grey100: '#1C1E20',
};

const blueColor = {
  blue1: '#e6f2ff',
  blue2: '#195AFF',
  blue3: '#1a5aff',
  blue4: '#1616b9',
  blue5: '#f2f6fc',
  blue6: '#1A5AFF',
  blue7: '#E2F0FF',
  blue80: '#00407F',
};

const cyanColor = {
  cyan1: '#1a5a77',
};

const goldColor = {
  gold1: '#fa8c15',
  gold2: '#ff8a00',
};

const redColor = {
  red1: '#ffccc7',
  red2: '#ff4d4f',
  red3: '#f5222d',
  red4: '#CF1322',
  red5: '#FFF1F0',
  red6: '#FFE9EA',
  red10: '#FFF3F4',
  red40: '#FF3742',
  red60: '#C70615',
};

const greenColor = {
  green1: '#3a8814',
  green2: '#E8FCD5',
  green3: '#DDFFE8',
  green4: '#3CCF69',
};

const transparentColor = {
  transparent1: `rgba(0, 0, 0, 0.12)`,
};

export const lightThemeColors: themeColorsProps = {
  // Primary Color
  primary: blueColor.blue2,
  secondary: goldColor.gold1,

  // Background Colors
  backgroundPrimary: grayColor.gray1,
  backgroundSecondary: grayColor.grey20,
  backgroundOverlay: grayColor.gray4,

  // Neutral Colors (Text)
  textTitle: grayColor.grey100,
  textPrimary: grayColor.gray12,
  textSecondary: grayColor.gray10,
  textDisabled: grayColor.gray6,
  textSupport: grayColor.grey70,

  // Functional Colors
  success: greenColor.green2,
  error: redColor.red4,
  warning: goldColor.gold1,
  info: cyanColor.cyan1,

  // Borders
  borderPrimary: grayColor.grey30,
  borderSecondary: grayColor.grey40,
  // Shadows
  shadowPrimary: transparentColor.transparent1,

  // icons
  iconPrimary: blueColor.blue2,

  // hover
  hoverPrimary: blueColor.blue2,

  // Question Panel Button
  fontColorSuccess: greenColor.green1,
  fontColorError: redColor.red40,
  fontColorActive: blueColor.blue2,
  fontColorDefault: grayColor.gray11,
  borderActive: blueColor.blue7,
  borderSuccess: greenColor.green3,
  borderError: redColor.red6,
  borderDefault: grayColor.gray9,
  bgActive: blueColor.blue7,
  bgSuccess: greenColor.green3,
  bgError: redColor.red6,
  bgDefault: grayColor.gray1,
};

export const darkThemeColors: themeColorsProps = {
  // Primary Color
  primary: blueColor.blue2,
  secondary: goldColor.gold1,

  // Background Colors
  backgroundPrimary: grayColor.gray13,
  backgroundSecondary: grayColor.grey100,
  backgroundOverlay: grayColor.gray4,

  // Neutral Colors (Text)
  textTitle: grayColor.grey100,
  textPrimary: grayColor.gray1,
  textSecondary: grayColor.gray3,
  textDisabled: grayColor.grey70,
  textSupport: grayColor.gray10,

  // Functional Colors
  success: greenColor.green2,
  error: redColor.red4,
  warning: goldColor.gold2,
  info: cyanColor.cyan1,

  // Borders
  borderPrimary: grayColor.grey70,
  borderSecondary: grayColor.grey40,

  // Shadows
  shadowPrimary: transparentColor.transparent1,

  //icons
  iconPrimary: grayColor.gray1,

  //hover
  hoverPrimary: grayColor.gray1,

  // Question Panel Button
  fontColorSuccess: greenColor.green1,
  fontColorError: redColor.red40,
  fontColorActive: blueColor.blue2,
  fontColorDefault: grayColor.gray11,
  borderActive: blueColor.blue7,
  borderSuccess: greenColor.green3,
  borderError: redColor.red6,
  borderDefault: grayColor.gray9,
  bgActive: blueColor.blue7,
  bgSuccess: greenColor.green3,
  bgError: redColor.red6,
  bgDefault: grayColor.gray1,
};
