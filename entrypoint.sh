#!/bin/bash

# Frontend entrypoint script, replaces env variables in the frontend files

set -eu

envsubst '${BACKEND_SERVER}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

exec "$@"

# Function to update environment variables in files recursively
update_env_vars_placeholders() {
  local directory="$1"
  local old_var="$2"
  local new_value="${!3}"

  # Find files in the given directory recursively
  find "$directory" -type f -exec sed -i "s|{{$old_var}}|$new_value|g" {} +
}

# Update the environment variables in all HTML files within /usr/share/nginx/html recursively
#update_env_vars_placeholders "/usr/share/nginx/html" "__API_BASE_URL__" "API_BASE_URL"

# Start Nginx
nginx -g 'daemon off;'