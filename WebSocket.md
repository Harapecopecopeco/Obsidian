#Web技術

# Goal

- `WebSocket`を用いて`Session`を確立する
- チャットシステムを実装する

### 非機能要件

- メンテナンスはほとんどない
- 緊急用に使う場合があるので可用性（システムが停止することなく可動し続ける能力）は高め
- 24時間体制

### 機能要件

#### サービス、アプリケーション

- `API Gateway`: セッション、負荷分散を担当
- [[lambda]]: ビジネスロジック
- `DynamoDB`: 　データストア

#### 使用技術

- `ws`モジュールを利用して`WebSocket`を実現する
- connect, disconnectを明示して利用する
- 



