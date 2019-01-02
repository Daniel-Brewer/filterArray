businesses.forEach(business => {
    /* CALCULATE ORDER SUMMARY */
    // let totalOrders = 0
    // business.orders.forEach(order => totalOrders += order)

    /* CALCULATE ORDER SUMMARY */
let totalOrders = business.orders.reduce(
    (currentTotal, nextValue) => currentTotal += nextValue,
    0
)

    outEl.innerHTML += `
        <h2>
            ${business.companyName}
            ($${totalOrders.toFixed(2)})
        </h2>
        <section>
            ${business.addressFullStreet}
        </section>
        <section>
            ${business.addressCity},
            ${business.addressStateCode}
            ${business.addressZipCode}
        </section>
    `;
    outEl.innerHTML += "<hr/>";
});