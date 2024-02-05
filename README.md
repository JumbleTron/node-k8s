# Kubernetes nodejs integrations

The primary objective of this repository is to provide developers with hands-on experience in deploying and scaling applications using Kubernetes. 

The repository contains a set of step-by-step instructions, accompanied by code samples, that guide users through the entire process of setting up a Kubernetes cluster, deploying the Node.js application, and configuring various Kubernetes features.


## Build and push docker image

```
docker build -t node-app .
docker tag node-app:latest docker_hub_repo:latest
docker push docker_hub_repo:latest
```

## Pods

### Create nodejs pod

```
kubectl apply -f ./k8s/app-pod.yaml
```

### Delete nodejs pod

```
kubectl delete -f ./k8s/app-pod.yaml
```

### Port forward

```
kubectl port-forward app 3000:3000
```

## ReplicaSet

### Create replicaSet
```
kubectl apply -f ./k8s/app-replicaset.yaml
```

### Delete replicaSet

```
kubectl delete -f ./k8s/app-replicaset.yaml
```

## Deployment

### Create deployment
```
kubectl apply -f ./k8s/app-deployment.yaml
```

### Delete deployment

```
kubectl delete -f ./k8s/app-deployment.yaml
```

## Ingress

### Enable ingress for minikube

```
minikube addons enable ingress
```

### Open tunnel for minikube

```
minikube tunnel
```

## Cleaning

### Remove all data from minikube

```
minikube delete --all
```

### Remove everything from Kubernetes

```
kubectl delete pods,deployments,rs -A --all
```