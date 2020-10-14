<template>
  <div>
    <div class="lg:flex w-full mt-4 pb-6">
      <div
        v-for="participant in calculatePoints"
        :key="participant.participant"
        class="flex-1 px-6 pb-6 border m-2 rounded"
      >
        <ul>
          <li>{{ participant.participant }}</li>
          <li>{{ participant.gender }}</li>
          <li>{{ participant.weigth }}</li>
          <li>{{ participant.length }}</li>
          <li>{{ format_day(participant.day) }}</li>
          <li>{{ format_time(participant.time) }}</li>
          <li>{{ participant.points }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
moment.locale('sv')
export default {
  name: 'Participants',
  data() {
    return {
      participants: [
        {
          participant: 'Julia',
          gender: 'F',
          weigth: 3650,
          length: 51,
          day: new Date('2021/02/15'),
          time: new Date('2021/02/20 18:06'),
          points: 0
        },
        {
          participant: 'Mats',
          gender: 'F',
          weigth: 3333,
          length: 50,
          day: new Date('2021/02/28'),
          time: new Date('2021/02/20 08:20'),
          points: 0
        },
        {
          participant: 'Villiam',
          gender: 'P',
          weigth: 3317,
          length: 48,
          day: new Date('2021/02/12'),
          time: new Date('2021/02/20 13:37'),
          points: 0
        },
        {
          participant: 'Liselotte',
          gender: 'F',
          weigth: 3720,
          length: 50,
          day: new Date('2021/02/02'),
          time: new Date('2021/02/20 12:25'),
          points: 0
        },
        {
          participant: 'Patrik',
          gender: 'F',
          weigth: 3110,
          length: 49,
          day: new Date('2021/03/01'),
          time: new Date('2021/02/20 14:32'),
          points: 0
        },
        {
          participant: 'Viggo',
          gender: 'P',
          weigth: 3570,
          length: 50,
          day: new Date('2021/02/09'),
          time: new Date('2021/02/20 11:00'),
          points: 0
        }
      ],
      correct: {
        gender: 'F',
        weigth: 3560,
        length: 53,
        day: new Date('2021/02/12'),
        time: new Date('2021/02/20 14:15')
      },
      guessedCorrectLength: false,
      guessedCorrectWeight: false,
      guessedCorrectDay: false,
      guessedCorrectTime: false
    }
  },
  computed: {
    calculatePoints() {
      this.participants.forEach(guess => {
        if (guess.gender == this.correct.gender) {
          guess.points += 1
          console.log(guess.participant + ' får en poäng för rätt kön.')
        }
        if (guess.length == this.correct.length) {
          guess.points += 1
          console.log(guess.participant + ' får en poäng för rätt längd.')
          this.guessedCorrectLength = true
        }

        if (this.diffDays(guess.day) == 0) {
          guess.points += 2
          console.log(guess.participant + ' får två poäng för rätt dag.')
          this.guessedCorrectDay = true
        }
        if (guess.weigth == this.correct.weigth) {
          guess.points += 3
          console.log(guess.participant + ' får tre poäng för rätt vikt.')
          this.guessedCorrectWeight = true
        } else if (Math.abs(guess.weigth - this.correct.weigth) < 11) {
          guess.points += 2
          console.log(
            guess.participant + ' får två poäng för vikt inom 10 gram.'
          )
        } else if (Math.abs(guess.weigth - this.correct.weigth) < 51) {
          guess.points += 1
          console.log(
            guess.participant + ' får en poäng för vikt inom 30 gram.'
          )
        }

        if (this.diffTime(guess.time) == 0) {
          guess.points += 3
          console.log(guess.participant + ' får tre poäng för rätt tid.')
          this.guessedCorrectTime = true
        } else if (this.diffTime(guess.time) < 11) {
          guess.points += 2
          console.log(
            guess.participant + ' får två poäng för rätt tid inom 10 minuter.'
          )
        } else if (this.diffTime(guess.time) < 31) {
          guess.points += 1
          console.log(
            guess.participant + ' får en poäng för tid inom 30 minuter.'
          )
        }
      })

      if (!this.guessedCorrectWeight) {
        let weights = this.participants.map(x =>
          Math.abs(x.weigth - this.correct.weigth)
        )
        this.findMinimumIndexes(weights).forEach(idx => {
          this.participants[idx].points += 1
          console.log(
            this.participants[idx].participant +
              ' får en poäng för närmast vikt.'
          )
        })
      }

      if (!this.guessedCorrectLength) {
        let lengths = this.participants.map(x =>
          Math.abs(x.length - this.correct.length)
        )
        this.findMinimumIndexes(lengths).forEach(idx => {
          this.participants[idx].points += 1
          console.log(
            this.participants[idx].participant +
              ' får en poäng för närmast längd.'
          )
        })
      }

      return this.participants
    }
  },
  methods: {
    format_day(value) {
      if (value) {
        return moment(String(value)).format('MMM Do')
      }
    },
    format_time(value) {
      if (value) {
        return moment(String(value)).format('LT')
      }
    },
    diffDays(day) {
      const oneDay = 24 * 60 * 60 * 1000
      const firstDay = this.correct.day
      const secondDay = day
      const diffDays = Math.round(Math.abs((firstDay - secondDay) / oneDay))
      return diffDays
    },
    diffTime(guessedTime) {
      let correctT = this.correct.time
      let guessedT = guessedTime
      let difference = guessedT / 1000 / 60 - correctT / 1000 / 60
      if (difference > 720) {
        difference = 1400 - difference
      }
      return Math.abs(difference)
    },
    findMinimumIndexes(array) {
      let min = Math.min.apply(Math, array)
      let indexes = []

      array.forEach(function(item, idx) {
        if (item === min) {
          indexes.push(idx)
        }
      })
      return indexes
    }
  }
}
</script>
