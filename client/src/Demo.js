import React, { useEffect, useState } from "react";

const Demo = () => {
  // const [color, setColor] = useState("red");
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState([
    {
      title: "Title 1",
      pages: "20",
    },
    {
      title: "Title 2",
      pages: "15",
    },
  ]);
  const [car, setCar] = useState({
    color: "red",
    model: "ford",
  });
  const updateCar = () => {
    const carColor = document.getElementById("carColor").value;
    console.log(carColor);
    setCar((previousCar) => {
      return { ...previousCar, color: carColor };
    });
  };
  const updateBook = (index, pages) => {
    setBooks((books) => {
      const bookArr = [...books];
      bookArr[index] = { ...bookArr[index], pages: pages };
      return bookArr;
    });
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => {
        return count + 1;
      });
      return timer;
    }, 1000);
  }, []);
  return (
    <>
      <h1>
        Car Color is {car?.color} and the brand is{car?.model}
      </h1>
      <input
        id="carColor"
        type="text"
        placeholder="color"
        // value={car.color}
        onChange={updateCar}
      />
      {/* <button onClick={() => setColor("blue")}>blue</button>
      <button onClick={() => setColor("green")}>green</button> */}

      <button onClick={updateCar}>Update Car Color</button>

      <h2>Counter number is {count}</h2>
      <p>
        {books.map((item, index) => {
          return (
            <>
              my book name is {item.title} and the pages are
              {item.pages}
              <br></br>
            </>
          );
        })}
      </p>
      <button onClick={() => updateBook(1, 30)}>Update Books</button>
    </>
  );
};

export default Demo;
