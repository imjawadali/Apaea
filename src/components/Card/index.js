import React, { Component } from 'react';
import { Image, View } from 'react-native';
import {
  Card,
  CardItem,
  Text,
  Button,
  Left,
  Body,
  Right,
  Separator,
  Row,
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

import { ActionButton, CHeading } from '../Utilities';
import CommonStyles, { DynamicM, DynamicP, DynamicHeight, TColors, DynamicFntW, DynamicFntSize, DynamicColor } from '../Styles';

renderPartnerCardLogo = props => {
  switch (props) {
    case "partner-1":
      return (
        <Image style={{ width: 117, height: 90, resizeMode: "contain" }} source={require('../../assets/images/partner-1.png')}></Image>
      )
      break;
    case "partner-2":
      return (

        <Image style={{ width: 117, height: 90, resizeMode: "contain" }} source={require('../../assets/images/partner-2.png')}></Image>
      )

      break;
    case "partner-3":
      return (
        <Image style={{ width: 117, height: 90, resizeMode: "contain" }} source={require('../../assets/images/partner-3.png')}></Image>
      )

      break;
    case "partner-4":
      return (
        <Image style={{ width: 117, height: 90, resizeMode: "contain" }} source={require('../../assets/images/partner-4.png')}></Image>
      )

      break;
    case "partner-5":
      return (
        <Image style={{ width: 117, height: 90, resizeMode: "contain" }} source={require('../../assets/images/partner-5.png')}></Image>
      )

      break;
    case "partner-6":
      return (
        <Image style={{ width: 117, height: 90, resizeMode: "contain" }} source={require('../../assets/images/partner-6.png')}></Image>
      )

      break;

    default:
      break;
  }

}

CactionCardItemHeading = text => {
  return (
    <Text style={{ color: '#2E619A', fontWeight: '700' }}>
      {text}
    </Text>
  )
}

CactionCardItemtext = text => {
  return (
    <Text style={[{ color: '#2e2e2e', }, DynamicM(3, 10, 0, 0)]}>
      {text}
    </Text>
  )
}
CTwoColText = (firstLabel, firstText, secondLabel, secondText) => {
  return (
    <View style={[CommonStyles.row, { width: "100%", justifyContent: "space-between" }, DynamicM(3, 10, 0, 0)]}>
      <View style={[{}, CommonStyles.row, CommonStyles.vc,]}>
        <Text >
          {firstLabel}
        </Text>
        <Text style={[DynamicM(0, 0, 0, 5)]}>
          {firstText}
        </Text>
      </View>
      <View style={[{}, CommonStyles.row, CommonStyles.vc]}>
        <Text >
          {secondLabel}

        </Text>
        <Text style={[DynamicM(0, 0, 0, 5)]}>
          {secondText}
        </Text>
      </View>
    </View>
  )
}
CBlogPostTitle = title => {
  return (
    <Text style={[{ color: '#2e2e2e', }, DynamicFntSize(18), DynamicFntW("700"), DynamicM(3, 10, 0, 0), DynamicP(0, 0, 10, 0)]}>
      {title}
    </Text>
  )
}
renderCardBody = props => {
  switch (props.type) {
    case "actionCard":
      return (
        <Body>
          {CactionCardItemHeading("Title :")}
          {CactionCardItemtext(props.title)}


          {CactionCardItemHeading("Main Author :")}
          {CactionCardItemtext(props.author)}

          <View
            style={[{
              flexDirection: 'row',
              paddingHorizontal: 8,
              paddingVertical: 12,
              justifyContent: 'space-between',
              alignItems: 'center',
              borderColor: '#707070',
              borderWidth: .5,
              borderRadius: 8,
              width: "100%"
            }, DynamicM(3, 10, 0, 0)]}
          >
            {CactionCardItemHeading("Abstract :")}


            <View style={{
              width: 10, height: 15, borderWidth: 1, borderColor: "#2E619A"
            }}>

            </View>

          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
            <ActionButton
              textColor={"white"}
              btnText={"Download"}
              style={{
                borderRadius: 5,
                height: 45,
                padding: 0,
                width: "49%",
                borderColor: "white",
                color: "white",
                backgroundColor: TColors.bgSecondary
              }}

              icon={"download"}
            ></ActionButton>
            <ActionButton
              style={{
                borderRadius: 5,
                height: 45,
                padding: 0,
                width: "49%",
                borderColor: "white",
                color: "white",
                backgroundColor: TColors.bgSecondary
              }}
              icon={"reply"}
              textColor={"white"}
              btnText={"Reply"}

            ></ActionButton>
          </View>
        </Body>
      )
      break;
    case 'eventCard':
      return (
        <Body>
          {this.CBlogPostTitle(props.title)}
          {this.CTwoColText("Manager:", props.manager, "Price:", props.price)}
          {this.CTwoColText("Accomodation:", props.accomodation, "Food:", props.food)}
          {this.CTwoColText("Transportation:", props.transport, "Discount:", props.discount)}
          {this.CTwoColText("Total:", props.total)}
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
            <ActionButton
              textColor={"white"}
              btnText={"Register"}
              style={{
                borderRadius: 5,
                height: 45,
                padding: 0,
                width: "100%",
                borderColor: "white",
                color: "white",
                backgroundColor: TColors.bgSecondary
              }}
            ></ActionButton>

          </View>
        </Body>

      )
      break;

    case 'blogPostCard':
      return (
        <Body>

          {this.CBlogPostTitle(props.title)}


          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
            <ActionButton
              textColor={"white"}
              btnText={"Read More"}
              style={{
                borderRadius: 5,
                height: 30,
                padding: 10,
                width: 120,
                borderColor: "white",
                color: "white",
                backgroundColor: TColors.bgSecondary
              }}
            ></ActionButton>

          </View>
        </Body>
      )
      break;
    case "partnerCard":
      return (
        <Body style={[CommonStyles.vhc]}>
          {this.renderPartnerCardLogo(props.img)}
        </Body>
      )
      break;
    default:
      <Text>Card Type Not selected </Text>
      break;
  }
}
//Button
const CCard = props => {

  return (

    <Card style={[{
      flex: 1,
      flexDirection: 'row',
      padding: 5,
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 25,
      borderColor: '#707070',
      borderWidth: 5,
      borderRadius: 8,
      backgroundColor: "transparent"

    }, CommonStyles.noShadow,]}>

      <CardItem>
        {this.renderCardBody(props)}
      </CardItem>



    </Card >
  );
};
const CPartnerCard = props => {

  return (
    <View style={[{
      flex: 1,
      height: "auto",
      margin: 5,
    }, CommonStyles.vbhc]}>
      <Card style={[{

        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 25,
        height: 130,
        borderColor: '#707070',
        borderWidth: 5,
        borderRadius: 8,
        backgroundColor: "transparent"

      }, CommonStyles.noShadow,]}>
        <CardItem>
          {this.renderCardBody(props)}
        </CardItem>
      </Card >
      <Text style={[{ height: 50, color: TColors.primaryColor }, DynamicFntSize(14), CommonStyles.textCenter]}>{props.title}</Text>
    </View >
  );
};

const CBreadCrumb = props => {
  return (
    <Separator
      style={[
        {
          flexDirection: 'row',
          padding: 10,
          height: 'auto',
          borderBottomColor: '#c5c5c5',
          borderBottomWidth: 1,
          justifyContent: 'center',
        },
        props.style !== undefined ? props.style : {},
      ]}>
      {props.left !== false ? (
        <CardItem
          style={[DynamicM(0, 0, 0, 0), DynamicP(0, 0, 0, 0), { flex: 2 }]}>
          <Left>
            <Body style={{ flex: 1, justifyContent: 'flex-start' }}>
              <Text
                style={[CommonStyles.cardTitle, CommonStyles.uppercase]}
                numberOfLines={1}>
                {props.text}
              </Text>
              {/* <Text
                style={[CommonStyles.cardSubTitle, CommonStyles.uppercase]}
                numberOfLines={1}>
                <Text
                  style={[CommonStyles.cardSubTitle, CommonStyles.uppercase]}
                  numberOfLines={1}>
                  {props.text}
                </Text>
                <Text
                  style={[CommonStyles.cardSubTitle, CommonStyles.uppercase]}
                  numberOfLines={1}>
                  {props.text}
                </Text>
                <Text
                  style={[CommonStyles.cardSubTitle, CommonStyles.uppercase]}
                  numberOfLines={1}>
                  {props.text}
                </Text>
              </Text>
             */}
            </Body>
          </Left>
          {props.right !== false ? (
            <Right>
              <Button transparent>
                <Text>View All</Text>
                <Icon name="right" size={15} color="black" />
              </Button>
            </Right>
          ) : null}
        </CardItem>
      ) : (
          <Text
            style={{
              fontSize: 18,
              textTransform: 'uppercase',
              fontWeight: '700',
              color: props.color,
            }}
            numberOfLines={1}>
            {props.text}
          </Text>
        )}
    </Separator>
  );
};
//Product card
const CPCard = props => {

  return (
    <>
      <CardItem
        cardBody
        style={[
          CommonStyles.vhc,
          props.Imagestyle != undefined ? props.Imagestyle : {},
          { paddingTop: 40 },
        ]}>
        <Image
          resizeMode={'contain'}
          source={{
            uri: props.item.ImageURL_Thumb,
          }}
          style={{ height: 150, width: 150 }}
        />
      </CardItem>

      <CardItem>
        <Left>
          <Body>
            <Text style={{ color: '#2e2e2e', fontWeight: '700' }}>
              {props.item.Name}
            </Text>
            <Text>
              <Text style={{ color: '#2e2e2e', fontWeight: '700' }}>
                £{props.item.DiscountPrice}
              </Text>
              <Text
                style={[
                  {
                    color: 'red',
                    fontWeight: '700',
                    textDecorationColor: 'blue',
                    textDecorationLine: 'line-through',
                    paddingLeft: 10
                  },
                  DynamicP(0, 0, 0, 20),
                ]}>
                £{props.item.SellingPrice}
              </Text>
            </Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent>
            <Cart size={25} color={'#377CE1'} />
          </Button>
        </Left>
        <Right>
          <Button transparent>
            <Icon name="hearto" size={20} color="#ed5565" />
          </Button>
        </Right>
      </CardItem>
    </>
  );
};

// const CBreadCrumb = props => {

//   return (
//     <Card style={{}}>
//       <CardItem
//         style={[{
//           justifyContent: 'center',
//           alignItems: 'center',
//         },props.style != undefined ? props.style :{}]}>
//         <Text
//           style={{fontSize: 18,textTransform:'uppercase', fontWeight: '700', color: props.color}}
//           numberOfLines={1}>
//           {props.text}
//         </Text>
//       </CardItem>
//     </Card>
//   );
// };

export { CCard, CBreadCrumb, CPCard, CPartnerCard };
