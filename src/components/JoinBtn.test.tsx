import { render, screen } from "@testing-library/react";
import JoinBtn from "./JoinBtn";

test("19살이면 회원 가입 가능한가?", () => {
  render(<JoinBtn age={19} />);
  const textEl = screen.getByText(/가능합니다./);
  const btnEl = screen.getByRole("button");

  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toBeEnabled();
  //   expect(btnEl).toBeDisabled();
  expect(btnEl).toHaveStyle({
    backgroundColor: "orange",
  });
});

// 우아한기술블로그, 에러를 미리 짜놓고 테스트 코드 짬.
