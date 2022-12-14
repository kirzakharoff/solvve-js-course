


// $(document).ready(function() {       $('.spinner-border').hide(); });

const $ul = document.querySelector('#people_list');

const addPersonItem = (person) => {
    // <li class="list-group-item"> Name </li>
    // const secondFilm = person?.['films']?.[1] ?? 'Unknown';
    const secondFilm = _.get(person, '["films"][1]', 'Unknown');
    const $li = document.createElement('li');
    $li.className = 'list-group-item';

    // name + '(birth year: ' + birthYear + ')';
    $li.innerText = `
        ${person['name']}
        (birth year: ${person['birth_year']})
        - second film: ${secondFilm}
    `;
    $ul.appendChild($li);
};

// fetch('https://swapi.dev/api/people/?page=3')
//     .then((response) => response.json()) // get json from response
//     .then((json) => {
//         json.results.forEach(person => {
//             addPersonItem(person);
//         });
//     }); // get data

// request.catch();
// request.finally();

axios.get('https://swapi.dev/api/people/?page=3')
    .then((res) => {
        res.data.results.forEach(person => {
            addPersonItem(person);
        });
    });

    // $(document).ready(function() {
    //     $('.spinner-border').hide();
    // });


    // setTimeout(5000);

    // const isVisiblePeopleList = document.getElementById('people_list')
    
    if(document.getElementById('people_list')){
        // setTimeout(50000);
        document.querySelector('.spinner-border').style.display = 'none'; 
    //    hide(document.querySelectorAll('.spinner-border'));
    }    