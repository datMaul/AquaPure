
//Data from: https://environment.data.gov.uk/water-quality

const fs = require("fs");

const map_data = [];

async function readDataForYear(year) {
    await fs.readFile(year + ".csv", "utf-8", (err, data) => {
        if (err) console.log(err);

        const rows = data.split("\n").slice(1);
        rows.forEach((line, index) => {
            const row = line.split(",");

            const name = row[0];
            const url = row[1];
            const location = row[3];
            const date = row[4];
            const sample = row[5];
            const parameter = row[11];
            const location_east = row[15];
            const location_north = row[16];

            map_data.push([
                name,
                url,
                location,
                date,
                sample,
                parameter,
                location_east,
                location_north,
            ]);
        });
    });
}

(async function () {
    const map_data = [];

    await readDataForYear("2023");
    await readDataForYear("2022");
    await readDataForYear("2021");
    await readDataForYear("2020");

    console.log(map_data.length);
})();