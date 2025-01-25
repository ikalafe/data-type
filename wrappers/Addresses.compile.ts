import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/addresses.tact',
    options: {
        debug: true,
    },
};
