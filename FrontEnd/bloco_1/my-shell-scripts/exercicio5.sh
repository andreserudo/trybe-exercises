#!/bin/bash

read -p "Nome do arquivo ou diretório: " valor 

if [ -f $valor ]; then 
  echo "É um arquivo"
else 
  if [ -d $valor ]; then 
    echo "É um diretorio"    
  else 
    echo "É outra coisa"
  fi
fi

ls -l $valor
