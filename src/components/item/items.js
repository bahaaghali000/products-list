import React from "react";

const Items = (props) => {
  const { items, del, ItemQuantity } = props;
  console.log(items);
  let length = items.length;

  const ListItem = length ? (
    items.map((item) => {
      return (
        <div key={item.id} className="item">
          <p>{item.product}</p>
          <p>{item.price}</p>
          <p className="delete" onClick={() => del(item.id)}>
            &times;
          </p>
          <p className="quantity-field">
            <button onClick={() => ItemQuantity(item, "decrease")}>-</button>
            {item.quantity}
            <button onClick={() => ItemQuantity(item, "increase")}>+</button>
          </p>
        </div>
      );
    })
  ) : (
    <div className="text">There are no items, Try to add some.</div>
  );
  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>Price</p>
        <p>Edit</p>
        <p>quantity</p>
      </div>
      {ListItem}
    </div>
  );
};

export default Items;
