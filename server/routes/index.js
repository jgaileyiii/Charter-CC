
const request = require('request');

function runtimesArray (allEpisodes) {
  const runtimes = []
  allEpisodes.forEach(episode => {
    runtimes.push(episode.runtime)
  })
  const totalSec = runtimes.reduce(function(acc, val) {
    return acc + val
  }, 0)
  return totalSec * 60
}

function avgEpisodePerSeason (allEpisodes){
  const epPerSeason = []
  allEpisodes.forEach(episode => {
    epPerSeason.push(episode.season)
  })
  const avgEpPerSeason = epPerSeason.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, [])
   const totalAvg = avgEpPerSeason.reduce((acc, val) => {
     return acc + val / (avgEpPerSeason.length - 1)
 }, 0)
 return totalAvg
}

function STAverages (body) {
  const allEpisodes = body._embedded.episodes
    return {
      averageEpisodesPerSeason : avgEpisodePerSeason(allEpisodes),
      totalDurationSec: runtimesArray(allEpisodes)
  }
}



request.get('http://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes', { json: true }, (err, res, body) => {
  if (err) {
    return console.log('err', err)
    }
      STAverages(body)
      console.log('data', STAverages(body))
})

module.exports = request


