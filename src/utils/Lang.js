import RNRestart from 'react-native-restart';
import {I18nManager} from 'react-native';

export const applyLanguage = lang => () => {
  I18nManager.forceRTL(lang == 'ar');
  setTimeout(() => {
    RNRestart.Restart();
  }, 10);
};
