# ACC-Trusted-Management-of-Academic-Credentials-Hyperledger-Fabric-
Prerequisites :
	Before you begin, you should confirm that you have installed all the prerequisites below on the platform where you will be running Hyperledger Fabric.
	- Install Git (sudo apt install git)
	- Install cURL (sudo apt install curl)
	- Install Docker (sudo apt install docker)
	- Install Docker-compose (sudo apt install docker-compose)
	- Install npm (sudo apt install npm)
	- Install nodejs (sudo apt install nodejs)
	- Install go (sudo apt install golang-go)
	- Install python (sudo apt install python)
Install Samples, Binaries and Docker Images :
	- Make a directory to store hyper ledger fabric samples (mkdir hpTestProject)
	- Install the latest Fabric Samples and binaries (curl -sSL https://bit.ly/2ysbOFE | bash -s)
	- Find the scripts to bring up the network in the test-network directory of the fabric-samples repository.
	 Navigate to the test network directory by using the following command:
	 cd fabric-samples/fabcar
	- From inside the fabcar directory, run the following command to remove any containers or artifacts from any previous runs:
		./network.sh down
	- You can then bring up the network by issuing the following command. You will experience problems if you try to run the script from another directory:
		./network.sh up
		
API Instruction :
	- Copy the javascript folder and named it apiserver
	- Create a new file in apiserver folder as apiserver.js
	- Write code into apiserver.js
	- Start the network in fabcar like ./startFabric.sh javascript
	- Enroll Admin like node enrollAdmin.js
	- Enroll User like node registerUser.js 
	- Run the apiserver.js file like nodemon apiserver.js
	- Run command curl http://localhost:8080 or 8081/api/queryallcars
	
Frontend Application :
	- Install xampp on your local machine
	- Give your self access to htdocs like :
		-sudo chown $USER:webuser /opt/lampp/htdocs/
		-sudo chmod 755 /opt/lampp/htdocs/
	- Create your project directory from the command line and provide permission:
		- sudo mkdir /opt/lampp/htdocs/your_project
		- sudo chown $USER:webuser /opt/lampp/htdocs/your_project
		- sudo chmod 755 /opt/lampp/htdocs/your_project
		- sudo –R 777 /opt/lampp/htdocs/your_project
		
Running xampp on ubuntu :
	- sudo su
	- cd /opt/lampp
	- /.xampp
	- ./xampp start
	 