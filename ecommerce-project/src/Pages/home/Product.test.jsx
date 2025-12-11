import { it, expect, describe, vi } from "vitest"; //describe = groups test together
import { Product } from "./Product";
import { render, screen } from "@testing-library/react"; // renders a component in a fake web page

describe("Product Component", () => {
  it("displays the products detals correctly", () => {
    const product = {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87,
      },
      priceCents: 1090,
      keywords: ["socks", "sports", "apparel"],
    };
    const loadCart = vi.fn(); // vi.fn() = create fake function that doesnt do anything
    render(<Product product={product} loadCart={loadCart} />);
    
    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs") //it search the element on the screen
    ).toBeInTheDocument(); //to check this element is available on screen on the fake web page
    
    expect(
        screen.getByText('$10.90')
    ).toBeInTheDocument();

    expect(
        screen.getByTestId("product-image")
    ).toHaveAttribute('src','images/products/athletic-cotton-socks-6-pairs.jpg');

    expect(
        screen.getByTestId('product-rating-stars-image')
      ).toHaveAttribute(
        'src',
        `images/ratings/rating-${product.rating.stars * 10}.png`
      );
   
});
});

// mock = create fake version of this function
// for testing the function we run the function

// for testing the component we render the component

//npm install --save-dev @testing-library/react@16.3.0 @testing-library/jest-dom@6.6.3 @testing-library/user-event@14.6.1 jsdom@26.1.0
