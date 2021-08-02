const nama = document.getElementById('name');
const showList = document.querySelector('.show-list');
const me = [
    'ikrom',
    '17 juli',
    'programming',
];


$('#name').keyup(function (){
    nama.classList.add('show-list')
})

me.forEach(element => {
    showList.innerHTML = `$(element)`
});
