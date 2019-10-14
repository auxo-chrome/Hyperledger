/**
 * Track the trade of a commodity from one trader to another
 * @param {org.example.basic.mynetwork.Trade} trade - the trade to be
 * processed
 * @transaction trade
 */

async function tradeCommodity(trade) {
	trade.commodity.owner = trade.newOwner;
  	let assetRegistry = await getAssetRegistry("org.example.basic.mynetwork.Trade");
  	await assetRegistry.update(trade.Commodity);
}
