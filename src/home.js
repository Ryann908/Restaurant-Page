export default function home(){
    const inner = document.getElementById('inner');
    while(inner.lastElementChild){
        inner.removeChild(inner.lastElementChild);
        }

    const title = document.createElement('div');
    const review = document.createElement('div');
    const hours = document.createElement('div');
    const reviewer = document.createElement('div');
    const reviewer1 = document.createElement('div');
    const houer = document.createElement('div');
    const houer1 = document.createElement('div');
    const location = document.createElement('div');
    const locationer = document.createElement('div');
    const location1 = document.createElement('div');




    title.setAttribute('id','title');
    review.setAttribute('id','review');
    hours.setAttribute('id','hours');
    location.setAttribute('id','location');
    locationer.setAttribute('id','locationer');
    location1.setAttribute('id','location1');

    reviewer.setAttribute('id','reviewer');
    reviewer1.setAttribute('id','reviewer1');
    houer.setAttribute('id','houer');
    houer1.setAttribute('id','houer1');



    title.textContent = "Slimy's slippery sustenance";
    reviewer.textContent = "Slimy's has amazing slime based dishes! The design of the place is amazing and the chairs are made from real slime but don't be mistaken they are not sticky. This is a great place to bring kids and the whole family.";
    reviewer1.textContent = "-Curtis";
    houer.textContent = "Hours";
    houer1.textContent = "Sunday: 7am - 9pm Monday: 7am - 9pm Tuesday: 7am - 9pm Wednesday 7am - 9pm Thursday: 7am - 9pm Friday: 7am - 9pm Saturday: 7am - 9pm";
    locationer.textContent = "Location";
    location1.textContent = "123 Slime Brook lane, Slimeville, Slimer";



    inner.appendChild(title);
    inner.appendChild(review);
    review.appendChild(reviewer);
    review.appendChild(reviewer1);
    inner.appendChild(hours);
    hours.appendChild(houer);
    hours.appendChild(houer1);
    inner.appendChild(location);
    location.appendChild(locationer);
    location.appendChild(location1);


    
    
}


