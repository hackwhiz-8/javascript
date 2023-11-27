const docsqu = document.querySelector
const get = (param) => document.getElementById(`${param}`);
const url = "https://api.github.com/users/";
const input = document.querySelector("[input-search]");
const user_link = document.querySelector("[profile-link]");
const username = document.querySelector("#name");
const bio = document.querySelector("[bio1]");
const date = document.querySelector("[date]");
const repos = document.querySelector("[repos]");
const followers = document.querySelector("[followers]");
const following = document.querySelector("[following]");
const location1 = document.querySelector("[location]");
const btn = document.querySelector(".btn");
const profile_img = document.querySelector("[git-search-img]");
const searchForm = document.querySelector("[search-form]")
const root = document.documentElement.style;
const btn_switch = document.querySelector(".btn-mode");
console.log(root);
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const btn_mode = document.querySelector("[btn-mode]");

const btn_text = document.querySelector("[btn-text]");
const btn_img = document.querySelector("[btn-img]");
const company = document.querySelector("[company]");
const twitter = document.querySelector("[twiter]");
const email = document.querySelector("[email]");
const wrapper = document.querySelector(".wrapper");
console.log(btn_text)
let darkMode = false;

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "") {
    return;
  } else {
    getUserData(url + input.value);
  }
});
console.log(input.value);




async function getUserData(data) {

  try {
    const dataR = await fetch(data);

    if (dataR.statusText === "Not Found") {
      throw error;
    }

    const response = await dataR.json();
    updateProfile(response);


  } catch (error) {
    alert("profile not found");
  }


  // fetch(data)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     updateProfile(data);
  //   })
  //   .catch((error) => {
  //     throw error;
  //     alert("profile not found");
  //   });
}

//   getUserData(url + "hackwhiz-8");

function updateProfile(data) {

  profile_img.src = data.avatar_url;
  username.innerText = data.name;
  user_link.innerText = `@${data.login}`;
  user_link.href = `${data.html_url}`;
  repos.innerText = data.public_repos;
  followers.innerText = data.followers;
  following.innerText = data.following;

  bio.innerText = data.bio == null ? " this profile has no bio " : `${data.bio}`;

  datesegments = data.created_at.split("T").shift().split("-");
  date.innerText = ` joined ${datesegments[2]} ${months[datesegments[1] - 1]}  ${datesegments[0]} `;
  location1.innerText = data.location == null ? " undefined " : `${data.location}`;
  twitter.innerText = data.twitter_username == null ? "undefined " : `${data.twitter_username}`;
  twitter.href = data.twitter_username == null ? "undefined " : `${data.twitter_username}`;
  company.innerText = data.company == null ? "undefined " : `${data.company}`;
  email.innerText = data.email == null ? "undefined " : `${data.email}`;
}
console.log(twitter);


btn_switch.addEventListener("click", () => {

  if (darkMode == false) {
    setDarkProperties();

  } else {
    setLightProperties();
  }

})


function setDarkProperties() {
  btn_img.src = "assets/images/moon-icon.svg";
  btn_text.innerText = "dark";
  console.log(btn_text);
  wrapper.style.background = "#24243e";
  darkMode = true;
}

function setLightProperties() {
  
  btn_img.src = "assets/images/sun-icon.svg";
  btn_text.innerText = "light";
  wrapper.style.background = "#ab080866";
  console.log(btn_text);
  darkMode = false;
}
getUserData(url + "hackwhiz-8");
