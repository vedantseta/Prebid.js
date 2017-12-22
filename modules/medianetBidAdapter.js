import { registerBidder } from 'src/adapters/bidderFactory';
const BIDDER_CODE = 'medianet';

export const spec = {
  code: BIDDER_CODE,
  aliases: ['asd'], // short code
  isBidRequestValid: function(bid) {
    console.log(bid);
    return true;
  },
  buildRequests: function(validBidRequests) {
    console.log(validBidRequests);
    return {
      method: 'GET',
      url: 'http://localhost:9999/nightwatch.json',
      data: {},
      bidRequest: validBidRequests
    };
  },
  interpretResponse: function(serverResponse, request) {
    console.log('Server Response ', serverResponse);
    console.log('Request', request);
    const bidResponses = [];

    const bidResponse = {
      requestId: request.bidRequest[0].bidId,
      cpm: 0.5,
      width: 300,
      height: 250,
      creativeId: '123asdadf',
      currency: 'USD',
      netRevenue: true,
      ttl: 360,
      ad: '<html><h3>I am an ad</h3></html>'
    };
    bidResponses.push(bidResponse);
    return bidResponses;
  },
  getUserSyncs: function(syncOptions, serverResponses) {

  }
};
registerBidder(spec);
