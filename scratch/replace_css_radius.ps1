Get-ChildItem -Path src -Include *.astro,*.css -Recurse | ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName)
    # Match border-radius and all directional variants
    $pattern = '(?i)(border(-(top|bottom)-(left|right))?-radius|border-radius):\s*[^;!]+(!important)?\s*;'
    $newContent = $content -replace $pattern, 'border-radius: 0$5;'
    if ($content -ne $newContent) {
        [System.IO.File]::WriteAllText($_.FullName, $newContent)
        Write-Host "Updated CSS: $($_.FullName)"
    }
}
