#!/bin/bash

# ******************** EXERCICIO 04 ********************
echo ' '
#diretorio="/home/andreserudo/Documentos/Trybe/unidade01/"
arquivo="myFile"
# if [ -d $diretorio ]; then 
if [ "`pwd`$arquivo"=true ]; then 
  echo "O camminho $diretorio está habilitado!"
  if [ -w  $arquivo ]; then 
    echo "Você tem permissão para editar $arquivo"
  else
    echo "Você não foi autorizado a editar $arquivo"
  fi 
fi