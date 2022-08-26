# 起動手順
1. docker を立ち上げる（mysql）
```
docker compose up
```

2. テストデータを登録する
```
yarn db:insert
```

3. 実行
```
yarn dev
```