import { transport } from '@coolwallet/core';

export const TRANSFER = {
  script:
    "0400000010C7070000000002C1AC17C0290201010102BAA1C7CC08080F02C1A017C004041976A9140317A91403160014032200201AA017C00903CAAC5700091507C005CAAC270015C1A017C0040288AC018700001AAC17C0295D01BAACC7CC2B08080F02C1AC17C02A03041976A9140317A914031600146CACCF0033151AAC17C02A05005AF097C0091AAC17C02A1001CC0EC00200145AF09EC0095AE097C0091AAC17C02A05025AF097C009C1AC17C02A030288AC018700D107C002250E00250F0012A017C03100011AA017C00800CC0F10301507C00AC1AC1FC0880201050132CAAC2F00155AF09FC00DBAF0CE6C190804DDE097001507C064CC0FC008030303000C1403001AA017C00B02BAAC2F5C1505081507C008BAAC5FCC09340508CC0FC0060000000000005AF09EC00B250F00CC0FC0056c746331711AA017C00B02BAAC2F5C150C081507C008BAAC5FCC09340C08BAE09FCC060C00DDF09700DAA1C7C00808D207CC05065052455353425554546f4e250E00CAAC6E0048",
  signature:
    "FA0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
};

export type Transport = transport.default;

export const activeNet = {
  "messagePrefix": "\x19Litecoin Signed Message:\n",
  "bech32": 'ltc',
  "bip32": {
    "public": 0x019da462,
    "private": 0x019d9cfe
  },
  "pubKeyHash": 0x30, // L
  "scriptHash": 0x32, // M
  "scripthash2": 0x05, // old '3' prefix. available for backward compatibility.
  "wif": 0xb0
}


export const COIN_TYPE = '80000002'
