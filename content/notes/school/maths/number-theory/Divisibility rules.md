---
title: "Dělitelnost"
layout: note
toc: true
pm: true
---
- **dělitelnost** je vlastnost čísel
- číslo $b$ je dělitelné číslem $a$, když existuje přirozené číslo $k$ tka, že číslo $b$ lze zapsat jako součin čísel $a$ a $k$
    - $b=a\cdot{k}$
- zapisujeme $a|b$
# Znaky dělitelnosti
- pro každé přirozené číslo platí, že číslo 1 je dělitelem každého přirozeného čísla $a$
    - $1|a$
- každé přirozené číslo je dělitelem samo sebe
    - $a|a$
- přirozené číslo je dělitelné $2$ <=> má na místě jednotek některou z číslic $0,2,4,6,8$
- přirozené číslo je dělitelné $4$ <=> jeho poslední dvojčísli je dělitelné $4$
    - jestli je číslo dělitelné $4$, pak je dělitelné $2$ (_vice versa_ neplatí)
- přirozené číslo je dělitelné $8$ <=> jeho poslední trojčíslí je dělitelné $8$
    - jestli je číslo dělitelné $8$, pak je dělitelné $4$ i $2$ (_vice versa_ neplatí)
- přirozené číslo je dělitelné $5$ <=> má na místě jednotek některou z číslic $0,5$
- přirozené číslo je dělitelné $10$ <=> má na místě jenotek číslici $0$
- přirozené číslo je dělitelné $3$ <=> je jeho ciferný součet dělitelný $3$
- přirozené číslo je dělitelné $9$ <=> je jeho ciferný součet dělitelný $9$
## Další znaky dělitelnosti
- přirozené číslo je dělitelné $6$ <=> $3|a\wedge{2|a}$
- přirozené číslo je dělitelné $15$ <=> $3|a\wedge{5|a}$
- přirozené číslo je dělitelné $11$ <=> číslo, které získáme střídavým odečitáním a přičítaním jeho cifer, je rovno $0$ nebo je dělitelné $11$
# Prvočísla
- _prvočíslo_ je takové přirozené číslo, které má právě dva různé dělitele - $1$ a samo sebe
- _složené číslo_ je přirozené číslo, které má alespoň tři různé dělitele
- číslo $1$ není ani prvočíslo ani číslo složené
- číslo $2$ je nejmenší prvočíslo a zároveň jediné sudé prvočíslo
- každé číslo $n$ je dělitelné alespoň jedním číslem $p$, pro které platí, že $p\leq{\sqrt{n}}$
    - když mezi prvočísly $p\leq{\sqrt{n}}$ žádný dělitel čísla $n$ nenajdeme, zanemná to, že $n$ je prvočíslo
# Největší společný dělitel
- _společný dělitel_ přirozených čísel $a$ a $b$ je přirozené číslo, které je dělitelem každého z čísel $a$ a $b$
- _největší společný dělitel_ ($NSD$ nebo $D$) přirozených čísel $a$ a $b$ je takové číslo, které dělí káždé z čísel $a$ a $b$ a zároveň je ze všech jejich dělitelů největší
    - zapisujeme $NSD(a,b)$ nebo jen $D(a,b)$
- čísla $a$ a $b$ nazýváme **soudělná** <=> jejich největší společný dělitel je větší než číslo $1$
- čísla $a$ a $b$ nazýváme **nesoudělná** <=> jejich největší společný dělitel se rovná číslu $1$
# Nejmenší společný násobek
- _společný násobek_ přirozených čísel $a$ a $b$ je přirozené číslo, které ne násobkem každého z čísel $a$ a $b$
- _nejmenší společný násobek_ ($nsn$ nebo $n$) přirozených čísel $a$ a $b$ je takové číslo, které je násobkem každého z čísel $a$ a $b$ a zároveň je ze společných násobků čísel $a$ a $b$ nejmenší
    - zapisujeme $nsn(a,b)$ nebo jen $n(a,b)$
- platí, že $D(a,b)\cdot{n(a,b)}=a\cdot{b}$