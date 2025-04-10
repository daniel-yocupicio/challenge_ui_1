import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const baseWidth = 414;
const baseHeight = 896;

export const scaleWidth = (size: number) => (width / baseWidth) * size;
export const scaleHeight = (size: number) => (height / baseHeight) * size;


export const scaleSize = (size: number) => {
  return size * PixelRatio.get();
};
