import { Map } from 'immutable';

export const mergeDeeplyElements = (page1, page2) => {
  const map1 = Map(page1);
  const map2 = Map(page2);

  map1.mergeDeep(map2);
};
