import { Animal } from "./ng_004_interfaces";

export function basic_interface() {
  let chicken: Animal = {
    kingdom: 'Animalia',
    species: 'Gallus',
    class: 'birds',
  };

  console.log(`kingdom: ${chicken.kingdom}, species: ${chicken.species}, class: ${chicken.class}`);
}
basic_interface();

