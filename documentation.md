1. npx create-reacp app (ime aplikacije)
2. brisemo fajlove koji nam nece trebati
3. instaliranje tailwind css
4. otvaramo i uredujemo App.js fajl
5. u terminalu instaliramo npm i react-icons
6. u src folderu kreiramo components folder
7. unutar components foldera kreiramo Todo.jsx komponentu
8. otvaramo i uredujemo Todo.jsx komponentu



Firebase setup: 25:00 video
1. otvaramo https://firebase.google.com/
2. kliknemo go to console u desnom cosku
3. kad se otvori stranica https://console.firebase.google.com/?pli=1 kliknemo add project
4. unesemo naziv naseg projekta
5. kad unesemo ime projekta kliknemo continue dugme
6. iskljucimo google analizu 
7. kliknemo create project dugme
8. kad se instaliramo projekt kliknemo continue dugme
9. kad se otvori stranica https://console.firebase.google.com/project/react-todo-firebase-2022/overview kliknemo (</>) dugme
10. kad se otvori register app, unesemo naziv nase web aplikacije
11. kad unesemo ime aplikacije kliknemo register app dugme
12. u terminalu instaliramo firebase paket npm i firebase
13. u src folderu kreiramo firebase.js fajl
14. otvaramo i uredujemo firebase.js fajl
15. nakon toga kliknemo dugme continue to console
16. kliknemo build dugme sa lijeve stranice
17. build -> cloud firestore
18. kad se otvori cloud firestore kliknemo dugme create database
19. mozemo odabrati start in production mode ili start in test mode
20. kad odaberemo jednu od dvije opcije kliknemo next dugme
21. odaberemo cloud firestore lokaciju (europa)
22. kad odaberemo lokaciju kliknemo enable dugme
23. kad se zavrsi setup, kliknemo go to docs dugme
24. kliknemo build opciju
25. sa lijeve stranice kliknemo cloud firestore dugme
26. cloud firestore -> get started
27. kopiramo import { getFirestore } from "firebase/firestore"; u firebase.js fajl
28. dodajemo export const db = getFirestore(app); na dno firebase.js fajla
29. u konzoli za projekat kliknemo start a collection dugme
30. dodamo collection id (todos) i kliknemo next
31. kliknemo auto-id 
32. u field unesemo text, type string, value learn react
33. dodamo jos jedno polje
34. u field unesemo completed, type boolean, value false
35. kad popunimo polja kliknemo dugme save
36. kliknemo dugme add a document
37. document id -> auto id
38. field text, type string, value grind leedcode
39. kliknemo (+) dugme
40. field completed, type boolean, value false
41. kad dodamo polja kliknemo save dugme
42. otvaramo i uredujemo App.js fajl
43. otvaramo i uredujemo Todo.jsx komponentu




Github pages
1. dodajemo homepage u package.json fajlu
    "https://kimamovic21.github.io/(ime projekta)"
2. u terminal kucamo npm i gh-pages --save-dev
3. u package.json fajlu dodajemo predeploy i deploy
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
4. u terminal kucamo npm run deploy



