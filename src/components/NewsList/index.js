import React from 'react';
import styles from './styles';
import News from '../../dummy/News.json';
import {FlatList} from 'react-native';
import {NewsCard} from '../NewsCard';

let NewsList = () => {
  const onPressItem = () => {
    // navigateToScreen({
    //   name: 'OrganizationDetails',
    //   params: {organizationInfo: item},
    // });
  };
  const {data} = News;
  return (
    <FlatList
      data={data}
      keyExtractor={i => i.id + ''}
      renderItem={({item, index}) => (
        <NewsCard news={item} onPress={onPressItem(item)} />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      onEndReachedThreshold={Platform.OS === 'ios' ? 0 : 0.2}
    />
  );
};

NewsList = React.memo(NewsList);
export {NewsList};
