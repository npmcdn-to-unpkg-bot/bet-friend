const token = '757b520f19a44ef2a849ddeed6088887'

export default {

  //'http://api.football-data.org/v1/competitions/434/leagueTable',
  get(url) {
    return fetch(url,
      {
        method: 'GET',
        mode: 'cors',
        headers: {
          'X-Auth-Token': token
        }
      }
    ).then(function fetchResponse(response) {
      return response.json()
    }).then(function onSuccess(json) {
      console.log('parsed json', json)
      return json
    })
    .catch(function onFai(ex) {
      console.log('parsing failed', ex)
      return ex
    })
  }

}
