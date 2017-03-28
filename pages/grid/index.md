---
title: Gestaltung · Layout und Raster
---
# Gestaltung · Layout und Raster

::: TOC
**Content**
[[TOC]]
:::
<div class='header'></div>


## Grundsatz
Es gibt diverse Konzepte und Ansätze um im Browser ein gewünschtes Layout zu erzielen. Bevor responsive Webdesign «erfunden» wurde, gab es oftmals eher fixe Strukturen und Layouts, die auf Mobilescreens meist schlecht dargestellt wurden. Mit responsive Design wird entsprechend der Ausgabegrösse das Layout angepasst.

Was im Print-Design als «Musterseiten» definiert wurde, wird im Webdesign meist als Templates zusammengefasst. Doch es können auch modulare Strukturen zu einer Seite zusammengebaut werden.

<br>

### Templates
Bei einem Aufbau mit verschiedenen Templates wird eine kleine Anzahl von Layout-Vorlagen realisiert und können dann so angewendet werden.
<br>
<br>
:::: grid
::: w80p
![Templates](./img/modular_1.png)
:::
::::
<br>

### Module
Bei einem Aufbau mit Modulen können immer wieder die selben Teile verwendet werden und so auf eine vielfältige Weise ein Layout erstellt werden.
<br>
<br>

![Templates](./img/modul_sys1.png)
<br>
<br>
![Templates](./img/modul_sys2.png)

<!--
<br>
<br>
![Templates](./img/modul_sys3.png)
-->






<div class='header'></div>

## Spalten
Oftmals wird im Webdesign ein Spaltenaufbau gewählt. Diese Unterteilung hilft bei der Strukturierung von Inhalten in horizontaler Richtung. Die vertikale Unterteilung wird oftmals weniger starr behandelt, da die Inhalte je nach Screengrösse länger (höher) oder kürzer werden.
<br>
<br>
<br>
<br>



::: margin compact
#### 12 Spalten als Beispiel
Eine beliebte Form für Desktop-Screens ist ein Raster mit 12 Spalten.
Darin lassen sich wiederum breitere Spalten-Konstrukte abbilden. So kann der Text zum Beispiel Zwei-, Drei, Vier- oder Sechspaltig eingefüllte werden.
:::

![12 Spalten Desktop](./img/12col_desktopA.svg)


![2 Spalten Desktop](./img/12col_desktopB.svg)





<div class='header'></div>

## Abstände
Abstände zwischen Elementen können aus technischer sicht im Webdesign auf verschiedene Arten definiert werden. Meist wird jedoch einem Inhaltselement ein so genanntes «Padding» (CSS-Definition) gegeben. Dies definiert einen «Abstand» gegenüber dem Nachbar. Das nächste Element ist dann gleich anschliessend an das vorhergehende und durch das Padding entsteht dann der Abstand zwischen den Elementen.
<br>
<br>

::: margin compact
### Visuelle Erscheinung
Die Inhaltselemente erscheinen auf dem Bildschirm mit einem Abstand zwischen den beiden Blöcken.
:::

![Padding unsichtbar](./img/paddingA.svg)

::: margin compact
### Gleichmässiges Padding
Der Weissraum um die einzelnen Elemente wird gleichmässig zwischen den Elementen verteilt.
:::

![Padding gleichmässig](./img/paddingB.svg)

::: margin compact
### Padding nach rechts/unten
Der Weissraum wird beim vorhergehenden Element so definiert, dass das folgende Element bereits den Abstand wahrt. Das zweite Element braucht dann kein seitliches Padding mehr.
:::

![Padding unregelmässig](./img/paddingC.svg)

<div class='header'></div>


## Klassischer Webaufbau
Bei einem klassischen Aufbau werden die Inhalte fix an gewissen Positionen angeordnet. Die Mobile-Version ist häufig nicht separat angepasst worden und erscheint unbrauchbar.


::::: grid fullsize space2

:::: col_4of12
::: w40p
![Fix Layout auf Mobilescreen](./img/classic_mobile.svg)
:::
::::

:::: col_8of12_last
![Fix Layout auf Desktopscreen](./img/classic_desktop.svg)
::::
:::::





::::: grid fullsize space1

:::: col_4of12

<br>
<br>
<br>

Zwei Spalten fix in Pixel definiert.
Links und Rechts erscheint der Hintergrund
::::

:::: col_8of12_last
![Fix Layout auf Desktopscreen](./img/classic_desktop_leg.svg)
::::
:::::

<div class='header'></div>


## Klassischer Webaufbau – Varriationen

::::: grid fullsize space3

:::: col_4of12
<br>
<br>
<br>
Zwei Spalten fix in Prozent des Bildschirms definiert.

### ACHTUNG!
Zeilenumbruch und Layout schwer zu kontrollieren.
::::

:::: col_8of12_last
![Fix Layout auf Desktopscreen](./img/classic_desktop_proc.svg)
::::
:::::


::::: grid fullsize space3

:::: col_4of12
<br>
<br>
<br>
Die Hauptspalte ist fliessend. Der Rest ist fix definiert.

### ACHTUNG!
Zeilenumbruch und Layout schwer zu kontrollieren.
::::

:::: col_8of12_last
![Fix Layout auf Desktopscreen](./img/classic_desktop_flow.svg)
::::
:::::

<div class='header'></div>

## Rasteraufbau mit «Responsive Design»
Bei diesem Aufbau werden die Inhalte auf einen Raster gelegt. Die mobile Seite wird speziell für das kleine Endgerät angepasst.


::::: grid fullsize space2

:::: col_4of12
::: w40p
![Responsive Layout auf Mobilescreen](./img/responsive_mobile.svg)
:::
::::

:::: col_8of12_last
![Responsive Layout auf Desktopscreen](./img/responsive_desktop.svg)
::::
:::::





::::: grid fullsize space1

:::: col_4of12
<br>
<br>
<br>
&nbsp;
::::

:::: col_8of12_last
![Responsive Layout auf Desktopscreen](./img/responsive_desktop_leg.svg)
::::
:::::

Spalten können fix oder in % definiert werden. Meist wird jedoch die totale Breite aller Spalten durch ein Maximum kontrolliert.







<div class='header'></div>

## Rasteraufbau mit «Fluid Design»
Bei diesem modernen Aufbau werden die Inhalte häufig auf einen Raster gelegt aber die Inhalte ändern je nach Grösse des Bildschirmes die Grösse und Position.


::::: grid fullsize space2

:::: col_4of12
::: w40p
![Fluid Layout auf Mobilescreen](./img/fluid_mobile.svg)
:::
::::

:::: col_8of12_last
![Fluid Layout auf Desktopscreen](./img/fluid_desktop.svg)
::::
:::::


Bei fluiden Layouts passt sich der Inhalt möglichst gut für den Leser und Gestalter den Gegebenheiten an.



::::: grid fullsize space3

:::: col_6of12
![Fluid Layout auf Desktopscreen](./img/fluid_desktop.svg)
::::

:::: col_6of12_last
::: w80p_left
![Fluid Layout auf Desktopscreen](./img/fluid_desktop_small.svg)
:::
::::
:::::






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



### Rastersysteme
* [Foundation Grid](http://foundation.zurb.com/grid.html)
* [Gridpak](http://gridpak.com/)
* [960px Grid](http://960.gs/)
* [Skizzepapier](http://sneakpeekit.com/browser-sketchsheets/)

### Übliche Bildschirmauflösungen
* [Browser Market](http://gs.statcounter.com/)
* [Browser Display Statistics](http://www.w3schools.com/browsers/browsers_display.asp)


### Responsive Visualisierung
* [Responsinator](http://www.responsinator.com/)
