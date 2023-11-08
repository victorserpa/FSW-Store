declare namespace NodeJS {
  interface ProcessEnv {
    STRIPE_SECRET_KEY: string;
    NEXT_PUBLIC_STRIPE_KEY: string;
    STIPE_WEBHOOK_SECRET_KEY: string;
    HOST_URL: string;
    DATABASE_URL: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
  }
}