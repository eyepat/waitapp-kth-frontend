# Determine the root of the repository
$REPO_ROOT = git rev-parse --show-toplevel
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Not a git repository."
    exit 1
}

# Determine if .git is a file (indicating a submodule) or a directory
$GIT_DIR_PATH = Join-Path -Path $REPO_ROOT -ChildPath ".git"
if (Test-Path $GIT_DIR_PATH -PathType Leaf) {
    # Read the actual git directory location from the .git file
    $GIT_DIR = Get-Content $GIT_DIR_PATH | ForEach-Object { $_ -replace 'gitdir: ', '' }
} else {
    # Use the regular .git directory
    $GIT_DIR = $GIT_DIR_PATH
}

# Path to the hooks directory
$HOOK_DIR = Join-Path -Path $GIT_DIR -ChildPath "hooks"
$PRE_COMMIT_SAMPLE = Join-Path -Path $HOOK_DIR -ChildPath "pre-commit.sample"
$PRE_COMMIT_HOOK = Join-Path -Path $HOOK_DIR -ChildPath "pre-commit"

# Create the hooks directory if it doesn't exist
if (-not (Test-Path $HOOK_DIR)) {
    New-Item -ItemType Directory -Path $HOOK_DIR | Out-Null
}

# Check if pre-commit.sample exists
if (-not (Test-Path $PRE_COMMIT_SAMPLE)) {
    Write-Host "Error: pre-commit.sample does not exist in hooks directory."
    exit 1
}

# Copy pre-commit.sample to pre-commit
Copy-Item -Path $PRE_COMMIT_SAMPLE -Destination $PRE_COMMIT_HOOK -Force

# Overwrite the pre-commit hook contents with the internal bash script
@"
#!/bin/sh

# This script runs and checks typescript
# before allowing a commit.
# TODO: add formatting run too

# Run bun tsc
bun tsc

# Capture the exit code of bun tsc
RESULT=$?

# If tsc failed, prevent the commit
if [ '$RESULT' -ne '0' ]; then
  echo "TypeScript check failed. Commit aborted."
  exit 1
fi

# Otherwise, allow the commit
exit 0
"@ | Set-Content -Path $PRE_COMMIT_HOOK -Force

# Write-Host "Pre-commit hook installed successfully."
