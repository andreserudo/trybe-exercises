#!/bin/bash

echo "O argumento do exercicio 06 - $1";
if [ -f $1 ]; then 
  echo "É um arquivo"
else 
  if [ -d $1 ]; then 
    echo "É um diretorio"
  else 
    echo "É outra coisa"
  fi
fi

ls -l $1