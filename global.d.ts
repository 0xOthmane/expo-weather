declare module '*.png' {
  const value: import('react-native').ImageSourcePropType;
  export default value;
}

declare module '*.jpg' {
  const image: import('react-native').ImageSourcePropType;
  export default image;
}

declare module "*.ttf" {
  const font: import("expo-font").FontSource;
  export default font;
}