import React, { useState, useEffect } from "react";

const Menupage = ({ searchQuery }) => {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/menu")
      .then((response) => response.json())
      .then((data) => {
        setMenu(data);
        setFilteredMenu(data);
      })
      .catch((error) => console.error("Error fetching menu data:", error));
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = menu.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMenu(filtered);
    } else {
      setFilteredMenu(menu);
    }
  }, [searchQuery, menu]);

  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>

        <div className="box-container">
          {filteredMenu.length > 0 ? (
            filteredMenu.map((item, index) => (
              <div className="box" key={index}>
                <img src={item.img} alt={item.name} />
                <h3>{item.name}</h3>
                <div className="price">
                  {item.price} <span>{item.originalPrice}</span>
                </div>
                <a href="#" className="btn">
                  add to cart
                </a>
              </div>
            ))
          ) : (
            <p>No items match your search criteria.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Menupage;
