# GIFSearch
Фронтенд, предоставляющий возможность поиска гифок через графический интерфейс. Работа основана на взаимодействии с API giphy (https://developers.giphy.com/).

Изначально система находится в следующем состоянии:
![image](https://user-images.githubusercontent.com/80625335/162450386-3b972d0c-40da-43ea-a0e9-2205831a1aba.png)


Кнопка "GIF" в кружке снизу - поле ввода. Если навести на него, оно раскроется и даст возможность напечатать текст:
![image](https://user-images.githubusercontent.com/80625335/162450778-a5bce2ab-f1c4-42a9-99e4-5bd4c580ac69.png)


После ввода, пользователь должен нажать кнопку "GIF" - тогда произойдёт обработка команды-гиф, если она имеется в запросе. Кнопка анимирована, при нажатии расширяется:
![image](https://user-images.githubusercontent.com/80625335/162451140-7f660852-8d93-4049-b98e-d13d9f87dfe5.png)


Текст запроса, не содержащий команды /gif не имеет никаких эффектов. Если же пользователь ввёл команду (команда считается введённой, если в начале строки есть следующая подстрока "/gif "), текст красится и становится наклонным, предупреждая пользователя о переходе в режим поиска гифок:
![image](https://user-images.githubusercontent.com/80625335/162451829-12d8b900-9053-4d44-b14d-f826bb3b72d0.png)


После нажатия кнопки "GIF", в случае наличия в запросе команды, появится поле выбора среди всех найденных гифок (гифки имеют размер для предпросмотра). По нему можно перемещаться ползунком:
![image](https://user-images.githubusercontent.com/80625335/162452192-9f5e5524-5249-40c6-9475-e5e08f8f4e88.png)


Пользователь выбирает понравившуюся гифку и нажимает на неё. Это вызывает её отправку:
![image](https://user-images.githubusercontent.com/80625335/162452549-df124d7f-a1a2-46f1-94e2-4ce0a5ded5d2.png)


После отправки можно ввести новый запрос, а можно ещё раз поискать гифку по текущему, сравнивая с уже отправленной:
![image](https://user-images.githubusercontent.com/80625335/162452751-9222a380-6923-4707-ac28-a5b47d3fb504.png)