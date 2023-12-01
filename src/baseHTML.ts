export const BaseHTML = ({ children }: JSX.ElementChildrenAttribute) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>The Beth Stack</title>
    <script src="https://unpkg.com/htmx.org@1.9.9"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/hyperscript.org@0.9.12"></script>
</head>
    ${children}
</html>
`
