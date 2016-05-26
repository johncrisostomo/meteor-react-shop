import React from 'react';

class CartView extends React.Component {

  render() {
    return (
      <li>
      <a href="#" data-toggle="modal" data-target="#cartModal">
        Cart <span className="badge">{this.props.itemCount}</span>
      </a>
      <div id="cartModal" className="modal fade" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="cartModalLabel">Cart</h4>
            </div>
            <div className="modal-body clearfix">

            </div>
          </div>
        </div>
      </div>
      </li>
    );
  }
}

export default CartView;
