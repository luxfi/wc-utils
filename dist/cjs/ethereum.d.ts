import { ITxData } from "@luxwallet/wc-types";
export declare function toChecksumAddress(address: string): string;
export declare const isValidAddress: (address?: string) => boolean;
export declare function parsePersonalSign(params: string[]): string[];
export declare function parseTransactionData(txData: Partial<ITxData>): Partial<ITxData>;
//# sourceMappingURL=ethereum.d.ts.map