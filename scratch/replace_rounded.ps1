$pattern = '\brounded(-[a-z0-9\[\]\.\/-]+)?\b'
Get-ChildItem -Path src -Include *.astro,*.tsx,*.ts,*.css -Recurse | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $newContent = $content -replace $pattern, 'rounded-none'
    if ($content -ne $newContent) {
        Set-Content $_.FullName $newContent
        Write-Host "Updated: $($_.FullName)"
    }
}
