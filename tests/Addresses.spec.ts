import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { Addresses } from '../wrappers/Addresses';
import '@ton/test-utils';

describe('Addresses', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let addresses: SandboxContract<Addresses>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        addresses = blockchain.openContract(await Addresses.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await addresses.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: addresses.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and addresses are ready to use
    });
});
