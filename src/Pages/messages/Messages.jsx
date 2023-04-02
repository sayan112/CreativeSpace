import React from 'react'

import "./Messages.scss"
import { Link } from 'react-router-dom';
const Messages = () => {
  const messages ="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  return (
    <div className="mymessages">
      <div className="container">
        <div className="title">
          <h1>messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>John loe</td>
            <td><Link className='link' to="/message/123">{messages.substring(0, 100)}...</Link></td>
            <td>1 Day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>

          <tr className="active">
            <td>John loe</td>
            <td><Link className='link' to="/message/123">{messages.substring(0, 100)}...</Link></td>
            <td>1 Day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>John loe</td>
            <td><Link className='link' to="/message/123">{messages.substring(0, 100)}...</Link></td>
            <td>1 Day ago</td>
          </tr>
          <tr>
            <td>John loe</td>
            <td><Link className='link' to="/message/123">{messages.substring(0, 100)}...</Link></td>
            <td>1 Day ago</td>
          </tr>
          <tr>
            <td>John loe</td>
            <td><Link className='link' to="/message/123">{messages.substring(0, 100)}...</Link></td>
            <td>1 Day ago</td>
          </tr>
          <tr>
            <td>John loe</td>
            <td><Link className='link' to="/message/123">{messages.substring(0, 100)}...</Link></td>
            <td>1 Day ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Messages