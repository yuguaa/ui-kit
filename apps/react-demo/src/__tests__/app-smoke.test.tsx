import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("App smoke", () => {
  it("渲染全部组件区块", () => {
    render(<App />);
    expect(screen.getByText("ui-kit · React")).toBeInTheDocument();
    expect(screen.getByText("表单 Forms")).toBeInTheDocument();
    expect(screen.getByText("主要按钮")).toBeInTheDocument();
    expect(screen.getByText("99+")).toBeInTheDocument();
    expect(screen.getByText("拖拽文件到此处，或点击上传")).toBeInTheDocument();
  });
});
