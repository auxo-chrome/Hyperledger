async function tradeCommodity(trade) {
	trade.commodity.owner = trade.newOwner;
  	let assetRegistry = await getAssetRegistry("org.example.basic.mynetwork.Trade");
  	await assetRegistry.update(trade.Commodity);
}
