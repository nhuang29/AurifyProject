# Aurify Project

Welcome to my slot machine project! This is a slot machine game that I developed using React.

## Technologies Used
1. React
2. Docker

## Running the Project

### Step 1: Installation and Confirmation

Having Docker/Docker Desktop is essential. In order to download docker, please
follow this link to download docker: [Docker Download](https://docs.docker.com/get-started/get-docker/)

For confirmation of docker download, please type the following commands into your 
terminal/cmd prompt:
```
docker version
docker system info
```
From these commands you should see output that shows information about Docker:
```commandline
Client:
 Version:           27.4.0
 API version:       1.47
 Go version:        go1.22.10
 Git commit:        bde2b89
 Built:             Sat Dec  7 10:35:43 2024
 OS/Arch:           darwin/arm64
 Context:           desktop-linux
```

### Step 2: Running Docker

Now traverse to the slot-machine project directory via terminal/command prompt. In the directory, a file named "Dockerfile" is located there. **First**, ensure Docker Desktop is running. Then, run the commands (separately):

```commandline
docker build -t slot-machine-app:dev .

docker run -p 5173:5173 slot-machine-app:dev
```
From there you should see an output similar to this:

```commandline    
(base) nickhuang@Mac slot-machine % docker build -t slot-machine-app:dev .
[+] Building 2.9s (10/10) FINISHED                         docker:desktop-linux
 => [internal] load build definition from Dockerfile                       0.0s
 => => transferring dockerfile: 197B                                       0.0s
 => [internal] load metadata for docker.io/library/node:20-alpine          2.3s
 => [internal] load .dockerignore                                          0.0s
 => => transferring context: 90B                                           0.0s
 => [1/5] FROM docker.io/library/node:20-alpine@sha256:fa316946c0cb1f041f  0.0s
 => => resolve docker.io/library/node:20-alpine@sha256:fa316946c0cb1f041f  0.0s
 => [internal] load build context                                          0.0s
 => => transferring context: 17.13kB                                       0.0s
 => CACHED [2/5] WORKDIR /app                                              0.0s

```
```commandline
(base) nickhuang@Mac slot-machine % docker run -p 5173:5173 slot-machine-app:dev

> slot-machine@0.0.0 dev
> vite --host 0.0.0.0


  VITE v7.0.4  ready in 110 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://172.17.0.2:5173/
```

### Step 3: Accessing the Web Page and Working with the Service

Once the web application is up and running. You can access the game page by going to your local browser and typing:
```
http://http://localhost:5173/
```
This will bring you to the game page, which should look something like this:
