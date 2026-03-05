import { deleteAsync } from "del";
import { mkdir, readdir, readFile, writeFile, appendFile } from "fs/promises";
import path from "path";
import uppercamelcase from "uppercamelcase";

const NG_PROJECT = 'projects/angular-lobehub-icons';
const PATHS = {
  // Path to LobHub SVG icons (from @lobehub/icons-static-svg)
  ICONS: [
    { src: 'node_modules/@lobehub/icons-static-svg/icons', attribute: '' },
  ],

  // Path to Angular lib project
  ICONS_DEST: `${NG_PROJECT}/icons/svg`,

  // Path to icons listing index
  INDEX_FILE: `${NG_PROJECT}/icons/index.ts`,

  // Path to icon component template
  TEMPLATE_FILE: `${NG_PROJECT}/src/templates/component.ts.tpl`,
};

/**
 * Remove extension from filename
 * @param {string} filename
 * @returns filename without extension
 */
function stripExtension(filename) {
  return filename.substr(0, filename.lastIndexOf('.'));
}

/**
 * Recursively read all SVG files from a directory
 */
async function getAllSvgFiles(dir, baseDir = '') {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = `${dir}/${entry.name}`;
    const relativePath = baseDir ? `${baseDir}/${entry.name}` : entry.name;
    
    if (entry.isDirectory()) {
      files.push(...await getAllSvgFiles(fullPath, relativePath));
    } else if (entry.name.endsWith('.svg')) {
      files.push({ path: fullPath, relative: relativePath });
    }
  }
  
  return files;
}

/**
 * Generate LobHub Icons components
 */
async function generate() {
  console.log('Starting LobHub icons components generation...');

  // Delete lobehub icons folder and index
  await deleteAsync([PATHS.ICONS_DEST, PATHS.INDEX_FILE]);

  // Create icons destination folder
  await mkdir(PATHS.ICONS_DEST, { recursive: true });

  // Generate each icon file
  for (const icons of PATHS.ICONS) {
    const svgFiles = await getAllSvgFiles(icons.src);
    
    for (const file of svgFiles) {
      if (!file.path.endsWith('.svg')) {
        continue;
      }

      const iconNameHyphens = stripExtension(file.relative) + (icons.suffix ?? '');
      const iconNameCamel = uppercamelcase('icon-' + iconNameHyphens);

      const svgRaw = await readFile(file.path, 'utf-8');
      const svg = svgRaw.replaceAll('\n', '');
      const component = `export const ${iconNameCamel} = \`${svg}\``;

      await writeFile(`${PATHS.ICONS_DEST}/${iconNameHyphens}.ts`, component, 'utf-8');

      await appendFile(
        PATHS.INDEX_FILE,
        `export { ${iconNameCamel} } from './svg/${iconNameHyphens}';\n`
      );
    }
  }

  console.log('LobHub icons generation complete!');
}

generate();

