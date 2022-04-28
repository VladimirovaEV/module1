# git-config

git config --list # посмотреть настройки
git config --global user.name “имя”
git config --global user.email “почта”

git config --global core.autocrlf true
git config --global core.safecrlf warn
git config --global core.quotepath off
git config --global init.defaultBranch main

git init # инициализация
git status # текущее состояние
git add . # добавить все файлы в трек
git commi -m "сообщение" # сделать коммит текущего состояния
git log --oneline # посмотреть историю коммитов
git diff # показывает изменения
git diff --color-words # показывает по строкам изменения
git checkout . # откатить изменения у всех файлов трека
git checkout name.file # откатить изменения в одном файле или каталоге или восстановить удаленный файл
