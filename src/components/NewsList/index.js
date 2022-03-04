import React, {useEffect, useState} from 'react';
import styles from './styles';
import News from '../../dummy/News.json';
import {isEmpty} from 'lodash';
import {findItem} from '../../utils';
import {FlatList} from 'react-native';
import {NewsCard} from '../NewsCard';
import {SearchBox} from '../SearchBox';

let NewsList = () => {
  const [searchWord, setSearchWord] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const {data} = News;

  useEffect(() => {
    if (searchWord) {
      const results = findItem(data, searchWord);
      setSearchResult(results);
    } else {
      setSearchResult([]);
    }
  }, [searchWord]);

  const _news = isEmpty(searchResult) ? data : searchResult;

  const renderSearch = () => {
    return (
      <SearchBox
        value={searchWord}
        onChangeText={text => setSearchWord(text)}
      />
    );
  };

  const onPressItem = () => {
    // navigateToScreen({
    //   name: 'OrganizationDetails',
    //   params: {organizationInfo: item},
    // });
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  return (
    <FlatList
      refreshing={refreshing}
      onRefresh={onRefresh}
      data={_news}
      keyExtractor={i => i.id + ''}
      renderItem={({item, index}) => (
        <NewsCard news={item} onPress={onPressItem(item)} />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      onEndReachedThreshold={Platform.OS === 'ios' ? 0 : 0.2}
      ListHeaderComponent={renderSearch()}
    />
  );
};

NewsList = React.memo(NewsList);
export {NewsList};
