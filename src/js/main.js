"user strict";

const haushaltsbuch = {
    gesamtbilanz: {
        einnahmen: 0,
        ausgaben: 0,
        bilanz: 0
    },
    // neuer_eintrag: {
    //     titel: null,
    //     typ: null,
    //     betrag: null,
    //     datum: null
    // },
    eintraege:[

    ],

    // Eigenschaft neuer_eintrag weg    Eigenschaft Einträge die ein Array enhält und  
    // eintrag_erfassen ein objekt mit den Eigenschaften titel, typ, betrag und datum 
    //dieses objekt in einträge array reinpackt
    eintrag_erfassen() {
            this.titel = prompt("Titel: "),
            this.typ = prompt("Typ (Einnhame oder Ausgabe: "),
            this.betrag = parseInt(prompt("Betrag (in Cent): ")),
            this.datum = prompt("Datum (jjjj-mm-tt")
        return {
            titel: this.titel,
            typ: this.typ,
            betrag: this.betrag,
            datum: this.datum

        };
        
     
        // this.neuer_eintrag.titel = prompt("Titel: ");
        // this.neuer_eintrag.typ = prompt("Typ (Einnhame oder Ausgabe: ");
        // this.neuer_eintrag.betrag = parseInt(prompt("Betrag (in Cent): "));
        // this.neuer_eintrag.datum = prompt("Datum (jjjj-mm-tt");
    },


   



    // eintrag_ausgeben() {
    //     console.log(`Titel: ${this.neuer_eintrag.titel}
    // Typ: ${this.neuer_eintrag.typ}
    // Betrag: ${this.neuer_eintrag.betrag} ct
    // Datum: ${this.neuer_eintrag.datum}`
    //     );
    // },
    // eintrag_mit_gesamtbilanz_verrechnen() {

    //     switch (this.neuer_eintrag.typ) {
    //         case "Einnahme":
    //             this.gesamtbilanz.einnahmen += this.neuer_eintrag.betrag;
    //             this.gesamtbilanz.bilanz += this.neuer_eintrag.betrag;
    //             break;
    //         case "Ausgabe":
    //             this.gesamtbilanz.ausgaben += this.neuer_eintrag.betrag;
    //             this.gesamtbilanz.bilanz -= this.neuer_eintrag.betrag;
    //             break;
    //         default:
    //             console.log(`Der Typ "${this.neuer_eintrag.typ}" ist nicht bekannt!`);

    //     }     
    // },
    // gesamtbilanz_ausgeben() {
    //     console.log(`Einnahmen ${this.gesamtbilanz.einnahmen} ct
    // Ausgaben ${this.gesamtbilanz.ausgaben} ct
    // Bilanz: ${this.gesamtbilanz.bilanz} ct
    // Die Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}`
    //     );
    // },
    
    eintrag_hinzufuegen() {
        this.eintraege.push(this.eintrag_erfassen());
        
        // this.eintrag_ausgeben();
        // this.eintrag_mit_gesamtbilanz_verrechnen();
        // this.gesamtbilanz_ausgeben();

    }

};

haushaltsbuch.eintrag_hinzufuegen();
//console.log(haushaltsbuch.eintrag_erfassen());
haushaltsbuch.eintrag_hinzufuegen();
haushaltsbuch.eintrag_hinzufuegen();
console.log(haushaltsbuch.eintraege);




//Gesamtbilanz Anlegen
// let einnahmen = 0,
//     ausgaben = 0,
//     bilanz = 0,
//     titel,
//     typ,
//     betrag,
//     datum;

// const eintrag_erfassen = function () {
//     titel = prompt("Titel: ");
//     typ = prompt("Typ (Einnhame oder Ausgabe: ");
//     betrag = parseInt(prompt("Betrag (in Cent): "));
//     datum = prompt("Datum (jjjj-mm-tt");
// };

// const eintrag_ausgeben = function (titel, typ, betrag, datum) {
//     console.log(`Titel: ${titel}
// Typ: ${typ}
// Betrag: ${betrag} ct
// Datum: ${datum}`
//     );
// };

// Gesamtbilanz verrechnen   typ  und betrag

// const eintrag_mit_gesamtbilanz_verrechnen = function (typ, betrag) {
//     if (typ === "Einnahme") {
//         einnahmen = einnahmen + betrag;
//         bilanz = bilanz + betrag;

//     } else if (typ === "Ausgabe") {
//         ausgaben = ausgaben + betrag;
//         bilanz = bilanz - betrag;
//     } else {
//         console.log(`Der Typ "${typ}" ist nicht bekannt!`);
//     }
// };

//gesamtbilanz_ausgeben   einahmen ausgeben bilanz

// const gesamtbilanz_ausgeben = function (einnahmen, ausgaben, bilanz) {

//     console.log(`Einnahmen ${einnahmen} ct
// Ausgaben ${ausgaben} ct
// Bilanz: ${bilanz} ct
// Die Bilanz ist positiv: ${bilanz >= 0}`
//     );
// };

// const eintrag_hinzufuegen = function () {
//     //eintrag_erfassen();
//     //eintrag_ausgeben(titel, typ, betrag, datum);
//     eintrag_mit_gesamtbilanz_verrechnen(typ, betrag);
//     gesamtbilanz_ausgeben(einnahmen, ausgaben, bilanz);
// };

// eintrag_hinzufuegen();
// eintrag_hinzufuegen();
// eintrag_hinzufuegen();