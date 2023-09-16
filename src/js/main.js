"user strict";

const haushaltsbuch = {
    gesamtbilanz: new Map(),
    eintraege: [],

    eintrag_erfassen() {
        let neuer_eintrag = new Map();
        neuer_eintrag.set("titel", prompt("Titel: ")),
        neuer_eintrag.set("typ", prompt("Typ (Einnahme oder Ausgabe): ")),
        neuer_eintrag.set("betrag", parseInt(prompt("Betrag (in Cent): "))),
        neuer_eintrag.set("datum", new Date(prompt("Datum (jjjj-mm-tt")+ " 00:00:00")),
        neuer_eintrag.set("timestap", Date.now());

        this.eintraege.push(neuer_eintrag);

    },

    eintraege_sortieren() {
        this.eintraege.sort(function (eintrag_a, eintrag_b) {
            if (eintrag_a.get("datum") > eintrag_b.get("datum")) {
                return -1;
            } else if (eintrag_a.get("datum") < eintrag_b.get("datum")) {
                return 1;
            } else {
                return 0;
            }
        })
    },

    eintraege_ausgeben() {
        console.clear();
        this.eintraege.forEach(function(eintrag) {
            console.log(`Titel: ${eintrag.get("titel")}\n`
                + `Typ: ${eintrag.get("typ")}\n`
                + `Betrag: ${eintrag.get("betrag")} ct\n`
                + `Datum: ${eintrag.get("datum").toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                })}\n`
                + `Timestap: ${eintrag.get("timestap")}`
            );
        });
    },

    gesamtbilanz_erstellen() {

        let neue_gesamtbilanz = new Map();
        neue_gesamtbilanz.set("einnahme", 0);
        neue_gesamtbilanz.set("ausgabe", 0);
        neue_gesamtbilanz.set("bilanz", 0);

        this.eintraege.forEach(function (eintrag) {
            switch (eintrag.get("typ")) {
                case "Einnahme":
                    neue_gesamtbilanz.set("einnahme", neue_gesamtbilanz.get("einnahme") + eintrag.get("betrag"));
                    neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") + eintrag.get("betrag"));                  
                    break;
                case "Ausgabe":
                    neue_gesamtbilanz.set("ausgabe", neue_gesamtbilanz.get("ausgabe") + eintrag.get("betrag"));
                    neue_gesamtbilanz.set("bilanz", neue_gesamtbilanz.get("bilanz") - eintrag.get("betrag"));
                    break;
                default:
                    console.log(`Der Typ "${eintrag.get("typ")}" ist nicht bekannt!`);

            }
        });
        this.gesamtbilanz = neue_gesamtbilanz;
    },
    gesamtbilanz_ausgeben() {
        console.log(`Einnahmen ${this.gesamtbilanz.get("einnahme")} ct\n`
            + `Ausgaben ${this.gesamtbilanz.get("ausgabe")} ct\n`
            + `Bilanz: ${this.gesamtbilanz.get("bilanz")} ct\n`
            + `Die Bilanz ist positiv: ${this.gesamtbilanz.get("bilanz") >= 0}\n`
            
        );
    },

  

    eintraege_hinzufuegen() {
        let weiterer_eintrag = true;

        while (weiterer_eintrag) {
            this.eintrag_erfassen();
            this.eintraege_sortieren();
            this.eintraege_ausgeben();
            this.gesamtbilanz_erstellen();
            this.gesamtbilanz_ausgeben();
            weiterer_eintrag = confirm("Weiteren Eintrag hinzufügen?");
            console.log(" true oder false " + weiterer_eintrag);

        }
    }

};

haushaltsbuch.eintraege_hinzufuegen();

console.log(haushaltsbuch);




