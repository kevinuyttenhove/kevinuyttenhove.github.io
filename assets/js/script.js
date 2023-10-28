function date() {
  let currentDate = new Date();
  let dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  let date = currentDate.toLocaleDateString("en-GB", dateOptions);
  document.getElementById("header_date").innerHTML = date;
}
const setUserNameFromLocalStorage = property => {
  let value = localStorage.getItem(property);

  //If there's no username use
  if(!value)
  {
      if(property == 'user-name')
      {
        localStorage.setItem('user-name', '');
      }     
  }
  else
  {
    setValue(property, value);
  }
};

function greet() {
  let currentTime = new Date();
  let greet = Math.floor(currentTime.getHours() / 6);
  let userName = localStorage.getItem('user-name');

  switch (greet) {
    case 0:
      document.getElementById("header_greet").innerHTML = `Good night ${userName}! `;
      break;
    case 1:
      document.getElementById("header_greet").innerHTML = `Good morning ${userName}!`;
      break;
    case 2:
      document.getElementById("header_greet").innerHTML = `Good afternoon ${userName}!`;
      break;
    case 3:
      document.getElementById("header_greet").innerHTML = `Good evening! ${userName}`;
      break;
  }
}

function loadFunctions() {
  setUserNameFromLocalStorage('user-name');
  date();  
  greet();
}


