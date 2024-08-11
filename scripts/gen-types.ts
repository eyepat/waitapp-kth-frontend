import { exec } from 'child_process';
import { promisify } from 'util';
import { writeFile } from 'fs/promises';
import path from 'path';
import { rm } from 'fs';

const execPromise = promisify(exec);

const openApiUrl = `${import.meta.env.VITE_API_BASE_URL}/v3/api-docs`;
const outputPath = path.resolve('src/types', 'api-types.ts');

async function generateTypes() {
  try {
    const response = await fetch(openApiUrl);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch OpenAPI specification: ${response.statusText}`
      );
    }
    const openApiSpec = await response.text();

    const tempSpecPath = path.resolve(__dirname, 'openapi-temp.json');
    await writeFile(tempSpecPath, openApiSpec, 'utf8');

    await execPromise(
      `npx openapi-typescript ${tempSpecPath} --output ${outputPath}`
    );

    rm(tempSpecPath, () => {
      console.log('removed temp file');
    });

    console.log(`TypeScript types have been generated at ${outputPath}`);
  } catch (error) {
    console.error(
      `Error generating TypeScript types: ${(error as Error).message}`
    );
    process.exit(1);
  }
}

generateTypes();
