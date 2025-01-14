function weightedAverage(object) {
  function weightingGrades(notes) {
    const notesWithCredit = notes.map(function (student) {
      return student.note * student.credit
    })
    return notesWithCredit
  }

  function sumNotesWeighted(notesXcredits) {
    const notesSum = notesXcredits.reduce(function (sum = 0, newVal) {
      return sum + newVal
    })
    return notesSum
  }

  function sumCredits(notes) {
    const credits = notes.map(function (note) {
      return note.credit
    })

    const creditsSum = credits.reduce(function (sum = 0, newValue) {
      return sum + newValue
    })
    return creditsSum
  }

  const notesWeighted = weightingGrades(object)
  const notesSumed = sumNotesWeighted(notesWeighted)
  const creditsSum = sumCredits(notes)
  const weightedAverage = notesSumed / creditsSum
  
  return 'Wheighted Average: ' +  weightedAverage
}

function average(object) {
  function getNotes(list) {
    const notes = list.map((person) => person.note)
    return notes
  }

  const notesList = getNotes(object)
  const average = notesList.reduce((sum = 0, newValue) => sum + newValue) / notesList.length
  return 'Average: ' +  average
}

function cuadraticAverage(list) {
  const cuadraticValues = list.map((element) => element**2)
  const dataSum = cuadraticValues.reduce((sum = 0, newValue) => sum + newValue)
  const cuadraticAverage = Math.sqrt(dataSum / list.length)
  
  return 'Cuadratic Average: ' + cuadraticAverage
}

function meanSquaredError(list){
  const [mesured, predicted] = list
  const calculateErrors = mesured.map((value, index) => value - predicted[index])
  const cuadraticErrors = calculateErrors.map((element) => element**2) //y^2
  const sumErrors = cuadraticErrors.reduce((sum = 0, newVlue) => sum + newVlue)
  const mSE = sumErrors / list[0].length

  return 'Mean squared error: ' + mSE
}

function harmonicMean(list){
  const inverseVelocity = list.map((velocity) => 1 / velocity)
  const sumVelocity = inverseVelocity.reduce((sum = 0, newValue) => sum + newValue)
  const harmonicMean = list.length / sumVelocity

  return 'Harmonic Average: ' + harmonicMean
}

const notes = [
  {
      course: "Educación Física",
      note: 10,
      credit: 2,
  },
  {
      course: "Programación",
      note: 8,
      credit: 5,
  },
  {
      course: "Finanzas personales",
      note: 7,
      credit: 5,
  },
];

const currents = [2.5, 3.0, 3.5, 4.0, 4.5] //Cuadratic Average = 3.57 A
const errorValues = [[3, 4.5, 6, 8.5, 10], [2.8, 4.7, 6.2, 8.3, 9.8]] // [messured][predicted], MSE=0.04
const signal = [-0.5, 0.8, -0.7, 1.0, -0.6] //cuadratic average 0.74
const velocity = [60, 80, 100]


