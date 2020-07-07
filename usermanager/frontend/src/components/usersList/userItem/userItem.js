import React from "react";

class UserItem extends React.Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    email: this.props.email,
    message: this.props.message,
    created_at: this.props.created_at,
 
  }

  getUserId = () =>{
  this.props.onDeleteItem();
  }

  render() {
    const { id, name,email, message, created_at } = this.state;
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr className="priority-200">
            <td className="name">TESmart KVM Switch HDMI Device</td>
            <td className="clicks">857</td>
            <td className="priority">
              200
            </td>
            <td className="impressions">190</td>
            <td className="delete">
              <button className="delete-btn" onClick={this.getUserId}>
              <i className="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default UserItem;