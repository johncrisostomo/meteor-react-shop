import {Products} from '../../lib/collections';

export default function() {
  Products._ensureIndex({
   "name": "text",
   "category": "text",
 });
}
