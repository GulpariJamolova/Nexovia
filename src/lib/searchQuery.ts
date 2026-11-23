/*
  Helps the career search tell three things apart:
    1. a real career we have (show it, even with small spelling mistakes),
    2. a real-looking career we don't have yet (say so honestly),
    3. random typing such as "asdfgh" (ask the student to try again).

  Nothing here invents results. It only decides which message to show.
  Everything runs in the browser, with no AI and no network requests.
*/

// Words that carry no meaning in a search like "I want to be a pilot".
const STOP_WORDS = new Set([
  "a", "an", "the", "i", "im", "id", "me", "my", "to", "be", "become", "becoming",
  "want", "wanna", "would", "like", "love", "career", "careers", "job", "jobs",
  "work", "working", "as", "in", "of", "for", "and", "or", "about", "what", "is",
  "how", "do", "does", "someday", "future", "dream", "please",
]);

// Short words and acronyms that are fine even though they look unusual.
const ALLOWED = new Set([
  "ai", "it", "ux", "ui", "hr", "pr", "vr", "ar", "3d", "dj", "mc", "gp", "er",
  "ceo", "cto", "cfo", "seo", "ict", "cad", "sql", "css", "html", "app", "apps",
  "vet", "pe", "pt", "nasa", "esports", "phd", "mba", "law", "art", "tv", "web",
]);

/* ---------- "Does this look like a word?" ---------- */

// How often each letter follows another in about 57,000 common English words
// (from the open-source wordfreq list). 27 x 27 values, one character each.
const BIGRAMS =
  "3rrsrqqpqpmnproorjrsqnnpfjiripqqjlolphntqthpftrtonljnkpuokjtgejsjbtjitibsplsgf9nbrtgohsggtrarqhguhhrnrqdd9mcwrjjnujmktheolkribppipkkamctqlptommjmfiqoslniutqknlnmiqthjgtsgeuddsigtiasmpsagencwsifhtgoqrbcpkoqgasplqahancsujijujejtagmmlthcpmpqbkapcpqnsprnpfgekqpvsnhpsrjpdidnovhifuifisihhfiulhilfuhifjfuskhjvkgnufjploqlansknemapastkkoukjgu9ktlhsk6gpoplg6rdsuqnhuiggtbckqktsahoiqfhbmcurjqrsmujrimjiopigjrtmlheliqnnpplmojngmrquqpdtqqropklhqtijiuhhrsbgrjhtr8tqqqegamaonjigiiggmggkggjiigkgzjigggttmnpuknjtdmmoosleorqoliboewpjphsigqrblnnkppiiqtpflblatsimfujfru7cnjirh7rqppekaoioqpqpqmpipgksrtkpettsdjejhjpuchgxggevacigesiakjfkeaakarvlkmujgrtelokrshdpqlidjblburkseskeoueelkgptiiitokgmneyqlnmqijhocgoopoobnqnlhkffituiggwghntejnjirhhiiiohjeoq";
const A = "a".charCodeAt(0);
const code = (ch: string) => ch.charCodeAt(0) - A + 1; // 1..26, 0 = word edge
const logp = (a: number, b: number) => (parseInt(BIGRAMS[a * 27 + b], 36) / 35) * 12 - 12;

function wordScore(w: string) {
  const s = [0, ...[...w].map(code), 0];
  let total = 0;
  for (let i = 0; i < s.length - 1; i++) total += logp(s[i], s[i + 1]);
  return total / (s.length - 1);
}

const ROWS = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
const KEY = new Map<string, [number, number]>();
ROWS.forEach((row, r) => [...row].forEach((ch, c) => KEY.set(ch, [r, c])));

// Longest run of neighbouring keys typed in one direction, like "asdf" or "lkjh".
function keyboardRun(w: string) {
  let run = 1;
  let best = 1;
  let prev = 0;
  for (let i = 0; i < w.length - 1; i++) {
    const a = KEY.get(w[i]);
    const b = KEY.get(w[i + 1]);
    const d = a && b && a[0] === b[0] && Math.abs(b[1] - a[1]) === 1 ? b[1] - a[1] : 0;
    run = d !== 0 && d === prev ? run + 1 : d !== 0 ? 2 : 1;
    prev = d;
    best = Math.max(best, run);
  }
  return best;
}

// "jkjkjk", "aaaa", "sdfsdf"
function isRepeated(w: string) {
  for (let u = 1; u <= w.length / 2; u++) {
    if (w.length % u !== 0) continue;
    const k = w.length / u;
    if (w === w.slice(0, u).repeat(k) && ((u <= 2 && k >= 3) || (u >= 3 && k >= 2))) return true;
  }
  return false;
}

/** True when a single lowercase word looks like random typing. */
export function looksLikeGibberish(word: string): boolean {
  if (!/^[a-z]+$/.test(word)) return /^[^a-z0-9]+$/.test(word) || /^\d+$/.test(word);
  if (word.length < 3) return false;
  const run = keyboardRun(word);
  if (run >= 5 || (run >= 3 && run >= word.length - 2)) return true;
  if (isRepeated(word)) return true;
  if (word.length >= 4 && !/[aeiouy]/.test(word)) return true;
  if (/[^aeiouy]{6,}/.test(word)) return true;
  if (word.length >= 5 && wordScore(word) < -4.2) return true;
  return false;
}

/* ---------- Spelling help ---------- */

// Optimal string alignment distance (Levenshtein + swapped neighbours).
export function editDistance(a: string, b: string, max = 3): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const d: number[][] = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
  }
  return d[a.length][b.length];
}

function allowedDistance(len: number) {
  if (len <= 3) return 0;
  if (len <= 6) return 1;
  if (len <= 9) return 2;
  return 3;
}

/**
 * The closest known word, if the typed word is probably a misspelling of it.
 * `vocabulary` should be ordered most-common first: on a tie, the earlier word wins.
 */
export function closestWord(word: string, vocabulary: string[]): string | null {
  const max = allowedDistance(word.length);
  if (max === 0) return null;
  let best: string | null = null;
  let bestD = max + 1;
  for (const v of vocabulary) {
    if (Math.abs(v.length - word.length) > max) continue;
    const dist = editDistance(word, v, max);
    if (dist < bestD) {
      best = v;
      bestD = dist;
    }
  }
  return bestD <= max ? best : null;
}

export function meaningfulTokens(query: string): string[] {
  return query
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t && !STOP_WORDS.has(t));
}

export function isAllowedShortWord(word: string) {
  return ALLOWED.has(word);
}
