let $ = (value) => document.querySelector(value);
let $$ = (value) => document.querySelectorAll(value);

let lorem__ipsum__paragraph = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."

let select__model = $('.selected-model');
let create__lorem = $('.create-lorem');
let copy__text = $('.copy-text');

create__lorem.addEventListener('click', () => {
    let textarea = $('.textarea-lorem');
    textarea.value = ""
    let select__model = $('.selected-model').value;
    let lorem__ipsum__count = $('.input-number').value;
    if(isNaN(lorem__ipsum__count) || lorem__ipsum__count == "" || lorem__ipsum__count == 0 ||  lorem__ipsum__count < 0){ 
        alert("لطفا یک عدد صحیح وارد کنید");
    }else if(select__model == "paragraph"){
        let lorem__ipsum__paragraph__array = [];
        for(let i = 0; i < lorem__ipsum__count; i++){
            lorem__ipsum__paragraph__array.push(lorem__ipsum__paragraph);
        }
        let lorem__ipsum__paragraph__string = lorem__ipsum__paragraph__array.join(' ');
        textarea.value = lorem__ipsum__paragraph__string;
    }else if(select__model == "sentence"){
        let lorem__ipsum__to__sentence__array = lorem__ipsum__paragraph.split(".");
        let lorem__ipsum__sentence__array = [];
        for(let i = 0; i < lorem__ipsum__count; i++){
            lorem__ipsum__sentence__array.push(lorem__ipsum__to__sentence__array[i]);
        }
        let lorem__ipsum__sentence__string = lorem__ipsum__sentence__array.join(' ');
        textarea.value = lorem__ipsum__sentence__string;
    }else if(select__model == "word"){
        let lorem__ipsum__to__word__array = lorem__ipsum__paragraph.split(" ");
        let lorem__ipsum__word__array = [];
        for(let i = 0; i < lorem__ipsum__count; i++){
            lorem__ipsum__word__array.push(lorem__ipsum__to__word__array[i]);
        }
        let lorem__ipsum__word__string = lorem__ipsum__word__array.join(' ');
        textarea.value = lorem__ipsum__word__string;
    }
});

copy__text.addEventListener("click" , () => {
    let textarea = $('.textarea-lorem');
    navigator.clipboard.writeText(textarea.value)
})