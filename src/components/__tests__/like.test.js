import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like />,
      container
    );
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});
describe("Testing like component",()=>{
it("Defaults to 0 likes", () => {
  const p = container.querySelector("p");
  expect(p.textContent).toBe("Likes: 0");
});
it("Like number increases on like button click", () => {
    const p = container.querySelector("p");
    var likes=parseInt( p.textContent.split(':')[1].trim());
    const like = container.querySelector("#increment");
    act(() => {
      like.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    
    expect(p.textContent).toBe("Likes: " + (likes+1) );
   
  });
  it("Like number increases on dislike button click", () => {
    const p = container.querySelector("p");
    var likes=parseInt( p.textContent.split(':')[1].trim());
    const like = container.querySelector("#decrement");
    act(() => {
      like.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    
    expect(p.textContent).toBe("Likes: " + (likes-1) );
   
  });
});