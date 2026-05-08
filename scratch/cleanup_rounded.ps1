https://pagespeed.web.dev/analysis/https-hvac-template-v1-vercel-app/nn0fqzyo6i?form_factor=desktopGet-ChildItem -Path src -Include *.astro,*.tsx,*.ts,*.css -Recurse | ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName)
    $newContent = $content.Replace('rounded-none]', 'rounded-none')
    if ($content -ne $newContent) {
        [System.IO.File]::WriteAllText($_.FullName, $newContent)
        Write-Host "Cleaned up: $($_.FullName)"
    }
}
