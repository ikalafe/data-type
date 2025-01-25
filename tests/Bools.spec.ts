import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { Bools } from '../wrappers/Bools';
import '@ton/test-utils';

describe('Bools', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let bools: SandboxContract<Bools>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        bools = blockchain.openContract(await Bools.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await bools.send(
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
            to: bools.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and bools are ready to use
    });
});
