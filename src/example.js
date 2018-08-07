    (function () {
        let barage = new Barrage('content');
        function appendList(text) {
            let p = document.createElement('p');
            p.innerText = text;
            document.querySelector('#content-text').appendChild(p);
        }
        document.querySelector('#send').onclick = () => {
            let text = document.querySelector('#text').value;
            barage.shoot(text);
            appendList(text);
        };
        const textList = ['弹幕', '666', '233333333', 'javascript', 'html', 'css', '前端框架', 'Vue', 'React', 'Angular',
            '测试弹幕效果'
        ];
        textList.forEach((s) => {
            barage.shoot(s);
            appendList(s);
        })
    })()
