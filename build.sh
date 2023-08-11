# eas build --platform android --local --output ./a.aab
# rm -rf *.apks *.apk *.pb
# java -jar ./bundletool.jar build-apks --mode=universal --bundle=a.aab --output=a.apks --ks=./app-keystore.bak.jks --ks-pass=pass:9a1b24ff9ebc212416182294509ae8a2 --ks-key-alias=5a4850abae2612b63ee948f3f8a7c935 --key-pass=pass:0d2aae5a0c042230312f02ff2c4cd675
# unzip *.apks
# now=`date +"%d_%m"` 
# mv universal.apk ${now}.apk
# rm -rf *.apks *.pb

now=`date +"%d_%m"` 
eas build -p android --profile preview --local --output ./habitos_${now}.apk