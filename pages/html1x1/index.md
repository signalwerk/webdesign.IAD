---
title: Technologie · HTML, CSS & JavaScript
---
# Technologie · HTML, CSS & JavaScript

::: TOC
**Content**
[[TOC]]
:::
<div class='header'></div>




## Information (Struktur) und Gestaltung getrennt
Eine Website kann in zwei Bereiche unterteilt werden, die sowohl technisch, wie auch konzeptionell zu trennen sind:




::::: grid fullsize

:::: col_6of12
#### Autor erstellt Information (Struktur)
::: code
<pre>
Titel
Der Text besteht aus Inhalt.
</pre>
:::
::::

:::: col_6of12_last
#### Gestalter definiert Formatierung (Aussehen)
::: code
<pre>
Titel = Blau
Text = Bold
</pre>
:::
::::
:::::



<br>
<br>

In der technischen Realisation für Webseiten wird dies in HTML und CSS umgesetzt:



::::: grid fullsize

:::: col_6of12
#### HTML
::: code
```
<h1>Titel</h1>
<p>
  Der Text besteht aus Inhalt.
</p>


```
:::
::::

:::: col_6of12_last
#### CSS
::: code
```
h1 {
  color: #24588d;
}
p {
  font-weight: bold;
}
```
:::
::::
:::::

<br>
<br>


Die fertige Website wird dann aufgrund der beiden Komponenten visuell aufbereitet (Rendering):

<br>
<br>

### Browser
![Rendering](./img/rendering.svg)


<div class='header'></div>



## Grundtechnologie – HTML, CSS und JavaScript

### HTML
HTML steht als Abkürzung für «Hypertext Markup Language» (DE: Hypertext-Auszeichnungssprache). Es handelt sich hierbei um eine Auszeichnungssprache, die in Form von Text die Strukturierung von digitalen Inhalten übernimmt. HTML-Dokumente gelten als Grundlage zum darstellen und beschreiben von modernen Webseiten in einem Browser. In einer HTML-Datei können Inhalte eingeschlossen werden (Text, Links, ...) oder aber logisch mit dem Dokument verknüpft werden (Bilder, CSS, Ton, Video, ...). HTML wurde ursprünglich von Tim Berners-Lee am Cern 1990 erfunden und wird stetig weiter entwickelt. SGML (Standard Generalized Markup Language) gilt als Vorbild und Ursprung für HTML, welches jedoch später stark von dessen Ursprung entfernt wurde. HTML wird heute vom World Wide Web Consortium (W3C) und der Web Hypertext Application Technology Working Group (WHATWG) entwickelt. Die Version 5 des HTML-Standards (HTML5) ist seit 2014 verabschiedet, jedoch werden über weitere in HTML verwendete Standards (z.B. JavaScript) die Möglichkeiten von Websiten stetig erweitert.


### HTML-Dokument
Ein HTML-Dokument besteht aus verschiedenen Tags und aus verschiedenen Teilen. Beispielhaft eine minimale HTML-Datei.



::::: grid fullsize space2

:::: col_4of12
#### HTML-Datei
::: code
```
<!DOCTYPE html>
<html>
<head>
  <title>Testseite</title>
  <link href="styles.css"
        rel="stylesheet">
</head>
<body>
  <h1>Titel</h1>
  <p>Der Text.</p>
</body>
</html>
```
:::
::::

:::: col_8of12_last
#### Beschreibung
::: code
<pre>
DOCTYPE Gibt an, dass es sich um ein HTML 5 Dokument handelt.
HTML    Start-Tag der anzeigt, dass hier das Dokument beginnt.
HEAD    Start-Tag für nicht sichtbare Informationen zur Website.
TITLE   Start- und End-Tag umschliesst den Titel der Seite
LINK    Externe Dateien werden verknüpft. Hier eine CSS-Datei.

HEAD    End-Tag gibt an, dass der nicht sichtbare Kopf-Teil nun endet.
BODY    Start-Tag in dem der sichtbare Inhalt eingebunden ist.
H1      Start- und End-Tag umschliesst den Titel 1. Hierarchie
P       Start- und End-Tag umschliesst den Inhalt eines Paragrafen
BODY    End-Tag der sichtabaren Inhalte
HTML    End-Tag des Dokuments
</pre>
:::
::::
:::::


<div class='header'></div>



### CSS
Cascading Style Sheets (DE: verschachtelte Gestaltungsvorlagen) ist eine Definition (deklarative Sprache), die das bestimmen von Stilvorlagen für HTML-Dateien ermöglicht. Der Namen bezieht sich auf die Eigenschaft, dass sich verschiedene Definitionen gegenseitig überschreiben oder ergänzen können. So können komplexe Formatierungen relativ einfach und für Menschen lesbar geschrieben werden. Der Browser führt dann den Inhalt der HTML-Datei mit der Formatierung aus dem CSS zusammen und sorgt so für die korrekte Darstellung.



::::: grid fullsize space2

:::: col_4of12
#### CSS-Datei
::: code
```
h1 {
  color: #24588d;
}
p {
  font-weight: Bold;
}
```
:::
::::

:::: col_8of12_last
#### Beschreibung
::: code
<pre>
H1    Startet die Definition für den H1-Tag
COLOR Definiert die Farbe als hexadezimalen Wert
(H1)  Endet die Definition für den H1-Tag
P     Startet die definition für den P-Tag
F.W.  Definiert den Schriftschnitt
(P)   Endet die Definition für den P-Tag
</pre>
:::
::::
:::::





### JavaScript
Die Skriptsprache JavaScript wurde für dynamische Websiten in Browsern entwickelt und ermöglicht erweiterte Benutzerinteraktionen, Inhalte zu modifizieren, erzeugen oder gar nachzuladen. Die Möglichkeiten einer klassischen und meist sehr statischen HTML-Seite mit JavaScript zu erweitern sind vielfältig. Im Gegensatz zu HTML und CSS handelt es nicht um Auszeichnungssprachen oder Stilvorlagen, sondern um eine Programmiersprache, die in Vielfallt und Funktion die beiden vorgenannten übersteigt. Die Anwendung von JavaScript ist in den letzten Jahren stark gestiegen und viele Webseiten sind heute ohne JavaScript nicht mehr lauffähig. Die Ausführung dieser Programme geschieht im Browser und wurde dafür als ECMAScript (offizieller Name von JavaScript) standardisiert und nach der Erfindung durch Brendan Eich im Jahre 1995 an die «Ecma International» übergeben.


::::: grid fullsize space2

:::: col_4of12
#### JavaScript-Datei
::: code
```
alert("Hello World!");








```
:::
<br>
Im oben aufgeführten Skript wird eine Nachricht mit dem Inhalt «Hello World!» angezeigt.
Alert bezeichnet eine Funktion, die der Browser kennt und somit weiss, was er mit dem Text machen muss.
::::

:::: col_8of12_last
#### HTML-Datei
::: code
```
<!DOCTYPE html>
<html>
<head>
  <script type="text/javascript" src="test.js"></script>
</head>
<body>
  <p>JavaScript-Test</p>
</body>
</html>
```
:::
<br>
In der HTML-Datei wird die Datei mit einem Script-Tag eingebunden.
::::
:::::



<div class='header'></div>

## Grundlagen zu HTML
### Tag-Aufbau
Ein Tag wird in HTML wie folgt gebildet:

::::: grid
::: code
```
<NameVonTag>Inhalt von Tag.</NameVonTag>
```
:::
:::::

<br>

Beispiel:
::::: grid
::: code
```
<p>Der Text besteht aus Inhalt.</p>
```
:::
:::::

<br>

Zusätzlich können Attribute in einem Tag gesetzt werden:

Beispiel:
::::: grid
::: code
```
<p class="special">Der Text besteht aus Inhalt.</p>
```
:::
:::::



<br>
<br>
<br>

::::: margin

<br>

::: code
```
<p>Der Text ist hier.</p>
<p>Der Folgetext ebenso.</p>
```
:::
*Ein P-Tag für jeden Paragraf (Absatz).*
:::::

### Absatz | P-Tag
Jeder Paragraf eines Textes wird üblicherweise mit einem P-Tag umschlossen.


<br>
<br>

::::: margin

<br>

::: code
```
<h1>Haupttitel</h1>
<h2>Untertitel</h2>
```
:::
*Die Hirarchie der Titel wird über H1, H2, ... erzeugt.*
:::::

### Titel | H-Tag (H1, H2, H3 ...)
Jede Überschrift wird mit einem H-Tag markiert. Die hierarchische Ordnung wird über Zahlen gesteuert. H1 hat die höchte Priorität. H2 ist H1 untergeordnet. Einen H-Tag ohne Zahl gibt es nich.


<br>
<br>

::::: margin

<br>

::: code
```
<p>
  Der Text mit
  <a
    href="http://google.com"
    title="Beispiellink">Link
  </a>
</p>
```
:::
*Verlinkungen werden über einen A-Link realisiert.*
:::::

### Links | A-Tag
Wird in einem Text ein Link erzeugt, so geschieht dies über einen A-Tag mit dem Attribut «href» (wohin gelinkt wird) und dem Attribut «title» (Information über den Link).


<br>
<br>
<br>
<br>




::::: margin

<br>

::: code
```
<img src=" http://test/t.jpg"
     alt="Testbild">
```
:::
*Bilder*
:::::

### Bilder | IMG-Tag
Bilder werden mit einem IMG-Tag erzeugt. Es muss ein «src»-Attribut (Pfad zu Bild) und ein «alt»-Attribut (Beschreibung des Bildes) angegeben werden.


<div class='header'></div>



## Grundlagen zu HTML – Struktur einfügen

Es gibt nebst den semantischen Tags auch Tags, die der Darstellung oder der Auswahl von Text-Teilen dienen.

::::: margin

<br>

::: code
```
<div class="box">
  <p>Der Text.</p>
</div>
```
:::

*DIV-Tags erzeugen weiere Boxen (Block-Elemente)*

:::::
### Kontainer | DIV-Tag
Möchte man ein Element mit einem zusätzlichen Tag umschliessen, der danach eine Box erzeugt (für Hintergrund oder ähnliches), kann ein DIV-Tag gewählt werden. Häufig wird dazu eine Klasse oder ein ID als Attribut mit angegeben.



::::: margin

<br>

::: code
```
<p>Der
  <span class="blau">Text</span>
  besteht aus Inhalt.
</p>
```
:::
*SPAN-Tag ermöglicht genauere Selektion von einzelnen Text-Teilen (Inline-Tag)*
:::::
### Auszeichnung | SPAN-Tag
Innerhalb von Text kann mittels SPAN-Text eine Formatierung gesteuert werden, die dann jedoch keine Box erzeugt. Häufig wird dazu eine Klasse oder ein ID als Attribut mit angegeben.


<div class='header'></div>


## Grundlagen zu CSS

### Allgemein
Eine CSS-Datei formatiert die einzelnen Teile einer HTML-Seite mittels einer im CSS definierten Auswahl. Alle Formatierungen, die auf das Dokument Einfluss nehmen, beschränken ihren Wirkungskreis über so genannte Selektoren. Es gibt grundsätzlich drei Selektoren, die zusammen kombiniert werden können:

* Tag-Selektor
* Class-Selektor
* ID-Selektor

Daneben gibt es noch Selektor-Regeln und Pseudo-Selektoren, die hier jedoch nicht behandelt werden. Die Attribute, die über Selektoren vergeben werden können sind unter folgendem Link gut verständlich erklärt: [CSS Reference](http://www.w3schools.com/cssref)



::::: margin

<br>

::: code
```
selektor {
  attribut: wert;
}
```
:::
*Aufbau einer CSS-Definition*


::: code
```
selektor1, selektor2 {
  attribut1: wert;
  attribut2: wert;
}
((nächste Definition wie oben))
```
:::
*Aufbau einer CSS-Definition mit mehreren Selektoren und mehreren Werten.*
:::::
### Definition
Eine einzelne Definition in CSS wird über einen Selektor gefolgt von einem Paar aus geschweiften Klammern {} definiert. Mehrere Selektoren können mit einem Koma abgetrennt werden.
Innerhalb der Klammern folgt dann die eigentliche Definition. Auf jeder Zeile wird zuerst ein Attribut angegeben und nach einem Doppelpunkt der Wert, der diesem Attribut zugewiesen werden soll.

<br>
<br>
<br>
<br>
<br>
<br>

::::: margin

<br>

::: code
```
<h1>Titel</h1>
<p>Der Text.</p>
```
:::
*H1- uns P-Tags in der HTML-Datei*
::: code
```
h1 {
  color: #24588d;
}
p {
  font-weight: Bold;
}
```
:::
*Selektoren entsprechen dem Tag-Name*
:::::
### Tag-Selektor
Da verschiedenen semantische Teile einer HTML-Datei verschieden Tag-Namen haben, kann eine CSS-Definition auf einen Tag angewendet werden und somit nur einen Teil der HTML-Datei beeinflussen.
Ein Selektor für einen Tag gibt lediglich den Namen des Tags an. Es werden keine weiteren Hilfszeichen benötigt. Der Selektor entspricht dem Tag-Name.

#### Aufbau
::: code
<pre>tag-name { ... }</pre>
:::

<div class='header'></div>



::::: margin

<br>

::: code
```
<h1>Titel</h1>
<h1 class="big">Titel gross</h1>
```
:::
*H1-Tag und H1-Tag mit einer Klasse*

::: code
```
h1 {
  color: #24588d;
}
.big {
  font-size: 60px;
}
```
:::
*Klassen werden über einen Punkt angezeigt*
:::::




### Class-Selektor
Einem HTML-Tag kann immer auch eine Klasse zugewiesen werden. Die Klasse wird in der HTML-Datei im Tag über ein das Attribut «class» definiert.
Im CSS-Selektor wird die Klasse über einen Punkt, gefolgt vom Klassenname, ausgewählt.

#### Aufbau
::: code
<pre>.klassen-name { ... }</pre>
:::




<br>
<br>
<br>
<br>
<br>
<br>


::::: margin

<br>

::: code
```
<h1>Titel</h1>
<h1 id="spezial">Titel 2</h1>
```
:::
*H1-Tag und H1-Tag mit einer ID*
:::::


### ID-Selektor
Einem HTML-Tag kann immer auch eine ID zugewiesen werden. Die ID wird in der HTML-Datei im Tag über ein das Attribut «id» definiert.
Im CSS-Selektor wird die ID über eine Raute (#), gefolgt vom ID-Name, ausgewählt.

#### Aufbau
::: code
<pre>#id-name { ... }</pre>
:::







<br>
<br>
<br>
<br>
<br>
<br>


::::: margin

<br>

::: code
```
<h1>Titel</h1>
<h1 id="spezial">Titel 2</h1>
```
:::
*H1-Tag und H1-Tag mit einer ID*
::: code
```
h1 {
  color: red;
}
#spezial {
  color: blue;
}
```
:::
*Das Attribut in der ID-Selektion überschreibt das Attribut in der Tag-Selektion.*

#### Resultat
Titel = rot, Titel spezial = blau*
:::::

### Überschreiben und ergänzen von Regeln
Mehrere Definitionen innerhalb einer CSS-Datei, die auf den selben Tag sich auswirken können sich überschreiben und ergänzen. Dabei gelten (sehr grob gesprochen) folgende Regeln:

* Die letzt genannten Attribute einer Regel überschreiben die vorangehenden Attribute in anderen Regeln
* Eine spezifischere CSS-Regel überschreibt eine generellere Regel

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>





<div class='header'></div>



::: margin printonly
#### Autor
Stefan Huber  
sh@signalwerk.ch  
+41 78 744 37 38

#### Dokumentgeschichte
Mai 2014: Erstellung  
August 2015: Erweiterung  
März 2017: Erweiterung
:::

## Weiterführende Informationen


### CSS & HTML Grundkurse
* [HTML & CSS – Codecademy](https://www.codecademy.com/en/tracks/web)
* [W3Schools – Web Tutorials](http://www.w3schools.com/)

### CSS-Referenz
* [CSS Reference](http://www.w3schools.com/cssref)

### Platzhalter-Bilder
* [lorempixel.com](http://lorempixel.com/)
* [Placehold.it](http://placehold.it/)

### Ein Inhalt viele Designs
* [CSS Zen Garden](http://www.csszengarden.com/)

### Code und dessen Bedeutung
* [Paul Ford: What Is Code? | Bloomberg](http://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/)
