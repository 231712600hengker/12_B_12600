console.log("PENDAFTARAN MAHASISWA BARU UNIVERSITAS CENDRAWASIH");
console.log("_".repeat(50));

function validateData(studentData) {
    const { nama, umur, ktp } = studentData;

    if (!nama || !umur || !ktp) {
        return "An error occurred: Invalid data";
    }
    if (umur < 17) {
        return "An error occurred: Student is too young";
    }
    if (ktp.length !== 16) {
        return "An error occurred: Invalid KTP number";
    }

    return null;
}

async function processData(studentData) {
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const validationError = validateData(studentData);
    if (validationError) {
        console.log(validationError);
    } else {
        console.log(`Student ${studentData.nama} has been successfully registered`);
    }
}

processData({ nama: "", umur: 22, ktp: "1234567890123456" });
processData({ nama: "Fahmy", umur: 16, ktp: "1234567890123456" });
processData({ nama: "Kevin", umur: 20, ktp: "12345" });
processData({ nama: "Sion", umur: 19, ktp: "1234567890123456" });
processData({ nama: "Kay", umur: 22, ktp: "1122334455667788" });