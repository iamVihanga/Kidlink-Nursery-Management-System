import * as AWS from "@aws-sdk/client-s3";
import { env } from "@/lib/env";

const config = {
  region: env.NEXT_PUBLIC_AWS_REGION || "ap-south-1",
  bucket: env.NEXT_PUBLIC_AWS_S3_BUCKET || "kidlink",
  accessKeyId: env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID || "AKIAXNGUVP5C25APRB7G",
  secretAccessKey:
    env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY ||
    "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"
};

export const s3Config = {
  region: config.region,
  bucket: config.bucket,
  baseUrl: `https://${config.bucket}.s3.${config.region}.amazonaws.com`
};

// Singleton S3 client instance
export const s3Client = new AWS.S3({
  region: s3Config.region,
  credentials: {
    accessKeyId: config.accessKeyId!,
    secretAccessKey: config.secretAccessKey!
  }
});
