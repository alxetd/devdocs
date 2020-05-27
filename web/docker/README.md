# Docker

## Official Resources
- [docs.docker.com](https://docs.docker.com/)

## Resources

## Commands
```bash
docker-compose up -d
```

## Database dump
```bash
docker exec my_drupal8_project_mariadb /usr/bin/mysqldump -udrupal -pdrupal drupal > ./backup/data.sql
```


```bash
docker search IMAGE	
docker pull IMAGE	
docker push image_name	
docker image ls
docker images # Shows local images
docker image ls repository_name
docker images repository_name #	Shows images from the repository_name
docker image rm image_name
docker rmi image_name #	Remove one or more images
docker image inspect image_name
docker inspect image_name
docker image build -t customnginx .	
docker image history IMAGE
docker history IMAGE #Show the history of an image
docker image rm $(docker image ls -a -q)	Remove all images
docker tag SOURCE_IMAGE TARGET_IMAGE	Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
docker tag SOURCE_IMAGE REPOSITORY/TARGET_IMAGE	Example: docker tag IMAGE 127.0.0.1:5000/hello-world
docker start -ai CONTAINER	
docker container exec -it CONTAINER bash
docker exec -it CONTAINER bash # Run a command in a running container
sudo docker -d # & To run the docker daemon in the background
docker info
docker inpect IMAGE
docker inspect CONTAINER #	Return low-level information on Docker objects
docker port CONTAINER #	List port mappings or a specific mapping for the container
docker info
docker container stats
docker stats
docker container run IMAGE
docker run IMAGE
docker run hello-world	
docker run -it ubuntu bash	
docker run -e MYSQL_ROOT_PASSWORD=XXX -e MYSQL_USER=wpuser -e MYSQL_PASSWORD=XXX -e MYSQL_DATABASE=wordpress_db -v /opt/wordpress/database:/var/lib/mysql --name wordpressdb -d mariadb	
docker container run --publish EXTERNAL_PORT:INTERNAL_PORT --detach --name CONTAINER IMAGE
docker run --name CONTAINER IMAGE #	Example: docker container run --publish 80:80 --detach --name nginx nginx
docker container run -d --link CONTAINER IMAGE	Add link to another container
docker container logs CONTAINER
docker logs CONTAINER
docker container top container_name	process list in one container
docker container ls -a	
docker container rm container_name
docker rm container_name #	Remove a container.
docker container stop CONTAINER
docker stop CONTAINER #	Stop one or more running containers
docker container rm -f container_name
docker rm -f container_name # Remove a running container.
docker container rm $(docker container ls -a -q -f status=exited)
docker rm $(docker ps -a -q -f status=exited) # Remove all containers that are not running.
docker container start container_name
docker container run -d -p 3306:3306 --name db -e MYSQL_RANDOM_ROOT_PASSWORD=yes mysql	# Parola generata pentru root poate fi gasita in loguri (docker container logs db)
docker container ps / docker ps	Shows the containers that are running.
docker container ps -a / docker ps -a	Shows the containers.
docker container inspect	details of one container config
docker container stats	Display a live stream of containers resource usage statistics
docker container run -it	start new container interactively
docker container exec -it	run additional command in existing container
docker container run -it --name proxy nginx bash	
docker container start  -ai containerName	Start an existing container
docker container exec -it mysql bash	Get into an existing container
docker container run -t alpine sh	
docker container port containerName	
docker container inspect --format '{{ .NetworkSettings.IPAddress }}' CONTAINER	Get the ip of the container
docker container run -d --net dude --net-alias search elesticsearch:2	
docker container run --rm --net dude alpine nslookup search	
docker container run --rm --net dude centos curl -s search:9200	
docker container run --rm -p 80:3000 testnode	
docker container run -d --name nginx -p 80:80 -v $(pwd):/usr/share/nginx/html nginx	
docker container logs -f container_name	
docker container commit CONTAINER REPOSITORY:TAG
docker commit CONTAINER REPOSITORY:TAG #	Create a new image from a container's changes
docker network create --driver overlay network_name
docker network create -d overlay network_name	
docker build -t REPOSITORY:TAG PATH	Build an image from a Dockerfile
docker build -t REPOSITORY:TAG PATH --no-cache=true	
docker volume ls	
docker volume inspect volume_name	
docker compose	
docker-compose up	
docker-compose down	# You will lose MariaDB / PostgreSQL data if you run docker-compose down. Instead use docker-compose stop to stop containers
docker-compose down -v
docker-compose down --volumes #	Remove named volumes declared in the `volumes` section of the Compose file and anonymous volumes attached to containers.
docker-compose up -d #	Remove volumes
docker-compose logs	
docker-compose logs -f	
docker-compose top	
docker-compose build #	Build or rebuild services
docker node ls
docker node --help
docker node ps node2	
docker node update
docker node update --role manager role2	
docker service --help
docker service create alpine ping 8.8.8.8	
docker service create --replicas 3 alpine ping 8.8.8.8	
docker service create ---name service_name --network network_name - POSTGRESS_PASSWORD=mypass postgres	
docker service ls	Example: watch docker service ls
docker service ps service_name
docker service update id_service --replicas 3	
docker service ps service_name
docker service logs service_name	
docker service create --name psql --secret psql_user --secret psql_pass -e POSTGRES_PASSWORD_FILE=/run/secrets/psql_pass -e POSTGRES_USER_FILE=/run/secrets/psql_user postgres	
docker-machine ls	List machines
docker-machine ssh node1
docker-machine env node1	
docker-machine ip NODE
docker swarm init
docker swarm init --advertise-addr ip_addres	
docker swarm join-token manager
docker swarm leave	Leave the swarm
docker stack deploy -c docker-compose.yml stack_name	
docker stack ls
docker stack services stack_name	
docker stack ps stack_name
docker secret create user_name user_name.txt	
echo "password" | docker secret create password # Read from standard input.
ls /run/secrets
docker secret ls
docker secret rm secret_name	
docker-compose config
docker rm $(docker ps -q -f 'status=exited')
docker rmi $(docker images -q -f "dangling=true")
docker volume rm $(docker volume ls -qf dangling=true)
```

## Official Repositories
- nginx	https://hub.docker.com/_/nginx/	
- httpd	https://hub.docker.com/_/httpd/	
- busybox	https://hub.docker.com/_/busybox/	
