const firebaseConfig = {
  apiKey: "AIzaSyBxTKRYEK5aHiJ2hTC5gicXsqoHoYcPtqg",
  authDomain: "rock-paper-bf40c.firebaseapp.com",
  projectId: "rock-paper-bf40c",
  storageBucket: "rock-paper-bf40c.appspot.com",
  messagingSenderId: "1030131558316",
  appId: "1:1030131558316:web:83a6f7a7895f175eb8bc09"
};
firebase.initializeApp(firebaseConfig);
let database = firebase.database();

/** @type {HTMLInputElement} */
let one = document.getElementById("join1");
/** @type {HTMLInputElement} */
let two = document.getElementById("join2");
/** @type {HTMLInputElement} */
let three = document.getElementById("join3");
/** @type {HTMLInputElement} */
let four = document.getElementById("join4");
one.addEventListener("input", () => {
  if (one.value != "") {
    two.focus();
  } else {
  }
});
two.addEventListener("input", () => {
  if (two.value != "") {
    three.focus();
  } else {
    one.focus();
  }
});
three.addEventListener("input", () => {
  if (three.value != "") {
    four.focus();
  } else {
    two.focus();
  }
});
four.addEventListener("input", () => {
  if (four.value != "") {
    four.focus();
  } else {
    three.focus();
  }
});
async function gameCheck(join) {
  console.log('Game Check')
  try {
    const snapshot = await database.ref('games/' + join).once('value');
    const gameData = snapshot.child(join).val();
    // return gameData;
    if (gameData == null || gameData == '') {
      alert('No Game Found')
    } else {
      console.log('Game Data')
    }
  } catch (error) {
    console.log('ERROR:' + error.message);
    return null;
  }
}
four.addEventListener('input', () => {
  let joincode = document.getElementById('join1').value + document.getElementById('join2').value + document.getElementById('join3').value + document.getElementById('join4').value;
  gameCheck(joincode)
})

function onload() {
  let id = new URLSearchParams(window.location.search).get('gid');
  if (id != null) {
    if (id.length == 4) {
      console.log('URL ID DETECTED')
      one.value = id.slice(0, 1)
      two.value = id.slice(1, 2)
      three.value = id.slice(2, 3)
      four.value = id.slice(3, 4) 
    }
  }
}
onload()