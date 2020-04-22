import React, { Component } from 'react';
import AddContact from './AddContact';

class Card extends Component {
  state = {
    isShow: false,
  };

  handleShow = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  
  render() {
    const {_id, name, phone, email } = this.props.person;
    return (
      <>
        <div className='card'>
          <img
            src='https://png.pngtree.com/svg/20170802/f96d8acc9e.png'
            alt='Eiffel Tower'
          ></img>
          <h3>{name}</h3>

          <span role='img' aria-label='mail'>
            📧 : {email}
          </span>
          <br />
          <span role='img' aria-label='mail'>
            📱 :{phone} 
          </span>
          <br />

          <button
            type='button'
            className='btn btn-outline-info'  onClick={this.handleShow}>
            EDIT
            
          </button>

          <button
            type='button'
            className='btn btn-outline-danger'onClick={() => this.props.handleDelete(_id)} >
            DELETE 
     
          </button>
          {this.state.isShow ? (
            <AddContact
              show={this.state.isShow}
              handleShow={this.handleShow}
              isEdit={true}
              handleClick={this.props.handleEdit}
              contact={this.props.person}
            />
          ) : null}
        </div>
      </>
    );
  }
}
export default Card;

