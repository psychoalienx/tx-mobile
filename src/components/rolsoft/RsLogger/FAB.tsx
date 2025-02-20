import React, { Component } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Dimensions,
  Image,
  Text
} from "react-native";

export type FabProps = { visible: boolean; onPress: () => void, recording: boolean, count: number };

export default class Fab extends Component<FabProps> {
  panResponder: any;
  state: {
    showDraggable: boolean;
    dropZoneValues: any;
    pan: any;
    position: any;
  };
  freeMode = false;

  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropZoneValues: null,
      pan: new Animated.ValueXY(),
      position: {
        top: Window.height / 2 - CIRCLE_RADIUS,
        left: 0,
      },
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan.x,
          dy: this.state.pan.y,
        },
      ]),
      onPanResponderRelease: (e, gesture) => {
        if (this.state.dropZoneValues) {
          if (this.isDropZone(gesture)) {
            this.setState({
              showDraggable: false,
            });
          } else {
            Animated.spring(this.state.pan, {
              toValue: { x: 0, y: 0 },
            } as any).start();
          }
        } else {
          if (gesture.moveX === 0 && gesture.moveY === 0) {
            this.props.onPress();
          } else {
            if (this.freeMode) {
              this.setState({
                position: {
                  left: gesture.moveX - CIRCLE_RADIUS,
                  top: gesture.moveY - CIRCLE_RADIUS,
                },
              });
              this.state.pan.setValue({ x: 0, y: 0 });
            } else {
              const newX =
                gesture.moveX > Center.x ? Window.width - CIRCLE_RADIUS * 2 : 0;
              const newY =
                gesture.moveY > Window.height - CIRCLE_RADIUS
                  ? Window.height - CIRCLE_RADIUS
                  : gesture.moveY < SafeAreaHeight
                    ? SafeAreaHeight
                    : gesture.moveY;

              this.setState({
                position: {
                  left: newX,
                  top: newY,
                },
              });
              this.state.pan.setValue({ x: 0, y: 0 });
            }
          }
        }
      },
    });
  }

  componentDidUpdate() { }

  isDropZone(gesture) {
    var dz = this.state.dropZoneValues;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }

  setDropZoneValues(event) {
    this.setState({
      dropZoneValues: event.nativeEvent.layout,
    });
  }

  render() {
    return this.props.visible ? (
      <View style={[styles.draggableContainer, this.state.position]}>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[this.state.pan.getLayout(), styles.circle]}
        >
          <View style={[...this.props.recording ? [styles.recording] : []]}>
            <View style={styles.imageContainer}>
              <Image source={require("./rs-logo.png")} style={styles.image} />
            </View>
            {this.props.count > 0 && <View style={styles.countContainer}>
              <Text>{this.props.count}</Text>
            </View>}
          </View>
        </Animated.View>
      </View>
    ) : (
      <></>
    );
  }
}

const CIRCLE_RADIUS = 24;
const Window = Dimensions.get("window");
const Center = { x: Window.width / 2, y: Window.height / 2 };
const SafeAreaHeight = 40;
let styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  dropZone: {
    height: 100,
    backgroundColor: "#2c3e50",
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
  },
  draggableContainer: {
    position: "absolute",
    top: Window.height / 2 - CIRCLE_RADIUS,
    left: Window.width / 2 - CIRCLE_RADIUS,
  },
  circle: {
    backgroundColor: "#333",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    opacity: 0.6,
  },
  imageContainer: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  recording: {
    borderWidth: 3,
    borderRadius: 50,
    borderColor: '#eb445a'
  },
  countContainer: {
    position: 'absolute',
    right: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    width: 22,
    height: 22,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
