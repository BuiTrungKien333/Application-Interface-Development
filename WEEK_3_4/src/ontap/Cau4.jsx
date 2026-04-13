import { useMemo, useState } from "react";

export default function Bai4() {
  const [card, setCard] = useState([
    { id: 1, name: "Heheheh", qty: 2, price: 12300 },
    { id: 2, name: "Vitamin C", qty: 6, price: 248283 },
  ]);

  const [note, setNote] = useState("");

  const totalPrice = useMemo(() => {
    console.log("Tính toán lại số tiền");
    return card.reduce((total, item) => total + item.qty * item.price, 0);
  }, [card]);

  return (
    <div>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Nhap ghi chu..."
      />

      <h2>Tong tien hoa don: {totalPrice}</h2>
    </div>
  );
}
