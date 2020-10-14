const participants = [
  {
    participant: 'Jakob',
    gender: 'female',
    weigth: 3195,
    length: 56,
    day: new Date('2021 - 02 - 25'),
    time: new Date('2021 - 02 - 20 05:15'),
    points: 0
  },
  {
    participant: 'Maria',
    gender: 'male',
    weigth: 3191,
    length: 55,
    day: new Date('2021 - 02 - 24'),
    time: new Date('2021 - 02 - 20 05:20'),
    points: 0
  },
  {
    participant: 'Sanna',
    gender: 'male',
    weigth: 3099,
    length: 53,
    day: new Date('2021 - 02 - 26'),
    time: new Date('2021 - 02 - 20 05:20'),
    points: 0
  }
]

const allParticipants = [
  {
    participant: 'Julia',
    gender: 'female',
    weigth: 3650,
    length: 51,
    day: new Date('2021 - 02 - 15'),
    time: new Date('2021 - 02 - 20 18:06'),
    points: 0
  },
  {
    participant: 'Mats',
    gender: 'female',
    weigth: 3333,
    length: 50,
    day: new Date('2021 - 02 - 28'),
    time: new Date('2021 - 02 - 20 08:20'),
    points: 0
  },
  {
    participant: 'Villiam',
    gender: 'male',
    weigth: 3317,
    length: 48,
    day: new Date('2021 - 02 - 12'),
    time: new Date('2021 - 02 - 20 13:37'),
    points: 0
  },
  {
    participant: 'Liselotte',
    gender: 'female',
    weigth: 3720,
    length: 50,
    day: new Date('2021 - 02 - 02'),
    time: new Date('2021 - 02 - 20 12:25'),
    points: 0
  },
  {
    participant: 'Patrik',
    gender: 'female',
    weigth: 3110,
    length: 49,
    day: new Date('2021 - 03 - 01'),
    time: new Date('2021 - 02 - 20 14:32'),
    points: 0
  },
  {
    participant: 'Viggo',
    gender: 'male',
    weigth: 3570,
    length: 50,
    day: new Date('2021 - 02 - 09'),
    time: new Date('2021 - 02 - 20 11:00'),
    points: 0
  },
  {
    participant: 'Sarah',
    gender: 'female',
    weigth: 3400,
    length: 50,
    day: new Date('2021 - 02 - 17'),
    time: new Date('2021 - 02 - 20 06:00'),
    points: 0
  },
  {
    participant: 'Adam',
    gender: 'male',
    weigth: 3535,
    length: 52,
    day: new Date('2021 - 02 - 20'),
    time: new Date('2021 - 02 - 20 05:20'),
    points: 0
  },
  {
    participant: 'Bernhard',
    gender: 'male',
    weigth: 3526,
    length: 51,
    day: new Date('2021 - 02 - 25'),
    time: new Date('2021 - 02 - 20 04:30'),
    points: 0
  },
  {
    participant: 'Randi',
    gender: 'female',
    weigth: 3200,
    length: 49,
    day: new Date('2021 - 02 - 22'),
    time: new Date('2021 - 02 - 20 02:15'),
    points: 0
  },
  {
    participant: 'Jakob',
    gender: 'female',
    weigth: 3079,
    length: 49,
    day: new Date('2021 - 02 - 23'),
    time: new Date('2021 - 02 - 20 04:20'),
    points: 0
  },
  {
    participant: 'Sanna',
    gender: 'female',
    weigth: 3500,
    length: 52,
    day: new Date('2021 - 02 - 20'),
    time: new Date('2021 - 02 - 20 22:10'),
    points: 0
  },
  {
    participant: 'Axel',
    gender: 'male',
    weigth: 3700,
    length: 53,
    day: new Date('2021 - 02 - 25'),
    time: new Date('2021 - 02 - 20 05:00'),
    points: 0
  },
  {
    participant: 'Maria',
    gender: 'male',
    weigth: 3600,
    length: 51,
    day: new Date('2021 - 02 - 24'),
    time: new Date('2021 - 02 - 20 20:30'),
    points: 0
  },
  {
    participant: 'Ylva',
    gender: 'female',
    weigth: 3700,
    length: 53,
    day: new Date('2021 - 02 - 26'),
    time: new Date('2021 - 02 - 20 16:00'),
    points: 0
  },
  {
    participant: 'Anna',
    gender: 'male',
    weigth: 3200,
    length: 50,
    day: new Date('2021 - 02 - 21'),
    time: new Date('2021 - 02 - 20 18:37'),
    points: 0
  },
  {
    participant: 'Linus',
    gender: 'hen',
    weigth: 4200,
    length: 66.6,
    day: new Date('2021 - 02 - 25'),
    time: new Date('2021 - 02 - 20 01:01'),
    points: 0
  }
]

let correct = {
  gender: 'female',
  weigth: 3200,
  length: 53,
  day: new Date('2021 - 02 - 23'),
  time: new Date('2021 - 02 - 20 05:00')
}

function diffDays(day) {
  const oneDay = 24 * 60 * 60 * 1000
  const firstDay = correct.day
  const secondDay = day
  const diffDays = Math.round(Math.abs((firstDay - secondDay) / oneDay))
  return diffDays
}

function diffTime(guessedTime) {
  let correctT = correct.time
  let guessedT = guessedTime
  let difference = guessedT / 1000 / 60 - correctT / 1000 / 60
  if (difference > 720) {
    difference = 1400 - difference
  }
  return Math.abs(difference)
}

function indexOfSmallest(a) {
  return a.indexOf(Math.min.apply(Math, a))
}

function findMinimumIndexes(array) {
  let min = Math.min.apply(Math, array)
  let indexes = []

  array.forEach(function(item, idx) {
    if (item === min) {
      indexes.push(idx)
    }
  })
  return indexes
}

function calculatePoints(participants, correct) {
  let guessedCorrectLength = false
  let guessedCorrectWeight = false
  let guessedCorrectDay = false
  let guessedCorrectTime = false

  participants.forEach(guess => {
    if (guess.gender == correct.gender) {
      guess.points += 1
      console.log(guess.participant + ' får en poäng för rätt kön.')
    }
    if (guess.length == correct.length) {
      guess.points += 1
      console.log(guess.participant + ' får en poäng för rätt längd.')
      guessedCorrectLength = true
    }

    if (diffDays(guess.day) == 0) {
      guess.points += 2
      console.log(guess.participant + ' får två poäng för rätt dag.')
      guessedCorrectDay = true
    }
    if (guess.weigth == correct.weigth) {
      guess.points += 3
      console.log(guess.participant + ' får tre poäng för rätt vikt.')
      guessedCorrectWeight = true
    } else if (Math.abs(guess.weigth - correct.weigth) < 11) {
      guess.points += 2
      console.log(guess.participant + ' får två poäng för vikt inom 10 gram.')
    } else if (Math.abs(guess.weigth - correct.weigth) < 51) {
      guess.points += 1
      console.log(guess.participant + ' får en poäng för vikt inom 30 gram.')
    }

    if (diffTime(guess.time) == 0) {
      guess.points += 3
      console.log(guess.participant + ' får tre poäng för rätt tid.')
      guessedCorrectTime = true
    } else if (diffTime(guess.time) < 11) {
      guess.points += 2
      console.log(
        guess.participant + ' får två poäng för rätt tid inom 10 minuter.'
      )
    } else if (diffTime(guess.time) < 31) {
      guess.points += 1
      console.log(guess.participant + ' får en poäng för tid inom 30 minuter.')
    }
  })

  if (!guessedCorrectWeight) {
    let weights = participants.map(x => Math.abs(x.weigth - correct.weigth))
    findMinimumIndexes(weights).forEach(idx => {
      participants[idx].points += 1
      console.log(
        participants[idx].participant + ' får en poäng för närmast vikt.'
      )
    })
  }

  if (!guessedCorrectLength) {
    let lengths = participants.map(x => Math.abs(x.length - correct.length))
    findMinimumIndexes(lengths).forEach(idx => {
      participants[idx].points += 1
      console.log(
        participants[idx].participant + ' får en poäng för närmast längd.'
      )
    })
  }

  if (!guessedCorrectDay) {
    let days = participants.map(x => Math.abs(diffDays(x.day)))
    findMinimumIndexes(days).forEach(idx => {
      participants[idx].points += 1
      console.log(
        participants[idx].participant + ' får en poäng för närmast dag.'
      )
    })
  }

  if (!guessedCorrectTime) {
    let times = participants.map(x => diffTime(x.time))
    findMinimumIndexes(times).forEach(idx => {
      participants[idx].points += 1
      console.log(
        participants[idx].participant + ' får en poäng för närmast tid.'
      )
    })
  }

  participants.forEach(x => {
    console.log(x.participant + ': ' + x.points)
  })

  return participants
}
