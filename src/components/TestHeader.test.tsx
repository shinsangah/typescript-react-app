import { render, screen } from "@testing-library/react";
import TestHeader from "./TestHeader";

test("isLogin이 true로 전달이 잘 된 상태에서, userId가 잘 뜨는지 확인", () => {
  render(<TestHeader isLogin={true} userID="Sangah" />);
  const textEl = screen.getByText(/Sangah 님 환영합니다!/i);
  expect(textEl).toBeInTheDocument();
});

test("isLogin 이 false 일 때, 문구와 button 이 정상 출력 되는지 확인", () => {
  render(<TestHeader isLogin={false} />);
  const textEl = screen.getByText(/로그인 해주세요./);
  const btnEl = screen.getByRole("button");
  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("로그인");
});
