//references Region
import React, { Component } from 'react';
import { View, ActivityIndicator, Image } from 'react-native';
import {
    Container,
    Drawer,
    Button,
    Icon,
    Content,
    Footer,
    FooterTab,
    Left,
    Right,
    Label,
    Text,
} from 'native-base';
import SideBar from '../Sidebar';
import { TColors } from '../../components/Styles';
import CstHeader from '../Headers';
import { connect } from 'react-redux';
import { DrawerActions } from 'react-navigation-drawer';
import ChatIcon from '../../assets/Icons/chatSVG';
import { LoadingButton, RenderOurPeopleDP } from '../../components/Utilities';
import IonIcons from 'react-native-vector-icons/Entypo';
import Peoples from '../../i18n/en/en.ourPeople';

import CommonStyles, {
    DynamicP,
    DynamicFntW,
    DynamicM,
    DynamicBgColor,
    DynamicHeight,
    DynamicBDRadius,
    DynamicBorderPosition,
} from '../../components/Styles';
import { BASE_URL } from '../../constants';

const TabsSize = CommonStyles.fullWidth > 480 ? 100 : 50;

//endregion


class OurPeople extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: true,
        };
    }

    componentDidMount() {
        console.log(this.props.navigation.state.params);
    }

    componentDidUpdate() {
        console.log(this.props.ourPeopleReducer);
    }

    renderContent = () => {
        const { data } = this.props.ourPeopleReducer;
        
    };


    render() {
        const { loading, data } = this.props.ourPeopleReducer;
        return (
            <Container
                style={{
                    backgroundColor: '#E2E9F5',
                }}>
                <CstHeader
                    isMenuRight={true}
                    OpenMenu={() => {
                        this.props.navigation.dispatch(DrawerActions.toggleDrawer());
                    }}
                    Screen={this.props.navigation.state.params.title}
                />
                <View style={{ height: 0 }}>
                    <View
                        style={{
                            height: 200,
                            backgroundColor: TColors.bgColorPrimary,
                        }}></View>
                </View>
                {loading ?
                    <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', marginBottom: 300 }}>
                        <ActivityIndicator size="large" color="white" />
                    </View>
                    : 
                    <Content
                        style={[
                            DynamicM(0, 0, 10, 10),
                            CommonStyles.BoxShadow,
                            {
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                paddingLeft: 10,
                                paddingRight: 10,
                                backgroundColor: 'white',
                            },
                        ]}>
                        
                        {data.map(people =>
                            <View>
                                <View style={[{ flex: 1, }, CommonStyles.hc, DynamicM(15, 0, 0, 0)]}>
                                    <Image style={{ width: 240, height: 240, resizeMode: "contain", borderRadius: 50 }} source={{ uri: `${BASE_URL}/dev/${people.image}`}} ></Image>
                                </View>
                                <Label
                                    style={[DynamicP(10, 10, 0, 0), CommonStyles.textCenter, {
                                        fontSize: 18,
                                    }]}>
                                    {people.name}
                                </Label>
                                {people.description.map(text => 
                                    <Text style={[{ fontSize: 13, lineHeight: 20 }]}>
                                        {text.trim()}
                                    </Text>
                                )}
                            </View>
                        )}

                    </Content>
                }
            </Container >
        );
    }
}

const mapStateToProps = ({ ourPeopleReducer }) => ({ ourPeopleReducer });

export default connect(mapStateToProps, {})(OurPeople);
