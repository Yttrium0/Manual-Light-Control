if [ $(gpio read 28) = 0 ]
then
	gpio write 28 1
	echo "allumé"
else
	gpio write 28 0
	echo "éteinte"
fi
