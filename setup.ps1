# Create the .vscode directory if it doesn't exist
$directory = ".vscode"
if (-not (Test-Path -Path $directory)) {
    New-Item -Path $directory -ItemType Directory
}

# Create or overwrite the settings.json file with the specified content
$settingsContent = @"
{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
}
"@

$settingsFile = "$directory/settings.json"
$settingsContent | Out-File -FilePath $settingsFile -Encoding utf8
