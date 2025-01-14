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