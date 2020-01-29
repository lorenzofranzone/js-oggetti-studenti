// Esercizio 1
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il "for in" tutte le proprietà.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
// Generare 3 prompt per aggiungere un nuovo oggetto studente.
// Usate prima i console.log se funziona tutto stampate a schermo con jQuery.

$(document).ready(function(){
  // Code

  //////////////////////////////////////////////////
  // Student
  var student = {
    'name' : 'Lorenzo',
    'surname' : 'Franzone',
    'age' : 30
  }

  //////////////////////////////////////////////////
  // Stampo le info dell'oggetto "student"
  for (var key in student) {
    console.log('Studente base: ' + key + ': ' + student[key]);
    $('#student').append('<li>' + key + ': ' + student[key] + '</li>');
  }

  //////////////////////////////////////////////////
  // Students List
  var studentsList = [
    {
      'name' : 'Lorenzo',
      'surname' : 'Franzone',
      'age' : 30
    },
    {
      'name' : 'Andrea',
      'surname' : 'Rossi',
      'age' : 25
    },
    {
      'name' : 'Simone',
      'surname' : 'Bianchi',
      'age' : 35
    },
    {
      'name' : 'Luca',
      'surname' : 'Viola',
      'age' : 20
    },
    {
      'name' : 'Davide',
      'surname' : 'Verdi',
      'age' : 32
    }
  ];

  //////////////////////////////////////////////////
  // Students Print

  for (var i = 0; i < studentsList.length; i++) {
    console.log(studentsList[i].name + ' ' + studentsList[i].surname + ' ' + studentsList[i].age);
    $('#students-list').append('<li>' + studentsList[i].name + ' ' + '<strong>' + studentsList[i].surname +'</strong>' + ' ' + '(' + studentsList[i].age +')' + '</li>');
  }

  //////////////////////////////////////////////////
  // New Student Prompts and List Update

  var newStudent = {
    'name' : prompt('Inserisci il nome del nuovo studente'),
    'surname' : prompt('Inserisci il cognome del nuovo studente'),
    'age' : parseInt(prompt('Inserisci l\'età del nuovo studente'))
  }

  studentsList.push(newStudent);

  for (var j = 0; j < studentsList.length; j++) {
    console.log(studentsList[j].name + ' ' + studentsList[j].surname + ' ' + studentsList[j].age);
    $('#new-students-list').append('<li>' + studentsList[j].name + ' ' + '<strong>' + studentsList[j].surname +'</strong>' + ' ' + '(' + studentsList[j].age +')' + '</li>');
  }

//////////
}); // document.ready
