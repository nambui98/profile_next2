pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'nambui/profile-next'
        // EC2_INSTANCE_IP = 'IP-of-EC2-Instance'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/nambui98/profile_next.git'
                echo "aaaaaaaa"
            }
        }
        // stage('Build') {
        //     agent { node {label 'master'}}
        //     steps {
        //         sh 'docker build -t $DOCKER_IMAGE .'
        //     }
        // }

        // stage('Push to Docker Registry') {
        //     steps {
        //         sh 'docker push $DOCKER_IMAGE'
        //     }
        // }

        // stage('Deploy') {
        //     steps {
        //         sshagent(credentials: ['my-ssh-credentials']) {
        //             // Sử dụng scp và các lệnh SSH mà không cần chỉ định đường dẫn tới file .pem
        //             sh "scp -r your-docker-image-name ec2-user@$EC2_INSTANCE_IP:/path/to/destination/"
        //             sh "ssh ec2-user@$EC2_INSTANCE_IP 'docker-compose down --remove-orphans'"
        //             sh "ssh ec2-user@$EC2_INSTANCE_IP 'docker-compose up -d'"
        //         }
        //     }
        // }
    }
}
