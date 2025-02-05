interface Products {
  id: number;
  desc: string;
}

type ProductsList = Array<Products>;

const example_list: ProductsList = [
  { id: 1, desc: "kiwi" },
  { id: 2, desc: "avocado" },
  { id: 3, desc: "dragon fruit" },
];

// console.log('example_list is Array :', Array.isArray(example_list));
// console.log('example_list is :', typeof example_list);

function get_product_by_id(id: unknown) {
  // type guard for 'unknown' type usage
  if (typeof id === 'string') {
    id = parseInt(id);
  } else if (typeof id === 'number') {
    return;
  }
  return example_list.filter((product) => product.id === id)[0] || undefined;
}

function get_product_test() {
  const id = '2';
  const item = get_product_by_id(id);

  if (item !== undefined) {
    console.log(`ID: ${ item.id }, Desc.: ${ item.desc }`);
    console.log('Product:');
    console.table(item);
  } else {
    console.log('No product found!');
  }
}
get_product_test();

