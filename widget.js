$(document).ready(function() {
  const playerName = "Foythtv-1547";
  const apiUrl = `https://overfast-api.tekrop.fr/players/${playerName}/summary`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const widgetDiv = document.getElementById('widget');
      const playerKDRatio = data.ratios.killDeath.toFixed(2);
      const playerStats = `K/D Ratio: ${playerKDRatio}`;

      widgetDiv.innerHTML = `<p>${playerStats}</p>`;
    })
    .catch(error => console.error(error));
});
