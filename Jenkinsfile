pipeline {
    agent { dockerfile true }

    stages {
        stage('Install') {
            steps {
                sh 'npm ci --no-fund --loglevel=error'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}
