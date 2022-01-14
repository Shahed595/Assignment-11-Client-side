import React, { useRef } from "react";

const NewServices = () => {
  const nameref = useRef();
  const imageref = useRef();
  const descriptionref = useRef();
  const priceref = useRef();

  const handleAddServices = (e) => {
    const name = nameref.current.value;
    const image = imageref.current.value;
    const description = descriptionref.current.value;
    const price = priceref.current.value;

    const newService = { name, description, price, image };

    fetch("https://mighty-reaches-53782.herokuapp.com/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully Added service");
          e.target.reset();
        }
      });
    e.eventDefault();
  };

  return (
    <div style={{ justifyContent: "conter" }}>
      <h1 style={{ color: "	#483D8B", margintop: 25 }}>
        Please Add An New Services
      </h1>
      <form
        onSubmit={handleAddServices}
        style={{
          border: "5px solid black",
          width: 400,
          height: 250,
          marginTop: 10,
          margin: "auto",
          backgroundColor: "#a65959",
        }}
      >
        <input
          type="text"
          style={{ width: 300, marginTop: 15 }}
          placeholder="Service Name"
          ref={nameref}
        />
        <br />
        <input
          type="text"
          style={{ width: 300, marginTop: 10 }}
          placeholder="Image-Url"
          ref={imageref}
        />
        <br />

        <input
          type="text"
          style={{ width: 300, marginTop: 10 }}
          placeholder="Description"
          ref={descriptionref}
        />
        <br />
        <input
          type="number"
          style={{ width: 300, marginTop: 10 }}
          placeholder="Price"
          ref={priceref}
        />
        <br />

        <input
          type="submit"
          style={{ width: 300, marginTop: 10 }}
          value="Add Service"
        />
      </form>
    </div>
  );
};

export default NewServices;
