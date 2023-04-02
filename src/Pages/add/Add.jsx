import React from 'react'
import "./Add.scss"

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add a new Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something which I am good at"
            />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="webd">Web Development</option>
              <option value="music">Music</option>
              <option value="animation">Animation</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="16"
              placeholder="Breif descriptions to introduce your service to customers"
            ></textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder="e.g. One page web design" />
            <label htmlFor="">Short Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="a short description"
            ></textarea>
            <label htmlFor="">Delhivery TIme</label>
            <input type="number" min={1} />
            <label htmlFor="">Revision Number</label>
            <input type="number" min={1} />
            <label htmlFor="">Add Feature</label>
            <input type="text" placeholder="e.g. page design" />
            <input type="text" placeholder="e.g. File uploading " />
            <input type="text" placeholder="e.g. setting up a domain" />
            <input type="text" placeholder="e.g. hoasting" />

            <label htmlFor="">Price</label>
            <input type="number" min={1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add