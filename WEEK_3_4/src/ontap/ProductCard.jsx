import React from "react";

// cái hàm này được bọc bởi React.memo nên chỉ khi nào cái proms nó thay đổi thì nó mới render lại
const ProductCard = React.memo(function ProductCard({
  product,
  onAddToCard,
  deleteProduct,
}) {
  console.log(`ProductCard [${product.name}] vừa render`);

  return (
    <div>
      <p>ID: {product.id}</p>
      <p>Tên: {product.name}</p>
      <p>Danh mục: {product.category}</p>
      <p>Tồn kho: {product.inStock}</p>
      <button onClick={() => onAddToCard(product)}>Add To Card</button>
      <button
        onClick={() => deleteProduct(product)}
        style={{ backgroundColor: "red" }}
      >
        Delete
      </button>
      <p>=================================</p>
    </div>
  );
});

export default ProductCard;
