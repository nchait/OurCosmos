# Angular to Node HTTP GET

A sample project to demostrate HTTP request from Angular to web service running on Node server

------
## Node Server
Start the Node server using the following commands:
```
cd server
node server.js
```
To test the server, send a GET request to `https://node-angular-lgobinath.c9users.io:8081/api`

> Note that the server is running on port `8081` because both Angular client and Node cannot run on same port. In this project we run Node on `8081` and Angular app on `8080`

## Angular Client
Start the Angular project using the following commands in another terminal
```
cd client
npm start
```
If you do not prefer `npm start`, use the following command instead:
```
ng serve --proxy-config proxy.conf.json --host 0.0.0.0 --port 8080 --disableHostCheck
```

## Proxy Configuration

The proxy configuration used in Cloud 9:

```json
{
    "/api/*": {
        "target": "https://node-angular-lgobinath.c9users.io:8081",
        "secure": false,
        "changeOrigin": true,
        "logLevel": "info"
    }
}
```
In the above configuration, `"logLevel": "info"` is used to print information about the proxy which is an optional property. The `"changeOrigin": true` is required only in Cloud 9 environment.
Those who are developing this project in their own computer, need a proxy configuration as given below:
```json
{
    "/api/*": {
        "target": "http://localhost:8081",
        "secure": false
    }
}
```

To make the life easier, npm `start` command is modified in the `package.json` as given below:
```json
{
  "name": "client",
  "version": "0.0.0",
  "license": "MIT",
  "scripts": {
    "ng": "ng",
    "start": "ng serve --proxy-config proxy.conf.json --host 0.0.0.0 --port 8080 --disableHostCheck",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  ...
}
```

## Reference
 - [Angular HttpClient](https://angular.io/guide/http#httpclient)
 - [Angular Proxy Configuration](https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md)

See the [commits](https://github.com/lgobinath/node-angular/commits/master) for step by step code changes.