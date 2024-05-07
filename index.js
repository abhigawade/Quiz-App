

const questions = [
    {
      'question': "HTML stands for -",
      'a': "HighText Machine Language",
      'b': "HyperText and links Markup Language",
      'c': "HyperText Markup Language",
      'd': "None of these",
      'correct': "c",
    },
  
    {
      'question': "The correct sequence of HTML tags for starting a webpage is -",
      'a': "Head, Title, HTML, body",
      'b': "HTML, Body, Title, Head",
      'c': "HTML, Head, Title, Body",
      'd': "HTML, Head, Title, Body",
      'correct': "c",
    },
  
    {
      'question':" Which of the following element is responsible for making the text bold in HTML?",
      'a': "<pre>",
      'b': "<a>",
      'c': "<b>",
      'd': "<br>",
      'correct': "c",
    },
  
    {
      'question':"Which of the following tag is used to insert a line-break in HTML?",
      'a': "<ul>",
      'b': "<ol>",
      'c': "<br>",
      'd': "<hr>",
      'correct': "c",
    },
  ];
  
  let index = 0;
  let total = questions.length;
  let right = 0;
  let wrong = 0;
  
  const quebox = document.getElementById("quebox");
  const optionInputs = document.querySelectorAll(".options");
  
  const loadquestion = () => {
    if (index === total) {
      return endQuiz();
    }
    reset();
    const data = questions[index];
    quebox.innerText = ` ${index + 1}) ${data.question}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
  };
  
  const submitqz = () => {
    const data = questions[index];
    const ans = getanswer();
    if (ans === data.correct) {
      right++;
    } else {
      wrong++;
    }
    index++;
    loadquestion();
    return;
  };
  
  const getanswer = () => {
    let answer;
    optionInputs.forEach((input) => {
      if (input.checked) {
        answer = input.value;
      }
    });
    return answer;
  };
  
  const reset = () => {
    optionInputs.forEach((input) => {
      input.checked = false;
    });
  };
  
  const endQuiz = () => {
    document.getElementById("box").innerHTML = `<h3> Thank You For playing quiz </h3>
    <h3> ${right} / ${total} are correct</h3>`;
  };
  
  loadquestion();
  