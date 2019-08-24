# HydrApp

![cover](https://kasiaizak.github.io/hydrapp/assets/cover.png)

## Opis aplikacji

HydrApp to aplikacja PWA do zliczania wypitych dziennie szklanek wody. Strona do przechowywania danych wykorzystuje localStorage - [widok on-line](https://kasiaizak.github.io/hydrapp/).

## Wykorzystane technologie

HTML5, CSS3 (w tym flexbox) z użyciem preprocesora SASS oraz JavaScript.

## Uruchomienie strony lokalnie z podglądem zmian na żywo (dla developerów korzystających z Node.js)

Jeśli nie masz jeszcze zainstalowanego Node.js to nic straconego... :) Tu znajduje się instalka i można szybko to nadrobić: [oficjalna strona Node.js](https://nodejs.org/en/).

W konsoli (terminalu) uruchomionej z uprawnieniami administratora (Windows) lub z dodanym `sudo` przed komendą (Mac) wpisujemy poniższe polecenie w celu instalacji tzw. *task runnera* GULP. Polecenie wykonujemy raz na danej maszynie, czyli jeśli robiłeś/aś to już wcześniej to pomiń ten krok i poniższą komendę.

`npm install -g gulp-cli`

### Inicjowanie projektu

Po sklonowaniu repozytorium na swój komputer wchodzimy do głównego katalogu projektu i wykonujemy poniższe polecenia:

`npm install` - polecenie uruchamiane raz na dany projekt

### Podgląd na żywo ze śledzeniem zmian

`gulp` - start *task runnera*

#### Kończenie pracy

Aby przerwać pracę *gulp* wciskamy kombinację klawiszy **CTRL** + **C**.
