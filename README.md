![cover](https://raw.githubusercontent.com/kasiaizak/hydrapp/master/src/assets/cover.jpg)

# HydrApp

HydrApp to aplikacja PWA do zliczania wypitych dziennie szklanek wody. Strona do przechowywania danych wykorzystuje localStorage - [widok on-line](https://hydrapp.kasiaizak.pl/).

## Użyte technologie

HTML5, CSS3 (w tym Flexbox) z użyciem preprocesora Sass oraz JavaScript ES6.

## Uruchomienie strony lokalnie z podglądem zmian na żywo (dla developerów korzystających z Node.js)

Jeśli nie masz jeszcze zainstalowanego Node.js to nic straconego... :) Tu znajduje się instalka i można szybko to nadrobić: [oficjalna strona Node.js](https://nodejs.org/en/).

W konsoli (terminalu) wpisujemy poniższe polecenie w celu instalacji tzw. *task runnera* GULP. Polecenie wykonujemy raz na danej maszynie, czyli jeśli robiłeś/aś to już wcześniej to pomiń ten krok i poniższą komendę. Ważne: na Windowsie terminal uruchamiamy z uprawnieniami administratora.

`npm install -g gulp-cli`

### Inicjowanie projektu

Po sklonowaniu repozytorium na swój komputer wchodzimy do głównego katalogu projektu i wykonujemy poniższe polecenia:

`npm install` - polecenie uruchamiane raz na dany projekt

### Podgląd na żywo ze śledzeniem zmian

`gulp` - start *task runnera*

#### Kończenie pracy

Aby przerwać pracę *gulp* wciskamy kombinację klawiszy **CTRL** + **C**.
