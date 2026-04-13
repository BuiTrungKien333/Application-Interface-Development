import { test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Bai3 from "./Cau3";

const mockData = [
  { id: 1, title: "Bai test so 1", body: "Noi dung bai 1" },
  { id: 2, title: "Bai test so 2", body: "Noi dung bai 2" },
  { id: 3, title: "Bai test so 3", body: "Noi dung bai 3" },
];

test("Hiển thị danh sách post khi fetch API thành công", async () => {
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => mockData,
  });

  render(<Bai3 />);

  const loadingText = screen.getByText(/Loading.../);
  expect(loadingText).toBeInTheDocument();

  const postTitle1 = await screen.findByText(/Bai test so 1/i);
  const postTitle2 = await screen.findByText(/Bai test so 2/i);

  expect(postTitle1).toBeInTheDocument();
  expect(postTitle2).toBeInTheDocument();

  global.fetch.mockClear();
});
