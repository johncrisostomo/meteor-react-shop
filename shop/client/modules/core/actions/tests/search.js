const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../search';

describe('core.actions.search', () => {
  it('should do update search filter', () => {
    const LocalState = { set: spy()};

    actions.setSearchString({LocalState}, 'macbook');

    expect(LocalState.set.args[0]).to.equal('macbook');
  });
});
