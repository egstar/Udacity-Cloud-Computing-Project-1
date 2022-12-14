# Udacity's [_ALX-T_] Cloud-Computing ![Project Review](https://img.shields.io/badge/Review-PASSED-greensvg)
#### Project 1 ( Static Website Deployment)



##### 📖 Table of content

```
┣━ EndPoints Table
┣━ Deployment steps
┃   ┣━ IAM Role creation
┃   ┣━ AWS Cli configuration
┃   ┣━ S3 Bucket creation
┃   ┗━ S3 Bucket configuration
┣━ Addition tasks
┃   ┣━ CSS Edits
┃   ┃   ┣━ Changed the main nav background
┃   ┃   ┣━ Changed the navbar position to fixed
┃   ┃   ┗━ Changed the Colors / Layout of Home
┃   ┣━ JS Edits
┃   ┃   ┣━ Highlight clicked nav buttons
┃   ┃   ┗━ Changing the navbar color according to scroll position
┃   ┗━ Added 404 Error page [ error.html ]
┗━ Screenshots
```


### Endpoints Table:

| EndPoint | URL |
|:---:| --- |
| (CloudFront) | [Click here](https://d1qfkxgkfonazs.cloudfront.net/) |
| (AWS S3 Bucket) | [Click here](http://burhamp1.s3-website-us-east-1.amazonaws.com/index.html) |
| (AWS S3 Direct) | [Click here](http://burhamp1.s3.amazonaws.com/index.html) |

----

### Deployment steps

#### **IAM Role** Creation
  * Creating new IAM user with (_Programatic Access_) to use with the _AWS CLI_.
  * Added the _Administrator Access_ to the created user.
  

#### **AWS Cli** Configuration
  * Setup the AWS CLI to connect to AWS s3 and copy files from [Here](https://awscli.amazonaws.com/AWSCLIV2.msi)
  * start the AWS configuration by running this command:
  
           aws configure
           
    | Requirements | Defination |
    | :----------: | :--------- |
    |**AWS_ACCESS_KEY_ID**| The AWS Access key id which will be used for AWS services ( _The IAM user Access Key ID_ ) |
    |**AWS_SECRET_ACCESS_KEY** | The AWS Secret key for the used AWS ( _The IAM user Access Secret Key_ ) |
    |**AWS_DEFAULT_REGION** | The deisred region to use with AWS services, preferred ( _us-east-1_ ) |
    | **Output** | The data output type preferred to use ( _json_ ) |
  
#### **S3 Bucket** Creation
  * Using CLI to create the S3 Bucket

          aws s3api create-bucket --bucket _burhamp1_ --region _us-east-1_
          
      > NOTE: Change **burhamp1** with the desired name for your Bucket, and change **us-east-1** with the desired AWS region

#### **S3 Bucket** Configuration
  *  Enable AWS S3 Bucket **Static Website**
  
  		  	aws s3 website s3://burhamp1/ --index-document index.html --error-document error.html

  * Check that AWS website is running using AWS s3 Bucket/Direct URL 
 
       **http://`burhamp1`.s3-website-`us-east-1`.amazonaws.com**
       
       OR
       
       **http://`burhamp1`.s3.amazonaws.com**
  * Set the the Public poicy:
```
{
"Version":"2012-10-17",
"Statement":[
 {
   "Sid":"AddPerm",
   "Effect":"Allow",
   "Principal": "*",
   "Action":["s3:GetObject"],
   "Resource":["arn:aws:s3:::your-website/*"]
 }
]
}
```
  * Copy all files to the **AWS S3 Bucket**

          - Locate the Main directory of project `cd /`
          - `aws s3 cp --recursive . s3://_burhamp1_ --acl public-read`
          
----
### Addition tasks

#### CSS Edits

  * Changed the main nav background
  * Changed the navbar position to fixed
  * Changed the Colors / Layout of Home


#### JS Edits

  * Highlight navigation buttons according to current URL or upon Click
  * Changed the navigation bar attribute to be shrinked at scroll and set opacity to .9

#### Error Page

  * Added 404 Page for all undefined pages.

----

### Screenshots

----
```
                                                             [S3 Bucket]
```
----
![s3-5](https://user-images.githubusercontent.com/76433966/204795492-889d5b06-60f6-4d44-ac35-04717c3fc8dc.png)

![s3-4](https://user-images.githubusercontent.com/76433966/204795502-c21e6233-6ee5-4db9-a6aa-d3dc6879192b.png)

![s3-3](https://user-images.githubusercontent.com/76433966/204793936-595fb376-4fb8-4228-bf1a-48fed83f276a.png)

![s3-2](https://user-images.githubusercontent.com/76433966/204793908-f56f6336-14e9-4939-9ff4-0e04c0c66a50.png)

![s3-1](https://user-images.githubusercontent.com/76433966/204793916-f7ead182-1dec-4152-a592-843e97e883f9.png)

----

```
                                                          [Live Website URL]
```
----

![s3-view](https://user-images.githubusercontent.com/76433966/204797745-28c4b2f5-9142-4a63-8b3e-d90c4763807d.png)

![cf-view](https://user-images.githubusercontent.com/76433966/204797729-936fc341-458c-403f-ad02-862681db11cb.png)


----

```
                                                            [Cloudfront]
```
----
![CloudFront](https://user-images.githubusercontent.com/76433966/204793921-9bbdc43d-babd-4a08-bc9a-2d78f812ee13.png)

