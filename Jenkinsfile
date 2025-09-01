pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from your repository
                git 'https://github.com/NSuram43/Jenkins-Practise.git'
            }
        }
        stage('Build') {
            steps {
                script {
                    docker.build("my-cypress-tests:latest", "./cypress-typescript")
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    docker.image("my-cypress-tests:latest").run("--rm --privileged")
                }
            }
        }
    }
}
