import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import styles from './styles';
import {Trans} from '../../i18n';
import {LanguageCard} from '..';
import {applyLanguage} from '../../utils/Lang';

const LanguageTemp = () => {
  const data_language = [
    {id: 1, language: 'English', lang: 'en'},
    {id: 2, language: 'Arabic', lang: 'ar'},
  ];

  const [selected, setSelected] = useState(data_language[0]);

  const onPressLang = item => {
    const {lang} = item;
    let selected_lang = lang == 'en' ? 'ar' : 'en';
    Alert.alert(
      '',
      Trans('changelang_msg'),
      [
        {
          text: Trans('ok'),
          onPress: () => applyLanguage(selected_lang),
        },
        {
          text: Trans('cancel'),
          onPress: () => {},
          style: 'destructive',
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={styles.container}>
      {data_language.map(item => (
        <LanguageCard
          key={`option--${item.id}`}
          title={item.language}
          selected={selected && selected.id == item.id}
          onPress={() => {
            setSelected(item);
            onPressLang(item);
          }}
        />
      ))}
    </View>
  );
};

export {LanguageTemp};
