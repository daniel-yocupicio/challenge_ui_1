import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
    },
    backgroundContainer: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 1,
    },
    contentContainer: {
      flex: 1,
      zIndex: 2,
    },
  });
