"""
    Invalidates the cache for the specified CloudFront distribution.
"""

import os
import boto3
from datetime import datetime

aws_region = os.environ.get("AWS_REGION")
distribution_id = os.environ.get("DISTRIBUTION_ID")
access_key_id = os.environ.get("AWS_ACCESS_KEY_ID")
secret_access_key = os.environ.get("AWS_SECRET_ACCESS_KEY")

cloudfront = boto3.client(
    'cloudfront',
    region_name=aws_region,
    aws_access_key_id=access_key_id,
    aws_secret_access_key=secret_access_key
    )

cloudfront.create_invalidation(
    DistributionId=distribution_id,
    InvalidationBatch={
        'Paths': {
            'Quantity': 1,
            'Items': [
                '/*'
            ]
        },
        'CallerReference': str(datetime.timestamp(datetime.now()))
    }
)

print("Cache invalidated.")
print("Check new version of the website at https://cloudykris.com/")