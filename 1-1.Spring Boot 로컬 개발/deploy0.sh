#!/bin/sh

cd ~/my-slipp
git pull
./mvnw clean package
~/javaDev/apps/tomcat/bin/shutdown.sh
cd target
mv my-slipp-1.0 ~/javaDev/apps/tomcat/webapps/ROOT
~/javaDev/apps/tomcat/bin/startup.sh
