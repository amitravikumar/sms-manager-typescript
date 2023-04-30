import dotenv from 'dotenv';

dotenv.config();

export type EnvConfig = {
    NODE_ENV: string
    GUPSHUP: {
        BASE_URL: string
        USER_ID: string
        PASSWORD: string
    }
}

export const getEnv = (): EnvConfig => {
    return {
        NODE_ENV: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
        GUPSHUP: {
            BASE_URL: process.env.GUPSHUP_BASE_URL ? process.env.GUPSHUP_BASE_URL : '',
            USER_ID: process.env.GUPSHUP_USER_ID ? process.env.GUPSHUP_USER_ID : '',
            PASSWORD: process.env.GUPSHUP_PASSWORD ? process.env.GUPSHUP_PASSWORD : ''
        }
    }
};