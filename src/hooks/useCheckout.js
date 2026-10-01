import { useContext } from "react";
import { CheckoutContext } from "../context/checkoutContextValue";

export function useCheckout() {
  return useContext(CheckoutContext);
}
