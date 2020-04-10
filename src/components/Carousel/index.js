import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { Image, View, Dimensions, Text } from 'react-native';
import { DynamicFntSize, DynamicM } from '../Styles';
import { BASE_URL } from '../../constants';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 200;

const CCarousel = props => {
  if (props.type == "image-slider") {
    return (
      <Carousel
        autoplay
        autoplayTimeout={2000}
        loop
        index={0}
        pageIndicatorStyle={{ backgroundColor: '#3C5F8C' }}
        activePageIndicatorStyle={{ backgroundColor: 'white', width: 8, height: 8 }}
        pageSize={BannerWidth}>
        {props.list.map((item, index) => (
          <View style={[{ flex: 1 }]}>
            <View style={{ flex: 8, borderRadius: 10, alignItems: "center", }}>
              <Image style={[{ width: "100%", height: "84%", resizeMode: "contain", resizeMethod: "resize" }]} source={{ uri: `${BASE_URL}/dev/${item.path}`, cache: "force-cache" }} ></Image >

            </View>
          </View>
        ))}
      </Carousel>
    );
  } else if (props.type == "text-slider") {
    return (
      <Carousel
        autoplay
        autoplayTimeout={2000}
        loop
        index={0}
        pageIndicatorStyle={{ backgroundColor: '#3C5F8C', }}
        pageIndicatorContainerStyle={{ position: "absolute", top: 0, right: 10 }}
        activePageIndicatorStyle={{ backgroundColor: 'white', width: 8, height: 8 }}
        showsPageIndicator={false}
        pageSize={BannerWidth}>
        {props.list.map((item, index) => (
          <View style={[{ flex: 1, width: "90%", alignSelf: "center" }]}>
            <Text style={[{ color: "white" }, DynamicFntSize(18)]}>{item.title}</Text>
            <View style={[{ width: "100%", borderBottomColor: "white", borderBottomWidth: 1 }, DynamicM(10, 10, 0, 0)]}></View>
            <Text style={[{ color: "white" }, DynamicFntSize(15)]}>{item.description.replace(/&nbsp;/g, ' ').replace(/  +/g, ' ').trim()}</Text>
          </View>
        ))}
      </Carousel>
    );
  }
};

export { CCarousel };
