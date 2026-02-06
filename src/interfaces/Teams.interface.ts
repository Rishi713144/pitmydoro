interface ColorValues {
  default: string;
  dark: string;
}

interface BackgroundColor {
  session: string;
  shortBreak: string;
  longBreak: string;
}

export interface TeamColors {
  primary: ColorValues;
  secondary: ColorValues;
  background: BackgroundColor;
  light: string;
  dark: string;
}

export interface Team {
  name: string;
  id: string;
  logoURL: string;
  spriteURL: string;
  carURL: string;
  year: string;
  colors: TeamColors;
}
