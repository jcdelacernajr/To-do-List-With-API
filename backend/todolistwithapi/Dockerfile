# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-alpine as build

ARG VERSION=1.0.0
ARG JAR_PATH=build/libs

VOLUME /tmp
WORKDIR /

COPY build.gradle .
COPY settings.gradle .
COPY gradle ./gradle
COPY src ./src

COPY gradlew .

# Use tr to replace Windows-style line endings with Unix-style
RUN tr -d '\r' < gradlew > gradlew_unix && mv gradlew_unix gradlew && chmod +x gradlew

# Install findutils (includes xargs) using apk
RUN apk update && apk add findutils

RUN ./gradlew --stacktrace clean build -x test && ls -R build
RUN mv $JAR_PATH/todolistwithapi-0.0.1-SNAPSHOT.jar /todolistwithapi.jar

# package stage
FROM openjdk:17-jdk-alpine
WORKDIR /
# copy and set the version on the built jar and nothing else
COPY --from=build /todolistwithapi.jar /

ENV VERSION=$VERSION
ENV JAVA_OPTS=-Dspring.profiles.active=production

EXPOSE 5000

ENTRYPOINT ["sh","-c","java -jar -Dspring.profiles.active=production /todolistwithapi.jar"]
