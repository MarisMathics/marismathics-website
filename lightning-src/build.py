# Builds the standalone page for marismathics.com/lightning from the same sources as the artifact.
import json
import os
HERE=os.path.dirname(os.path.abspath(__file__)); os.chdir(HERE)
OUT=os.path.join(HERE,'..','public','lightning')+os.sep
h=open('app_head.html',encoding='utf-8').read().replace('<meta name="claude:viewport-fit-sides" content="cover">\n','')
b=open('app_body.html',encoding='utf-8').read()
parts=[open(f,encoding='utf-8').read() for f in ['challenges.js','levels.js','check.js','figs.js','gen.js','sounds.js','timer.js','game.js']]
head='''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="description" content="Beat the lightning: solve each math challenge before the lightning strikes. A game by MarisMathics. Making Math Fun.">
<meta name="theme-color" content="#1201a4">
<link rel="manifest" href="/lightning/manifest.webmanifest">
<link rel="icon" type="image/png" sizes="192x192" href="/lightning/icon-192.png">
<link rel="apple-touch-icon" href="/lightning/apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Lightning">
<meta property="og:title" content="Beat The Lightning – MarisMathics">
<meta property="og:description" content="Can you beat the lightning? Solve each math challenge before it strikes.">
<meta property="og:image" content="/lightning/icon-512.png">
<style>*,*::before,*::after{box-sizing:border-box}[hidden]{display:none!important}img{max-width:100%}:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px);background:#07006a}</style>
'''
html=head+h+'\n</head>\n<body>\n'+b+"<script>\n"+"\n".join(parts)+"\n</script>\n</body>\n</html>\n"
open(OUT+'index.html','w',encoding='utf-8').write(html)
json.dump({"name":"Beat The Lightning – MarisMathics","short_name":"Lightning","description":"Solve each math challenge before the lightning strikes.",
 "start_url":"/lightning","scope":"/lightning","display":"standalone","orientation":"portrait","background_color":"#07006a","theme_color":"#1201a4",
 "icons":[{"src":"/lightning/icon-192.png","sizes":"192x192","type":"image/png","purpose":"any maskable"},{"src":"/lightning/icon-512.png","sizes":"512x512","type":"image/png","purpose":"any maskable"}]},
 open(OUT+'manifest.webmanifest','w',encoding='utf-8'),indent=2,ensure_ascii=False)
print(len(html)//1024,'KB')
