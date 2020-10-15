<template>
  <div>
    <div
      class="grid grid-cols-1 sm:grid-cols-5 text-xl border rounded shadow mb-4 p-2"
    >
      <div>Kön: {{ correct.gender }}</div>
      <div>Vikt: {{ correct.weigth }}</div>
      <div>Längd: {{ correct.length }}</div>
      <div>Dag: {{ format_day(correct.day) }}</div>
      <div>Tid: {{ format_time(correct.time) }}</div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xl">
      <div
        v-for="participant in participants"
        :key="participant.participant"
        class=" border rounded shadow"
      >
        <h2 class="bg-gray-200 text-2xl mb-2 p-1">
          {{ participant.participant }}
        </h2>
        <ul>
          <li>Kön: {{ participant.gender }}</li>
          <li>Vikt: {{ participant.weigth }}</li>
          <li>Längd: {{ participant.length }}</li>
          <li>Dag: {{ format_day(participant.day) }}</li>
          <li>Tid: {{ format_time(participant.time) }}</li>
          <li>Poäng: {{ participant.points }}</li>
        </ul>
        <ul class="py-4 text-base">
          <li v-for="comment in participant.comments" :key="comment">
            {{ comment }}
          </li>
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
          day: moment('2021-02-15'),
          time: moment('2021-02-20 18:06'),
          comments: [],
          points: 0
        },
        {
          participant: 'Mats',
          gender: 'F',
          weigth: 3333,
          length: 50,
          day: moment('2021-02-28'),
          time: moment('2021-02-20 08:20'),
          comments: [],
          points: 0
        },
        {
          participant: 'Villiam',
          gender: 'P',
          weigth: 3317,
          length: 48,
          day: moment('2021-02-12'),
          time: moment('2021-02-20 13:37'),
          comments: [],
          points: 0
        },
        {
          participant: 'Liselotte',
          gender: 'F',
          weigth: 3720,
          length: 50,
          day: moment('2021-02-02'),
          time: moment('2021-02-20 12:25'),
          comments: [],
          points: 0
        },
        {
          participant: 'Patrik',
          gender: 'F',
          weigth: 3110,
          length: 49,
          day: moment('2021-03-01'),
          time: moment('2021-02-20 14:32'),
          comments: [],
          points: 0
        },
        {
          participant: 'Viggo',
          gender: 'P',
          weigth: 3570,
          length: 50,
          day: moment('2021-02-09'),
          time: moment('2021-02-20 11:00'),
          comments: [],
          points: 0
        }
      ],
      correct: {
        gender: 'F',
        weigth: 3560,
        length: 50,
        day: moment('2021-02-14'),
        time: moment('2021-02-20 18:25')
      },
      // correct: {
      //   gender: null,
      //   weigth: null,
      //   length: null,
      //   day: null,
      //   time: null
      // },
      guessedCorrectLength: false,
      guessedCorrectWeight: false,
      guessedCorrectDay: false,
      guessedCorrectTime: false
    }
  },
  created: function() {
    this.participants.forEach(guess => {
      if (guess.gender == this.correct.gender) {
        guess.points += 1
        guess.comments.push('En poäng för rätt kön.')
      }
      if (guess.length == this.correct.length) {
        guess.points += 1
        guess.comments.push('En poäng för rätt längd.')
        this.guessedCorrectLength = true
      }

      if (this.diffDays(guess.day) == 0) {
        guess.points += 2
        guess.comments.push('Två poäng för rätt dag.')
        this.guessedCorrectDay = true
      }
      if (guess.weigth == this.correct.weigth) {
        guess.points += 3
        guess.comments.push('Tre poäng för rätt vikt.')
        this.guessedCorrectWeight = true
      } else if (Math.abs(guess.weigth - this.correct.weigth) < 11) {
        guess.points += 2
        guess.comments.push('Två poäng för vikt inom 10 gram.')
      } else if (Math.abs(guess.weigth - this.correct.weigth) < 51) {
        guess.points += 1
        guess.comments.push('En poäng för vikt inom 30 gram.')
      }

      if (this.diffTime(guess.time) == 0) {
        guess.points += 3
        guess.comments.push('Tre poäng för rätt tid.')
        this.guessedCorrectTime = true
      } else if (this.diffTime(guess.time) < 11) {
        guess.points += 2
        guess.comments.push('Två poäng för tid inom 10 minuter.')
      } else if (this.diffTime(guess.time) < 31) {
        guess.points += 1
        guess.comments.push('En poäng för tid inom 30 minuter.')
      }
    })

    if (!this.guessedCorrectWeight && this.correct.weigth != null) {
      let weights = this.participants.map(x =>
        Math.abs(x.weigth - this.correct.weigth)
      )
      this.findMinimumIndexes(weights).forEach(idx => {
        this.participants[idx].points += 1
        this.participants[idx].comments.push('En poäng för närmast vikt.')
      })
    }

    if (!this.guessedCorrectLength && this.correct.length != null) {
      let lengths = this.participants.map(x =>
        Math.abs(x.length - this.correct.length)
      )
      this.findMinimumIndexes(lengths).forEach(idx => {
        this.participants[idx].points += 1
        this.participants[idx].comments.push('En poäng för närmast längd.')
      })
    }

    if (!this.guessedCorrectDay && this.correct.day != null) {
      let days = this.participants.map(x => Math.abs(this.diffDays(x.day)))
      this.findMinimumIndexes(days).forEach(idx => {
        this.participants[idx].points += 1
        this.participants[idx].comments.push('En poäng för närmast dag.')
      })
    }

    if (!this.guessedCorrectTime && this.correct.time != null) {
      let times = this.participants.map(x => this.diffTime(x.time))
      this.findMinimumIndexes(times).forEach(idx => {
        this.participants[idx].points += 1
        this.participants[idx].comments.push('En poäng för närmast tid.')
      })
    }

    this.participants.sort((a, b) => b.points - a.points)
  },
  methods: {
    format_day(value) {
      if (value) {
        return moment(value).format('MMM Do')
      }
    },
    format_time(value) {
      if (value) {
        return moment(value).format('LT')
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
      // console.log(String(guessedTime), Math.abs(difference))
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
