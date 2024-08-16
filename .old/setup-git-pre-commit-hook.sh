#!/bin/sh

# Determine the root of the repository
REPO_ROOT=$(git rev-parse --show-toplevel)
if [ $? -ne 0 ]; then
  echo "Error: Not a git repository."
  exit 1
fi

# Determine if .git is a file (indicating a submodule) or a directory
if [ -f "$REPO_ROOT/.git" ]; then
  # Read the actual git directory location from the .git file
  GIT_DIR=$(sed 's/gitdir: //' "$REPO_ROOT/.git")
else
  # Use the regular .git directory
  GIT_DIR="$REPO_ROOT/.git"
fi

# Path to the hooks directory
HOOK_DIR="$GIT_DIR/hooks"
PRE_COMMIT_HOOK="$HOOK_DIR/pre-commit"

# Create the hooks directory if it doesn't exist
mkdir -p "$HOOK_DIR"

# Write the pre-commit hook
cat << 'EOF' > "$PRE_COMMIT_HOOK"
#!/bin/sh

# This script runs and checks typescript
# before allowing a commit.
# TODO: add formatting run too

# Run bun tsc
bun tsc

# Capture the exit code of bun tsc
RESULT=$?

# If tsc failed, prevent the commit
if [ $RESULT -ne 0 ]; then
  echo "TypeScript check failed. Commit aborted."
  exit 1
fi

# Otherwise, allow the commit
exit 0
EOF

# Make the pre-commit hook executable
chmod +x "$PRE_COMMIT_HOOK"

echo "Pre-commit hook installed successfully."
