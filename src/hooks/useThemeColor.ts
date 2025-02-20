import Colors from "@constants/colors";
import useColorScheme from "@hooks/useColorScheme";
import { ThemeProps } from "@interfaces/hooks";

export default function useThemeColor(
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
  props?: ThemeProps
) {
  const theme = useColorScheme();
  const colorFromProps = props?.[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}
