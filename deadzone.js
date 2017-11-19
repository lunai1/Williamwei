var count = store.get('count') || 0;

function next(loc) {
  store.set('count', count + 1);
  window.location.href = loc;
}

function show() {
  var updated = store.get('updated');

  var now = new Date();
  if (updated && (new Date(updated) < now - 5000)) {
    store.set('count', 0);
    count = 0;
    document.getElementById('message').innerHTML = 'You took too long to press the button! The counter reset!';

  } else if (count >= 100000 ) {
    window.location.href = 'noice.html';
  } else if (count >= 9990 ) {
    document.getElementById('message').innerHTML = 'My life is a lie. I cant believe that I spent time making this. You pressed the button '+count+ ' times.';
  } else if (count >= 9980 ) {
    document.getElementById('message').innerHTML = 'AWWAAAAAAAAAYYYYY!!!!!. You pressed the button '+count+ ' times.';
  } else if (count >= 9950 ) {
    document.getElementById('message').innerHTML = 'SILVEEEERRRRRRR. You pressed the button '+count+ ' times.';
  } else if (count >= 9920 ) {
    document.getElementById('message').innerHTML = 'YOOOOOOOOOOOOOO. You pressed the button '+count+ ' times.';
  } else if (count >= 9900 ) {
    document.getElementById('message').innerHTML = 'HIIIIIIGGGGHHHH. You pressed the button '+count+ ' times.';
  } else if (count >= 9800 ) {
    document.getElementById('message').innerHTML = "I DONT THINK WE/'RE  IN KNANSAS ANYMORE, TOTO!. You pressed the button "+count+ ' times.';
  } else if (count >= 9500 ) {
    document.getElementById('message').innerHTML = 'Pass, into the I R I S. You pressed the button '+count+ ' times.';
  } else if (count >= 9020 ) {
    document.getElementById('message').innerHTML = 'Your preserverance has paid off. You pressed the button '+count+ ' times.';
  } else if (count >= 9000 ) {
    document.getElementById('message').innerHTML = 'RAPE! RAAPE! R A P E!. You pressed the button '+count+ ' times.';
  } else if (count >= 8000 ) {
    document.getElementById('message').innerHTML = 'I FEEL ENDANGERED. You pressed the button '+count+ ' times.';
  } else if (count >= 7000 ) {
    document.getElementById('message').innerHTML = 'SRLY. STAP. You pressed the button '+count+ ' times.';
  } else if (count >= 5000 ) {
    document.getElementById('message').innerHTML = 'You realize that you cant press the back button anymore, right? You pressed the button '+count+ ' times.';
  } else if (count >= 4000 ) {
    document.getElementById('message').innerHTML = 'Your life is a lie. You pressed the button '+count+ ' times.';
  } else if (count >= 4000 ) {
    document.getElementById('message').innerHTML = 'O V E R A C H I E V E R. You pressed the button '+count+ ' times.';
  } else if (count >= 3000 ) {
    document.getElementById('message').innerHTML = 'Just die already. You pressed the button '+count+ ' times.';
  } else if (count >= 2000 ) {
    document.getElementById('message').innerHTML = 'You would have won a video game achievement by now. You pressed the button '+count+ ' times.';
  } else if (count >= 1000 ) {
    document.getElementById('message').innerHTML = 'OOOHHHHHH MMYYYYY GOOOOODDD. You pressed the button '+count+ ' times.';
  } else if (count >= 800 ) {
    document.getElementById('message').innerHTML = 'I lied about the fact that there is escape. You pressed the button '+count+ ' times.';
  } else if (count >= 500 ) {
    document.getElementById('message').innerHTML = 'Yawn. There is no hope. You pressed the button '+count+ ' times.';
  } else if (count >= 350 ) {
    document.getElementById('message').innerHTML = 'Really bruh? You pressed the button '+count+ ' times.';
  } else if (count >= 250 ) {
    document.getElementById('message').innerHTML = 'Is there really any hope? You pressed the button '+count+ ' times.';
  } else if (count >= 140 ) {
    document.getElementById('message').innerHTML = 'At this time you should probably be questioning my mostivational speeches. You pressed the button '+count+ ' times.';
  } else if (count >= 80 ) {
    document.getElementById('message').innerHTML = 'You are really troopin, big guy. You pressed the button '+count+ ' times.';

  } else if (count >= 40 ) {
    document.getElementById('message').innerHTML = 'Just a little further. You pressed the button '+count+ ' times.';

  } else if (count >= 20 ) {
    document.getElementById('message').innerHTML = 'Almost there! Keep on going! You pressed the button '+count+ " times.";

  } else {
    document.getElementById('message').innerHTML = 'You pressed the button '+count+ " times.";
  }

  store.set('updated', new Date());
  // store.set('count', count + 1, new Date().getTime() + 5000);

}


show();
