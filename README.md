# Oxido AI Project

Projekt umożliwia generowanie i wyświetlanie artykułów w formacie HTML, wykorzystując OpenAI API do przetwarzania treści tekstowej. Po przetworzeniu tekstu, artykuł jest dostępny w aplikacji webowej, a generowane obrazy mogą być wstawiane w odpowiednich miejscach w treści.

## Wymagania

Aby uruchomić projekt, musisz mieć zainstalowane:

- Node.js (w wersji 16 lub wyższej)
- npm (Node Package Manager)

## Instalacja

### 1. Klonowanie repozytorium

Pierwszym krokiem jest sklonowanie repozytorium na swoje lokalne urządzenie:


git clone https://github.com/MateuszWiktorowicz/oxido.git

### 2. Instalacja Zależności
cd oxido
npm install

### 3. Konfiguracja pliku .env
OPENAI_API_KEY=twój-klucz-api

### 4. Wygenerowanie artykułu 
Skrypt generowania artykułu można uruchomić za pomocą npm start lub node script.mjs
Artykuł zostanie zapisany w folderze public pod nazwą artykul.html

### 5. Podgląd artykułu
Aby zobaczyć podgląd artykułu, należy uruchomić serwer za pomocą komendy: node server.mjs oraz przejść pod adres: http://localhost:3000/
