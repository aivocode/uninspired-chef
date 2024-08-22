import { render, screen } from "@testing-library/react";
import PasswordValidator from "../../src/components/Utilities/PasswordValidator";

test("displays the message as an article", () => {
  render(<AuthenticationPage />);
});
