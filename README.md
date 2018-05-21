This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

##  Cricket Scorer UI

To run your project  
```yarn start```

To run tests for your project  
```yarn run test```  
The tests will be started in the 'watch mode'. Everytime you make a change to any file in your project, the tests will be run.

To add a dependency to your project  
```yarn add <dep name>```



## Follow the below steps to deploy it

1. Fork the repository
2. Add your team members as collaborators to the forked repo.
3. You will need to make changes to the pipeline.gocd.yml to rename everywhere team1 is to team2, etc. depending on which team you are on.
    1. Change all places where team1 appears to your team name.
    2. Change the git url to the forked git hub url.
    3. Change the deploy job script - ```sh ./buildAndDeploy/deploy.sh team1-bootcamp-march2018``` to ```sh ./buildAndDeploy/deploy.sh <yourteam-theevent>```. Ensure you don't use capital letters. S3 buckets don't like capital letters.  
    4. The API URL appearing in the build job, can only be provided when the API project is built and deployed. Once you have deployed the API project, get the IP of the api and change it here.
    
     