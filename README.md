# Moja Baza Filmów

Prosta, statyczna strona internetowa do przeglądania osobistej kolekcji filmów. Strona jest w 100% statyczna i hostowana na GitHub Pages.

## Jak dodać nowy film?

Aby dodać nowy film do swojej biblioteki, postępuj zgodnie z poniższą instrukcją:

1.  **Otwórz plik `movies.json`** w tym repozytorium.
2.  **Dodaj nowy obiekt JSON** do tablicy. Upewnij się, że zachowujesz poprawną składnię JSON. Każdy film musi mieć następującą strukturę:
    ```json
    {
      "tytuł": "Tytuł Twojego Filmu",
      "rok": 2023,
      "gatunek": "Gatunek Filmu",
      "ocena": 8,
      "plakat_url": "https://link.do/plakatu.jpg"
    }
    ```
3.  **Zapisz zmiany** w pliku `movies.json`.
4.  **Wyślij zmiany (push) do repozytorium GitHub.** Strona automatycznie się zaktualizuje z nowymi danymi.
