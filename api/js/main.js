const $ul = document.querySelector('#mainItems');
const $details = document.querySelector('#detailItems');

let link;
let countItems;
let currentPage = 1;
const $parentPaginate = document.querySelector('.pagination');

const addItem = (item, link1) => {
    const $li = document.createElement('li');
    $li.className = 'list-group-item';
    $li.innerText = `${item}`;
    $ul.appendChild($li);

    $li.addEventListener('click', () => {
        if ($details.querySelector('.list-group-item-detail')) {
            $details.innerHTML = '';
            $parentPaginate.innerHTML = '';
    }
    link = link1

});
    
};

const addDetails = (item) => {

    axios.get(item, {}, {})

        .then((res) => {
            // console.log(item)
            // console.log($parentPaginate.querySelector('a.active'))
            if($details.querySelector('.list-group-item-detail')) {

            }
            if(item === link) {
                countItems = res.data.count
                res.data.results.forEach((key) => {
                const $li1 = document.createElement('li');
                $li1.className = 'list-group-item-detail';
                $li1.innerText = key.name;
                // debugger;
                $details.appendChild($li1);      
                 

            })
            // console.log(countItems)
            renderPaginate(countItems)
            // console.log(currentPage)
        }

        })
    };



axios.get('https://swapi.dev/api/', {}, {})
    .then((res) => {
        Object.keys(res.data).forEach((key, value) => {
            addItem(`${key}`, `${res.data[key] += '?page='}`);
            $ul.addEventListener('click', function() {
                addDetails(res.data[key])
            });

        })          
    });


const renderPaginate = (count) =>  {
    const itemLength = Math.ceil(count / 10);

    for(let i = 1; i <= itemLength; i++) {
        const $li = document.createElement('li');
        $li.className = 'page-item';
        const $a = document.createElement('a');
        $a.className = 'page-link';
        $a.href = '#';

        if (i === 1) {
            $a.className += ' active';
        }

        $a.innerText = i;
        $a.addEventListener('click', (event) => {
            this.page = i;
            event.preventDefault();

        });

        $li.appendChild($a);

        $parentPaginate.appendChild($li);
        
        
        // debugger;
    }
}                                          