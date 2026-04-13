import { useCallback, useState } from "react";
import Card from "./Card";

export default function Bai4c() {
  const [pageView, setPageView] = useState(0);

  const handleBuyProd = useCallback((productName) => {
    console.log(`Đã mua sản phẩm ${productName}`);
  }, []);

  return (
    <div>
      <p>Luot xem trang: {pageView}</p>
      <button onClick={() => setPageView(pageView + 1)}>
        Tang luot xem, lam componet cha render lai
      </button>

      <Card productName="Hahaha" price={234324} onBuy={handleBuyProd} />
    </div>
  );
}
