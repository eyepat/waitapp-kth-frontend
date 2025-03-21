#!/usr/bin/env bun

import fs from 'fs';

// Define the environment variables directly from `import.meta.env`
// @ts-ignore
const viteEnv = import.meta.env;

const apis = [
  {
    name: 'Base',
    baseUrl: viteEnv.VITE_API_BASE_URL,
    openapiPath: viteEnv.VITE_API_BASE_OPENAPI_PATH,
  },
];

async function isEndpointAvailable(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    if (url.includes('localhost')) {
      return isEndpointAvailable(url.replace('localhost', '127.0.0.1'));
    }
    console.error(`Error checking endpoint: ${url}`, error);
    return false;
  }
}

const outputDir = './src/api';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const args = Bun.argv.slice(2);
const selectedApis = new Set(args.map((api) => api.trim().toLowerCase()));

const filteredApis = apis.filter(
  ({ name }) =>
    selectedApis === undefined ||
    selectedApis.has(name.toLowerCase()) ||
    selectedApis.size === 0
);

const promises: Promise<void>[] = [];

// Generate clients for each API
filteredApis.forEach(({ name, baseUrl, openapiPath }) => {
  promises.push(
    (async ({ name, baseUrl, openapiPath }) => {
      if (!baseUrl || !openapiPath) {
        console.error(`Missing configuration for ${name} API`);
        return;
      }

      if (!(await isEndpointAvailable(`${baseUrl}${openapiPath}`))) {
        console.error(`Could not reach ${name} API, skipping...`);
        return;
      }

      const openapiUrl = `${baseUrl}${openapiPath}`;
      console.log(`Generating client for ${name} API from ${openapiUrl}`);

      const result = Bun.spawn([
        'bun',
        'swagger-typescript-api',
        '-p',
        openapiUrl,
        '-o',
        outputDir,
        '--name',
        `${name}Client.ts`,
      ]);

      await result.exited;

      if (
        result.exitCode !== null &&
        !isNaN(result.exitCode) &&
        result.exitCode !== 0
      ) {
        const output = await new Response(result.stderr).text();
        console.error(`Error generating client for ${name} API`, output);
        return;
      }

      console.log(`Generated client for ${name} API successfully.`);

      // Update the base URL in the generated client
      const clientFilePath = `${outputDir}/${name}Client.ts`;
      const replaceResult = Bun.spawn([
        'sed',
        '-i',
        `s|"${baseUrl}"|import.meta.env.VITE_API_BASE_URL|g`,
        clientFilePath,
      ]);

      if (
        replaceResult.exitCode !== null &&
        !isNaN(replaceResult.exitCode) &&
        replaceResult.exitCode !== 0
      ) {
        const output = await new Response(replaceResult.stderr).text();
        console.error(`Error updating base URL in ${name}Client.ts`, output);
        return;
      }

      console.log(`Updated base URL in ${name}Client.ts successfully.`);
    })({ name, baseUrl, openapiPath })
  );
});

await Promise.all(promises);

// All clients generated
console.log('All clients have been generated and updated.');
