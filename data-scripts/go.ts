import { fetch } from "undici";
import fs from "fs"; 
import path from "path"; 
import { JSDOM } from "jsdom";

async function getLastGameId(): Promise<number> {
  const res = await fetch("https://ps.waltheri.net/database/");
  const html = await res.text();
  const dom = new JSDOM(html);
  const anchor = dom.window.document.querySelector(
    "#games-list > div > div:nth-child(1) > div > div.game-info > h4 > a.expand-link.pull-right"
  );

  if (!anchor) throw new Error("Could not find last game anchor.");

  const href = anchor.getAttribute("href") || "";
  const match = href.match(/\/(\d+)\//);
  if (!match) throw new Error("Invalid href format.");

  return parseInt(match[1], 10);
}

async function downloadGame(id: number): Promise<void> {
  const url = `https://ps.waltheri.net/include/ajax_game.php?id=${id}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`Failed to fetch game ID ${id}`);
    return;
  }

  const text = await res.text();

  if (!text.includes("SZ[") || text.includes("Game not found")) {
    console.warn(`Invalid SGF for ID ${id}`);
    return;
  }

  const outputPath = path.join("data/sgf", `game_${id}.sgf`);
  fs.mkdirSync("data/sgf", { recursive: true });
  fs.writeFileSync(outputPath, text);
  console.log(`✅ Downloaded game ${id}`);
}

export async function goDataInstaller(startId = 200) {
  const endId = await getLastGameId();
  console.log(`Fetching Go games from ID ${startId} to ${endId}...`);

  for (let id = startId; id <= endId; id++) {
    try {
      await downloadGame(id);
    } catch (err) {
      console.error(`Error on game ID ${id}:`, err);
    }
  }

  console.log("🎉 Done downloading Go game SGFs.");
}