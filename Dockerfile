FROM openjdk:20
VOLUME /tmp
EXPOSE 8080
ARG JAR_FILE=target/Food_Hunger_TF-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} food_hunger.jar
ENTRYPOINT ["java","-jar","/food_hunger.jar"]