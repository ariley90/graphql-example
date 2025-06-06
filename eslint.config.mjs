import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.config({
    ignorePatterns: [
      "node_modules/*",
      "public/mockServiceWorker.js",
      "generators/*",
    ],
    overrides: [
      {
        files: ["**/*.ts", "**/*.tsx"],
        parser: "@typescript-eslint/parser",
        env: {
          browser: true,
          node: true,
          es6: true,
        },
        extends: [
          "plugin:import/errors",
          "plugin:import/warnings",
          "plugin:import/typescript",
        ],
        rules: {
          "import/no-restricted-paths": [
            "error",
            {
              zones: [
                // disables cross-feature imports:
                // eg. src/features/discussions should not import from src/features/comments, etc.
                {
                  target: "./src/features/characters",
                  from: "./src/features",
                  except: ["./characters"],
                },
                {
                  target: "./src/features/episodes",
                  from: "./src/features",
                  except: ["./episodes"],
                },
                {
                  target: "./src/features/locations",
                  from: "./src/features",
                  except: ["./locations"],
                },
                // enforce unidirectional codebase:

                // e.g. src/app can import from src/features but not the other way around
                {
                  target: "./src/features",
                  from: "./src/app",
                },

                // e.g src/features and src/app can import from these shared modules but not the other way around
                {
                  target: [
                    "./src/components",
                    "./src/hooks",
                    "./src/lib",
                    "./src/types",
                    "./src/utils",
                  ],
                  from: ["./src/features", "./src/app"],
                },
              ],
            },
          ],
        },
      },
      {
        plugins: ["check-file"],
        files: ["src/**/*.ts", "src/**/*.tsx"],
        rules: {
          "check-file/filename-naming-convention": [
            "error",
            {
              "**/*.{ts,tsx}": "CAMEL_CASE",
            },
            {
              ignoreMiddleExtensions: true,
            },
          ],
          "check-file/folder-naming-convention": [
            "error",
            {
              "!(src/app)/**/*": "CAMEL_CASE",
              "!(**/__tests__)/**/*": "CAMEL_CASE",
            },
          ],
        },
      },
    ],
  }),
];

export default eslintConfig;
