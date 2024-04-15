const daily = document.getElementById('p-daily');
const weekly = document.getElementById('p-weekly');
const monthly = document.getElementById('p-monthly');
let jsonData;


fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // Parse the JSON response
          return response.json();
    })
    .then(data => {
        jsonData = data;
    // You can now use jsonData anywhere in your code
        console.log(jsonData);
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Error fetching data:', error);
    });


daily.addEventListener("click", () => {
    daily.style.color = "#fff";
    weekly.style.color = "hsl(235, 45%, 61%)";
    monthly.style.color = "hsl(235, 45%, 61%)";

    document.getElementById('work-cur').innerText = jsonData[0]["timeframes"]["daily"]["current"] + "hrs";
    document.getElementById('work-prev').innerText = "Last Day - " + jsonData[0]["timeframes"]["daily"]["previous"] + "hrs";
    document.getElementById('play-cur').innerText = jsonData[1]["timeframes"]["daily"]["current"] + "hrs";
    document.getElementById('play-prev').innerText = "Last Day - " + jsonData[1]["timeframes"]["daily"]["previous"] + "hrs";
    document.getElementById('study-cur').innerText = jsonData[2]["timeframes"]["daily"]["current"] + "hrs";
    document.getElementById('study-prev').innerText = "Last Day - " + jsonData[2]["timeframes"]["daily"]["previous"] + "hrs";
    document.getElementById('exercise-cur').innerText = jsonData[3]["timeframes"]["daily"]["current"] + "hrs";
    document.getElementById('exercise-prev').innerText = "Last Day - " + jsonData[3]["timeframes"]["daily"]["previous"] + "hrs";
    document.getElementById('social-cur').innerText = jsonData[4]["timeframes"]["daily"]["current"] + "hrs";
    document.getElementById('social-prev').innerText = "Last Day - " + jsonData[4]["timeframes"]["daily"]["previous"] + "hrs";
    document.getElementById('self-cur').innerText = jsonData[5]["timeframes"]["daily"]["current"] + "hrs";
    document.getElementById('self-prev').innerText = "Last Day - " + jsonData[5]["timeframes"]["daily"]["previous"] + "hrs";
});

weekly.addEventListener("click", () => {
    daily.style.color = "hsl(235, 45%, 61%)";
    weekly.style.color = "#fff";
    monthly.style.color = "hsl(235, 45%, 61%)";

    document.getElementById('work-cur').innerText = jsonData[0]["timeframes"]["weekly"]["current"] + "hrs";
    document.getElementById('work-prev').innerText = "Last Day - " + jsonData[0]["timeframes"]["weekly"]["previous"] + "hrs";
    document.getElementById('play-cur').innerText = jsonData[1]["timeframes"]["weekly"]["current"] + "hrs";
    document.getElementById('play-prev').innerText = "Last Day - " + jsonData[1]["timeframes"]["weekly"]["previous"] + "hrs";
    document.getElementById('study-cur').innerText = jsonData[2]["timeframes"]["weekly"]["current"] + "hrs";
    document.getElementById('study-prev').innerText = "Last Day - " + jsonData[2]["timeframes"]["weekly"]["previous"] + "hrs";
    document.getElementById('exercise-cur').innerText = jsonData[3]["timeframes"]["weekly"]["current"] + "hrs";
    document.getElementById('exercise-prev').innerText = "Last Day - " + jsonData[3]["timeframes"]["weekly"]["previous"] + "hrs";
    document.getElementById('social-cur').innerText = jsonData[4]["timeframes"]["weekly"]["current"] + "hrs";
    document.getElementById('social-prev').innerText = "Last Day - " + jsonData[4]["timeframes"]["weekly"]["previous"] + "hrs";
    document.getElementById('self-cur').innerText = jsonData[5]["timeframes"]["weekly"]["current"] + "hrs";
    document.getElementById('self-prev').innerText = "Last Day - " + jsonData[5]["timeframes"]["weekly"]["previous"] + "hrs";
});

monthly.addEventListener("click", () => {
    daily.style.color = "hsl(235, 45%, 61%)";
    weekly.style.color = "hsl(235, 45%, 61%)";
    monthly.style.color = "#fff";

    document.getElementById('work-cur').innerText = jsonData[0]["timeframes"]["monthly"]["current"] + "hrs";
    document.getElementById('work-prev').innerText = "Last Day - " + jsonData[0]["timeframes"]["monthly"]["previous"] + "hrs";
    document.getElementById('play-cur').innerText = jsonData[1]["timeframes"]["monthly"]["current"] + "hrs";
    document.getElementById('play-prev').innerText = "Last Day - " + jsonData[1]["timeframes"]["monthly"]["previous"] + "hrs";
    document.getElementById('study-cur').innerText = jsonData[2]["timeframes"]["monthly"]["current"] + "hrs";
    document.getElementById('study-prev').innerText = "Last Day - " + jsonData[2]["timeframes"]["monthly"]["previous"] + "hrs";
    document.getElementById('exercise-cur').innerText = jsonData[3]["timeframes"]["monthly"]["current"] + "hrs";
    document.getElementById('exercise-prev').innerText = "Last Day - " + jsonData[3]["timeframes"]["monthly"]["previous"] + "hrs";
    document.getElementById('social-cur').innerText = jsonData[4]["timeframes"]["monthly"]["current"] + "hrs";
    document.getElementById('social-prev').innerText = "Last Day - " + jsonData[4]["timeframes"]["monthly"]["previous"] + "hrs";
    document.getElementById('self-cur').innerText = jsonData[5]["timeframes"]["monthly"]["current"] + "hrs";
    document.getElementById('self-prev').innerText = "Last Day - " + jsonData[5]["timeframes"]["monthly"]["previous"] + "hrs";
});