import React, { useEffect, useState } from "react";
import useAuth from "../../Login/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const email = user?.email;

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://mighty-reaches-53782.herokuapp.com/orders`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  const myOrder = orders.filter((order) => order.email === email);
  const handleDelete = (id) => {
    console.log(id);
    const confirm = window.confirm("Are you sure about this ?");
    if (confirm) {
      fetch(`https://mighty-reaches-53782.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = orders.filter((booking) => booking._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h1>My Order List</h1>
      <table style={{ margin: "auto" }} xs={12} md={6}>
        <thead>
          <tr
            style={{
              backgroundColor: "#F43213",
              width: 700,
              textAlign: "center",
              color: "white",
              marginTop: "40",
            }}
          >
            <th>Name</th>
            <th>Email</th>
            <th>Id</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {myOrder.map((order) => (
            <tr
              style={{
                backgroundColor: "#808B96",
                color: "white",

                height: 30,
              }}
            >
              <td style={{ backgroundColor: "#273746", width: 150 }}>
                {order.name}
              </td>
              <td
                style={{
                  backgroundColor: "#E5BEA9 ",
                  width: 250,
                  color: "black",
                }}
              >
                {order.email}
              </td>
              <td style={{ backgroundColor: "#707B7C", width: 250 }}>
                {order._id}
              </td>
              <td style={{ backgroundColor: "#273746", width: 150 }}>
                {order.address}
              </td>
              <button
                style={{ marginRight: 10, backgroundColor: "#F1948A" }}
                onClick={() => handleDelete(order._id)}
              >
                Delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
