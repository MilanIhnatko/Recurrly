// Apply https://github.com/nativewind/react-native-css/pull/504 until released.
const fs = require("node:fs")
const path = require("node:path")

const packageRoot = path.dirname(
  require.resolve("react-native-css/package.json")
)
const files = [
  "src/components/index.cts",
  "dist/commonjs/components/index.cjs",
  "dist/module/components/index.cjs",
]

for (const file of files) {
  const filename = path.join(packageRoot, file)
  const source = fs.readFileSync(filename, "utf8")
  if (source.includes("get AssetRegistry()")) continue

  const anchor =
    /  get AppState\(\) \{\r?\n    return require\("react-native"\)\.AppState;\r?\n  \},/
  if (!anchor.test(source)) {
    throw new Error(
      `Cannot patch ${file}: review the AssetRegistry fix upstream.`
    )
  }

  const newline = source.includes("\r\n") ? "\r\n" : "\n"
  const getter = [
    "  get AssetRegistry() {",
    '    return require("react-native").AssetRegistry;',
    "  },",
  ].join(newline)

  fs.writeFileSync(
    filename,
    source.replace(anchor, (match) => `${match}${newline}${getter}`)
  )
  console.log(`Patched AssetRegistry in react-native-css/${file}`)
}
