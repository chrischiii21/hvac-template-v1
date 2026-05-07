Get-ChildItem -Path src -Include *.astro,*.tsx,*.ts,*.css -Recurse | ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName)
    $newContent = $content.Replace('rounded-none]', 'rounded-none')
    if ($content -ne $newContent) {
        [System.IO.File]::WriteAllText($_.FullName, $newContent)
        Write-Host "Cleaned up: $($_.FullName)"
    }
}
