import React from 'react';

class ProductsAdd extends React.Component {
  submitHandler(e) {
    e.preventDefault();
    const productName = this.refs.productName.value;
    const productDescription = this.refs.productDescription.value;
    const productCategory = this.refs.productCategory.value;
    const productPrice = Number(this.refs.productPrice.value);
    const imageFile = $('#productImage').get(0).files[0];

    this.props.productsAdd(productName, productDescription, productCategory,
      productPrice, imageFile);
    $('#addModal').modal('hide');
  }
  render() {
    const categoryNames = this.props.categories.map((category) => {
      return <option key={category._id}>{category.name}</option>;
    });
    return (
      <div>
      <button type="button" className="btn btn-primary pull-right" data-toggle="modal" data-target="#addModal">
        Add Product
      </button>
      <div id="addModal" className="modal fade" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="addModalLabel">Add Product</h4>
            </div>
            <div className="modal-body clearfix">
              <form onSubmit={this.submitHandler.bind(this)}>
                <div className="form-group">
                  <label>Product Name:</label>
                  <input type="text" ref="productName" className="form-control"
                    placeholder="Product Name" />
                </div>
                <div className="form-group">
                  <label>Product Description : </label>
                  <textarea ref="productDescription" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Product Category :</label>
                  <select ref="productCategory" className="form-control">
                    {categoryNames}
                  </select>
                </div>
                <div className="form-group">
                  <label>Product Price :</label>
                  <input ref="productPrice" type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Product Image :</label>
                  <input type="file" id="productImage" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary pull-right">Add Product</button>
                <button type="button" className="btn btn-default pull-right" data-dismiss="modal">Close</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ProductsAdd;
