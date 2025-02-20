import * as React from "react";
import styles from "./styles";
import Layout from "@layouts/primary";
import i18n from "@hooks/useLocalize";
import ContentGrid from "@organisms/contentGrid";
import { Video, Audio } from "expo-av";
import { View, Button, Text } from "react-native";
import { useEffect } from "react";
import * as ScreenOrientation from 'expo-screen-orientation';

const Template = ({
  onPress,
  goTo,
  loading,
  data,
  onPlayerChange
}: {
  onPress: any;
  goTo: any;
  loading: boolean;
  data: any;
  onPlayerChange: any;
}) => {
  const [sound, setSound] = React.useState<any>();
  const video = React.useRef<any>(null);
  const [status, setStatus] = React.useState<any>({});
  const [fullscreenStatus, setFullscreenStatus] = React.useState<any>({});

  useEffect(() => {
    if ((data?.url || false) && !status.isPlaying) {
      if (data?.start > 1000) {
        video.current.playFromPositionAsync(data.start);
      } else {
        video.current.playAsync();
      }
      video.current.presentFullscreenPlayer();
    }
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    };
  }, [data]);

  
  useEffect(() => {
    if (fullscreenStatus.fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    } else if(fullscreenStatus.fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    }
  }, [fullscreenStatus]);
  
  const onStatusUpdate = (sts) => {
    onPlayerChange(sts);
    setStatus(sts);
  };

  return (
    <Layout
      style={{ ...styles.container }}
      scroll={false}
      backButton={() => goTo("back")}
    >
      <View style={styles.container}>
        <Video
          ref={video}
          source={{
            uri: data.url,
          }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          isLooping
          useNativeControls={true}
          style={fullscreenStatus.fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT ? styles.videoLandscape : styles.videoPortrait}
          onPlaybackStatusUpdate={onStatusUpdate}
          onFullscreenUpdate={setFullscreenStatus}
        />
      </View>
    </Layout>
  );
};
export default Template;
