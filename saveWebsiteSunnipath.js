import fetch from 'node-fetch';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function test() {
    let url = 'https://web.archive.org/web/20110326002926/https://www.sunnipath.com/Library/Hadith/H0002P0'
    let suffix = ".aspx"
    // 1755 ,32832,33759,783,33865 ,782,33754 ,33861 ,810 ,1198,

    mkdirSync(join(__dirname, "bukhari-bewley"), { recursive: true })

    let breakcounter = 0

    for (let i = 60; i <=100; i++) {

        if (breakcounter > 30)
            break

        let res = await fetch(url + String(i).padStart(3, '0') + suffix)

        if (res.ok) {
            let html = await res.text()
            writeFileSync(join(__dirname, "bukhari-bewley", i + '.html'), html)
            breakcounter = 0
        } else
            breakcounter++

        await new Promise(r => setTimeout(r, 60000));
    }
}

test()