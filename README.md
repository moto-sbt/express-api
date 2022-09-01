# 起動手順
1. docker を立ち上げる（mysql）
```
$ docker compose up
```

2. テストデータを登録する
```
$ yarn db:insert
```

3. 実行
```
$ yarn dev
```

# vscode で ER図 preview
- PlantUML の vscode 拡張を入れる
  - https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml
- docker で `plantuml-server` をたてる
```
$ docker run -d -p 8080:8080 plantuml/plantuml-server:jetty
```
- `documents/er.pu` にて `option + D` で preview（winなら`alt + D`）