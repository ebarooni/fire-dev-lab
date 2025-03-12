import config from "@ebarooni/eslint-config";

export default [
  { ignores: ["**/android", "**/ios", "**/dist"] },
  ...config.javascript,
  config.json,
  config.markdown,
];
