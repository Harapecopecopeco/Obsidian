#GCP

Google公式ドキュメントによると、スタンダート環境は次のようなニーズに適している。

## スタンダード環境を選択する場合

アプリケーション インスタンスは、次に示すサポートされている言語のランタイム環境を使用して、[サンドボックス](https://en.wikipedia.org/wiki/Sandbox_(computer_security))内で実行されます。

迅速なスケーリングに対処する必要があるアプリケーション。

スタンダード環境は、次の特性を持つアプリケーションに適しています。

-   ソースコードが、**サポートされているプログラミング言語の特定のバージョン**で記述されている。
    -   Python 2.7、Python 3.7、Python 3.8、Python 3.9
    -   Java 8、Java 11
    -   Node.js 10、Node.js 12、Node.js 14、Node.js 16（プレビュー）
    -   PHP 5.5、PHP 7.2、PHP 7.3、PHP 7.4
    -   Ruby 2.5、Ruby 2.6、Ruby 2.7
    -   Go 1.11、Go 1.12、Go 1.13、Go 1.14、Go 1.15、Go 1.16（プレビュー）
-   無駄な投資を抑え、**無料または低コストで運用する**ことを目的としている。たとえばトラフィックがない場合、アプリケーションを 0 インスタンスにスケーリングできます。
-   即時のスケーリングを必要とする、**トラフィックの突然かつ急激な増加**がある。
 
## app.yaml

```yaml:app.yaml

# T.B.D.

```
