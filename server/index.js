const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json())

server.get('/', (req, res)=>{
    res.send([
        
        {
            id: 1,
            model: 'Модель 1',
            description: "Классическая модель, которую выбрали 200 тысяч покупателей",
            price: 8600,
            image: 'https://m-files.cdnvideo.ru/lpfile/0/d/f/0dffe4dab134d5a1418248252daede74/-/resize/600/f.jpg?51290524'
        },
        {
            id: 2,
            model: 'Модель 2',
            description: "Модель для скалолазов с датчиком высоты и давления",
            price: 8600,
            image: 'https://m-files.cdnvideo.ru/lpfile/7/c/e/7ce6ac77f5249a43c0d83a205c41f916/-/resize/600/f.jpeg?98923317'


        },
        {
            id: 3,
            model: "Модель 3",
            description:'Просто посмотрите на эти пружины. Выглядит надёжно',
            price: 8600,
            image: 'https://m-files.cdnvideo.ru/lpfile/9/7/3/973120a7760821db09f42294943e1988/-/resize/600/f.jpeg?7156420'
        },
        {
            id: 4,
            model:"Модель 4",
            description:"Модель с городским стилем и экстремальной прочностью",
            price: 8600,
            image: 'https://m-files.cdnvideo.ru/lpfile/7/c/c/7cc6f7822775b01b70a169f315e6575e/-/resize/600/f.jpg?32949561'
        },
        {
            id: 5,
            model:"Модель 5",
            description: "Часы для водолазов с датчиком глубины, барометром и фонариком",
            price: 8600,
            image: 'https://m-files.cdnvideo.ru/lpfile/f/b/b/fbba1ed2286a274bffd31ee3b8a192ee/-/resize/600/f.jpeg?65873140'
        },
        {
            id: 6,
            model:"Модель 6",
            description:"Стартовая модель: легкая, прочная не боится воды и грязи",
            price: 8600,
            image: 'https://m-files.cdnvideo.ru/lpfile/8/a/4/8a4e917fd02d5df76fc16876d5ccdaac/-/resize/600/f.jpeg?15096494' 
        }

    ])
})

server.get('/1', (req, res)=>{
    res.send([
        
        {
            id: 1,
            model: 'Модель 1',
            description: "Классическая модель, которую выбрали 200 тысяч покупателей",
            price: 8600,
            image: 'https://m-files.cdnvideo.ru/lpfile/0/d/f/0dffe4dab134d5a1418248252daede74/-/resize/600/f.jpg?51290524'
        }
    ])
});

server.get('/2', (req, res)=>{
    res.send(
        
      
        {
            id: 2,
            model: 'Модель 2',
            description: "Модель для скалолазов с датчиком высоты и давления",
            price: 8600,
            image: 'https://m-files.cdnvideo.ru/lpfile/7/c/e/7ce6ac77f5249a43c0d83a205c41f916/-/resize/600/f.jpeg?98923317'


        }
    )
});

server.get('/3' , (req, res) => {
    res.send(
        {
            id: 3,
            model: "Модель 3",
            description:'Просто посмотрите на эти пружины. Выглядит надёжно',
            price: 8600,
            image: 'https://m-files.cdnvideo.ru/lpfile/9/7/3/973120a7760821db09f42294943e1988/-/resize/600/f.jpeg?7156420'
        } 
    )
});

server.get('/4' , (req, res) => {
    res.send(
        {
            id: 4,
            model:"Модель 4",
            description:"Модель с городским стилем и экстремальной прочностью",
            price: 8600,
            image: 'https://m-files.cdnvideo.ru/lpfile/7/c/c/7cc6f7822775b01b70a169f315e6575e/-/resize/600/f.jpg?32949561'
        }
    )
});

server.get('/5' , (req, res) => {
    res.send(
        {
            id: 5,
            model:"Модель 5",
            description: "Часы для водолазов с датчиком глубины, барометром и фонариком",
            price: 8600,
            image: 'https://m-files.cdnvideo.ru/lpfile/f/b/b/fbba1ed2286a274bffd31ee3b8a192ee/-/resize/600/f.jpeg?65873140'
        }
    )
});

server.get('/6' , (req, res) => {
    res.send(
        {
            id: 6,
            model:"Модель 6",
            description:"Стартовая модель: легкая, прочная не боится воды и грязи",
            price: 8600,
            image: 'https://m-files.cdnvideo.ru/lpfile/8/a/4/8a4e917fd02d5df76fc16876d5ccdaac/-/resize/600/f.jpeg?15096494' 
        }
    )
});











const PORT = 7070;


server.listen(PORT , ()=>{
    console.log("Сервер запущен на порту ${PORT}")
})
