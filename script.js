// Define the game questions and answers
var questions = [
    {
        "id": 1,
        "Year": 1901,
        "question": "The first Nobel Prizes are awarded.\n"
    },
    {
        "id": 2,
        "Year": 1903,
        "question": "The first <em>Tour de France</em> is held.\n"
    },
    {
        "id": 3,
        "Year": 1905,
        "question": "Albert Einstein formulates special relativity.\n"
    },
    {
        "id": 4,
        "Year": 1908,
        "question": "The Ford Motor Company invents the <em>Model T</em>\n"
    },
    {
        "id": 5,
        "Year": 1910,
        "question": "<em>Boy Scouts of America</em> is founded.\n"
    },
    {
        "id": 6,
        "Year": 1910,
        "question": "Imperial Japan annexes Korea.\n"
    },
    {
        "id": 7,
        "Year": 1911,
        "question": "New Delhi becomes the capital of British India.\n"
    },
    {
        "id": 8,
        "Year": 1912,
        "question": "The <em>RMS Titanic</em> sinks.\n"
    },
    {
        "id": 9,
        "Year": 1914,
        "question": "World War I begins.\n"
    },
    {
        "id": 10,
        "Year": 1917,
        "question": "The <em>National Hockey League</em> is formed.\n"
    },
    {
        "id": 11,
        "Year": 1917,
        "question": "The first <em>Pulitzer Prizes</em> are announced.\n"
    },
    {
        "id": 12,
        "Year": 1922,
        "question": "The <em>British Broadcasting Corporation (BBC)</em> is established.\n"
    },
    {
        "id": 13,
        "Year": 1923,
        "question": "<em>Time Magazine</em> is first published.\n"
    },
    {
        "id": 14,
        "Year": 1923,
        "question": "The <em>Walt Disney Company</em> is founded.\n"
    },
    {
        "id": 15,
        "Year": 1924,
        "question": "Vladimir Lenin dies.\n"
    },
    {
        "id": 16,
        "Year": 1925,
        "question": "Benito Mussolini begins his dictatorship.\n"
    },
    {
        "id": 17,
        "Year": 1927,
        "question": "World population reaches 2 billion.\n"
    },
    {
        "id": 18,
        "Year": 1928,
        "question": "Bubble gum is invented.\n"
    },
    {
        "id": 19,
        "Year": 1929,
        "question": "The first <em>Academy Awards</em> are presented.\n"
    },
    {
        "id": 20,
        "Year": 1929,
        "question": "The beginning of the Great Depression.\n"
    },
    {
        "id": 21,
        "Year": 1929,
        "question": "The first <em>Academy Awards</em> are presented.\n"
    },
    {
        "id": 22,
        "Year": 1931,
        "question": "The <em>Empire State Building</em> is completed.\n"
    },
    {
        "id": 23,
        "Year": 1933,
        "question": "Prohibition is abolished in the United States.\n"
    },
    {
        "id": 24,
        "Year": 1934,
        "question": "Bonnie and Clyde are shot to death in a police ambush.\n"
    },
    {
        "id": 25,
        "Year": 1935,
        "question": "<em>20th Century Fox</em> is established.\n"
    },
    {
        "id": 26,
        "Year": 1936,
        "question": "The Hoover Dam is completed.\n"
    },
    {
        "id": 27,
        "Year": 1937,
        "question": "Toyota is founded.\n"
    },
    {
        "id": 28,
        "Year": 1937,
        "question": "J.R.R. Tolkien publishes <em>The Hobbit</em>.\n"
    },
    {
        "id": 29,
        "Year": 1937,
        "question": "Volkswagen is founded.\n"
    },
    {
        "id": 30,
        "Year": 1938,
        "question": "<em>Time Magazine</em> declares Adolf Hitler as <em>Man of the Year</em>.\n"
    },
    {
        "id": 31,
        "Year": 1939,
        "question": "<em>Gone With the Wind</em> is released.\n"
    },
    {
        "id": 32,
        "Year": 1939,
        "question": "MGM releases <em>The WIzard of Oz.</em>\n"
    },
    {
        "id": 33,
        "Year": 1940,
        "question": "McDonalds is founded.\n"
    },
    {
        "id": 34,
        "Year": 1940,
        "question": "Winston Churchill becomes the Prime Minister of the U.K.\n"
    },
    {
        "id": 35,
        "Year": 1941,
        "question": "Hitler invades the Soviet Union.\n"
    },
    {
        "id": 36,
        "Year": 1941,
        "question": "Adolf Hitler commences the Nazi invasion of the Soviet Union.\n"
    },
    {
        "id": 37,
        "Year": 1942,
        "question": "The internment of Japanese-American citizens in the US begins.\n"
    },
    {
        "id": 38,
        "Year": 1942,
        "question": "The Battle of Stalingrad begins.\n"
    },
    {
        "id": 39,
        "Year": 1943,
        "question": "The Pentagon is completed.\n"
    },
    {
        "id": 40,
        "Year": 1943,
        "question": "The Pentagon is completed.\n"
    },
    {
        "id": 41,
        "Year": 1943,
        "question": "<em>American Broadcasting Company (ABC)</em> is founded.\n"
    },
    {
        "id": 42,
        "Year": 1944,
        "question": "D-Day lands in Normandy.\n"
    },
    {
        "id": 43,
        "Year": 1945,
        "question": "The suicide of Adolf Hitler.\n"
    },
    {
        "id": 44,
        "Year": 1945,
        "question": "The end of World War II.\n"
    },
    {
        "id": 45,
        "Year": 1945,
        "question": "Anne Frank dies.\n"
    },
    {
        "id": 46,
        "Year": 1945,
        "question": "The Battle of Okinawa begins.\n"
    },
    {
        "id": 47,
        "Year": 1946,
        "question": "The first images of the Earth are taken from space.\n"
    },
    {
        "id": 48,
        "Year": 1947,
        "question": "The <em>Central Intelligence Agency (CIA)</em> is created. \n"
    },
    {
        "id": 49,
        "Year": 1947,
        "question": "Hyundai Group is founded.\n"
    },
    {
        "id": 50,
        "Year": 1947,
        "question": "Jackie Robinson becomes the first baseball player of color.\n"
    },
    {
        "id": 51,
        "Year": 1948,
        "question": "Apartheid begins in South Africa\n"
    },
    {
        "id": 52,
        "Year": 1948,
        "question": "The <em>World Health Organization (WHO)</em> is founded.\n"
    },
    {
        "id": 53,
        "Year": 1948,
        "question": "Honda is founded.\n"
    },
    {
        "id": 54,
        "Year": 1949,
        "question": "NATO is formed.\n"
    },
    {
        "id": 55,
        "Year": 1949,
        "question": "George Orwell publishes <em>Nineteen Eighty-Four</em>.\n"
    },
    {
        "id": 56,
        "Year": 1951,
        "question": "Soviet Russia creates the atomic bomb.\n"
    },
    {
        "id": 57,
        "Year": 1951,
        "question": "Disney releases <em>Alice in Wonderland</em>.\n"
    },
    {
        "id": 58,
        "Year": 1953,
        "question": "The end of the Korean War.\n"
    },
    {
        "id": 59,
        "Year": 1953,
        "question": "The first color television is produced.\n"
    },
    {
        "id": 60,
        "Year": 1954,
        "question": "The Supreme Court decides <em>Brown v. Board of Education</em>, ordering the end to racial segregation in public schools.\n"
    },
    {
        "id": 61,
        "Year": 1958,
        "question": "NASA is formed.\n"
    },
    {
        "id": 62,
        "Year": 1959,
        "question": "World population reaches 3 billion.\n"
    },
    {
        "id": 63,
        "Year": 1959,
        "question": "Hawaii becomes the 50th state of the United States.\n"
    },
    {
        "id": 64,
        "Year": 1962,
        "question": "The Cuban Missile Crisis.\n"
    },
    {
        "id": 65,
        "Year": 1963,
        "question": "Martin Luther King Jr. delivers the &quot;I Have a Dream&quot; speech.\n"
    },
    {
        "id": 66,
        "Year": 1963,
        "question": "John F. Kennedy is assassinated.\n"
    },
    {
        "id": 67,
        "Year": 1965,
        "question": "Malcolm X. dies.\n"
    },
    {
        "id": 68,
        "Year": 1967,
        "question": "The first high-speed rail is introduced in Tokyo.\n"
    },
    {
        "id": 69,
        "Year": 1968,
        "question": "Martin Luther Kin Jr. is assassinated.\n"
    },
    {
        "id": 70,
        "Year": 1969,
        "question": "Samsung Electronics is founded.\n"
    },
    {
        "id": 71,
        "Year": 1969,
        "question": "Apollo 11, the first manned mission to the moon, happens.\n"
    },
    {
        "id": 72,
        "Year": 1969,
        "question": "Woodstock music festival happens. \n"
    },
    {
        "id": 73,
        "Year": 1969,
        "question": "<em>Sesame Street</em> premieres its debut episode.\n"
    },
    {
        "id": 74,
        "Year": 1970,
        "question": "<em>The Beatles</em> break up.\n"
    },
    {
        "id": 75,
        "Year": 1972,
        "question": "<em>Pong</em> is released.\n"
    },
    {
        "id": 76,
        "Year": 1973,
        "question": "The Supreme Court decides <em>Roe v. Wade</em>.\n"
    },
    {
        "id": 77,
        "Year": 1974,
        "question": "World population reaches 4 billion.\n"
    },
    {
        "id": 78,
        "Year": 1974,
        "question": "Richard Nixon resigns.\n"
    },
    {
        "id": 79,
        "Year": 1975,
        "question": "Microsoft is founded.\n"
    },
    {
        "id": 80,
        "Year": 1976,
        "question": "Apple is founded.\n"
    },
    {
        "id": 81,
        "Year": 1976,
        "question": "Mao Zedong dies.\n"
    },
    {
        "id": 82,
        "Year": 1976,
        "question": "First outbreak of the Ebola virus.\n"
    },
    {
        "id": 83,
        "Year": 1977,
        "question": "Elvis Presley dies.\n"
    },
    {
        "id": 84,
        "Year": 1977,
        "question": "Voyager I is launched by NASA.\n"
    },
    {
        "id": 85,
        "Year": 1977,
        "question": "The Atari 2600 video game console is released in North America.\n"
    },
    {
        "id": 86,
        "Year": 1979,
        "question": "Margaret Thatcher becomes the Prime Minister of the U.K.\n"
    },
    {
        "id": 87,
        "Year": 1979,
        "question": "The Sino-Vietnamese War.\n"
    },
    {
        "id": 88,
        "Year": 1980,
        "question": "Invention of the <em>Rubik&#39;s Cube.</em>\n"
    },
    {
        "id": 89,
        "Year": 1980,
        "question": "<em>Pac-man</em> is released.\n"
    },
    {
        "id": 90,
        "Year": 1980,
        "question": "Ronald Reagan is elected as the President of the United States.\n"
    },
    {
        "id": 91,
        "Year": 1980,
        "question": "The Rubiks Cube is invented.\n"
    },
    {
        "id": 92,
        "Year": 1980,
        "question": "<em>Cable News Network (CNN)</em> is launched.\n"
    },
    {
        "id": 93,
        "Year": 1980,
        "question": "John Lennon is murdered.\n"
    },
    {
        "id": 94,
        "Year": 1981,
        "question": "The IBM Personal Computer is released.\n"
    },
    {
        "id": 95,
        "Year": 1982,
        "question": "Michael Jackson releases <em>Thriller</em>.\n"
    },
    {
        "id": 96,
        "Year": 1985,
        "question": "<em>Live Aid</em> happens.\n"
    },
    {
        "id": 97,
        "Year": 1985,
        "question": "<em>Windows 1.0</em> is released.\n"
    },
    {
        "id": 98,
        "Year": 1986,
        "question": "<em>The Challenger</em> breaks apart 74 seconds into its flight.\n"
    },
    {
        "id": 99,
        "Year": 1986,
        "question": "Chernobyl disaster happens.\n"
    },
    {
        "id": 100,
        "Year": 1987,
        "question": "World population reaches 5 billion.\n"
    },
    {
        "id": 101,
        "Year": 1988,
        "question": "George H. W. Bush is elected as the President of the United States.\n"
    },
    {
        "id": 102,
        "Year": 1989,
        "question": "Tiananmen Square Massacre happens.\n"
    },
    {
        "id": 103,
        "Year": 1989,
        "question": "<em>The Simpsons</em> premieres.\n"
    },
    {
        "id": 104,
        "Year": 1989,
        "question": "The Game Boy is released in Japan.\n"
    },
    {
        "id": 105,
        "Year": 1989,
        "question": "Disney&#39;s <em>The Little Mermaid</em> premieres.\n"
    },
    {
        "id": 106,
        "Year": 1989,
        "question": "The Berlin Wall falls.\n"
    },
    {
        "id": 107,
        "Year": 1990,
        "question": "The Gulf War begins.\n"
    },
    {
        "id": 108,
        "Year": 1992,
        "question": "Los Angeles riots over the acquittal of those involved in the beating of Rodney King.\n"
    },
    {
        "id": 109,
        "Year": 1992,
        "question": "Disney&#39;s <em>Aladdin</em> is released.\n"
    },
    {
        "id": 110,
        "Year": 1992,
        "question": "Bill Clinton is elected as the President of the United States.\n"
    },
    {
        "id": 111,
        "Year": 1994,
        "question": "Release of Disney&#39;s <em>The Lion King.</em>\n"
    },
    {
        "id": 112,
        "Year": 1995,
        "question": "The World Trade Organization (WTO) is established.\n"
    },
    {
        "id": 113,
        "Year": 1995,
        "question": "O. J. Simpson is found not guilty of double murder.\n"
    },
    {
        "id": 114,
        "Year": 1995,
        "question": "<em>Toy Story</em> is released.\n"
    },
    {
        "id": 115,
        "Year": 1998,
        "question": "Pol Pot dies.\n"
    },
    {
        "id": 116,
        "Year": 1998,
        "question": "Windows 98 is released.\n"
    },
    {
        "id": 117,
        "Year": 1998,
        "question": "Google is founded.\n"
    },
    {
        "id": 118,
        "Year": 1999,
        "question": "Vladimir Putin becomes President of Russia.\n"
    },
    {
        "id": 119,
        "Year": 1999,
        "question": "World population reaches 6 billion.\n"
    },
    {
        "id": 120,
        "Year": 2000,
        "question": "George Bush is elected as the 43rd president of the United States.\n"
    },
    {
        "id": 121,
        "Year": 2002,
        "question": "SpaceX is founded by Elon Musk.\n"
    },
    {
        "id": 122,
        "Year": 2002,
        "question": "Mozilla Firefox is released.\n"
    },
    {
        "id": 123,
        "Year": 2005,
        "question": "Youtube is founded.\n"
    },
    {
        "id": 124,
        "Year": 2009,
        "question": "Barack Obama takes office as the first African-American president of the United States.\n"
    },
    {
        "id": 125,
        "Year": 2011,
        "question": "Osama Bin Laden is shot dead by the United States Navy SEALs\n"
    },
    {
        "id": 126,
        "Year": 2012,
        "question": "The Higgs boson is discovered.\n"
    },
    {
        "id": 127,
        "Year": 2016,
        "question": "<em>Pokemon Go</em> is released.\n"
    }
];


// Get DOM elements
var questionElement = document.getElementById("question");
var sliderElement = document.getElementById("slider");
var minValueElement = document.getElementById("min-value");
var maxValueElement = document.getElementById("max-value");
var guessValueElement = document.getElementById("guess-value");
var resultElement = document.getElementById("result");
var yourscore = document.getElementById("score");
var liveleft = document.getElementById("lives");

// Function to randomly select a question
function getRandomQuestion() {
    var randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

// Function to update the slider value display
function updateSliderValue() {
    minValueElement.innerHTML = `Minimum Possible Value : ${sliderElement.min}`;
    maxValueElement.innerHTML = `Maximum Possible Value : ${sliderElement.max}`;
    guessValueElement.innerHTML = `Your Guess Value : ${sliderElement.value}`;
}
var livesleftis = 100;
var score = 0;
// Function to check the user's answer
function checkAnswer() {
    var rangeSlider = document.getElementById("rs-range-line");
    var userAnswer = parseInt(rangeSlider.value);
    if (userAnswer === currentQuestion.Year) {
        resultElement.innerHTML = `Correct! The answer is ${currentQuestion.Year}`;
    } else {
        resultElement.innerHTML = `Incorrect! The answer is ${currentQuestion.Year} !! Your answer was :${userAnswer}`;

        // score += 1;
        var deduct = Math.abs(currentQuestion.Year - userAnswer);
        livesleftis = livesleftis - deduct;
    }
    if (livesleftis > 0) {
        score += 1;
    }
    else {
        if (score >= 10) {
            alert(`Your score is: ${score}. Your performance was outstanding!!`)
        }
        else if (score >= 5 && score < 10) {
            alert(`Your score is: ${score}. Your performance was decent!!`)
        }
        else {
            alert(`Your score is: ${score}. Your performance was poor!!`)
        }
        livesleftis = 100;
        score = 0;
    }
    yourscore.innerText = `Your Score : ${score}`;
    liveleft.innerText = `Your Lives Remaining : ${livesleftis}`;

    // Get a new question
    currentQuestion = getRandomQuestion();
    // Display the new question
    questionElement.innerHTML = currentQuestion.question;
    // Reset the slider position
    rangeSlider.value = rangeSlider.min + 50;
    // Update the slider value display
    updateSliderValue();
}

// Initialize the game
var currentQuestion = getRandomQuestion();
questionElement.innerHTML = currentQuestion.question;
// updateSliderValue();

// // Add event listener to update slider value display on input change
// sliderElement.addEventListener("input", updateSliderValue);


var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");
function updateSliderValue(){
    rangeSlider.value=1960;
    rangeBullet.innerHTML = rangeSlider.value;
    rangeBullet.style.left = (((rangeSlider.value-1900)/(2023-1900))*100) + "%";
}
rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (((rangeSlider.value-1900)/(2023-1900))*100) + "%";
}