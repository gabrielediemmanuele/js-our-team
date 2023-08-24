# Our Team

## Traccia

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

## Linee Guida

- MILESTONE 0:
  Creare l’array di oggetti con le informazioni fornite.

- MILESTONE 1:
  Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

- MILESTONE 2:
  Stampare le stesse informazioni su DOM sottoforma di stringhe

## Bonus

- BONUS 1:
  Trasformare la stringa foto in una immagine effettiva

- BONUS 2:
  Organizzare i singoli membri in card/schede

## Consigli del giorno:

Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!

## STEPS

1. Creo un array che contiene i membri del team.
   - ogni membro del team sarà caratterizzato da
     keys e valori: nome, ruolo e stringa della foto.
2. Stampo su console con console.log() le info di ogni membro del team.

3. Stampo anche sul DOM.
   1. Creo una costante per agganciarmi al DOM,
      tramite id.
   2. Creo un ciclo for "of" dato che si parla di un Array di oggetti per recuperare i dati del team.

## BONUS 1 & 2

- Per le immagini, ricavo la stringa dal file html e la copio nel valore dell'oggetto per ogni membro del team.

- Sempre dentro il ciclo for, creo un innerHTML con il literal Template, per creare, per ogni membro del team una card (con Bootstrap).
