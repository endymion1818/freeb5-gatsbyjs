export interface IBaseColorSpec {
  primary: string;
  secondary: string;
}

export interface INeutralColorSpec {
  white: string;
  nearWhite: string;
  light: string;
  medium: string;
  nearDark: string;
  dark: string;
}

export interface ISemanticColorSpec {
  success: string;
  alert: string;
  error: string;
}

export interface IColorSpec {
  base: IBaseColorSpec;
  neutral: INeutralColorSpec;
  semantic: ISemanticColorSpec;
}

export interface IBreakpoint {
  small: string;
  medium: string;
  large: string;
}

export interface ISize {
  zero: string;
  single: string;
  singleplushalf: string;
  double: string;
  triple: string;
  quad: string;
  sextuple: string;
}

export interface ITextalign {
  left: string;
  center: string;
  right: string;
}

export interface IGridalign {
  start: string;
  center: string;
  end: string;
}

export interface IFlexalign {
  start: string;
  center: string;
  end: string;
}

export interface IBorderradius {
  small: string;
  medium: string;
  large: string;
}
