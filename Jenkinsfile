pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/NSuram43/Jenkins-Practise.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('my-cypress-tests:latest', '--platform linux/amd64 ./cypress-typescript')
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'docker run --rm --ipc=host my-cypress-tests:latest --browser chrome'
            }
        }

        stage('Cleanup') {
            steps {
                sh 'docker rmi my-cypress-tests:latest || true'
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed'
            archiveArtifacts artifacts: 'cypress-typescript/cypress/screenshots/**/*,cypress-typescript/cypress/videos/**/*', allowEmptyArchive: true
        }
        failure {
            echo 'Pipeline failed, check logs and artifacts'
        }
    }
}