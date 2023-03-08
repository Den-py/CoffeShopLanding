$(function () {
    $("li a").click(function () {
        let elementClick = $(this).attr("href")
        let destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 600);
        return false;
    });
});
// document.querySelectorAll("ui li")
window.addEventListener('scroll', event => {
    let navigationLinks = document.querySelectorAll('ul li a');
    let fromTop = window.scrollY;

    navigationLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.parentElement.classList.add("border-bottom");

        } else if
            (fromTop == 0) {
            console.log(document.querySelector('ul li').classList.add('border-bottom'));
        }
        else {
            link.parentElement.classList.remove('border-bottom');

        }
    });
});
function toCoffeSettings() {
    var button = this.relatedTarget
    // Извлечь информацию из атрибутов data-bs- *
    var recipient = button.getAttribute('data-bs-type')
    // При необходимости вы можете инициировать запрос AJAX здесь
    // а затем выполните обновление в обратном вызове.
    //
    // Обновите содержимое модального окна.
    var settingsModal = document.querySelector('#coffeSettings');
    var coffeName = settingsModal.querySelector('.card-title')
    var coffeeInput = settingsModal.querySelector('input#coffeeInputType');
    var title;
    console.log(coffeName);
    switch (coffeName) {
        case 'espresso':
            title = 'Эспрессо';
            break;
        case 'cappuccino':
            title = 'Капучино';
            break;
        case 'americano':
            title = 'Американо';
            break;
        case 'mocha':
            title = 'Мокко';
            break;
        case 'romano':
            title = 'Романо';
            break;
        case 'irish':
            title = 'Айриш';
            break;
        case 'frappe':
            title = 'Фраппе';
            break;

    }
    coffeName.textContent = title;
    coffeeInput.value = coffeName
}
document.querySelectorAll('coffee').forEach(drink => {
    drink.click(toCoffeSettings())
})

var chooseModal = document.querySelectorAll('#coffeChooseListModal .card-btn')

chooseModal.forEach(card => {
    card.addEventListener('click', function (event) {
        // Кнопка, запускающая модальное окно
        var button = this.relatedTarget;
        console.log(this);
        // Извлечь информацию из атрибутов data-bs- *
        var coffeName = this.getAttribute('data-bs-type');
        // При необходимости вы можете инициировать запрос AJAX здесь
        // а затем выполните обновление в обратном вызове.
        //
        // Обновите содержимое модального окна.
        var settingsModal = document.querySelector('#coffeSettings');
        var coffeInputName = settingsModal.querySelector('.card-title');
        var coffeeInput = settingsModal.querySelector('input#coffeeInputType');
        var title;
        console.log(coffeName);
        switch (coffeName) {
            case 'espresso':
                title = 'Эспрессо';
                break;
            case 'cappuccino':
                title = 'Капучино';
                break;
            case 'americano':
                title = 'Американо';
                break;
            case 'mocha':
                title = 'Мокко';
                break;
            case 'romano':
                title = 'Романо';
                break;
            case 'irish':
                title = 'Айриш';
                break;
            case 'frappe':
                title = 'Фраппе';
                break;
        }
        coffeInputName.textContent = title;
        coffeeInput.value = coffeName
    });
});
// Ошибка, хотя работает...
chooseModal.addEventListener('click', function (event) {
    // Кнопка, запускающая модальное окно
    var button = event.relatedTarget
    // Извлечь информацию из атрибутов data-bs- *
    var recipient = button.getAttribute('data-bs-type')
    // При необходимости вы можете инициировать запрос AJAX здесь
    // а затем выполните обновление в обратном вызове.
    //
    // Обновите содержимое модального окна.
    var settingsModal = document.querySelector('#coffeSettings');
    var coffeName = settingsModal.querySelector('.card-title')
    var coffeeInput = settingsModal.querySelector('input#coffeeInputType');
    var title;
    console.log(coffeName);
    switch (coffeName) {
        case 'espresso':
            title = 'Эспрессо';
            break;
        case 'cappuccino':
            title = 'Капучино';
            break;
        case 'americano':
            title = 'Американо';
            break;
        case 'mocha':
            title = 'Мокко';
            break;
        case 'romano':
            title = 'Романо';
            break;
        case 'irish':
            title = 'Айриш';
            break;
        case 'frappe':
            title = 'Фраппе';
            break;

    }
    coffeName.textContent = title;
    coffeeInput.value = coffeName
});
let shopingCart = [];
document.getElementById("btnAdd").addEventListener('click', function (event) {
    console.log(this.parentElement.parentElement);
    let modalNode = this.parentElement.parentElement;
    shopingCart.push({ title: modalNode.querySelector('h4').textContent, coffee: modalNode.querySelector('#coffeeInputType').value, ml: modalNode.querySelector('input[name="options-ml"]:checked').value, quantity: 1 });
    console.log(shopingCart);
});
var myModalEl = document.getElementById('shopingCartModal');
myModalEl.addEventListener('show.bs.modal', function (event) {
    // document.getElementById('coffeeLists').innerHTML = '';
    shopingCart.forEach(function (coffee) {
        console.log(coffee);

        document.getElementById('coffeeList').insertAdjacentHTML
            ('afterbegin', `
                <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="/assets/images/espresso.jpeg" class="img-fluid rounded-start"
                        alt="Card title">
                </div>
                <div class="col-md-8">
                    <div class="card-body d-flex align-items-start">
                        <h5 class="card-title mx-4">${coffee.title}</h5>
                        <p class="card-text mx-4">${coffee.ml} мл</p>
                        <div id="id-${coffee.coffee}" class="d-flex flex-fill justify-content-end align-items-center">
                            <button type="button" class="btn-circle ratio ratio-1x1"><svg
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    class="bi bi-plus-circle" viewBox="0 0 16 16">
                                    <path
                                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg></button>
                            <h4 class="mx-3">${coffee.quantity}</h4>
                            <button class="btn-circle ratio ratio-1x1"><svg
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    class="bi bi-plus-circle" viewBox="0 0 16 16">
                                    <path
                                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
    })

});


