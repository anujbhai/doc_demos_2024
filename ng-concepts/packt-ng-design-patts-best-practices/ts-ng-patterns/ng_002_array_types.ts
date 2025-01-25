export function arr_eg() {
    let names: Array<string>;
    let surnames: string[];

    names = ['Mario', 'Pablo', 'Leo'];
    surnames = ['Costa', 'Gaviria'];

    names.forEach((name, i) => console.log(`${i + 1}. ${name}`));
    surnames.forEach((surname, i) => console.log(`${i + 1}. ${surname}`));
}
arr_eg();
