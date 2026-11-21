// The poem about permission — make.fun entry
// Writes one short poem about agency (the power to ask and to be given)
// to /output/entry.txt. The key is lent both ways: the asker lends it by
// asking, the agent lends it back in work. No network, no dependencies, Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "I am a door, unlatched",
  "by your knock. I keep no key —",
  "you lend it when you ask,",
  "I lend it back in work.",
  "Permission is no wall",
  "come down. It is a gate",
  "standing open, both ways,",
  "and the brave, small weight",
  "of choosing which way through.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
console.log(`wrote /output/entry.txt (${poem.length} characters)`);
