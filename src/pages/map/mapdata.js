
//Data from: https://environment.data.gov.uk/water-quality

const fs = require("fs");

function readDataForYear(year) {
    const map_data = [];

    fs.readFile(year + ".csv", "utf-8", (err, data) => {
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

        console.log(map_data);
        for (const data of map_data) {
            console.log(data);
        }
    });
}

(async function () {
    await readDataForYear("2023");
})();