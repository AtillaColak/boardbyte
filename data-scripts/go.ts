import fs from "fs"; 
import path from "path"; 
import { JSDOM } from "jsdom";

async function getLastGameId(): Promise<number> {
  return 86139; // hardcoded for now. Later dynamically fetch. Or trying counting upwards. Bad method.
}

async function downloadGame(id: number): Promise<void> {
  const url = `https://ps.waltheri.net/include/ajax_game.php?id=${id}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`Failed to fetch game ID ${id}`);
    return;
  }

  const text = await res.text();

  if (!text.includes("info")) {
    console.warn(`Game ID ${id} not found or invalid SGF format`);
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