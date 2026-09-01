# 🌙 Night Shift Simulator

Pixelowa gra przeglądarkowa, w której wcielasz się w pracownika nocnej zmiany w małym sklepie 24/7.

Twoim zadaniem jest obsługiwanie klientów, kompletowanie ich zamówień, pilnowanie czasu i unikanie pomyłek.

Każdy kolejny dzień staje się trudniejszy.

---

## 🎮 O grze

W grze pracujesz na nocnej zmianie od godziny 22:00 do 06:00.

Klienci wchodzą do sklepu, podchodzą do kasy i składają zamówienia.

Musisz wybrać dokładnie te produkty, których chce klient, a następnie kliknąć przycisk:

`OBSŁUŻ KLIENTA`

Jeżeli zamówienie jest poprawne, otrzymujesz pieniądze i zwiększasz swoją serię poprawnych zamówień.

Jeżeli się pomylisz lub skończy się czas, otrzymujesz błąd.

Po trzech błędach zmiana kończy się niepowodzeniem.

---
GitHub Pages link do gry: (https://nhypen.github.io/night_shift_simulator/)
---
## ✨ Funkcje

- pixelowa grafika sklepu
- animowani klienci
- klienci wchodzący do sklepu i podchodzący do kasy
- 24 różne produkty
- własne pixel-artowe grafiki produktów
- brak emoji jako grafik produktów
- losowe zamówienia klientów
- system czasu na wykonanie zamówienia
- system pieniędzy
- system serii poprawnych zamówień
- maksymalnie 3 błędy
- coraz trudniejsze kolejne dni
- coraz większe zamówienia
- coraz mniej czasu na obsługę
- coraz więcej klientów
- nocny zegar od 22:00 do 06:00
- 8-bitowa muzyka w tle
- możliwość wyłączenia muzyki
- możliwość wyłączenia efektów dźwiękowych
- dźwięk kliknięcia produktu
- dźwięk usuwania produktu
- dźwięk czyszczenia koszyka
- dzwonek przy wejściu klienta
- dźwięk poprawnego zamówienia
- dźwięk błędnego zamówienia
- dźwięk końca czasu
- dźwięk zakończenia zmiany
- responsywny interfejs

---

## 🛒 Dostępne produkty

W sklepie można znaleźć między innymi:

- wodę
- wodę gazowaną
- colę
- oranżadę
- energetyk
- kawę
- herbatę
- chipsy
- nachosy
- orzeszki
- czekoladę
- gumę
- baton
- kanapkę
- hot-doga
- donut
- muffin
- mleko
- sok
- jogurt
- ramen
- zupkę
- ciastka
- płatki

---

## 🎧 Muzyka i dźwięki

Gra posiada własną muzykę oraz efekty dźwiękowe.

Audio jest generowane bezpośrednio w JavaScript przy pomocy Web Audio API.

Dzięki temu projekt nie wymaga dodatkowych plików `.mp3` ani `.wav`.

Muzyka rozpoczyna się po kliknięciu przycisku rozpoczęcia gry.

W interfejsie dostępne są również przyciski:

`MUZYKA: ON / OFF`

oraz

`SFX: ON / OFF`

---

## 📈 Poziom trudności

Każdy kolejny dzień zwiększa poziom trudności.

Z czasem:

- pojawia się więcej klientów
- klienci zamawiają więcej produktów
- masz mniej czasu na wykonanie zamówienia
- utrzymanie długiej serii staje się trudniejsze

---

## 💰 Punktacja

Za poprawne zamówienie otrzymujesz pieniądze.

Wysokość nagrody zależy między innymi od:

- liczby produktów w zamówieniu
- pozostałego czasu
- aktualnej serii poprawnych zamówień

Im szybciej i dokładniej obsługujesz klientów, tym więcej możesz zarobić.

---

## ❌ Błędy

Błąd otrzymujesz gdy:

- wybierzesz zły produkt
- zabraknie produktu w zamówieniu
- dodasz dodatkowy produkt
- skończy się czas

Po osiągnięciu 3 błędów gra się kończy.

---

## 🛠️ Technologie

Projekt został wykonany przy użyciu:

- HTML5
- CSS3
- JavaScript
- Canvas API
- Web Audio API

Projekt nie korzysta z żadnego frameworka.

---

## 📁 Struktura projektu

```text
night-shift-simulator/
│
├── index.html
├── style.css
├── script.js
```
---
## Autor 
nhypen
