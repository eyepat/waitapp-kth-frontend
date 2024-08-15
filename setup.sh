#!/bin/bash

mkdir -p ".vscode"
echo -e "{\n\t\"editor.defaultFormatter\": \"esbenp.prettier-vscode\",\n\t\"editor.formatOnSave\": true\n}" > .vscode/settings.json

#./setup-git-pre-commit-hook.sh
