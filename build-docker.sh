#!/bin/bash

# Script to set environment variables for Vite

cat <<EOL > /app/.env.production
VITE_API_BASE_URL=""
VITE_FETCH_LANG_JSON="true"
EOL