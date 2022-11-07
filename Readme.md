# docker-node-hello-world
A Node App secured with xsuaa with Docker File.

## docker cmds

start docker: `sudo service docker start`

login: `docker login`

build image: `docker build -t docker-nodeapp-xsuaa .`

docker list images: `docker images`

docker list active containers: `docker container ls`

run image: `docker run -p 8080:8080 docker-nodeapp-xsuaa`

tag image: `docker tag docker-nodeapp-xsuaa austinkloskecontax/my_docker_image_v1`

push image to docker hub: `docker push austinkloskecontax/my_docker_image_v1`

push docker hub image to cf: `push cf push <App Name> –docker-image <Docker Image Repository:TagName> –docker- username <docker username>`

`cf push my_docker_appv1 --docker-image austinkloskecontax/my_docker_image_v1:latest --docker-username austinkloskecontax`

## xsuaa set-up

create dedicated xsuaa service:
```
cf create-service xsuaa application nodeappwithxsuaa-uaa -c ./xs-security.json
cf create-service-key nodeappwithxsuaa-uaa default
```

print xsuaa credentials to screen
```
cf service-key nodeappwithxsuaa-uaa default
```

create a new default-env.json in the root directory. The structure should look like this. copy over the xsuaa credentials from the terminal to the credentials object below: 
```
{
  "VCAP_SERVICES": {
    "xsuaa": [
      {
        "label": "xsuaa",
        "provider": null,
        "plan": "application",
        "name": "nodeappwithxsuaa-uaa",
        "tags": [
            "xsuaa"
        ],
        "instance_name": "nodeappwithxsuaa-uaa",
        "binding_name": null,
        "credentials": {<CREDENTIALS-HERE>}
      }
    ]
  }
}
```

## Running locally

run image: `docker run -p 8080:8080 docker-nodeapp-xsuaa`

run docker compose