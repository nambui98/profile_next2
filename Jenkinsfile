// pipeline {
//     agent none

//     environment {
//         DOCKER_IMAGE = 'nambui/profile-next'
//         // EC2_INSTANCE_IP = 'IP-of-EC2-Instance'
//     }

//     stages {
        
//         stage('build') {
//             environment {
//                 DOCKER_TAG="${GIT_BRANCH.tokenize('/').pop()}-${GIT_COMMIT.substring(0,7)}"
//             }
//             steps {
//                 sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} . "
//         sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
//         sh "docker image ls | grep ${DOCKER_IMAGE}"
//         withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
//             sh 'echo $DOCKER_PASSWORD | docker login --username $DOCKER_USERNAME --password-stdin'
//             sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
//             sh "docker push ${DOCKER_IMAGE}:latest"
//         }

//         //clean to save disk
//         sh "docker image rm ${DOCKER_IMAGE}:${DOCKER_TAG}"
//         sh "docker image rm ${DOCKER_IMAGE}:latest"
//                 // sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} . "
//                 // script{
//                 //     if(GIT_BRANCH==~ /.*main.*/){
//                 //         sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
//                 //         sh "docker push ${DOCKER_IMAGE}:latest"
//                 //     }
//                 // }
//                 // withCredentials([usernamePassword(credentialsId:'docker-hub', usernameVariable:'DOCKER_USERNAME', passwordVariable:'DOCKER_PASSWORD')]){
//                     // sh 'echo $DOCKER_PASSWORD | docker login --username $DOCKER_USERNAME --password-stdin'
//                     // sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
//                 // }

//                 //clean to save disk
//                 // sh "docker image rm ${DOCKER_IMAGE}:${DOCKER_TAG}"
//             }
//         }

//         // stage('Push to Docker Registry') {
//         //     steps {
//         //         sh 'docker push $DOCKER_IMAGE'
//         //     }
//         // }

//         // stage('Deploy') {
//         //     steps {
//         //         sshagent(credentials: ['my-ssh-credentials']) {
//         //             // Sử dụng scp và các lệnh SSH mà không cần chỉ định đường dẫn tới file .pem
//         //             sh "scp -r your-docker-image-name ec2-user@$EC2_INSTANCE_IP:/path/to/destination/"
//         //             sh "ssh ec2-user@$EC2_INSTANCE_IP 'docker-compose down --remove-orphans'"
//         //             sh "ssh ec2-user@$EC2_INSTANCE_IP 'docker-compose up -d'"
//         //         }
//         //     }
//         // }
//     }
    
//     post {
//         success {
//             echo "SUCCESSFUL"
//         }
//         failure {
//             echo "FAILED"
//         }
//     }
// }
pipeline {
    agent none

    environment {
        DOCKER_IMAGE = 'nambui/profile-next'
    }

    stages {
        stage('build') {
            environment {
                DOCKER_TAG="${BRANCH_NAME.tokenize('/').pop()}-${GIT_COMMIT.substring(0,7)}"
            }
            steps {
                sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} . "
                sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
                sh "docker image ls | grep ${DOCKER_IMAGE}"
                withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login --username $DOCKER_USERNAME --password-stdin'
                    sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    sh "docker push ${DOCKER_IMAGE}:latest"
                }

                sh "docker image rm ${DOCKER_IMAGE}:${DOCKER_TAG}"
                sh "docker image rm ${DOCKER_IMAGE}:latest"
            }
        }
    }
    
    post {
        success {
            echo "SUCCESSFUL"
        }
        failure {
            echo "FAILED"
        }
    }
}
