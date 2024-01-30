# Kubernetes nodejs integrations

## Build and push docker image

```
docker build -t node-app .
docker tag node-app:latest docker_hub_repo:latest
docker push docker_hub_repo:latest
```

## Create nodejs pod

```
kubectl apply -f ./k8s/app-pod.yaml
```

## Port forward

```
kubectl port-forward app 3000:3000
```