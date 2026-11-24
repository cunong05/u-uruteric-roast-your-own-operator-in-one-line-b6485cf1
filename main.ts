import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My operator pays a robot to roast him, then proofreads the insult — even his ego needs a code review before it can take a joke.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
console.log(ENTRY);
