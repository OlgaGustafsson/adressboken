# Adressboken (skolprojekt)

Adressboken byggdes med hjälp av React och JSON-server. 

I adressboken kan man lägga in olika typer av kontaktuppgifter (namn, emailadress, postadress, telefonnummer) till olika personer, och datan sparas i en JSON-fil. 

Det finns olika inputfält för uppgifterna, man kan se en lista på alla kontakter (och deras uppgifter) och det går att lägga till och redigera kontakter. 


## För att starta projektet

1. Klona repo

```

git clone https://github.com/OlgaGustafsson/adressboken.git

```

2. Gå in i repokatalogen

```

cd adressboken

```

3. Installera dev dependencies

```

npm install

```

4. Starta dev servern

```

npm run dev

```

5. Starta json-server

```

json-server --watch db.json

```

6. Öppna http://localhost:5173/ i din webbläsare.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
