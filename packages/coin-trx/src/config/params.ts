
export const COIN_TYPE = '800000C3';

/* eslint-disable max-len */
export const TRANSFER = {
  script:
    '03030201C70700000000C3CC07100aBFA0C7C00202CC071022BFACC7C0020802CC071040BFACD7000AFFF6CC07105aA00700CC07C0020801CC071012A00700CC07C0020a2dCC07C02D747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e7472616374CC071012A00700CC07100aBFA2C7C01502CC071012BFACC7C0291502CC071018BFACD7003EFFF6BE0700BE0700BE0700CC071070BFACD70048FFF6DC07C003545258CAACCF0029155AF09FC00DBAF0CE6C190804DDE09700DAACD7C03EFFF606D207CC05065052455353425554546f4e',
  signature:
    '000030440220753082AA5C31111BC1A081601E46F79219A77D49A0EBC4D70C1F66792FD858400220483BFC13CAB301E4E54F6716251E58410A6F50D117C49A891069F18D56391CBD'
};

export const FREEZE = {
  script:
    '03030201C70700000000C3CC07100aBFA0C7C00202CC071022BFACC7C0020802CC071040BFACD7000AFFF6CC07105aA00700CC07C002080bCC071012A00700CC07C0020a32CC07C032747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e467265657a6542616c616e6365436f6e7472616374CC071012A00700CC07100aBFA2C7C01502CC071010BFACD70029FFF6CC071018BFACD70033FFF61AAC17C03D0601CC07C00250011AAC17C03D0602CC07C0025002CC07107aBFACC7C03E1502BE0700BE0700BE0700CC071070BFACD70053FFF6DC07C003545258DC07C006467265657a65CAACCF003E155AF09FC00DBAF0CE6C190804DDE09700DAACD7C029FFF606D207CC05065052455353425554546f4e',
  signature:
    '0030450220480BB8323075EB39062305E3EAB8E126F4A80477EA254468BDEA0D4948619AEA022100976633A4A2C5F09727CEB41751CFD0F8FE037BBE0E18436AB7507124A71426C6'
};

export const FREEZE_NO_RECEIVER = {
  script:
    '03030201C70700000000C3CC07100aBFA0C7C00202CC071022BFACC7C0020802CC071040BFACD7000AFFF6CC07105aA00700CC07C002080bCC071012A00700CC07C0020a32CC07C032747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e467265657a6542616c616e6365436f6e7472616374CC071012A00700CC07100aBFA2C7C01502CC071010BFACD70029FFF6CC071018BFACD70033FFF61AAC17C03D0601CC07C00250011AAC17C03D0602CC07C0025002BE0700BE0700BE0700CC071070BFACD7003EFFF6DC07C003545258DC07C006467265657a65CAA2CF00155AF09FC00DBAF0CE6C190804DDE09700DAACD7C029FFF606D207CC05065052455353425554546f4e',
  signature:
    '000030440220555A9F776A0FE0147C800E677539962B59247496BCAF834371502C6B85EFCF340220545E0D0C7E2EA3294F6EB7E24644F9FFC9BDBFB5BA1A9CDEEF533B8BB190C94F'
};

export const UNFREEZE = {
  script:
    '03030201C70700000000C3CC07100aBFA0C7C00202CC071022BFACC7C0020802CC071040BFACD7000AFFF6CC07105aA00700CC07C002080cCC071012A00700CC07C0020a34CC07C034747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e556e667265657a6542616c616e6365436f6e7472616374CC071012A00700CC07100aBFA2C7C015021AAC17C0290601CC07C00250011AAC17C0290602CC07C0025002CC07107aBFACC7C02A1502BE0700BE0700BE0700CC071070BFACD7003FFFF6DC07C003545258DC07C005556e66727aCAACCF002A155AF09FC00DBAF0CE6C190804DDE09700D207CC05065052455353425554546f4e',
  signature:
    '003045022100BE36FCF8E1FDE17689E2DBB8677A562788DB606FF537CDC5010C87BF40E3E22802207D16265C1F51011DBE73EEBA4F6959F0F7FCD56C9B1C1562F2BAFEF53496735D'
};

export const UNFREEZE_NO_RECEIVER = {
  script:
    '03030201C70700000000C3CC07100aBFA0C7C00202CC071022BFACC7C0020802CC071040BFACD7000AFFF6CC07105aA00700CC07C002080cCC071012A00700CC07C0020a34CC07C034747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e556e667265657a6542616c616e6365436f6e7472616374CC071012A00700CC07100aBFA2C7C015021AAC17C0290601CC07C00250011AAC17C0290602CC07C0025002BE0700BE0700BE0700CC071070BFACD7002AFFF6DC07C003545258DC07C005556e66727aCAA2CF00155AF09FC00DBAF0CE6C190804DDE09700D207CC05065052455353425554546f4e',
  signature:
    '3046022100ACEEAFD1797FBF203209DBF988BCEA19C0991E22FAA177615C64C30CB68046E10221008A2B58546CDDF91C0C865E82339C607FE22C4099F4EACA31CCD40DC85A69E357'
};

export const WITHDRAW = {
  script:
    '03030201C70700000000C3CC07100aBFA0C7C00202CC071022BFACC7C0020802CC071040BFACD7000AFFF6CC07105aA00700CC07C002080dCC071012A00700CC07C0020a34CC07C034747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e576974686472617742616c616e6365436f6e7472616374CC071012A00700CC07100aBFA2C7C01502BE0700BE0700BE0700CC071070BFACD70029FFF6DC07C003545258DC07C006526577617264CAA2CF00155AF09FC00DBAF0CE6C190804DDE09700D207CC05065052455353425554546f4e',
  signature:
    '3046022100AABEE6C90E63CF3752F426A93E1758A8E77CCFF39569F4778DAD28BD03297F48022100AF717A307446DE373740DEA06781564AFE4D5060462DA386DC2F167BA280B585'
};

export const VOTE = {
  script:
    '03030201C70700000000C3CC07100aBFA0C7C00202CC071022BFACC7C0020802CC071040BFACD7000AFFF6CC07105aA00700CC07C0020804CC071012A00700CC07C0020a30CC07C030747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e566f74655769746e657373436f6e7472616374CC071012A00700CC07100aBFA2C7C01502CC071012A00700CC07100aBFACC7C0291502CC071010BFACD7003EFFF6BE0700BE0700BE0700BE0700CC071070BFACD70048FFF6DC07C003545258DC07C004566f7465CAACCF0029155AF09FC00DBAF0CE6C190804DDE09700DAACD7003EFFF6D207CC05065052455353425554546f4e',
  signature:
    '00304502201944C100D05CD8BC50D530778B78AF53EB5E7551AADCF0A21946B01CE266ED17022100983CC86BDCE4A4A8DD403B3BB53861879E970A8344B57F9862C88C783CDEEC85'
};

export const TRC20 = {
  script:
    '03030201C70700000000C3CC07100aBFA0C7C00202CC071022BFACC7C0020802CC071040BFACD7000AFFF6CC07105aA00700CC07C002081fCC071012A00700CC07C0020a31CC07C031747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e54726967676572536d617274436f6e7472616374CC071012A00700CC07100aCC0F1041CAA22F00BFF097C002CC071012250F00CC0F1041CAAC2F0031BFF097C002CC071022250F00CC0FC004a9059cbbCC0FC00C000000000000000000000000CAAC2F008DCC0F200000000000000000000000000000000000000000CAACCF00A10CBFF097C002BE0700BE0700BE0700CC071070BFACD700ADFFF6CC07C0029001BFACD700B7FFF6DC07C003545258250F0011ACC7CC281D04451507C004CC0F104012AC17C0290401071507C002FF00B5AC170029CAACBF002ADEF09700250F00CC0F1041CAAC2F008D5AF09FC00DBAF0CE6C190804DDE0970012AC17C0280400141507C002FF00B5AC170028DAACC7B0A10CD207CC05065052455353425554546f4e',
  signature:
    '0000304402202D928B902A6D63BFD40FCDB4A5BC24977049081248F256D779D869D5A1925688022015E6630A34B4161E342EE855F698F7272AC83B781F273E726DC77DA40C75F86C',
};

export enum RESOURCE_CODE {
  BANDWIDTH = '00',
  ENERGY = '01',
  TRON_POWER = '02',
}