import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { remove, update, get } from "../../services/ItemService";

const Item = (props) => {
  const initialItemState = {
    id: null,
    name: "",
    basePrice: 0,
    price: 0,
  };
  const [currentItem, setCurrentItem] = useState(initialItemState);
  const [message, setMessage] = useState("");
  let { id } = useParams();

  const getItem = (id) => {
    get(id)
      .then((response) => {
        setCurrentItem(response.data.result);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getItem({ id });
  }, [{ id }]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const updateItem = () => {
    update(currentItem.id, currentItem)
      .then((response) => {
        console.log(response.data.result);
        setMessage("The tutorial was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteItem = () => {
    remove(currentItem.id)
      .then((response) => {
        console.log(response.data.result);
        props.history.push("/items");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentItem ? (
        <div className="edit-form">
          <h4>Data Barang</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nama Barang</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentItem.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="base_price">Harga Beli</label>
              <input
                type="text"
                className="form-control"
                id="base_price"
                name="base_price"
                value={currentItem.basePrice}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Harga Jual</label>
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                value={currentItem.price}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteItem}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateItem}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Item...</p>
        </div>
      )}
    </div>
  );
};

export default Item;
