interface invoice_item {
  product: string;
  quantity: number;
  price: number;
}

type Invoice = Array<invoice_item>;

function get_total_invoice(invoice: Invoice): number {
  let invoice_total = invoice.reduce((total, item) => total + item.quantity * item.price, 0);

  return invoice_total;
}

function apply_discount(
  invoice: Invoice,
  discount_value: number,
  product_of_discount?: string
) {
  discount_value = discount_value / 100;
  let new_invoice = invoice.map((item) => {
    if (product_of_discount === undefined || item.product === product_of_discount) {
      return { ...item, price: item.price - item.price * discount_value};
    }

    return item;
  });

  return new_invoice;
}

export function invoice_example() {
  let example : Invoice = [
    {
      product: 'Banana',
      quantity: 12,
      price:  1.5,
    },
    {
      product: 'Apple',
      quantity: 6,
      price:  0.5,
    },
    {
      product: 'Grapes',
      quantity: 25,
      price: 50,
    },
  ];

  let discounted_invoice = apply_discount(example, 10, 'Banana');

  console.log(`Invoice Total: ${get_total_invoice(example)}`);
  console.log('Discounted invoice:');
  console.table(discounted_invoice)
  console.log(`New invoice Total: ${get_total_invoice(discounted_invoice)}`);
} 
invoice_example();

