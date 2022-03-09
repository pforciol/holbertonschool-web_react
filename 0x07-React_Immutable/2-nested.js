import { getIn } from 'immutable';

export default function accessImmutableObject(object, path) {
  return getIn(object, path);
}
