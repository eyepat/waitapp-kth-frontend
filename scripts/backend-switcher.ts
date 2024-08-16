import { readFile, writeFile, copyFile } from 'fs/promises';
import { exit } from 'process';
import path from 'path';
import { statSync } from 'fs';
import { loadEnv } from 'vite';

const serversFilePath = path.join('scripts/conf/servers.json');
const envDevelopmentPath = path.join('.env.development');
const envLocalDevelopmentPath = path.join('.env.development.local');

const apiUrl = loadEnv('development', '.').VITE_API_BASE_URL;

export type mode = 'LOCAL' | 'PROD';

export const setBackend = async (mode: mode) => {
  try {
    const serversFileContent = await readFile(serversFilePath, 'utf-8');
    const serversConfig = JSON.parse(serversFileContent);
    const backendURL =
      mode === 'PROD'
        ? serversConfig['production-backend']
        : serversConfig['local-backend'];

    if (!backendURL) {
      console.error('backend value not found in servers.json');
      exit(1);
    }
    if (apiUrl === backendURL) {
      if (mode === 'PROD') {
        console.log('Production URL is already set as the API URL');
      } else {
        console.log('Local URL is already set as the API URL');
      }
      exit(0);
    }
    var exists = false;
    try {
      exists = statSync(envLocalDevelopmentPath).isFile();
    } catch (error) {
      exists = false;
    }

    if (!exists) {
      await copyFile(envDevelopmentPath, envLocalDevelopmentPath);
      console.log('.env.development.local file created from .env.development');
    }

    let envLocalDevContent = await readFile(envLocalDevelopmentPath, 'utf-8');

    envLocalDevContent = envLocalDevContent.replace(
      /^VITE_API_BASE_URL=.*/m,
      `VITE_API_BASE_URL=${backendURL}`
    );

    await writeFile(envLocalDevelopmentPath, envLocalDevContent, 'utf-8');
    if (mode === 'PROD') {
      console.log(
        'VITE_API_BASE_URL set to production-backend value in .env.development.local'
      );
    } else {
      console.log(
        'VITE_API_BASE_URL set to local-backend value in .env.development.local'
      );
    }
  } catch (error) {
    console.error('An error occurred:', error);
    exit(1);
  }
};
