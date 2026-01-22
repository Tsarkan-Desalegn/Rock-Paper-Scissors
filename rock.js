const subfirst= document.getElementById("subfirst"); // Shows player's choice
const subsubfirst= document.getElementById("subsubfirst");// Shows computer's choice
const second= document.getElementById("second");// Shows result (win/lose/draw)
const subthird= document.getElementById("subthird");// Button for ✊ (rock)
const subsubthird= document.getElementById("subsubthird"); // Button for 🖐️ (paper)
const subsubsubthird= document.getElementById("subsubsubthird");// Button for ✌️ (scissors)


// Player clicks rock (✊)
subthird.onclick=function(){
    subfirst.textContent="✊"; //show player's choice 
    subsubfirst.click();       // Trigger computer's random choice
};

// Player clicks paper (🖐️)
subsubthird.onclick = function(){
    subfirst.textContent="🖐️"; //show player's choice 
      subsubfirst.click();     // Trigger computer's random choice
};

// Player clicks scissor (✌️)
subsubsubthird.onclick = function(){
    subfirst.textContent="✌️";  //show player's choice
      subsubfirst.click();    // Trigger computer's random choice
};
// Computer generates random choices when triggered 
  subsubfirst.onclick=function(){
    const emoji=["✌️","🖐️","✊"]; // possible computer choices
    const emojiList=emoji[Math.floor(Math.random()*emoji.length)];
    subsubfirst.textContent=emojiList; // show computer's choice 
  };

  // Player chooses rock (✊) → check result

subthird.onclick=function(){
    subfirst.textContent="✊";
    subsubfirst.click();


  if(subfirst.textContent=="✊" && subsubfirst.textContent=="🖐️"){
      second.textContent="YOU LOSE — Better luck next time!👊";
  }
  else if(subfirst.textContent=="✊" && subsubfirst.textContent=="✌️"){
second.textContent="YOU WIN — Congratulations!🎉 ";
  }
  else{
    second.textContent="🤝 It's a DRAW!";
  }
};

// Player chooses paper (🖐️) → check result
subsubthird.onclick=function(){
    subfirst.textContent="🖐️";
      subsubfirst.click();

  if(subfirst.textContent=="🖐️" && subsubfirst.textContent=="✊"){
      second.textContent="YOU WIN — Congratulations!🎉 ";
  }
  else if(subfirst.textContent=="🖐️" && subsubfirst.textContent=="✌️"){
second.textContent=" YOU LOSE — Better luck next time!👊";
  }
  else{
    second.textContent="🤝 It's a DRAW!";
  }

};

// Player chooses scissors (✌️) → check result
subsubsubthird.onclick = function(){
    subfirst.textContent="✌️";
      subsubfirst.click();


  if(subfirst.textContent=="✌️"&& subsubfirst.textContent=="✊"){
      second.textContent="YOU LOSE — Better luck next time!👊";
  }
  else if(subfirst.textContent=="✌️"&& subsubfirst.textContent=="🖐️"){
second.textContent="YOU WIN — Congratulations!🎉 ";
  }
  else{
    second.textContent="🤝 It's a DRAW!";
  }};