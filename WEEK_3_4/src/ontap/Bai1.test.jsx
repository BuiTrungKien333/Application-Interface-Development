import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Bai1 from "./Cau1";

test("Chức năng increase, giá trị biến count phải tăng lên 1 khi bấm nút", () => {
  // render ra giao diện trước
  render(<Bai1 />);

  // Kiểm tra trạng thái ban đầu
  // Tìm thẻ có chứa chữ "Count: 0"
  const initCountText = screen.getByText(/Count: 0/i);

  // kỳ vọng ban đầu biến đếm là 0, đúng
  expect(initCountText).toBeInTheDocument();

  // tương tác, tìm cái nút có tên là increase
  const increaseButton = screen.getByRole("button", { name: /increase/i });

  // giả lập bấm cái nút
  fireEvent.click(increaseButton);

  // kiểm tra kết quả, sau khi ấn xong thì cái biến count phải lên 1, Count: 1
  const updateCountText = screen.getByText(/Count: 1/i);

  // kỳ vọng là đúng
  expect(updateCountText).toBeInTheDocument();

  expect(screen.queryByText(/Count: 0/i)).not.toBeInTheDocument();
});
