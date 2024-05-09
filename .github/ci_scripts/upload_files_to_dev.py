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

items = os.listdir("../..")

for item in items: 
    if item not in excluded_paths:
        paths_to_upload.append(item)

print(paths_to_upload)

for item in paths_to_upload:
    # check if item is file or a directory
    if os.path.isfile(f"../../{item}"):
        objects_to_upload.append(item)
    else:
        sub_items = os.listdir(f"../../{item}")
        for sub_item in sub_items:
            if sub_item not in excluded_paths:
                objects_to_upload.append(f"{item}/{sub_item}")
for object in objects_to_upload:
    print(object)