import { createRoot } from "react-dom/client";
import { render } from "react-dom";
import { act } from "@testing-library/react";
import DarkMode from "./02-dark-mode/DarkMode";
import FormValidator, {
  validateEmail,
  validatePassword,
} from "./03-form-validator/FormValidator";
import DogPics from "./04-dog-pics/DogPics";

let container: Element;
let root: any;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  // cleanup on exiting
  container.remove();
});

/********* DARK MODE ********** */

// it("changes class when clicked", () => {
//   act(() => {
//     root.render(<DarkMode />);
//   });

//   // get a hold of the button elements, and trigger some clicks on it
//   const darkButton: any = document.querySelector("[data-testid=dark]");
//   const lightButton: any = document.querySelector("[data-testid=light]");
//   const page: any = document.querySelector("[data-testid=page]");
//   console.log(page.className);
//   act(() => {
//     darkButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });

//   expect(page.className).toBe("page dark-mode");

//   act(() => {
//     lightButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });

//   expect(page.className).toBe("page ");

//   act(() => {
//     root.unmount(container);
//   });
// });

/********* FORM VALIDATOR ********** */

// it("validates inputs", () => {
//   act(() => {
//     root.render(<FormValidator />);
//   });

//   const submitButton: any = document.querySelector("[data-testid='submit']");

//   act(() => {
//     submitButton.dispatchEvent(new MouseEvent("submit", { bubbles: true }));
//   });

//   expect(validateEmail("ana@gmail.com")).toBe(true);
//   expect(validateEmail("ana@gmail@com")).toBe(false);
//   expect(validateEmail("anaom")).toBe(false);

//   expect(validatePassword("1234567890")).toBe(true);
//   expect(validatePassword("12")).toBe(false);

//   act(() => {
//     root.unmount(container);
//   });
// });

it("renders dogs data and apply it into the component", async () => {
  act(() => {
    root.render(<DogPics />);
  });

  // get a hold of the button elements, and trigger some clicks on it
  const button: any = document.querySelector("[data-testid=button]");
  const img: any = document.querySelector("[data-testid=img]");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  const fakeData = {
    message: "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg",
  };

  // async jest.spyOn(global, "fetch").mockImplementation(() => {
  //   if (fakeData.message) {
  //     const response = await fetch(fakeData.message);
  //     const pictureObj = await response.json();
  //   }}
  // );

  act(() => {
    root.unmount(container);
  });
});
