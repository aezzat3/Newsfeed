import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {AppText} from '../AppText';
import styles from './styles';

let NewsCard = ({news, onPress}) => {
  const {image, title, description} = news;
  return (
    <TouchableOpacity
      style={styles.cardStyle}
      activeOpacity={0.7}
      onPress={onPress}>
      <Image
        source={{uri: image}}
        resizeMode={'cover'}
        style={styles.imgStyles}
      />

      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.description} numberOfLines={2}>
        {description}
      </AppText>
    </TouchableOpacity>
  );
};

NewsCard = React.memo(NewsCard);
export {NewsCard};
