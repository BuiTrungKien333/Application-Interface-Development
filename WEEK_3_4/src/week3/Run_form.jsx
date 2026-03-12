import { useState } from "react";
import "./App.css";
import MyForm from "./week3/MyForm";

function Main() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const updateInfo = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = () => {
    console.log("Clicked");
    setFormData({
      name: "Bui Trung Kien",
      email: "buitrungkien2005qng@gmail.com",
      age: 21,
    });
  };

  return (
    <>
      <div>
        <MyForm formData={formData} updateInfo={updateInfo} />
        <p></p>
        <button onClick={handleClick}>Click to update</button>
      </div>
    </>
  );
}

export default Main;
