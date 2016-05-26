import React from 'react';

class CategoriesAdd extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = this.refs.categoryName.value;
    const file = $('#img').get(0).files[0];
    this.props.categoriesAdd(name, file);

    $('#addCategoryForm').hide();
    $('#formToggler').show();
    this.refs.categoryName.value = '';
  }

  handleCancel(e) {
    e.preventDefault();

    this.refs.categoryName.value = '';

    $('#addCategoryForm').hide();
    $('#formToggler').show();
  }

  render() {
    return (
      <div>
      <div className='well'>
      <form className='form-inline' onSubmit={this.handleSubmit.bind(this)}>
      <div className='form-group'>
      <input ref='categoryName' type='text' placeholder='category name'
      className='form-control' />
      </div>
      <div className='form-group'>
      <input type='file' id='img' className='form-control' />
      </div>
      <button type='submit'  className='btn btn-default'>
      Add Category
      </button>
      <a href='#' className='btn btn-danger pull-right'
        onClick={this.handleCancel.bind(this)}>Cancel</a>
      </form>
      </div>
      </div>
    );
  }
}
export default CategoriesAdd;
