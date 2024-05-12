Projekt: Menedżer Użytkowników

Celem projektu jest stworzenie aplikacji webowej, która umożliwia zarządzanie listą użytkowników. Aplikacja będzie korzystać z zewnętrznego API do pobierania, tworzenia, aktualizowania i usuwania danych o użytkownikach.

Funkcjonalności:
Lista użytkowników: Użytkownik będzie mógł wyświetlić listę wszystkich zarejestrowanych użytkowników w systemie.

Szczegóły użytkownika: Po kliknięciu na wybranego użytkownika, użytkownik zostanie przekierowany do strony ze szczegółowymi informacjami o tym użytkowniku, takimi jak imię, nazwisko, adres e-mail, numer telefonu, itp.

Dodawanie nowego użytkownika: Aplikacja będzie posiadać formularz umożliwiający dodanie nowego użytkownika do systemu.

Edycja użytkownika: Użytkownik będzie mógł edytować dane istniejącego użytkownika.

Usuwanie użytkownika: Użytkownik będzie mógł usunąć istniejącego użytkownika z systemu.

Nawigacja: Aplikacja będzie posiadać kilka stron, między którymi użytkownik będzie mógł się przemieszczać za pomocą React Router.

Technologie:
React: Aplikacja będzie zbudowana przy użyciu biblioteki React, wykorzystując komponenty funkcyjne. React Router: Do obsługi nawigacji między stronami aplikacji. Fetch API: Do komunikacji z zewnętrznym API i pobierania, tworzenia, aktualizowania oraz usuwania danych o użytkownikach. React Context lub Redux: Do zarządzania stanem aplikacji (np. przechowywania listy użytkowników, wybranego użytkownika, etc.).

Struktura projektu:
Strona główna: Zawiera listę wszystkich użytkowników.
Strona szczegółów użytkownika: Wyświetla szczegółowe informacje o wybranym użytkowniku.
Strona dodawania użytkownika: Zawiera formularz do dodawania nowego użytkownika.
Strona edycji użytkownika: Zawiera formularz do edycji danych istniejącego użytkownika.

Komponenty: UserList: Komponent wyświetlający listę użytkowników. UserDetails: Komponent wyświetlający szczegóły wybranego użytkownika. UserForm: Komponent zawierający formularz do dodawania lub edycji użytkownika. Navigation: Komponent odpowiedzialny za nawigację między stronami.

Przykładowy przebieg:

Użytkownik przegląda listę wszystkich użytkowników na stronie głównej. Użytkownik klika na wybranego użytkownika, co powoduje przekierowanie do strony UserDetails za pomocą React Router. Strona UserDetails pobiera szczegółowe informacje o użytkowniku z API i wyświetla je w odpowiednim komponencie. Użytkownik może przejść do strony AddUser i wypełnić formularz, aby dodać nowego użytkownika do systemu. Aplikacja wysyła żądanie POST do API za pomocą fetch, tworząc nowego użytkownika. Użytkownik może edytować dane istniejącego użytkownika na stronie EditUser. Aplikacja wysyła żądanie PUT do API za pomocą fetch, aktualizując dane użytkownika. Użytkownik może usunąć istniejącego użytkownika z listy, a aplikacja wyśle żądanie DELETE do API. Użytkownik może nawigować między stronami aplikacji za pomocą komponentu Navigation.
