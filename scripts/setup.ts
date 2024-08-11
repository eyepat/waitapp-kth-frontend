import { Stats } from 'fs';
import { mkdir, cp, stat } from 'fs/promises';
import { exit } from 'process';

const vscodeSettingsPath = '.vscode/settings.json';
const dirPath = (() => {
  const path = vscodeSettingsPath.split('/');
  path.pop();
  return path.join('/');
})();
const templateSettingsPath = 'scripts/conf/settings.json';

await stat(dirPath).then(async (value: Stats) => {
  if (!value.isDirectory()) {
    await mkdir(dirPath, { recursive: true });
  } else {
    await stat(vscodeSettingsPath).then((value: Stats) => {
      if (value.isFile()) {
        // TODO: check if content includes the vscode settings else append them
        console.log('vscode configuration already exists');
        exit(0);
      }
    });
  }
});

// if there are no settings copy the template
await cp(templateSettingsPath, vscodeSettingsPath)
  .then(() => {
    console.log('Successfully set up vscode settings!');
  })
  .catch((error) => {
    console.error(error);
  });
