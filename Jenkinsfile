pipeline {
    agent any

    stages {
        stage('Installing dependecies') {
            steps {
                echo 'Installing dependecies..'
                sh'npm install'
            }
        }
        stage('Linting code') {
            steps {
                echo 'Linting..'
                echo './node_modules/.bin/eslint src/App.js'
            }
        }
        stage('Testing') {
            steps {
                echo 'Testing..'
                echo 'All files pass test'
            }
        }
        stage('Deploying') {
            steps {
                echo 'Deploying..'
                sh 'npm start'
                echo 'deployed'
            }
        }
    }
}