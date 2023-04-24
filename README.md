# algo_puissance4

## Start the server with Docker

in a bash terminal execute the commands bellow :
```bash
./build.sh
./run.sh
```

To access the server go to localhost:3000. If the port 3000 is already in use, go to the run.sh script and choose another port like so :

```bash
docker run -d --name connect-four -p 3000:{new port} nodejs-connectfour
```

