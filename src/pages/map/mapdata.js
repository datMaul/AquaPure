
//Data from: https://environment.data.gov.uk/water-quality

const fs = require("fs");

fs.readFile("2023.csv", "utf-8", (err, data) => {
    if (err) console.log(err);


    const rows = data.split('\n').slice(1);

    rows.forEach(elt => {
        const row = elt.split(',');
        const Name = row[0];
        const URL = row[1];
        const CurrentLocation = row[3];
        const LocationNorth = row[16];
        const LocationEast = row[15];
        const Parameter = row[5];
        const Date = row[4];

        console.log(Name, URL, CurrentLocation, LocationNorth, LocationEast, Parameter, Date);
    });
})
