import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";
// interface stylesProps {
//   container: (
//     selectedJob: string,
//     item: any
//   ) => ViewStyle | ImageStyle | TextStyle;
//   logoContainer: (
//     selectedJob: string,
//     item: any
//   ) => ViewStyle | ImageStyle | TextStyle;
//   logoImage: ViewStyle | ImageStyle | TextStyle;
//   companyName: ViewStyle | ImageStyle | TextStyle;
//   infoContainer: ViewStyle | ImageStyle | TextStyle;
//   jobName: (
//     selectedJob: string,
//     item: any
//   ) => ViewStyle | ImageStyle | TextStyle;
//   infoWrapper: ViewStyle | ImageStyle | TextStyle;
//   publisher: (
//     selectedJob: string,
//     item: any
//   ) => ViewStyle | ImageStyle | TextStyle;
//   location: ViewStyle | ImageStyle | TextStyle;
// }
const styles = StyleSheet.create<any>({
  container: (selectedJob: string, item: any) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedJob: string, item: any) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: (selectedJob: string, item: any) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedJob: string, item: any) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
