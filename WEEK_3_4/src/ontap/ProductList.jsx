import {
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
  useReducer,
  act,
} from "react";
import ProductCard from "./ProductCard";

const cardReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CARD":
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (existingItemIndex !== -1) {
        // có rồi thì tăng số lượng lên

        // Tạo một bản sao chép giỏ hàng hiện tại chứ không được sửa trực tiếp trên cái state đó
        const updatedCard = [...state];

        // lấy cái thằng đang tồn tại hiện tại
        const existingItem = updatedCard[existingItemIndex];

        updatedCard[existingItemIndex] = {
          ...existingItem,
          qty: existingItem.qty + 1,
        };

        return updatedCard;
      }
      return [...state, { ...action.payload, qty: 1 }]; // chưa thì thêm vô
    case "CLEAR":
      return [];
  }
};

export default function ProductManager() {
  console.log("Component ProductList vừa render");

  // ===============================
  // 1. useReducer
  // ===============================
  const [cardState, dispatch] = useReducer(cardReducer, []);

  // ===============================
  // 2. useState
  // ===============================
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [pageView, setPageView] = useState(0);

  // ===============================
  // 3. useRef
  // ===============================
  const searchInputRef = useRef(null);
  const typingCount = useRef(0);

  // ===============================
  // 4. useMemo & Computed Data
  // ===============================
  const category_map = [
    "All",
    ...new Set(products.map((item) => item.category)),
  ];

  const filteredProduct = useMemo(() => {
    console.log("Đang tính toán và lọc lại danh sách sản phẩm");
    return products.filter((item) => {
      const matchSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchCategor =
        selectedCategory === "All" || item.category === selectedCategory;
      return matchSearch && matchCategor;
    });
  }, [products, search, selectedCategory]);

  const totalValue = useMemo(() => {
    return filteredProduct.reduce((acc, cur) => {
      return acc + cur.price * cur.inStock;
    }, 0);
  }, [filteredProduct]);

  // ===============================
  // 5. useCallback & Event Handlers
  // ===============================
  const handleSearch = (e) => {
    setSearch(e.target.value);
    typingCount.current = typingCount.current + 1;
  };

  const handleAddToCard = useCallback((selectedProduct) => {
    dispatch({ type: "ADD_TO_CARD", payload: selectedProduct });
  }, []);

  const handleDeleteProduct = useCallback((selectedProduct) => {
    setProducts((prevProds) =>
      prevProds.filter((item) => item.id !== selectedProduct.id),
    );
  }, []);

  // ===============================
  // 6. useEffect
  // ===============================
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch("/products.json");
        const result = await response.json();
        setProducts(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [loading]); // khi loading thay đổi thì nó chạy lại từ đầu hàm ProductManager luôn

  // ===============================
  // 7. Render
  // ===============================
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <div>
        Giỏ hàng của bạn đang có <strong>{cardState.length}</strong> sản phẩm
        <div>
          <p>Sản phẩm</p>
          <div>
            {cardState.map((product) => (
              <div key={product.id}>
                <p>ID: {product.id}</p>
                <p>Tên: {product.name}</p>
                <p>Giá: {product.price}</p>
                <p>Số lượng: {product.qty}</p>
                <p>-----------------</p>6
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nút test hiệu năng */}
      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          backgroundColor: "gray",
        }}
      >
        <p>Lượt tương tác trang: {pageView}</p>
        <button onClick={() => setPageView(pageView + 1)}>
          Tăng tương tác (Ép component render lại)
        </button>
      </div>

      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <input
          ref={searchInputRef} // Gắn useRef vào đây
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={search}
          onChange={handleSearch}
          style={{ height: 40, width: 250, padding: "0 10px" }}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ height: 44, padding: "0 10px", cursor: "pointer" }}
        >
          {category_map.map((category, index) => (
            <option key={index} value={category}>
              {category === "All" ? "Tất cả danh mục" : category}
            </option>
          ))}
        </select>
      </div>

      <p>Tổng tiền: {totalValue}</p>
      <p>Số lần gõ phím vào ô search: {typingCount.current}</p>

      <div
        style={{
          display: "grid",
          gap: "15px",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        {filteredProduct.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            onAddToCard={handleAddToCard}
            deleteProduct={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
}
