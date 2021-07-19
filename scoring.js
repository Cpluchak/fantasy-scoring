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

const td = 6
const turnover = -3
const received = 1

function QBScore(stats) {
    let passingYardScore = stats.passing.yards / 25
    let passingTouchdownScore = stats.passing.touchdowns * td
    let rushingYards = stats.rushing.yards / 10
    let rushingTouchdownScore = stats.rushing.touchdowns * td
    let interceptionScore = stats.passing.interceptions * turnover
    let rushingFumbleScore = stats.rushing.fumble * turnover

    return passingTouchdownScore + passingYardScore + rushingTouchdownScore + rushingYards + interceptionScore + rushingFumbleScore

}

function RBScore(stats) {
    let rushingYardScore = stats.rushing.yards / 25
    let rushingTouchdownScore = stats.rushing.touchdown * td
    let 
}