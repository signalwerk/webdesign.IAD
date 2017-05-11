---
title: Detailtypografie & Mengentext
---
# Gestaltung · Detailtypografie & Mengentext

::: TOC
**Content**
[[TOC]]
:::
<div class='header'></div>



## Typografie in HTML – eine Kurzübersicht
Auch im Web darf erwartet werden, dass die gepflegte Gestaltung auch eine gepflegte Typografie erfordert. Es gelten grundsätzlich die selben Regeln, wie in der gedruckten Typografie.
Die hier dargestellten Beispiele sind nur eine kurze Übersicht von Dingen, die oftmals in Websites vergessen gehen.


### Korrekte Zeichensetzung
:::: margin
::: box code
<pre>
&lt;br&gt;     = neue Zeile
&amp;#x2009; = reduzierter Wortabstand
× ² ³    = Unicode-Zeichen
«»       = Unicode-Zeichen
&amp;nbsp;   = nicht trennender
               Wortabstand
&amp;shy;    = Trennstelle markieren
</pre>
:::
Unicode Zeichen & HTML-Codes für die korrekte Zeichensetzung (HTML)
::::
In HTML gibt es die meisten Zeichen, die im Print verwendet werden auch als HTML codierung. Die meisten können genau so wie in Print-Programmen eingegeben werden.

| Code {.w20p}    | Erklärung                                                                                                                    |
|--------|------------------------------------------------------------------------------------------------------------------------------|
| `<br>`   | Der br-Tag erzeugt eine neue Zeile                                                                                           |
| –      | Halbgeviertstrich  kann auch in HTML verwendet werden                                                                        |
| → ←    | Reduzierter Wortabstand (Unicode U+2009 THIN SPACE)                                                                          |
| m² m³  | Hochgestellte Zahlen werden nicht durch eine Formatierung hoch gestellt, sondern als hochgestellte Zahlen eingegeben.       |
| 5 × 5  | Multiplikationszeichen anstatt ein x                                                                                         |
| «Hi!»  | In der Schweiz gebräuchliche Anführungszeichen                                                                               |
| `&nbsp;` | Nicht trennende Stellen werden mit einem «Non-breaking space» eingegeben.                                                   |
| `&shy;`  | Möchte man dem Browser anzeigen, dass er an einer stelle im Wort trennen kann, so kann dies mit diesem Code gemacht werden. |






### Laufweiten verändern (Sperren)
:::: margin
::: box code
<pre>
.sperren {
    letter-spacing: 0.1em;
}
</pre>
:::

::::
Auch im Web kann Text gesperrt werden. Gewisse Browser unterstützen jedoch nur minimal 1 px als gesperrten Wert.
Das eingeben von Werten um die Laufweite zu erweitern ist mit Vorteil im Bezug zur Schriftgrösse an zu geben. Hierfür eignet sich die Masseinheit «em» als Beispiel. 1 em = aktuelle Schriftgrösse.



### OpenType features
:::: margin
::: box code
<pre>
.ligaturen  {
    font-feature-settings: "liga";
}
</pre>
:::
OpenType features wie Ligaturen (`liga`) oder Brüche (`frac`) können in CSS aktiviert werden.
::::
Auch im Web sind OpenType features wie Ligaturen oder verschiedenen Zahlensets möglich. Der Browser-Support ist hierfür gut, jedoch müssen natürlich die entsprechenden Features im Font vorhanden sein. Der Schrifthersteller liefert in der Font-Dokumentation meist die entsprechenden Angaben.


<div class='header'></div>




## Blocksatz
:::: margin
::: box code
<pre>
.blocksatz {
    hyphens: auto;
    text-align: justify;
}
</pre>
:::
Trennungen & Blocksatz einschalten (CSS)
::::
Blocksatz ist grundsätzlich problemlos möglich. Allerdings entstehen durch die fehlenden Trennungen Löcher im Satz. Somit muss die Trennung gezielt eingeschaltet werden, um diese zu vermeiden. Leider wird diese Funktion von gewissen Browsern (Chrome als Beispiel) nicht unterstütz und somit ist Blocksatz häufig ungeeignet.

### Trennungen steuern (von Browser noch nicht implementiert)
:::: margin
::: box code
<pre>
.blocksatz {
  hyphenate-limit-lines: 3;
  hyphenate-limit-chars: 6 3 2;
  hyphenate-limit-zone: 40px;
  hyphenate-character: "–";
  hyphenate-limit-last: always;
}
</pre>
:::
Trennungen detailiert kontrollieren (CSS)
::::
Die Steuerung vom Blocksatz könnte theoretisch über CSS-Eigenschaften sehr genau kontrolliert werden. Leider werden diese Einstellungen in den aktuellen Browsern nicht oder sehr schlecht unterstützt. Die Spezifikation hierzu (CSS Text Module Level 4) ist auch noch nicht standardisiert.

<br>

`hyphenate-limit-lines` <br>
Steuert die Anzahl von Trennungen bei aufeinanderfolgenden Zeilen.

<br>

`hyphenate-limit-chars` <br>
Gibt die minimale Anzahl Zeichen an, die im Wort vorhanden sein müssen, dass die Trennung greift. Zudem kann die minimale Anzahl Zeichen vor und nach der Trennung gesteuert werden.

<br>

`hyphenate-limit-zone` <br>
Steuert in welchem Bereich nicht getrennt werden muss.

<br>

`hyphenate-character` <br>
Gibt das Zeichen an, welches für die Trennung verwendet wird. Standard ist der Trennstrich.

<br>

`hyphenate-limit-last` <br>
Steuert ob zum Beispiel am Ende einer Spalte getrennt werden darf.



<div class='header'></div>

::: margin printonly
#### Autor
Stefan Huber  
sh@signalwerk.ch  
+41 78 744 37 38

#### Dokumentgeschichte
November 2015  
März 2017: Erweiterung

:::

## Weiterführende Informationen



### Typografie im Web
* [A Pocket Guide to Master Every Day’s Typographic Adventures](http://www.typogui.de/)
* [CSS Properties to Control Web Typography](http://www.sitepoint.com/css-properties-to-control-web-typography/)
* [Typography Cheatsheet](http://www.typewolf.com/cheatsheet)

### OpenType im Web
* [CSS 3 Font-Feature-Settings OpenType](http://clagnut.com/sandbox/css3/)
* [graphic design and typography](https://www.typotheque.com/articles/opentype_features_in_web_browsers_-_tests)
* [Syntax for OpenType features in CSS](https://helpx.adobe.com/typekit/using/open-type-syntax.html)
* [Kerning on the Web](http://blog.typekit.com/2014/02/05/kerning-on-the-web/)

### Trennungen im Blocksatz
* [Control of hyphenation with CSS4](http://generatedcontent.org/post/44751461516/finer-grained-control-of-hyphenation-with-css4)
* [CSS Text Module Level 4](https://drafts.csswg.org/css-text-4/)
* [Word wrapping/hyphenation using CSS](https://kenneth.io/blog/2012/03/04/word-wrapping-hypernation-using-css/)

### CSS-Fähigkeiten von Browsern nachschlagen
* [Can I use...](http://caniuse.com/)
