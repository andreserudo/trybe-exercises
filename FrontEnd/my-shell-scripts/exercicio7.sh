#!/bin/bash

echo "O argumento do exercicio 07 - $2";
if [ -d $2 ]; then 
  files=`ls -l $2 | wc -l`
  echo "O $2 tem $files arquivos."
else
  echo "O argumento $2 não é um diretório."
fi;