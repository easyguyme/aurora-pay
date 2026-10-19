#!/usr/bin/env node
/**
 * Preflight check for native optional dependencies.
 *
 * `lightningcss` (pulled in by Tailwind v4's PostCSS plugin) ships its
 * native binary as a per-platform optional dependency. Linux packages also
 * include a libc suffix, such as `lightningcss-linux-x64-gnu`. npm picks that
 * package using the `process.arch` of the Node binary running the install —
 * NOT the machine's real architecture.
 *
 * That means: install under an x64 Node running under Rosetta, then run under
 * an arm64 Node (or vice versa) and you get:
 *
 *   Error: Cannot find module '../lightningcss.darwin-arm64.node'
 *
 * This script turns that into an actionable message.
 */

import { createRequire } from "node:module";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

const platform = process.platform;
const arch = process.arch;

const packageCandidates =
  platform === "linux"
    ? arch === "arm"
      ? ["lightningcss-linux-arm-gnueabihf"]
      : [
          `lightningcss-linux-${arch}-gnu`,
          `lightningcss-linux-${arch}-musl`,
        ]
    : [`lightningcss-${platform}-${arch}`];

function findPackageDir() {
  for (const pkg of packageCandidates) {
    try {
      // Resolve through the project's node_modules.
      const pkgJson = require.resolve(`${pkg}/package.json`, {
        paths: [projectRoot],
      });
      return dirname(pkgJson);
    } catch {
      // Try the next libc variant on Linux.
    }
  }
  return null;
}

const dir = findPackageDir();

if (dir && existsSync(dir)) {
  process.exit(0);
}

// Not installed for this runtime. Work out why.
const present = [];
for (const candidate of packageCandidates) {
  const path = join(projectRoot, "node_modules", candidate);
  if (existsSync(path)) present.push(candidate);
}

const lines = [
  "",
  `  Native dependency check failed.`,
  ``,
  `  This Node reports  platform=${platform}  arch=${arch}`,
  `  Expected package: ${packageCandidates.join(" or ")}`,
  ``,
];

if (present.length > 0) {
  lines.push(
    `  Installed instead: ${present.join(", ")}`,
    ``,
    `  Your node_modules was installed under a Node with a different`,
    `  architecture than the one running this command. npm selects`,
    `  lightningcss's native binary from the *installing* Node's`,
    `  process.arch, not the host's real architecture.`,
    ``,
    `  Fix — reinstall using a Node that matches this platform and architecture:`,
    ``,
    `    nvm use`,
    `    rm -rf node_modules`,
    `    npm ci`,
    ``,
  );
} else {
  lines.push(
    `  No lightningcss native package is installed at all.`,
    ``,
    `  Fix:`,
    ``,
    `    npm ci`,
    ``,
  );
}

console.error(lines.join("\n"));
process.exit(1);
