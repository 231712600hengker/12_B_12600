console.log("[BARATIE RESTAURANT]");
console.log("_".repeat(50));

function processPayment(hargaTotal, bayar, metode) {
    try {
        if (typeof hargaTotal !== "number" || typeof bayar !== "number") {
            throw new Error("Both total price and amount given must be numbers");
        }

        if (bayar < hargaTotal) {
            throw new Error("Amount given is less than the total price");
        }

        const validMetode = ["cash", "credit", "voucher"];
        if (!validMetode.includes(metode)) {
            throw new Error("Invalid payment method. Accepted methods are 'cash', 'credit', and 'voucher'");
        }

        const change = bayar - hargaTotal;
        console.log(`Transaction successful. Payment method: ${metode}. Change to return: ${change}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    } finally {
        console.log("Cleaning up resources...");
    }
}

const testCases = [
    { label: "[1]", total: 50, bayar: 50, metode: "cash" },
    { label: "[2]", total: 50, bayar: 35, metode: "cash" },
    { label: "[3]", total: 50, bayar: 600, metode: "credit" },
    { label: "[4]", total: 50, bayar: 100, metode: "voucher" },
    { label: "[5]", total: 50, bayar: 100, metode: "paypal" },
];

testCases.forEach(({ label, total, bayar, metode }) => {
    console.log("--------------------------------------------");
    console.log(label);
    processPayment(total, bayar, metode);
});
console.log("--------------------------------------------");
