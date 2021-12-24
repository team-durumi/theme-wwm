# hugo tailwind theme / Project wwm

Based on [bep/hugo-starter-tailwind-basic](https://github.com/bep/hugo-starter-tailwind-basic)

## development

### run server

```bash
$ git clone https://github.com/team-durumi/hugo-theme-tw.git
$ cd theme-wwm/exampleSite
$ npm i && hugo serve
# open http://localhost:1313
```

### css, js (via hugo pipe)

```
src: assets/style.css => build: /static/assets/style.min.css
src: assets/index.js => build: /static/assets/index.min.js
```

## firebase-realtime(test)

items
https://wwm-items-3711e-default-rtdb.asia-southeast1.firebasedatabase.app/1D1gAFdHxQd06rDHUxkHu80WVOQC7fYNh4UuYYYJ-590/items.json

## env

<https://gohugo.io/getting-started/configuration/#configure-with-environment-variables>

- HUGO_PARAMS_STIBEE_ACCESSTOKEN => config/_default/params.yml > stibee.accessToken

```
$ env HUGO_PARAMS_STIBEE_ACCESSTOKEN={{ token }} hugo serve
```
