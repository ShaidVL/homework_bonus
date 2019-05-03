export function sales_bonus(sales) {
    const salesThreshold = 10000;
    const bonus = 0.05;
    let cash = 0;
    for (const sale of sales) {
        if (sale > salesThreshold) {
            cash += (sale - salesThreshold) * bonus;
        }
    }
    return cash;
}