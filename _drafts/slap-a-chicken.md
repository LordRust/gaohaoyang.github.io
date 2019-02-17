---
layout: post
title: Slå en kyckling varm
categories: fragavetenskapsmannen
tags:
nocomments: false
mathjax: true
---
* content
{:toc}
## Uppdraget
Den flitige läsaren Henrik Ljungström ställde frågan "Rörelseenergi kan som bekant omvandlas till värme. Så, hur hårt måste man örfila en rå kyckling för att tillaga den? Frågan förutsätter att endast en örfil utdelas."

## Förutsättningar
En "normal" broilerkyckling ligger [mellan 650 och 1600 g](https://www.quora.com/Whats-the-average-weight-of-a-whole-chicken). Vi tänker oss att det är en fin kyckling på kilot.
En annan viktig vikt är hur mycket slagredskapet väger - i detta fall en hand. Enligt [ExRx.net](https://exrx.net/Kinesiology/Segments) så står en hand för 0,575% av kroppsvikten, eller i andra ord 0,4715 kg för en 82 kg tung person.
Frågeställaren har inte specificerat så mycket parametrar runt uppställningen så jag antar att vi startar med en väl kyld kyckling vid 4 °C och att en [tillagad kyckling har temperaturen 75 °C](https://www.foodsafety.gov/keep/charts/mintemp.html) - mikrobiologen i mig vill undvika Campylobacter och Salmonella.

## Hur mycket energi behövs?
För att veta hur mycket värme vi behöver tillföra kycklingen så vänder vi oss till [Engineering toolbox](https://www.engineeringtoolbox.com/specific-heat-capacity-food-d_295.html) som lär oss att en kycklings specifika värmekapacitet är 3.22 kJ/(kg*C).

[Grundläggande termoenergiberäkning](http://earthphysicsteaching.homestead.com/Thermal_Energy_Calculations.html) ger att:

$$
f(x)=mC\rho \Delta T
$$

Där m är massa, C*rho är specifika värmekapaciteten och delta-T är sluttemperatur-starttemperatur.

Från detta får vi fram att det behövs 22,9 kJ för att tillaga vår kyckling. Det finns ett par rätt stora om och men här; framförallt förutsätter vi att *all* energi från örfilen övergår från kinetisk energi till värme. Det är såklart inte alls sant om inte en hel del omöjliga parametrar uppfylls, som att  kycklingen ska vara en sfärisk kropp utan friktion i ett vakuum o.s.v. Vi höftar till med att ca 5% blir värme, det är någon siffra jag minns svagt ifrån när vi pratade mekanik och hysteresarbete med stål under gymnasiet. Det betyder att vi då kommer att kräva 45,7 kJ energi från handen. Det motsvarar strax över [ett kilo TNT](https://en.wikipedia.org/wiki/TNT_equivalent).

## Hur fort behöver handen röra sig?
Det är ju fint och så att veta att frågeställarens hand behöver röra sig fort nog för att orsaka samma effekt på kycklingen som ett kilo trotyl för att få den krispigt tillagad, men hur mycket behöver han gå på fäktning och öva snabbhet för komma upp i rätt hastighet på sin tass?

Formeln för [att omvandla kinetisk energi till hastighet är:](http://ffden-2.phys.uaf.edu/211_fall2002.web.dir/shawna_sastamoinen/Velocity_and_Kinetic_Energy.htm)

$$
K=1/2*mV^2
$$

K är kinetisk energi, m är massa (på handen i detta fall) och V är hastigheten, så efter att applicera formeln så kan vi se att uppdragsgivaren behöver träna ordentligt för att nå de 4404 m/s som krävs. I andra ordalag så rör sig handen i mach 12,8 eller med 39 % av flykthastigheten från jorden (som är 11,2 km/s) så om handen råkar lossna vid försöket så kommer den att återvända till jordytan i alla fall.

## Men hur *hårt* behöver man slå?
Frågan var ju inte hur snabb man behöver vara med handen utan hur mycket kraft man behöver! Vi får då uppskatta en decelarationstid, d.v.s. hur lång tid tar det innan handen står still från sina 4404 m/s? Jag gjorde en SWAG och såg att det var ganska precis 0,01 s. Så vi applicerar [formel för acceleration](https://sciencing.com/equations-speed-velocity-acceleration-8407782.html) på problemet.

$$
a=\Delta v / \Delta t
$$

$$
F=ma
$$

Detta ger oss 208 kN i kraft. Fast uppdragsgivaren känns lite mer traditionell så uttryckt i kilopond vid normal jordgravitation på g=9.81 blir det 21167 kilopond kraft.

## Alternativ till att smiska kycklingen själv

Om vi tänker oss att en hastighet på 12 mach kanske blir oss övermänskligt så kan vi fundera på att Baumgartena vår kyckling och få den tillagad genom att släppa den från en hög höjd och låta smällen mot jorden göra jobbet?

Men vi kan ju direkt se att en jord med atmosfär inte fungerar eftersom gränshastigheten för ett fritt fallande föremål i atmosfären är för låg - inom tävlingsdiciplinen [Speed skydiving](http://www.speed-skydiving.com/index.php/rankings) där svensken Henrik Rainer är rankad #1 med världsrekordet 601,26 km/h - d.v.s. mesiga 167 m/s. för att generera de nödiga 3024 m/s (vi har nu hela kilot från kycklingen som vikt och inte bara den lättare handen som ska föra över värmen) så kan vi applicera formeln

$$
v(t)=gt
$$

Så efter 308 sekunder har vi nått rätt hastighet

$$
X=gt^2/2
$$

Så vi behöver släppa kycklingen från en höjd av 466 km vilket blir strax utanför ISS omloppsbana på 403-407 km. Otrevligt med att inte ha en atmosfär, men i sådan värd så kan det regna stekta sparvar från himmelen!

Eftersom beräkningarna börjar bli håriga när man ska ta hänsyn till uppvärmningen av kycklingen vid inträdet i atmosfären så hänvisar jag med varm hand till [Randall Munros fantastiska genomgång av hur man kan grilla en stek genom att släppa den i atmosfären](https://what-if.xkcd.com/28/).

Ett alternativ till att örfila kycklingen eller släppa den från hög höjd skulle kunna vara att skjuta den med hagel, men ett hagelskott ligger [endast på ca 4453 joule](http://wredlich.com/ny/2013/01/projectiles-muzzle-energy-stopping-power/). Värt att lägga märke till är dock att ett vapen som en hagelbrakare är riktigt bra till det här dock, 2,2x mer energi än en AK47 eller 6,6x mer än vad Dirty Harrys 357 Magnum kan prestera. Dock ser vi att vi hade behövt 1026 hagelskott i kycklingen innan den blivit varm nog och det blir för mycket hagel att rensa bort för att det ska vara gott att äta.

## Labba själv
Vill du räkna själv på hur stor kyckling du vill laga, eller kanske se hur det fungerar på en annan planet så kan du labba själv i [detta google sheet](https://docs.google.com/spreadsheets/d/1KtW_w8Hv9mIb3e5EHV-JZRcpeGZbZks96jGU57Tvcpc/edit?usp=sharing) som jag gjorde mina beräkningar i.