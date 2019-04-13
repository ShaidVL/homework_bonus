import {sales_bonus} from "../lib";

test('should return 5% bonus', () => {
    const sales = [12000, 8000, 10000, 15000, 2000];
    const expected = 350;

    const result = sales_bonus(sales);

    expect(result).toBe(expected);

})