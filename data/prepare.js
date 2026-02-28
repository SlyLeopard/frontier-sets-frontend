import { get } from "axios";
import { load } from "cheerio";

const URL = "https://bulbapedia.bulbagarden.net/wiki/List_of_Battle_Frontier_Trainers_in_Generation_IV";

function calculateRank(index) {
    if (index <= 100) return 1;
    if (index <= 120) return 2;
    if (index <= 140) return 3;
    if (index <= 160) return 4;
    if (index <= 180) return 5;
    if (index <= 200) return 6;
    if (index <= 220) return 7;
    return 8;
}

async function scrape() {
    const { data } = await get(URL);
    const $ = load(data);
    const table = $("table.wikitable").first();
    const trainers = [];
    const fs = require("fs");

    table.find("tr").each((i, row) => {
        const cells = $(row).find("td");

        if (cells.length >= 3) {
            const index = $(cells[0]).text().trim();
            const trainerClass = $(cells[1]).text().trim();
            const name = $(cells[2]).text().trim();

            trainers.push({
                index,
                class: trainerClass,
                name,
                rank: calculateRank(Number(index))
            });
        }
    });

    fs.writeFileSync(
        "trainers.json",
        JSON.stringify(trainers, null, 2)
    );
}

scrape();