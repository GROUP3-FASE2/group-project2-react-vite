import React from "react";

const CardNewLog = () => {
  return (
    <div className="flex flex-row border-2 justify-between border-dark-alta rounded-md p-5">
      <div className="w-1/4">
        <p>End of session</p>
        <p>Bagas</p>
        <p>sep 29, 2022</p>
      </div>
      <div className="w-3/4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          debitis officia, possimus esse ipsum corporis hic neque nisi laborum,
          quae facilis quaerat suscipit maiores? Sapiente veritatis repudiandae
          quisquam illo eveniet pariatur provident tempora? Blanditiis explicabo
          necessitatibus perspiciatis quidem nesciunt veniam odit voluptatum
          ipsam ducimus sunt. Voluptate ducimus ex ipsam quae?
        </p>
        <p className="text-xl py-5">Changed Status : Continue session 2</p>
      </div>
    </div>
  );
};

export default CardNewLog;
