function* generator() {
    yield {name:'ДМБ', genre:'Комедия', price:200};
    yield {name:'Знакомство вслепую', genre:'Мелодрама', price:200};
    yield {name:'Последний бойскаут', genre:'Боевик', price:200};
    yield {name:'Мимино', genre:'Комедия', price:200};
    yield {name:'Кин-Дза-Дза', genre:'Фантастическая комедия', price:200};
    yield {name:'Звёздные войны', genre:'Фантастика', price:300};
    yield {name:'Агентство НЛС', genre:'Сериал', price:400};
    yield {name:'Голый остров', genre:'Драма', price:100};
    yield {name:'Последний богатырь', genre:'Фантастическая комедия', price:500};
    yield {name:'Харлей Дэвидсон и Ковбой Мальборо', genre:'Боевик', price:200};
}

let min_price = Number.MAX_SAFE_INTEGER;
let film_min_price = null;
let max_price = 0;
let film_max_price = null;
let sum_price = 0;
let counter = 0;

let films = generator();
for (let film of films) {
    if (film.price < min_price) {
        min_price = film.price;
        film_min_price = film;
    };
    
    if (film.price > max_price) {
        max_price = film.price;
        film_max_price = film;
    };

    sum_price += film.price;
    counter++;
}
console.log(min_price);
console.log(max_price);
console.log(sum_price/counter);