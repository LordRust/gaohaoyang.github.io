---
layout: post
title: "C64 transformatorreparation"
date: 2015-10-23"
categories: commodore
tags: c64 commodore tranformator
---
![](/images/C64_brick_thumb.jpg)

Okidoki, fick jobbat lite i elektronikverkstaden, och eftersom jag inte orkade sätta upp en videokamera så blir det text och bilder i stället.

Power supplyn til C64 är en notoriskt dålig konstruktion; som allt som Jack Tramiel krängde ut så skulle det vara billigt, billigt, billigt. På den tiden hette billigt bland annat linjär strömregulator. Nå, för att förklara lite mer; 8-bitars Commodore datorer behöver 5 V likström och 9 V växelström och i PSU'n sitter det en transformator som ger 9 V växel på sekundärsidan (primärsidan är 220 V - eller i dag då 230-240 V). För att få ner spänningen till 5 V så hade man förr en linjär krets som i princip består av en likriktarbrygga och en del som bara slänger bort den extra spänningen i form av värme. Ineffektivt, oh ja, och dessa gamla strömaggregat brukar också kärleksfullt kallas för fotvärmare. Men värre är det att när en linjär krets packar ihop (vilket de gör ganska lätt, särskilt med en snabb och billig konstruktion) så är den inte snäll nog att dra en säkring eller så, utan då skickar den ut mycket mer ström än de 5 V som datorn vill ha. Upp emot 12 V är inte osannolikt. I C64'an finns det inga som helst skyddskretsar mot detta utan det betyder att den tar med sig minst RAM chippen i graven men antagligen också ett par logikkretsar, lite ROM moduler och CPU'n. Jobbigt att laga :-(



Så vad göra? Dags att ta fram lödkolven och bygga om PSU'n till något för 2000-talet! Switchande regulatorer är betydligt driftsäkrare och mycket mer energieffektiva, så vi byter till en sådan. Tack och lov behöver man inte bygga själva kretsen själv utan man köper sig ett litet laddaggregat avsett för RC farkoster som bilar eller flyg. Dessa används för att snabbt ladda sina batterier och passar som handen i handsken här. Beställdes via Ebay från Hong Kong för 23 :- inklusive frakt. Ny kondensator och nya dioder från Electrokit här i Malmö

![Transformator insida](/images/C64_brick_1-2015-10-20_18.46.24.jpg)
Vi börjar med att öppna den 29 är gamla gulnade plastsaken. Här har vi transformatorn längst bort i bild under säkringen. Den skarpögde ser att den är helt ingjuten i någon epoxyharts, något som också gäller delar av den gamla strömregulatorn. Ett bisarrt men billigt sätt att se till att om komponenterna börjar brinna så smälter de bara lite epoxy. Men givetvis bidrar detta välisolarende skydd också till att komponenterna överhettas snabbt. Billigt och snabbt, Jack Tramiel igen... Närmast oss sitter kretskortet med en simpel likriktarbrygga på fyra dioder och en större kondensator som jämnar ut strömmen.

![Gammal regulator](/images/C64_brick_2-2015-10-20_18.48.56.jpg)
I mitten har vi tre stift som är kopplingen till den gamla regulatorn (som sitter nere i epoxyn). Vi löder bort kretskortet från kopplingen och sen klipper vi bara av stiften så den gamla kretsen är helt borta.

![Gamla komponenter](/images/C64_brick_3-2015-10-20_18.59.49.jpg)
29 år gamla komponenter, bort med dem och dit med nya. Glömde att ta en bild på hur det såg ut efter jobbet med att ersätta dem med nya friska.

![Ny switchad ström](/images/C64_brick_4-2015-10-20_19.49.16.jpg)
Testa med att koppla in den nya lilla switchande UBEC regulatorn på ﻿den nya kondensatorn. C64 PSU’n har gemensam jord, så vi mäter mellan kondensatorns minus och positiva ut från regulatorn. Datorn vill ha 5 V, men vi får 5,3 V här. Men det är helt utan belastning och strömförluster som vi får i C64’ans kretsar så det borde vara OK. Den svarta minusledningen på utsidan av regulatorn klipper vi bort; att ansluta den till jord är En Dålig Idé. Glömde att ta bild på när plusledningen ansluts till rätt punkt på kretskortet så vi faktiskt får ut strömmen på rätt pinne i kontakten till C64’an. Heller ingen bild på när regulatorn monteras in under kretskortet.

![Montera ihop](/images/C64_brick_5-2015-10-20_20.17.09.jpg)
Botten är tillbaka. Dock gick lite spröd plast i bitar. En bruten pinne ligger mellan PSU’n och rullen med lödtenn. Nåja, det fick bli lite lim för att få ihop allt tight och bra.

![Mäta på moderkortet](/images/C64_brick_6-2015-10-20_20.46.23.jpg)
Vi kopplar in, slår på datorn och mäter strömmen på själva modermodemet. Har inga tillräckligt små klämmor för att gripa om ett ben på ett chip så jag kunde inte både mäta och fota samtidigt, men jag fick 5,12 V mellan Vcc och gnd på hexinverter chippet 7406 här. En smula högt, men inom specifikation och när fler saker är inkopplade till datorn borde den sjunka en liten bit till.