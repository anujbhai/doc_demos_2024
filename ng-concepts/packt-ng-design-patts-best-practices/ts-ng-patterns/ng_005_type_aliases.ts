type ID = string | number;
type Machine = {
  id: ID; // type alias with usage of 'type' declaration
  description: string;
  energyOutput: number;
};

export function basic_type() {
  let car: Machine = { // type alias with usage of 'type' declaration
    id: '123',
    description: "Four wheeler with an engine.",
    energyOutput: 1000,
  };

  console.log(`Car with ID: ${car.id} and desc.: ${car.description}, has an energy output of: ${car.energyOutput}`);
}
basic_type();

