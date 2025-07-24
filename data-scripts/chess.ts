enum LichessVariant {
  Antichess = "antichess",
  Atomic = "atomic",
  Chess960 = "chess960",
  Crazyhouse = "crazyhouse",
  Horde = "horde",
  KingOfTheHill = "kingofthehill",
  Standard = "standard"
}


function installer(variant: LichessVariant): string[] {
  const now = new Date();
  const prevYear = now.getFullYear() - 1;
  let urls: string[] = [];

  if (variant === LichessVariant.Standard) {
    const base = "https://database.nikonoel.fr";
    for (let month = 1; month <= 3; month++) {
      const m = month.toString().padStart(2, '0');
      urls.push(`${base}/lichess_elite_${prevYear}-${m}.zip`);
    }
  } else {
    const base = `https://database.lichess.org/${variant}`;
    for (let month = 1; month <= 6; month++) {
      const m = month.toString().padStart(2, '0');
      urls.push(`${base}/lichess_db_${variant}_rated_${prevYear}-${m}.pgn.zst`);
    }
  }

  return urls;
}

console.log(installer(LichessVariant.Antichess)); 
console.log(installer(LichessVariant.Standard));