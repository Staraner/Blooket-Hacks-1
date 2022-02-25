(async () =>
{
	const getApiSetUrlResponse = await fetch('https://api.blooket.com/api/games?gameId=62185f4950d6238032ffd5c2',
	{
		credentials: "include"
	});
	const getApiSetUrlData = await getApiSetUrlResponse.json();
	const apiSetUrl = getApiSetUrlData.questions[0].question
	if (getApiSetUrlData.title != "online")
	{
		alert(apiSetUrl)
	}
	else
	{
		let hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner
 		hack.stateNode.state.gold = prompt("How much gold do you want?")

		function selfpromo()
		{
			alert("Coded by zastix")
		}
		selfpromo()
	}
})();