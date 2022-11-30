# Udacity's [_ALX-T_] Cloud-Computing
# Project 1 ( Static Website Deployment)

## Endpoint Table:

| EndPoint | URL |
|:---:| --- |
| (CloudFront) | [Click here](https://d1qfkxgkfonazs.cloudfront.net/) |

| (AWS S3 Bucket) | [Click here](http://burhamp1.s3-website-us-east-1.amazonaws.com/index.html) |

| (AWS S3 Direct) | [Click here](http://burhamp1.s3.amazonaws.com/index.html) |

----

## Deployment steps

### **IAM Role** Creation
  * Creating new IAM user with (_Programatic Access_) to use with the _AWS CLI_.
  * Added the _Administrator Access_ to the created user.
  

### **AWS Cli** Configuration
  * Setup the AWS CLI to connect to AWS s3 and copy files from [Here](https://awscli.amazonaws.com/AWSCLIV2.msi)
  * start the AWS configuration by running this command:
  
           aws configure
           
    | Requirements | Defination |
    | :----------: | :--------- |
    |**AWS_ACCESS_KEY_ID**| The AWS Access key id which will be used for AWS services ( _The IAM user Access Key ID_ ) |
    |**AWS_SECRET_ACCESS_KEY** | The AWS Secret key for the used AWS ( _The IAM user Access Secret Key_ ) |
    |**AWS_DEFAULT_REGION** | The deisred region to use with AWS services, preferred ( _us-east-1_ ) |
    | **Output** | The data output type preferred to use ( _json_ ) |
  
### **S3 Bucket** Creation
  * Using CLI to create the S3 Bucket

          aws s3api create-bucket --bucket _burhamp1_ --region _us-east-1_
          
      > NOTE: Change **burhamp1** with the desired name for your Bucket, and change **us-east-1** with the desired AWS region
  
  *  Enable AWS S3 Bucket **Static Website**
  
  		  	aws s3 website s3://burhamp1/ --index-document index.html --error-document error.html

  * Check that AWS website is running using AWS s3 Bucket/Direct URL 
 
       **http://`burhamp1`.s3-website-`us-east-1`.amazonaws.com**
       OR
       **http://`burhamp1`.s3.amazonaws.com**
          
  * Copy all files to the **AWS S3 Bucket**

          - Locate the Main directory of project `cd /`
          - `aws s3 cp --recursive . s3://_burhamp1_ --acl public-read`
          
----



