""" This script will upload the necessary files for the 
    website to the dev bucket.
"""

import os
import boto3

dev_bucket = "website-kris-2024-dev"
excluded_paths = [
    ".gitignore",
    ".github",
    "README.md",
    ".venv",
    ".DS_Store",
    ".git"
]
paths_to_upload = []
objects_to_upload = []
session = boto3.Session(profile_name="admin-profile")
aws_region = "us-east-1"
s3 = session.client('s3', region_name=aws_region)
bucket_name = "website-kris-2024-dev"
content_type = {
    "html" : "text/html",
    "css" : "text/css",
    "js" : "application/javascript",
    "png" : "image/png"
 }
items = os.listdir("../..")

for item in items: 
    if item not in excluded_paths:
        paths_to_upload.append(item)

for item in paths_to_upload:
    # check if item is file or a directory
    if os.path.isfile(f"../../{item}"):
        objects_to_upload.append(item)
    else:
        sub_items = os.listdir(f"../../{item}")
        for sub_item in sub_items:
            if sub_item not in excluded_paths:
                objects_to_upload.append(f"{item}/{sub_item}")

print("Files to upload:")
for object in objects_to_upload:
    print(object)
    if object.split(".")[1] in content_type:
        s3.upload_file(f"../../{object}", bucket_name, object, ExtraArgs={'ContentType': content_type[f'{object.split(".")[1]}']})

    else:
        s3.upload_file(f"../../{object}", bucket_name, object)
        print(f"Content type for {object} not found. ContentType will need to be added to file manually on the S3 console.")