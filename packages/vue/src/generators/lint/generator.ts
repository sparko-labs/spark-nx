import {
  addDependenciesToPackageJson,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { LintGeneratorSchema } from './schema';

export async function lintGenerator(tree: Tree, options: LintGeneratorSchema) {
  if (options.hasTS) {
    addDependenciesToPackageJson(tree, {}, {
      "eslint": "^8.56.0",
      "eslint-plugin-n": "^16.6.1",
      "eslint-plugin-vue": "^9.19.2",
      "eslint-plugin-import": "^2.29.1",
      "eslint-plugin-promise": "^6.1.1",
      "@typescript-eslint/eslint-plugin": "^6.17.0",
      "eslint-config-standard-with-typescript": "^43.0.0",
    })
  }

  generateFiles(tree, path.join(__dirname, 'files'), options.project, options);
  await formatFiles(tree);
}

export default lintGenerator;
