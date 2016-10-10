# React version of Scorekeeper App
## Installation and Usage
### Step 1: install Node and npm
Before using this project, you must install NodeJS (>= 4.4.5) and npm. You can download the package from [NodeJS website](https://nodejs.org/en/).
### Step 2: install dependencies
You must install two npm modules globally, `webpack` and `webpack-dev-server`:
```
  sudo npm install -g webpack webpack-dev-server
```
Remeber to use `sudo` only if you are on UNIX system!
### Step 3: install local dependencies
Download this repository as package or cloning via git.
After that, move to the folder via terminal:
```
  cd path/to/folder
```
and install all the local dependencies:
```
  npm install
```
Note the sudo is not required for local packages. However, if you have permession errors, you can use `sudo` or try to resolve the permission errors.
### Step 4: run environments
To start the application, simply run
```
  webpack-dev-server --content-base dist/
```
The URL of application id `http://localhost:8080/webpack-dev-server/`