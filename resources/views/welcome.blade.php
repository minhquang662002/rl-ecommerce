<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link rel="icon" type="image/x-icon" href="http://assets.stickpng.com/thumbs/5847f9cbcef1014c0b5e48c8.png">
    <style>
        pre {
        white-space: pre-wrap;
        }
        html {  
            line-height: 1.15;
            -webkit-text-size-adjust: 100%;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
            height: auto;
        }

        body {
            margin: 0;
            height: 100%;
        }

        a {
            background-color: transparent
        }

        [hidden] {
            display: none
        }

        *,
        :after,
        :before {
            box-sizing: border-box;
            border: 0 solid #e2e8f0
        }

        a {
            color: inherit;
            text-decoration: inherit
        }

        svg,
        video {
            display: block;

        }

        video {
            max-width: 100%;
            height: auto
        }

        p {
            margin: 0;
        }

    </style>

    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
</head>

<body>
    <div id="root">

    </div>
    <script src="{{mix('js/app.js')}}">

    </script>
</body>

</html>
