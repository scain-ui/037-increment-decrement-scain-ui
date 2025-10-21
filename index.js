var count = 100;

Document.getElementById("before-prefix-increment").innerHTML = count;
Document.getElementById("prefix-increment").innerHTML = ++count;

Document.getElementById("before-postfix-increment").innerHTML = count;
Document.getElementById("postfix-increment").innerHTML = count++;

Document.getElementById("brefore-prefix-decrement").innerHTML = count;
Document.getElementById("prefix-decrement").innerHTML = --count;

Document.getElementById("before-postfix-decrement").innerHTML = count;
Document.getElementById("postfix-decrement").innerHTML = count--;
Document.getElementById("result").innerHTML = counter;