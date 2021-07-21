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
const received = 1

//QBscore function
function QBScore(stats) {
    let passingYardScore = stats.passing.yards / 25
    let passingTouchdownScore = stats.passing.touchdowns * td
    let rushingYards = stats.rushing.yards / 10
    let rushingTouchdownScore = stats.rushing.touchdowns * td
    let interceptionScore = stats.passing.interceptions * turnover
    let rushingFumbleScore = stats.rushing.fumbles * turnover

    return passingTouchdownScore + passingYardScore + rushingTouchdownScore + rushingYards + interceptionScore + 
    rushingFumbleScore

}


//RBscore function
function RBScore(stats) {
    let rushingYardScore = stats.rushing.yards / 10
    let rushingTouchdownScore = stats.rushing.touchdowns * td
    let receptionScore = stats.receiving.receptions * received
    let receivingYardsScore = stats.receiving.yards / 10
    let receivingTouchdownScore = stats.receiving.touchdowns * td
    let kickreturnTouchdownScore = stats.return.kickreturn.touchdowns * td
    let kickreturnYardsScore = stats.return.kickreturn.yards / 15
    let puntreturnYardsScore = stats.return.puntreturn.yards / 15
    let puntreturnTouchdownScore = stats.return.puntreturn.touchdowns * td
    let rushingFumbleScore =  stats.rushing.fumbles * turnover
    let receivingFumbleScore = stats.receiving.fumbles * turnover
    let kickreturnFumbleScore = stats.return.kickreturn.fumbles * turnover
    let puntreturnFumbleScore = stats.return.puntreturn.fumbles * turnover

    return rushingYardScore + rushingTouchdownScore + receptionScore + receivingYardsScore + receivingTouchdownScore + 
    kickreturnTouchdownScore + kickreturnYardsScore + puntreturnYardsScore + puntreturnTouchdownScore + rushingFumbleScore +
    receivingFumbleScore + kickreturnFumbleScore + puntreturnFumbleScore
}

//WRscore function
function WRScore(stats) {
    let rushingYardScore = stats.rushing.yards / 10
    let rushingTouchdownScore = stats.rushing.touchdowns * td
    let receptionScore = stats.receiving.receptions * received
    let receivingYardsScore = stats.receiving.yards / 10
    let receivingTouchdownScore = stats.receiving.touchdowns * td
    let kickreturnYardsScore = stats.return.kickreturn.yards / 15
    let kickreturnTouchdownScore = stats.return.kickreturn.touchdowns * td
    let puntreturnYardsScore = stats.return.puntreturn.yards / 15
    let puntreturnTouchdownScore = stats.return.puntreturn.touchdowns * td
    let rushingFumbleScore = stats.rushing.fumbles * turnover
    let receivingFumbleScore = stats.receiving.fumbles * turnover
    let kickreturnFumbleScore = stats.return.kickreturn.fumbles * turnover
    let puntreturnFumbleScore = stats.return.puntreturn.fumbles * turnover

    return rushingYardScore + rushingTouchdownScore + receptionScore + receivingYardsScore + receivingTouchdownScore +
    kickreturnYardsScore + kickreturnTouchdownScore + puntreturnYardsScore + puntreturnTouchdownScore + rushingFumbleScore +
    receivingFumbleScore + kickreturnFumbleScore + puntreturnFumbleScore
}

//TEscore function
function TEScore(stats) {
    let receptionScore = stats.receiving.receptions * received
    let receivingYardsScore = stats.receiving.yards / 10
    let receivingTouchdownScore = stats.receiving.touchdowns * td
    let receivingFumbleScore = stats.receiving.fumbles * turnover

    return receptionScore + receivingYardsScore + receivingTouchdownScore + receivingFumbleScore
}



module.exports = calculateScore