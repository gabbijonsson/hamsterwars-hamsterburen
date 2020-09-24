# PROJEKT WEBBUTVECKLING
## Team: Hamsterburen
---

## Generellt

### Teknik
+ Backend: Node.js, Express och MongoDB.
+ Frontend: React

---

### Assets
+ Bilder i /assets/
+ Rådata i data.json
+ Server-relaterade filer i /server/
+ Globala styles i App.css

---

### Routes
|Route | Vad ska visas|
|:------------------|----------------------------|
|/                  |Startsida                   |
|/battle            |Rösta på slumpade hamstrar  |
|/battle/:id1/:id2  |En specifik matchup         |
|/result/:id        |Resultatet av en match      |
|/stats             |Statistik                   |
|/upload            |Lägga till en ny tävlande   |

---

### Level ups
+ ###### Wowfaktor
Använd CSS-animeringar eller ljudeffekter för att förhöja användarupplevelsen!
+ ###### Mer statistik
Visa mer information på statistik-sidan. Till exempel vilka hamstrar som deltagit i minst antal strider och de senaste striderna.
+ ###### Rättvisare slumpning
Välj bland de hamstrar som haft minst antal matcher, när appen ska slumpa fram hamstrar.
+ ###### Ladda upp bildfil
Formuläret för att lägga till ny hamster ska kunna ladda upp riktiga bilder.

---

## Server

### Datamodell - Hamster

En hamster har följande egenskaper:
+ ObjectID - Skapas av MongoDB
+ id - Skapas av webservern
+ name - Sträng med upp till 15 tecken (inte begränsad just nu)
+ age - Heltal
+ favFood - Sträng med upp till 15 tecken (inte begränsad just nu)
+ loves - Sträng med upp till 40 tecken (inte begränsad just nu)
+ imgName - Sträng med upp till 20 tecken (inte begränsad just nu)
+ wins - Anges ej, startar på 0
+ defeats - Anges ej, startar på 0
+ games - Anges ej, startar på 0

---

### Endpoints

|Resurs    |Metod   |Förväntat svar|
|----------|--------|---|
|/api/gethamsters/random | GET | Returnerar slumpmässig/a hamster/hamstrar |

Använd count för att efterfråga önskat antal hamstrar.
```
/api/gethamsters/random?count=1 Returnerar 1 slumpmässigt utvald hamster
/api/gethamsters/random?count=2 Returnerar 2 slumpmässigt utvalda hamstrar
```

|Resurs    |Metod   |Förväntat svar|
|----------|--------|---|
|/api/gethamster | GET | Returnerar vald hamster baserad på angivet ID |

Använd id för att specificera hamster.
```
/api/gethamster?id=:id Returnerar hamster med valt ID.
```

|Resurs    |Metod   |Förväntat svar|
|----------|--------|---|
|/api/addhamster | POST | Lägger till ny hamster |

Skicka obligatorisk information i request body (name, age, favFood, loves, imgName).
Se [Datamodell - Hamster](#-datamodell---hamster) för mer info.
```
/api/gethamster?id=:id Returnerar hamster med valt ID.
```