console.log("PENDAFTARAN MAHASISWA BARU UNIVERSITAS CENDRAWASIH");
console.log("_".repeat(50));

function calculateAge(tanggalLahir) {
    const today = new Date();
    const birthDate = new Date(tanggalLahir);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function validateData(studentData) {
    const { nama, tanggal, ktp } = studentData;

    if (!nama || !tanggal || !ktp) {
        return "An error occurred: Invalid data";
    }

    const umur = calculateAge(tanggal);

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

processData({ nama: "", tanggal: "2002-05-20", ktp: "1234567890123456" });
processData({ nama: "Fahmy", tanggal: "2010-03-15", ktp: "1234567890123456" });
processData({ nama: "Kevin", tanggal: "2004-10-01", ktp: "12345" });
processData({ nama: "Sion", tanggal: "2005-07-12", ktp: "1234567890123456" });
processData({ nama: "Kay", tanggal: "2002-11-28", ktp: "1122334455667788" });
