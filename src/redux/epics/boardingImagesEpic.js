/* eslint-disable camelcase */
import { Alert } from 'react-native';
import { switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { customisedAction } from '../actions';
import {
  GET_BOARDING_IMAGES,
  BOARDING_IMAGES_SUCCESS,
  BOARDING_IMAGES_FAILURE,
  API_ENDPOINTS,
  NETWORK_ERROR_MSG,
  ERROR_MSG,
  UNKNOWN_ERROR_MSG,
} from '../../constants';
import { RestClient } from '../../network/RestClient';

export class boardingImagesEpic {
  static boardingImages = action$ =>
    action$.pipe(
      ofType(GET_BOARDING_IMAGES),
      switchMap(
        async () => {
          try {
            const response = await RestClient.get(API_ENDPOINTS.boardingImages);
            const { status, data: resObj, problem } = response;
            const parsedData = parseData(resObj)
            if (status && status === 200) {
              return customisedAction(BOARDING_IMAGES_SUCCESS, parsedData);
            }
            if (status && (status === 401 || status === 422 || status === 512)) {
              Alert.alert(resObj.message);
              return customisedAction(BOARDING_IMAGES_FAILURE);
            }
            if (problem && problem === NETWORK_ERROR_MSG) {
              return customisedAction(BOARDING_IMAGES_FAILURE);
            }
            Alert.alert(ERROR_MSG);
            return customisedAction(BOARDING_IMAGES_FAILURE);
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log('BoardingImages Unknown Error', error);
            Alert.alert(UNKNOWN_ERROR_MSG);
            return customisedAction(BOARDING_IMAGES_FAILURE);
          }
        }
      )
    );
}

const parseData = data => {
  const uniqueKeys = [];
  const parseDataArray = [];
  for (var i=0; i<data.length; i++) {
    if (uniqueKeys.indexOf(data[i].album_id) <= -1) {
      uniqueKeys.push(data[i].album_id);
      parseDataArray.push({ subData: [] });
    }
    parseDataArray[uniqueKeys.indexOf(data[i].album_id)].subData.push(data[i]);
  }
  return parseDataArray;
};