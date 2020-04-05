import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

import React from 'react';
import {View, StyleSheet} from 'react-native';

export default class SvgExample extends React.Component {
  render() {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <Svg
          width={this.props.size}
          height={this.props.size}
          viewBox="0 0 512 512"
          fill={this.props.color}>
          <Path d="m512 502.316406c0 5.050782-4.09375 9.140625-9.144531 9.140625h-493.710938c-5.050781 0-9.144531-4.089843-9.144531-9.140625v-274.285156c0-5.050781 4.09375-9.144531 9.144531-9.144531h18.285157c5.046874 0 9.140624 4.09375 9.140624 9.144531v219.425781c.046876 15.132813 12.300782 27.386719 27.429688 27.429688h384c15.128906-.042969 27.382812-12.296875 27.429688-27.429688v-219.425781c0-5.050781 4.09375-9.144531 9.140624-9.144531h18.285157c5.050781 0 9.144531 4.09375 9.144531 9.144531zm0 0" />
          <Path d="m164.570312 282.886719c0 5.050781-4.09375 9.144531-9.140624 9.144531h-54.859376c-5.046874 0-9.140624-4.09375-9.140624-9.144531v-54.855469c0-5.050781 4.09375-9.144531 9.140624-9.144531h54.859376c5.046874 0 9.140624 4.09375 9.140624 9.144531zm0 0" />
          <Path d="m164.570312 410.886719c0 5.050781-4.09375 9.144531-9.140624 9.144531h-54.859376c-5.046874 0-9.140624-4.09375-9.140624-9.144531v-54.855469c0-5.050781 4.09375-9.144531 9.140624-9.144531h54.859376c5.046874 0 9.140624 4.09375 9.140624 9.144531zm0 0" />
          <Path d="m219.429688 356.03125c0-5.050781 4.09375-9.144531 9.140624-9.144531h54.859376c5.046874 0 9.140624 4.09375 9.140624 9.144531v54.855469c0 5.050781-4.09375 9.144531-9.140624 9.144531h-54.859376c-5.046874 0-9.140624-4.09375-9.140624-9.144531zm0 0" />
          <Path d="m420.570312 282.886719c0 5.050781-4.09375 9.144531-9.140624 9.144531h-54.859376c-5.046874 0-9.140624-4.09375-9.140624-9.144531v-54.855469c0-5.050781 4.09375-9.144531 9.140624-9.144531h54.859376c5.046874 0 9.140624 4.09375 9.140624 9.144531zm0 0" />
          <Path d="m420.570312 410.886719c0 5.050781-4.09375 9.144531-9.140624 9.144531h-54.859376c-5.046874 0-9.140624-4.09375-9.140624-9.144531v-54.855469c0-5.050781 4.09375-9.144531 9.140624-9.144531h54.859376c5.046874 0 9.140624 4.09375 9.140624 9.144531zm0 0" />
          <Path d="m108.800781 158.363281c-1.460937-3.390625-.660156-7.328125 2.011719-9.875l31.175781-31.179687c3.566407-3.589844 3.566407-9.386719 0-12.980469l-56.503906-56.503906c-3.542969-3.566407-3.542969-9.324219 0-12.890625l32.277344-32.273438c3.5625-3.546875 9.324219-3.546875 12.890625 0l56.5 56.5c3.59375 3.566406 9.390625 3.566406 12.984375 0l31.175781-31.175781c2.550781-2.667969 6.488281-3.472656 9.875-2.011719 3.472656 1.382813 5.726562 4.765625 5.667969 8.503906v120.410157c0 5.050781-4.089844 9.144531-9.140625 9.144531h-120.410156c-3.738282.054688-7.121094-2.199219-8.503907-5.667969zm0 0" />
          <Path d="m219.429688 100.03125c-5.050782 0-9.144532 4.09375-9.144532 9.140625v18.285156h-18.285156c-5.050781 0-9.144531 4.09375-9.144531 9.144531 0 5.050782 4.09375 9.144532 9.144531 9.144532h18.285156c10.097656 0 18.285156-8.1875 18.285156-18.289063v-18.285156c0-5.046875-4.09375-9.140625-9.140624-9.140625zm0 0" />
        </Svg>
      </View>
    );
  }
}
