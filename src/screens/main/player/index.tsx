import React, { useEffect } from "react";
import Template from "@templates/main/player";
import useGoTo from "@hooks/useGoTo";
import { DataShareService } from "@services/data-share.service";
import { IAPIMediaCaption, IAPIMediaContent } from "@interfaces/api_interfaces/media";
import { ContentProgress } from "@services/content-progress.service";

const PlayerScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [loading, setLoading] = React.useState(false);
  const goTo = (name: string) => useGoTo(navigation, route, false, name);
  const [apiContent, setApiContent] = React.useState<IAPIMediaContent[]>();
  const [apiCaptions, setApiCaptions] = React.useState<IAPIMediaCaption[]>();
  const [data, setData] = React.useState<any>({});
  const [playerStatus, setPlayerStatus] = React.useState<any>();
  const [updateCounter, setUpdateCounter] = React.useState<number>(0);

  const [apiCurrentContent, setApiCurrentContent] = React.useState<IAPIMediaContent>();

  useEffect(() => {
    const data = DataShareService.getData('play_content');
    if (data?.data?.content?.length) {
      setApiContent(data.data.content);
      setApiCaptions(data.data.captions);
      onSelectContent(data.data?.content?.[0]);
    } else {
      goTo('back');
    }

    return () => {};
  }, []);

  const onSelectContent = (content) => {
    setApiCurrentContent(content);
  };

  useEffect(() => {
    if (apiCurrentContent) {
      setData({
        url: apiCurrentContent.url,
        start: ContentProgress.getContentById(apiCurrentContent.id)?.progress?.ms || 0
      });
    }
  }, [apiCurrentContent]);

  const onPress = (item: any) => { };

  const onPlayerChange = (sts) => {
    let count = updateCounter + 1;
    if (count > 5) {
      ContentProgress.update(apiCurrentContent, {
        duration: sts.durationMillis,
        ms: sts.positionMillis
      });
      count = 0;
    }
    setUpdateCounter(count);
    setPlayerStatus(sts);
  };

  return (
    <Template onPress={onPress} loading={loading} data={data} goTo={goTo} onPlayerChange={onPlayerChange} />
  );
};

export default PlayerScreen;
