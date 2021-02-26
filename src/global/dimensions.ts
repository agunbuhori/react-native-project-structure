import { Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default {
    window_width: Dimensions.get('window').width,
    window_height: Dimensions.get('window').height,
    status_bar_height: getStatusBarHeight()
}