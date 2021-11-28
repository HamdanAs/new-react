import React, { useState } from "react";
import { create } from "../../services/ItemService";

const AddItem = () => {
  const initialItemState = {
    id: null,
    name: "",
    basePrice: 0,
    price: 0,
  };
  const [item, setItem] = useState(initialItemState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  const saveItem = () => {
    var data = {
      name: item.name,
      basePrice: item.basePrice,
      price: item.price,
    };

    create(data)
      .then((response) => {
        setItem({
          id: response.data.id,
          name: response.data.name,
          basePrice: response.data.basePrice,
          price: response.data.price,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newItem = () => {
    setItem(initialItemState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newItem}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={item.name}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Base Price</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={item.basePrice}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Price</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={item.price}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveItem} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddItem;
