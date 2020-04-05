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
import { View, StyleSheet } from 'react-native';

export default class SvgExample extends React.Component {
    render() {
        return (
            <View
                style={[
                    StyleSheet.absoluteFill,
                    { alignItems: 'center', justifyContent: 'center' },
                ]}>
                <Svg
                    width={this.props.width}
                    height={this.props.height}
                    fill={this.props.color}
                    viewBox="0 0 84.875 63.857">




                    <G id="Group_1686" data-name="Group 1686" transform="translate(-144.976 -20.962)">
                        <G id="Group_1685" data-name="Group 1685" transform="translate(-27.344 17.466)">
                            <Path id="Path_6830" data-name="Path 6830" d="M169.713,16.282a6.393,6.393,0,1,0-6.395-6.391A6.391,6.391,0,0,0,169.713,16.282Z" transform="translate(39.9 0)" fill="#377ce1" />
                            <Path id="Path_6831" data-name="Path 6831" d="M229.137,6.758l-1.082-.005c-.368,0-.735.007-1.1.012v0l0,0a8.525,8.525,0,0,0-3.32.362l-.606.052a14.533,14.533,0,0,0-3.32.4c-.274.016-.55.029-.823.041-.385.009-.8-.176-1.132.179a1.522,1.522,0,0,0-.909.2c-.122.019-.24.038-.361.055a5.312,5.312,0,0,0-2.619.633,4.316,4.316,0,0,0-1.732.257.566.566,0,0,0-.523.136,3.014,3.014,0,0,0-1.22.319c-.3.123-.606.248-.906.371a2.731,2.731,0,0,0-1.506.442l-.007-.01a2.382,2.382,0,0,0-1.379.423,2.568,2.568,0,0,0-1.27.419,2.956,2.956,0,0,0-1.291.459,3.419,3.419,0,0,0-1.506.525,6.774,6.774,0,0,0-2.649,1.448.5.5,0,0,0-.186.055c-1.108.052-1.786.906-2.645,1.424-.064.031-.128.062-.2.093a4,4,0,0,0-1.308.868c-.378-.016-.59.283-.866.462a2.075,2.075,0,0,0-.92.8,2.261,2.261,0,0,0-1.308.8l-1.265.966c-.3.205-.656.321-.845.663-.141.293-.65.214-.657.647a19.007,19.007,0,0,0-3.986,4.334h0v0h.005a1.217,1.217,0,0,0-.6.9,1.008,1.008,0,0,0-.054.2,6.686,6.686,0,0,0-1.7,2.414,1.474,1.474,0,0,0-.456.859q-.334.427-.668.856c-.259.166-.361.642-.82.418q-.644-.965-1.289-1.933a3.324,3.324,0,0,0-.915-1.751l-.635-.621a1.092,1.092,0,0,0-.69-.9c-.076-.138-.15-.276-.224-.414a1.329,1.329,0,0,0-.657-.832c-.387-.725-1.123-1.082-1.691-1.62h0c.028-.487-.421-.621-.669-.9l-.638-.423a.531.531,0,0,0-.478-.594,3.549,3.549,0,0,0-1.446-1.344,3.288,3.288,0,0,0-1.153-.871.972.972,0,0,0-.588-.423,32.412,32.412,0,0,0-5.541-3.434,5.018,5.018,0,0,0-1.472-.7,2.236,2.236,0,0,0-1.141-.571c-.483-.228-.971-.442-1.444-.687a24.915,24.915,0,0,0-3.982-1.449v0c-.15-.038-.3-.078-.45-.117a1.6,1.6,0,0,0-1.527-.286.111.111,0,0,0-.066-.14,4.043,4.043,0,0,0-1.446-.493c-.466-.642-1.16-.28-1.744-.4a1.886,1.886,0,0,0-1.116-.4c-1.232-.557-2.6-.369-3.869-.711a1.1,1.1,0,0,0-1.111-.078c.074.48.449.545.794.644.026.309.205.378.474.3.138.1.274.192.411.285l.676.392.06.05.079-.009a2.1,2.1,0,0,0,1.149.663,6.522,6.522,0,0,0,1.955,1.061,4.625,4.625,0,0,0,1.56.854q2.071,1.095,4.136,2.193c.452.192.8.6,1.313.651.147.145.292.29.437.435a18.69,18.69,0,0,0,2.79,1.774c.293.217.585.437.877.654l.7.623c.651.744,1.708.956,2.3,1.769a7.818,7.818,0,0,0,1.567,1.536h0c.371.359.745.714,1.116,1.072a2.793,2.793,0,0,0,.97,1.059,37.122,37.122,0,0,0,2.523,2.906c0,.169.016.331.2.411l.7,1.066c-.041.147.05.2.166.242a3.194,3.194,0,0,0,.664,1.132c.072.074.147.15.223.223a.133.133,0,0,0,.043.15c.076.745.733,1.242.856,1.969a8.793,8.793,0,0,0,.832,2.652v.005h0l.031-.047-.031.048c.076.354-.043.749.223,1.066l0,.014a5.92,5.92,0,0,0,.9,2.588,14.242,14.242,0,0,0,1.286,3.5,15.335,15.335,0,0,0,1.808,3.691.173.173,0,0,0,.143.236,11.168,11.168,0,0,0,1.751,3.125,1.218,1.218,0,0,0,.49.783c.219.288.438.581.657.871.2.932.982,1.46,1.51,2.162.079.081.155.16.236.242a15.419,15.419,0,0,0,2.787,3.075,1.257,1.257,0,0,0,.871.687c.093.625.611.816,1.077,1.063.06.074.124.148.186.221a6.092,6.092,0,0,0,1.612,1.249c.506.364,1.015.728,1.52,1.094a.318.318,0,0,0,.209.047c.233.405.661.506,1.049.669a3.738,3.738,0,0,0,1.563.846,17.878,17.878,0,0,0,4.586,1.941c.354.414.87.312,1.318.428a.151.151,0,0,0,.155.047c.088.072.174.147.259.221a.687.687,0,0,0,.954.091c.117-.109-.114-.286-.314-.3-.205-.085-.407-.174-.613-.257a.95.95,0,0,0-.664-.609c-.223-.148-.445-.292-.664-.438-.195-.319-.587-.29-.852-.49-.064-.209-.245-.207-.411-.228-.035-.552-.552-.64-.877-.909a4.463,4.463,0,0,0-1.108-.954,38.872,38.872,0,0,0-3.068-2.92c-.128-.1-.262-.2-.393-.3a.084.084,0,0,0-.021-.128q-1.33-1.853-2.659-3.7a17.222,17.222,0,0,0-1.627-3.111h0a8.7,8.7,0,0,0-.707-1.927c-.176-.649-.354-1.294-.53-1.941q-.287-1.431-.576-2.864v-3.4c.347-.594.138-1.272.307-1.9.376-1.415.654-2.856.971-4.288.016-.195.028-.39.043-.588.745-.174.545-.913.818-1.37.126-.511.583-.908.506-1.487a1.559,1.559,0,0,0,.619-1.115c.6-.067.371-.544.435-.875l0,.024c.469.04.621-.368.782-.644.547-.94,1.254-1.751,1.881-2.626.271-.252.59-.469.6-.894.071-.076.138-.15.212-.224l3.282-3.278q2.164-1.776,4.331-3.549c.388-.128.764-.269.725-.789a.257.257,0,0,0,.162-.048.8.8,0,0,0,.846-.416c.459-.283,1.042-.369,1.372-.858a8.572,8.572,0,0,0,2.14-1.329c.569-.288,1.251-.411,1.563-1.065,1.227-.083,2.185-.837,3.263-1.292a3.934,3.934,0,0,0,1.52-.687l.64-.228a5.538,5.538,0,0,0,1.746-.652h0l0,0c.442-.167.947-.114,1.348-.407a.228.228,0,0,0,.169-.045q1.211-.419,2.426-.835.875-.21,1.746-.421l2.416-.611c.866-.167,1.8.005,2.585-.538.247.021.5.085.687-.15l0,0v0a5.246,5.246,0,0,0,1.763-.233l.095.016.083-.038v0a1.877,1.877,0,0,0,1.147-.185Z" transform="translate(26.909 2.332)" fill="#f67321" />
                            <Path id="Path_6832" data-name="Path 6832" d="M156.025,23.5a12.3,12.3,0,0,1-1.883,6.613,12.991,12.991,0,0,1-4.83,4.646,11.811,11.811,0,0,1-3.725,1.281,29.064,29.064,0,0,1-4.645.319H133.31l4.865-21.087H145a20.463,20.463,0,0,1,4.86.467,9.109,9.109,0,0,1,2.976,1.261,7.172,7.172,0,0,1,2.372,2.684A8.348,8.348,0,0,1,156.025,23.5Zm-5.694.5a5.356,5.356,0,0,0-.537-2.485,4.089,4.089,0,0,0-1.641-1.678,4.793,4.793,0,0,0-1.04-.432,7.329,7.329,0,0,0-1.209-.22c-.433-.037-.929-.057-1.486-.057h-1.64L139.666,32.5h2.249a12.789,12.789,0,0,0,1.514-.072,8.5,8.5,0,0,0,1.351-.226,6.593,6.593,0,0,0,1.322-.524,7.2,7.2,0,0,0,3.133-3.13A9.6,9.6,0,0,0,150.331,24Z" transform="translate(43.536 18.069)" fill="#377ce1" />
                            <Path id="Path_6833" data-name="Path 6833" d="M210.49,15.277,200.247,36.364H194.4l-.908-13.989-6.832,13.989h-6.069l-.962-21.087h5.684l.04,14.506,7.069-14.506h5.434l.643,14.5,6.446-14.5Z" transform="translate(39.212 18.069)" fill="#377ce1" />
                        </G>
                    </G>




                </Svg>
            </View>
        );
    }
}
