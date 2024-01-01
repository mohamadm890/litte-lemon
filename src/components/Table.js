import React from "react";
import "./Table.css";
import Card from "./Card";

function Table() {
  const menuItems = [
    {
      name: "Greek Salad",
      price: 12.99,
      description:
        "Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKznN_7FJRpkcgxfN0l5PU_BlJnjlT_E4uPg&usqp=CAU",
    },
    {
      name: "Bruschetta",
      price: 16.99,
      description:
        "Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FLRC2DXpcPOrg96hCS8lDbOAUy-4RROrzw&usqp=CAU",
    },
    {
      name: "Lemon Dessert",
      price: 8.5,
      description:
        "Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.",
      imageSrc:
        "https://www.thereciperebel.com/wp-content/uploads/2018/07/lemon-lush-dessert-TRR-1200-44-of-46.jpg",
    },
  ];

  return (
    <div className="table">
      <div className="header-table">
        <h1 className="h-table">specials!</h1>
        <button className="button-table">Online Menu</button>
      </div>
      <div className="table-card">
        {menuItems.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Table;
