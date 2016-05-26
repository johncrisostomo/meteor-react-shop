import * as Collections from '/lib/collections';
import * as LocalCollections from '/client/modules/cart/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';

export default function () {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalCollections,
    LocalState: new ReactiveDict(),
    Tracker,
  };
}
