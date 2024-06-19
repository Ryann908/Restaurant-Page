export default function menu(){
    
    const inner = document.getElementById('inner');
    while(inner.lastElementChild){
    inner.removeChild(inner.lastElementChild);
    }


    const title = document.createElement('div');
    const main = document.createElement('div');
    const side = document.createElement('div');
    const drinks = document.createElement('div');

    const slippys = document.createElement('div');
    const slippysname = document.createElement('div');
    const slippysdis = document.createElement('div');
    const slippyscost = document.createElement('div');

    const slappyjacky = document.createElement('div');
    const slappyjackyname = document.createElement('div');
    const slappyjackydis = document.createElement('div');
    const slappyjackycost = document.createElement('div');

    const steaky = document.createElement('div');
    const steakyname = document.createElement('div');
    const steakydis = document.createElement('div');
    const steakycost = document.createElement('div');

    const sries = document.createElement('div');
    const sriesname = document.createElement('div');
    const sriesdis = document.createElement('div');
    const sriescost = document.createElement('div');

    const slurp = document.createElement('div');
    const slurpname = document.createElement('div');
    const slurpdis = document.createElement('div');
    const slurpcost = document.createElement('div');

    title.setAttribute('id','title');
    main.setAttribute('id',"head");
    side.setAttribute('id',"head");
    drinks.setAttribute('id','head');

    slippys.setAttribute('id','body');
    slippysname.setAttribute('id','name');
    slippysdis.setAttribute('id','dis')
    slippyscost.setAttribute('id','cost');

    slappyjacky.setAttribute('id','body');
    slappyjackyname.setAttribute('id','name');
    slappyjackydis.setAttribute('id','dis')
    slappyjackycost.setAttribute('id','cost');

    steaky.setAttribute('id','body');
    steakyname.setAttribute('id','name');
    steakydis.setAttribute('id','dis')
    steakycost.setAttribute('id','cost');

    sries.setAttribute('id','body');
    sriesname.setAttribute('id','name');
    sriesdis.setAttribute('id','dis')
    sriescost.setAttribute('id','cost');

    slurp.setAttribute('id','body');
    slurpname.setAttribute('id','name');
    slurpdis.setAttribute('id','dis')
    slurpcost.setAttribute('id','cost');


    title.textContent = "Menu";
    main.textContent = "Main";
    side.textContent = 'Sides';
    drinks.textContent = 'Drinks';

    slippysname.textContent = "Slippys";
    slippysdis.textContent = "Our signature dish, also it\'s a surprise so good luck. "
    slippyscost.textContent = "$8.49";

    slappyjackyname.textContent = "SlappyJacky";
    slappyjackydis.textContent = "SlappyJacky's is a plate of 6 slimy pancakes with a super soft middle."
    slappyjackycost.textContent = "$9.49";

    steakyname.textContent = "Steaky";
    steakydis.textContent = "Steaky is made from A-5 slime cows and your choice of sauce."
    steakycost.textContent = "$11.79";

    sriesname.textContent = "Sries";
    sriesdis.textContent = "Sries are our creamy and delicious french fries but they are a little different from normal ones."
    sriescost.textContent = "$3.79";

    slurpname.textContent = "Slurp";
    slurpdis.textContent = "Slurp is a slime based liquid similar to jello but is less viscous. It has a sweet taste."
    slurpcost.textContent = "$1.99";



    inner.appendChild(title);
    inner.appendChild(main);

    inner.appendChild(slippys);
    slippys.appendChild(slippysname);
    slippys.appendChild(slippysdis);
    slippys.appendChild(slippyscost);

    inner.appendChild(slappyjacky);
    slappyjacky.appendChild(slappyjackyname);
    slappyjacky.appendChild(slappyjackydis);
    slappyjacky.appendChild(slappyjackycost);

    inner.appendChild(steaky);
    steaky.appendChild(steakyname);
    steaky.appendChild(steakydis);
    steaky.appendChild(steakycost);

    inner.appendChild(side);

    inner.appendChild(sries);
    sries.appendChild(sriesname);
    sries.appendChild(sriesdis);
    sries.appendChild(sriescost);

    inner.appendChild(drinks);

    inner.appendChild(slurp);
    slurp.appendChild(slurpname);
    slurp.appendChild(slurpdis);
    slurp.appendChild(slurpcost);
    

}