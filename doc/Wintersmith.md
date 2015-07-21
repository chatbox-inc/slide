# Winterstmith 使い方メモ

"template"が無いと出力はかからない。


templateで取れるオブジェクト

## page

page.filepath
page.metadata
page.markdown
page.__env
page.__plugin
page.__filename
page.parent

page.html -> 何故か取れる。

## locals

config.jsで定義した値

この中にある子は中でぱーすされる。

## その他

requireで定義した値も取れる

