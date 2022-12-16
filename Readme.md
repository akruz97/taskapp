
# App Task Challenge

Personal task management app


## Features

- Create new tasks
- Delete tasks
- Update tasks
- Change task status
- Filter tasks by: completed, pending, all
- Search tasks by name


## Run Locally

Clone the project

```bash
  git clone https://github.com/akruz97/taskapp
```

Go to the project directory

```bash
  cd taskapp
```

Install dependencies

```bash
  npm install
```

Configure local.properties file

Inside the "android" folder, create the local.properties file if it doesn't exist and add the path of the android sdk in the file

Go to android folder
```bash
  cd android
```
Create local.properties file

Paste your Android SDK path like below
Replace USERNAME with your user name

Windows:
```bash
  sdk.dir = C:\\Users\\USERNAME\\AppData\\Local\\Android\\sdk
```
Mac:
```bash
  sdk.dir = /Users/USERNAME/Library/Android/sdk
```

Linux:
```bash
  sdk.dir = /home/USERNAME/Android/Sdk
```

Run the project, you must first run an emulator or connect a physical device 

```bash
  npx react-native run-android
```

