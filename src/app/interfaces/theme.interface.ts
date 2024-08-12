export interface ThemeProperties {
  [key: string]: string;
}

export interface Theme {
  name: string;
  properties: ThemeProperties;
}
