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
git commi -m "сщщбщение" # сделать коммит текущего состояния
git log --oneline # посмотреть историю коммитов
