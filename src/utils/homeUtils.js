import {filter as _filter, includes as _includes} from 'lodash';

export const findItem = (items, value) =>
  _filter(items, item => _includes(item.title, value));
