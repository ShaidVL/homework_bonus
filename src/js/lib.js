export function sales_bonus(sales) {
    let cash = 0;
    for (const sale of sales) {
        if(sale>10000){
            cash+=(sale - 10000)*0.05;
        }
    }
    return cash;
}