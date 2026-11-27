import { looksLikeGibberish, wordScore } from "@/lib/searchQuery";
import { vocabulary } from "@/lib/careers";

/*
  Checks typed answers for random letters ("udglegwidgwej", "asdfgh", "hagiwel kuz").
  - kind "name": only the hard rules (keyboard rows, repeated letters, no vowels), so real
    names such as Dilnoza or Yusuf are never blocked.
  - kind "text": also checks how English-like the letter patterns are.
  Limit: a made-up word that is easy to pronounce can slip through, because we have no
  full dictionary. Everything here runs in the browser, nothing is sent anywhere.
*/
const COMMON =
  "the and for are but not you all any can had her was one our out day get has him his how man new now old see two way who boy did its let put say she too use want love like help make build become work with that this have from they what when your about people would could should future world life time good better more some very just into over than then them these cure robot animals drawing games music art doctor teacher scientist engineer rugby judo yoga karate skateboarding sushi pizza anime minecraft youtube football cricket tennis hockey swimming dancing reading cooking painting singing coding gardening fashion cartoons".split(
    " "
  );
const known = new Set<string>([...vocabulary, ...COMMON]);

const trigrams = new Set<string>();
for (const w of known) {
  const p = `^${w}$`;
  for (let i = 0; i < p.length - 2; i++) trigrams.add(p.slice(i, i + 3));
}
function coverage(w: string) {
  const p = `^${w}$`;
  let hit = 0;
  const n = p.length - 2;
  for (let i = 0; i < n; i++) if (trigrams.has(p.slice(i, i + 3))) hit++;
  return hit / n;
}

function wordIsOdd(w: string, kind: "name" | "text") {
  // Names: hard rules, plus long words (8+ letters) with very un-English letter patterns.
  if (kind === "name") return looksLikeGibberish(w, false) || (w.length >= 8 && wordScore(w) < -3.7);
  if (known.has(w)) return false;
  if (looksLikeGibberish(w)) return true;
  if (w.length <= 4) return false;
  return wordScore(w) < -3.5 || coverage(w) < 0.6;
}

/** True when the typed text looks like random letters. Empty text is not a problem. */
export function textLooksLikeGibberish(text: string, kind: "name" | "text" = "text"): boolean {
  const words = text.toLowerCase().replace(/[^a-z\s]/g, " ").split(/\s+/).filter((w) => w.length >= 3);
  if (words.length === 0) return text.trim() !== "" && !/[a-z0-9]/i.test(text);
  const odd = words.filter((w) => wordIsOdd(w, kind));
  if (kind === "name") return odd.length > 0;
  const hardBreak = odd.some((w) => !known.has(w) && looksLikeGibberish(w, false));
  return hardBreak || odd.length >= words.length / 2 || odd.some((w) => w.length >= 8);
}
