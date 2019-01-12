const { KarmaStoreManager } = require('./contracts/karmaStoreManager');
const { isAddress } = require('./helpers/utils');

exports.handler = async (event) => {
    const address = event.pathParameters.address;

    const karmaStoreManager = await KarmaStoreManager.createAsync();

    const transactions = await karmaStoreManager.getRewardTransactionsAsync();

    // const legacy = parseInt(await karmaStoreManager.getKarmaAsync(address));
    // const incremental = parseInt(await karmaStoreManager.getIncrementalKarmaAsync(address));
    //
    // const total = legacy + incremental;
    //
    // const response = {
    //   statusCode: 200,
    //   body: JSON.stringify({
    //     success: true,
    //     message: 'karma balance successfully retrieved',
    //     data: {
    //       balance: {
    //         legacy,
    //         incremental,
    //         total,
    //       }
    //     }
    //   }),
    // };
    //
    // return response;
};
