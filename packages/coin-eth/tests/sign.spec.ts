import { apdu, config, crypto, Transport, utils } from '@coolwallet/core';
import { createTransport } from '@coolwallet/transport-jre-http';
import ETH from '../src';

describe('Test ETH Sign', () => {
  let transport: Transport;
  let appId: string;
  const coinETH = new ETH();
  const keyPair = crypto.key.generateKeyPair();

  beforeAll(async () => {
    transport = (await createTransport())! as unknown as Transport;
    await apdu.general.resetCard(transport);
    const name = 'TestAPP';
    const password = '12345678';
    const SEPublicKey = await config.getSEPublicKey(transport);
    appId = await apdu.pair.register(transport, keyPair.publicKey, password, name, SEPublicKey);
    const mnemonicInput =
      'region lock click dress borrow infant orchard amount electric music cruel horse leisure kit junk';
    await utils.createWalletByMnemonic(transport, appId, keyPair.privateKey, mnemonicInput, SEPublicKey);
  });

  it('Test ETH Sign Type Data', async () => {
    const transaction = {
      transport,
      appPrivateKey: keyPair.privateKey,
      appId,
      typedData: {
        types: {
          EIP712Domain: [
            { name: 'name', type: 'string' },
            { name: 'version', type: 'string' },
            { name: 'chainId', type: 'uint256' },
            { name: 'verifyingContract', type: 'address' },
          ],
          Order: [
            { name: 'exchange', type: 'address' },
            { name: 'maker', type: 'address' },
            { name: 'taker', type: 'address' },
            { name: 'makerRelayerFee', type: 'uint256' },
            { name: 'takerRelayerFee', type: 'uint256' },
            { name: 'makerProtocolFee', type: 'uint256' },
            { name: 'takerProtocolFee', type: 'uint256' },
            { name: 'feeRecipient', type: 'address' },
            { name: 'feeMethod', type: 'uint8' },
            { name: 'side', type: 'uint8' },
            { name: 'saleKind', type: 'uint8' },
            { name: 'target', type: 'address' },
            { name: 'howToCall', type: 'uint8' },
            { name: 'calldata', type: 'bytes' },
            { name: 'replacementPattern', type: 'bytes' },
            { name: 'staticTarget', type: 'address' },
            { name: 'staticExtradata', type: 'bytes' },
            { name: 'paymentToken', type: 'address' },
            { name: 'basePrice', type: 'uint256' },
            { name: 'extra', type: 'uint256' },
            { name: 'listingTime', type: 'uint256' },
            { name: 'expirationTime', type: 'uint256' },
            { name: 'salt', type: 'uint256' },
            { name: 'nonce', type: 'uint256' },
          ],
        },
        domain: {
          name: 'Wyvern Exchange Contract',
          version: '2.3',
          chainId: 1,
          verifyingContract: '0x7f268357a8c2552623316e2562d90e642bb538e5',
        },
        primaryType: 'Order',
        message: {
          maker: '0xbdcc4dbd6bbccc5b0d1c83c62d6ceeef1746a48a',
          exchange: '0x7f268357a8c2552623316e2562d90e642bb538e5',
          taker: '0x0000000000000000000000000000000000000000',
          makerRelayerFee: '250',
          takerRelayerFee: '0',
          makerProtocolFee: '0',
          takerProtocolFee: '0',
          feeRecipient: '0x5b3256965e7c3cf26e11fcaf296dfc8807c01073',
          feeMethod: 1,
          side: 1,
          saleKind: 0,
          target: '0xbaf2127b49fc93cbca6269fade0f7f31df4c88a7',
          howToCall: 1,
          calldata:
            '0x96809f90000000000000000000000000bdcc4dbd6bbccc5b0d1c83c62d6ceeef1746a48a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d07dc4262bcdbf85190c01c996b4c06a461d243000000000000000000000000000000000000000000000000000000000000b668f0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000000',
          replacementPattern:
            '0x000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
          staticTarget: '0x0000000000000000000000000000000000000000',
          staticExtradata: '0x',
          paymentToken: '0x0000000000000000000000000000000000000000',
          basePrice: '100000000000000',
          extra: '0',
          listingTime: '1646360374',
          expirationTime: '1646965260',
          salt: '74000149914510975405190780544863990949311878905588154472610807045828601115975',
          nonce: 0,
        },
      },
      addressIndex: 0,
    };
    const result = await coinETH.signTypedData(transaction);
    console.log(result);
  });
});