let shopingCart = [];

function checkForm (e) { // Устанавливаем событие отправки для формы с id=form
    var form_data = $(this).serialize(); // Собираем все данные из формы
    var name = document.querySelector('#nameCustomer');
    const CorrectModal = new bootstrap.Modal(document.getElementById('massage'), )

    if(/^[а-яё]*$/i.test(name.value)){
        CorrectModal.show();
        console.log(1);
    }else{
        console.log(0);
    }
    console.log(form_data);
    e.preventDefault();
     $.ajax({
         type: "POST", // Метод отправки
         url: "", // Путь до php файла отправителя
         data: form_data,
         success: function () {
             // Код в этом блоке выполняется при успешной отправке сообщения
             alert("Ваше сообщение отправлено!");
         }
     })
    
};

$(function () {
    $("li a").click(function () {
        let elementClick = $(this).attr("href")
        let destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 600);
        return false;
    });
});

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

var chooseModal = document.querySelectorAll('.coffee-btn');

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
        var coffeeImg = settingsModal.querySelector('img');
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
        coffeeImg.src = 'assets/images/' + coffeName + '.jpeg'
    });
});

var myModalEl = (document.getElementById('shopingCartModal'));


document.getElementById("btnAdd").addEventListener('click', function (event) { console.log(this.parentElement.parentElement);
    let modalNode = this.parentElement.parentElement;
    shopingCart.push({ id: shopingCart.length, title: modalNode.querySelector('h4').textContent, coffee: modalNode.querySelector('#coffeeInputType').value, ml: modalNode.querySelector('input[name="options-ml"]:checked').value, quantity: 1 });
});
var btnPlusList = document.querySelectorAll('.btn-plus');
function renderShopCart() {
    document.querySelector('#coffeeList').innerHTML = " ";
    shopingCart.forEach(function (coffee) {
        document.getElementById('coffeeList').insertAdjacentHTML('afterbegin', `
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="assets/images/${coffee.coffee}.jpeg" class="img-fluid rounded-start"
                                alt="Card title">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body d-flex align-items-start">
                                <input name="id" value=${coffee.id} type="hidden">
                                <h4 class="card-title  col-7">${coffee.title}</h4>
                                <p class="card-text  col-4">${coffee.ml} мл</p>
                                <div onclick="deleteElement(${coffee.id})" id="id-${coffee.coffee}" class="d-flex flex-fill justify-content-end align-items-center col-1 deleteBtn">
                                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-x-circle text-danger" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`)
    });
}

function deleteElement(index) {
    shopingCart.splice(index, 1);
    var i = 0;
    shopingCart.forEach((card) => {
        card.id = i;
        i += 1;
    });
    renderShopCart();
}

myModalEl.addEventListener('show.bs.modal',
    function (event) {
        renderShopCart();
    }, true);

