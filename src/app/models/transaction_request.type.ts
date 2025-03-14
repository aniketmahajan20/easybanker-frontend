type Nullable<T> = T | null;

export type TransactionRequest = {
    transactionType: string;
    transactionAmount: number;
    transactionDescription: Nullable<string>;
    transactionReceiver: Nullable<string>;
    transactionRemark: Nullable<string>;
}