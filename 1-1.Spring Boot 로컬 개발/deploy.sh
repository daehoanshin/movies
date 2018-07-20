#!/bin/sh

echo "Welcome My Shell"

TOMCAT_HOME=~/javaDev/apps/tomcat

cd ~/my-slipp
git pull
./mvnw clean package
$TOMCAT_HOME/bin/shutdown.sh
cd target
rm -rf $TOMCAT_HOME/webapps/ROOT
mv my-slipp-1.0 $TOMCAT_HOME/webapps/ROOT
$TOMCAT_HOME/bin/startup.sh
