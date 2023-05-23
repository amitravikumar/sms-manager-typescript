export interface SendSmsResponse {
    status: string;
    sentTo: string;
    transactionId: string;
    message?: string;
    text: string;
    otp: string | undefined;
}

export type SendBulkSmsResponse = SendSmsResponse[];