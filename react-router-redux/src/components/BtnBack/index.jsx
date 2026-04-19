import { useNavigate } from "react-router-dom";

export default function BtnBack() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return <button onClick={handleClick}>back</button>;
}
