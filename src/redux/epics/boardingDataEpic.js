/* eslint-disable camelcase */
import { Alert } from 'react-native';
import { switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { customisedAction } from '../actions';
import {
  GET_BOARDING_DATA,
  BOARDING_DATA_SUCCESS,
  BOARDING_DATA_FAILURE,
  API_ENDPOINTS,
  NETWORK_ERROR_MSG,
  ERROR_MSG,
  UNKNOWN_ERROR_MSG,
} from '../../constants';
import { RestClient } from '../../network/RestClient';

export class boardingDataEpic {
  static boardingData = action$ =>
    action$.pipe(
      ofType(GET_BOARDING_DATA),
      switchMap(
        async () => {
          try {
            const response = await RestClient.get(API_ENDPOINTS.boardingData);
            const { status, data: resObj, problem } = response;
            if (status && status === 200) {
              if (resObj && resObj.length) {
                console.log(resObj);
                return customisedAction(BOARDING_DATA_SUCCESS, resObj);
              }
              Alert.alert("Unable to fetch boarding data");
              return customisedAction(BOARDING_DATA_FAILURE);
            }
            if (status && (status === 401 || status === 422 || status === 512)) {
              if (resObj && !resObj.success) {
                Alert.alert(resObj.message);
                return customisedAction(BOARDING_DATA_FAILURE);
              }
              Alert.alert(NETWORK_ERROR_MSG);
              return customisedAction(BOARDING_DATA_FAILURE);
            }
            if (problem && problem === NETWORK_ERROR_MSG) {
              Alert.alert(NETWORK_ERROR_MSG);
              return customisedAction(BOARDING_DATA_FAILURE);
            }
            Alert.alert(ERROR_MSG);
            return customisedAction(BOARDING_DATA_FAILURE);
          } catch (error) {
            // eslint-disable-next-line no-console
            console.log('SignIn Unknown Error', error);
            Alert.alert(UNKNOWN_ERROR_MSG);
            return customisedAction(BOARDING_DATA_FAILURE);
          }
        }
      )
    );
}
