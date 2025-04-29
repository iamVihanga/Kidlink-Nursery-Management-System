import * as AWS from "@aws-sdk/client-s3";
import { env } from "@/lib/env";

export const s3Config = {
  region: env.NEXT_PUBLIC_AWS_REGION,
  bucket: env.NEXT_PUBLIC_AWS_S3_BUCKET,
  baseUrl: `https://${env.NEXT_PUBLIC_AWS_S3_BUCKET}.s3.${env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com`
};

// Singleton S3 client instance
export const s3Client = new AWS.S3({
  region: s3Config.region,
  credentials: {
    accessKeyId: env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
    secretAccessKey: env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!
  }
});
