export default function about(){
    const inner = document.getElementById('inner');
    while(inner.lastElementChild){
    inner.removeChild(inner.lastElementChild);
    }
    const title = document.createElement('div');
    const body = document.createElement('div');
    const body1 = document.createElement('div');
    const body2 = document.createElement('div');
    const slimey = document.createElement('div');
    const slippy = document.createElement('div');
    const suppy = document.createElement('div');
    const slimym = document.createElement('div');
    const slippyc = document.createElement('div');
    const suppyw = document.createElement('div');




    title.setAttribute('id','title');

    body.setAttribute('id','body');
    body1.setAttribute('id','body');
    body2.setAttribute('id','body');


    slimey.setAttribute('id','name');
    slippy.setAttribute('id','name');
    suppy.setAttribute('id','name');

    slimym.setAttribute('id','dis');
    slippyc.setAttribute('id','dis');
    suppyw.setAttribute('id','dis');





    title.textContent = "About us";

    slimey.textContent = "Slimy";
    slippy.textContent = "Slippy";
    suppy.textContent = "Suppy";

    slimym.textContent = "Owner - Phone: 888-888-8888  Email:email@email.com"
    slippyc.textContent = "Head Chef - Phone:888-888-8887 Email:email1@email.com"
    suppyw.textContent = "Waiter - Phone:Not listed Email:email2@gmail.com"


    inner.appendChild(title);

    inner.appendChild(body);
    body.appendChild(slimey);
    body.appendChild(slimym)

    inner.appendChild(body1);
    body1.appendChild(slippy);
    body1.appendChild(slippyc);


    inner.appendChild(body2);
    body2.appendChild(suppy);
    body2.appendChild(suppyw);


}