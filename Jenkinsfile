pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                echo 'Code successfully cloned from GitHub...'
            }
        }

        stage('Build') {
            steps {
                echo 'Static website - No build needed'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'if exist index.html (echo index.html - OK) else (echo MISSING index.html && exit 1)'
                bat 'if exist css\\style.css (echo style.css - OK) else (echo MISSING style.css && exit 1)'
                bat 'if exist js\\script.js (echo script.js - OK) else (echo MISSING script.js && exit 1)'
                echo 'All files verified successfully!'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to XAMPP htdocs...'
                bat 'if not exist C:\\xampp\\htdocs\\student-portfolio mkdir C:\\xampp\\htdocs\\student-portfolio'
                bat 'xcopy /E /I /Y . C:\\xampp\\htdocs\\student-portfolio\\'
                echo 'Deployment complete!'
            }
        }

    }

    post {
        success {
            echo '========================================'
            echo ' DEPLOYMENT SUCCESSFUL!'
            echo ' Site: http://localhost/student-portfolio/'
            echo '========================================'
        }
        failure {
            echo '========================================'
            echo ' DEPLOYMENT FAILED! Check console.'
            echo '========================================'
        }
    }
}
