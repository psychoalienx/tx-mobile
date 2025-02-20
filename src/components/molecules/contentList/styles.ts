import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginTop: 16,
  },
  title: {
    flexDirection: "row",
    marginBottom: 16,
    marginHorizontal: 28,
  },
  icon: {
    marginRight: 9,
    width: 22,
    height: 22,
  },
  content: {},
  separator: {
    width: 8,
  },
  image: {
    height: '100%',
    resizeMode: 'cover'
  },
  preview_small: {
    borderRadius: 8,
    width: 112,
    height: 165,
    overflow: 'hidden'
  },
  preview_big: {
    borderRadius: 16,
    width: 230,
    height: 315,
    overflow: 'hidden'
  },
  progressBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // margin: 15
  },
  progressBarBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    opacity: 0.5,
    borderRadius: 2,
    zIndex: 1
  },
  progressBarForeground: {
    height: 6,
    borderRadius: 2,
    zIndex: 2,
  }
});
