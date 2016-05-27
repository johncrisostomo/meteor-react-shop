import React from 'react';
import {Bert} from 'meteor/themeteorchef:bert';

class CategoriesRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isUpdating: false };
  }

  handleSave(e) {
    e.preventDefault();
    const categoryId = this.props.category._id;
    const imageId = this.props.category.image_id;
    const name = this.refs.categoryName.value;
    const file = $('#updateImage').get(0).files[0];
    this.props.update(categoryId, imageId, name, file);
    this.setState({ isUpdating: false });
    Bert.alert('Category updated', 'success', 'growl-top-right');
  }

  handleUpdate(e) {
    e.preventDefault();
    this.setState({isUpdating: true});
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.catDelete(this.props.category._id, this.props.category.image_id);
    Bert.alert('Category deleted', 'danger', 'growl-top-right');
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({isUpdating: false});
  }

  getName() {
    if (this.state.isUpdating) {
      return (
         <td><input ref='categoryName' type='text' defaultValue={this.props.category.name}
          className='form-control' /></td>
      );
    }
    return <td>{this.props.category.name}</td>;
  }

  getImageUrl() {
    if (this.state.isUpdating) {
      return (
        <td><input id='updateImage' type='file' className='form-control' /></td>
      );
    }

    return <td>{this.props.category.image_url}</td>;
  }

  getFirstButton() {
    if (this.state.isUpdating) {
      return <td><a href="#" onClick={this.handleSave.bind(this)}>Save</a></td>;
    }
    if (this.status === 'Shipped') {
      return <td><i>Transaction complete!</i></td>
    }
    return <td><a href="#" onClick={this.handleUpdate.bind(this)}>Update</a></td>;
  }

  getSecondButton() {
    if (this.state.isUpdating) {
      return <td><a href="#" onClick={this.handleCancel.bind(this)}>Cancel</a></td>;
    }

    return <td></td>;
  }

  getThirdButton() {
    if (this.state.isUpdating) {
      return <td></td>;
    }

    return (
      <td>
        <span onClick={this.handleDelete.bind(this)}
          className='glyphicon glyphicon-remove'></span>
      </td>
    );
  }

  render() {
    return (
      <tr>
        {this.getName()}
        {this.getImageUrl()}
        {this.getFirstButton()}
        {this.getSecondButton()}
        {this.getThirdButton()}
      </tr>
    );
  }
}

export default CategoriesRow;
