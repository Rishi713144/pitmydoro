interface PrimaryColor {
  default: string;
  dark: string;
}

interface SecondaryColor {
  default: string;
  dark: string;
}

interface BackgroundColor {
  session: string;
  shortBreak: string;
  longBreak: string;
}

interface TeamColors {
  primary: PrimaryColor;
  secondary: SecondaryColor;
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
  colors: TeamColors;
}
