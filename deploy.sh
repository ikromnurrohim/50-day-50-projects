git add .

msg="update site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi

git commit -m "$msg"

git push origin master

# origin nya di sesuaikan dengan remote anda
# master nya di sesuaikan, ke branch mana akan di psuh

# cara run nya E:\infosys>./deploy.sh "pesan commit nya"