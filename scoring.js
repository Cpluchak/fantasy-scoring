//switch case player function
function calculateScore(player) {
  let score = 0

  switch (player.position) {
    case ('QB'):
      score = QBScore(player.stats)
      break
    case ('RB'):
      score = RBScore(player.stats)
      break
    case ('WR'):
      score = WRScore(player.stats)
      break
    case ('TE'):
      score = TEScore(player.stats)
      break
  }

  return score
}

//default variables
const td = 6
const turnover = -3
const recieved = 1

//QBscore function
function QBScore(stats) {
    let passingYardScore = stats.passing.yards / 25
    let passingTouchdownScore = stats.passing.touchdowns * td
    let rushingYards = stats.rushing.yards / 10
    let rushingTouchdownScore = stats.rushing.touchdowns * td
    let interceptionScore = stats.passing.interceptions * turnover
    let rushingFumbleScore = stats.rushing.fumble * turnover

    return passingTouchdownScore + passingYardScore + rushingTouchdownScore + rushingYards + interceptionScore + 
    rushingFumbleScore

}

//RBscore function
function RBScore(stats) {
    let rushingYardScore = stats.rushing.yards / 25
    let rushingTouchdownScore = stats.rushing.touchdowns * td
    let receptionScore = stats.recieving.receptions * recieved
    let recievingYardsScore = stats.recieving.yards / 10
    let recievingTouchdownScore = stats.recieving.touchdowns * td
    let kickreturnTouchdownScore = stats.kickreturn.touchdowns * td
    let kickreturnYardsScore = stats.kickreturn.yards / 15
    let puntreturnYardsScore = stats.puntreturn.yards / 15
    let puntreturnTouchdownScore = stats.puntreturn.touchdowns * td
    let rushingFumbleScore =  stats.rushing.fumble * turnover
    let recievingFumbleScore = stats.recieving.fumble * turnover
    let kickreturnFumbleScore = stats.kickreturn.fumble * turnover
    let puntreturnFumbleScore = stats.puntreturn.fumble * turnover

    return rushingYardScore + rushingTouchdownScore + receptionScore + recievingYardsScore + recievingTouchdownScore + 
    kickreturnTouchdownScore + kickreturnYardsScore + puntreturnYardsScore + puntreturnTouchdownScore + rushingFumbleScore +
    recievingFumbleScore + kickreturnFumbleScore + puntreturnFumbleScore
}

//WRscore function
function WRScore(stats) {
    let rushingYardScore = stats.rushing.yards / 10
    let rushingTouchdownScore = stats.rushing.touchdowns * td
    let receptionScore = stats.recieving.receptions * recieved
    let recievingYardsScore = stats.recieving.yards / 10
    let recievingTouchdownScore = stats.recieving.touchdowns * td
    let kickreturnYardsScore = stats.kickreturn.yards / 15
    let kickreturnTouchdownScore = stats.kickreturn.touchdowns * td
    let puntreturnYardsScore = stats.puntreturn.yards / 15
    let puntreturnTouchdownScore = stats.puntreturn.touchdowns * td
    let rushingFumbleScore = stats.rushing.fumbles * turnover
    let recievingFumbleScore = stats.recieving.fumbles * turnover
    let kickreturnFumbleScore = stats.kickreturn.fumbles * turnover
    let puntreturnFumbleScore = stats.puntreturn.fumbles * turnover

    return rushingYardScore + rushingTouchdownScore + receptionScore + recievingYardsScore + recievingTouchdownScore +
    kickreturnYardsScore + kickreturnTouchdownScore + puntreturnYardsScore + puntreturnTouchdownScore + rushingFumbleScore +
    recievingFumbleScore + kickreturnFumbleScore + puntreturnFumbleScore
}

//TEscore function
function TEScore(stats) {
    let receptionScore = stats.recieving.receptions * recieved
    let recievingYardsScore = stats.recieving.yards / 10
    let recievingTouchdownScore = stats.recieving.touchdowns * td
    let recievingFumbleScore = stats.recieving.fumbles * turnover

    return receptionScore + recievingYardsScore + recievingTouchdownScore + recievingFumbleScore
}

module.exports = calculateScore