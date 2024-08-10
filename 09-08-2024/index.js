(function () {
    const btn = document.querySelector('#btn');
    const inputArr = document.querySelectorAll('input');
    const allOrders = [];
    let orderId = 1;

    async function prepareOrder(currentOrder, orderId) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve({ id: orderId, preparedOrder: currentOrder });
            }, orderId * 1000);
        });
    }

    btn.addEventListener('click', async function (event) {
        const currentOrder = [];
        inputArr.forEach(element => {
            if (element.checked) {
                currentOrder.push(element.value);
            }
        });
        console.log('your orderId is : ' + orderId);
        const { id, preparedOrder } = await prepareOrder(currentOrder, orderId++);
        console.log('Order with id : ' + id + " is prepared");
        console.log('Items which you ordered is : ');
        console.log(preparedOrder);
    });
})();