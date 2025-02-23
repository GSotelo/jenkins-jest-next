pipeline {
    agent { dockerfile true }

    stages {
        stage('Install') {
            steps {
                sh 'npm ci --no-fund --loglevel=error'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
