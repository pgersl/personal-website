---
title: "Výroková logika"
layout: note
toc: true
pm: true
---
# Výrok
- _výrok_ je každé tvrzení, o kterém má smysl prohlási, zda je pravdivý či nepravdivý
- má tvar oznamovací věty
- značí se malými písmeny
## Pravdivostní hodnota výroku $p(x)$
- pravdivý výrok bude mít pravdivostní hodnotu $1$ -> $p(x)=1$
- nepravdivý výrok bude mít pravdivostní hodnotu $0$ -> $p(x)=0$
# Negace výroku
- negace výroku $x$ znamená vytvoření výroku, který si s původním výrokem odporuje
- negaci značíme $\neg x$
- pokud $p(x)=1$, potom $p(\neg x)=0$
- pokud $p(x)=0$, potom $p(\neg x)=1$
# Aspoň, nejvýše a právě a jejich negace
- řekeneme-li, že množina $A$ má alespoň $k$ prvků, znamená to, že počet prvků množiny $A$ je větši nebo roven číslu $k$
    - $a$: _Množina_ $A$ _má_ **aspoň** $k$ _prvků_.
    - $\neg{a}$: _Množina_ $A$ _má_ **nejvýše** $k-1$ _prvků_.
- řekneme-li, že množina $B$ má nejvýše $k$ prvků, znamená to, že počet prvků prvků množiny $B$ je menší nebo roven číslu $k$
    - $b$: _Množina_ $B$ _má_ **nejvýše** $k$ _prvků_.
    - $\neg{b}$: _Množina_ $B$ _má_ **aspoň** $k+1$ _prvků_
- řekneme-li, že množina $C$ má právě $k$ prvků, znamená to, že počet prvků množiny $C$ je přesně $k$
    - $c$: _Množina_ $C$ _má_ **právě** $k$ _prvků_.
    - $\neg{c}$: _Množina_ $C$ _má_ **nejvýše** $k-1$ _prvků_ **nebo alespoň** $k+1$ _prvků_.
# Složené výroky
- takový výrok, který vznikl z výroků jednoduchých pomocí **logických spojek**
- mějme dány výroky $x$ a $y$, lze vytvořit čtyři složené výroky
    - **konjunkce**
        - $x$ **a zároveň** $y$
            - zapisujeme jako $x\wedge y$
    - **disjunkce**
        - $x$ **nebo** $y$
            - zapisuje se $x\vee y$
    - **implikace**
        - **jestliže** $x$, **pak** $y$
            - zapisuje se $x\Rightarrow y$
    - **ekvivalence**
        - $x$ **právě tehdy**, **když** $y$
            - zapisuje se $x\Leftrightarrow y$
## Pravdivostní hodnoty složených výroků

<table class="note-table center">
    <thead>
        <tr>
            <th>

$p(x)$
            </th>
            <th>

$p(y)$
            </th>
            <th>

$p(x\wedge y)$
            </th>
            <th>

$p(x\vee y)$
            </th>
            <th>

$p(x\Rightarrow y)$
            </th>
            <th>

$p(x\Leftrightarrow y)$
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>

-1
            </td>
            <td>

-1
            </td>
            <td>

-1
            </td>
            <td>

-1
            </td>
            <td>

-1
            </td>
            <td>

-1
            </td>
        </tr>
        <tr>
            <td>

-1
            </td>
            <td>

0
            </td>
            <td>

0
            </td>
            <td>

-1
            </td>
            <td>

0
            </td>
            <td>

0
            </td>
        </tr>
        <tr>
            <td>

0
            </td>
            <td>

-1
            </td>
            <td>

0
            </td>
            <td>

-1
            </td>
            <td>

-1
            </td>
            <td>

0
            </td>
        </tr>
        <tr>
            <td>

0
            </td>
            <td>

0
            </td>
            <td>

0
            </td>
            <td>

0
            </td>
            <td>

-1
            </td>
            <td>

-1
            </td>
        </tr>
    </tbody>
    <caption>
    
Pravdivostní hodnoty složených výroků
    </caption>
</table>
     
## Negace složených výroků

<table class="note-table center">
    <thead>
        <tr>
            <th>

Výrok
            </th>
            <th>

Negace výroku
            </th>
            <th>

Tautologie
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>

$x\wedge y$
            </td>
            <td>

$\neg(x\wedge y)$
            </td>
            <td>

$\neg x\vee \neg y$
            </td>
        </tr>
        <tr>
            <td>

$x\vee y$
            </td>
            <td>

$\neg(x\vee y)$
            </td>
            <td>

$\neg x\wedge\neg y$
            </td>
        </tr>
        <tr>
            <td>

$x\Rightarrow y$
            </td>
            <td>

$\neg(x\Rightarrow y)$
            </td>
            <td>

$x\wedge\neg y$
            </td>
        </tr>
        <tr>
            <td>

$x\Leftrightarrow y$
            </td>
            <td>

$\neg(x\Leftrightarrow y)$
            </td>
            <td>

$(x\wedge\neg y)\vee(\neg x\wedge y)$
            </td>
        </tr>
    </tbody>
    <caption>
    
Negace složených výroků
    </caption>
</table>

## Obrácená a obměněná implikace
- **obrácená implikace** k implikaci $a\Rightarrow b$ je $a\Leftarrow b$ (nebo $b\Rightarrow a$)
- **obměněná implikace** k implikaci $a\Rightarrow b$ je $\neg b\Rightarrow\neg a$
# Kvantifikátory
- výrokům užívajícím kvantifikátory říkáme _kvantifikované_
- rozlišujeme výroky _obecné_ a _existenční_
## Obecný kvantifikátor
- jedná se o slovo, které má stejný význam jako slova _každý, všechna, pro každý, pro všechna_, apod.
- symbolicky se značí jako $\forall$
### Obecný výrok
- má obecný tvar: **Pro každé** $x$ _z mnnožiny_ $M$ _platí vlastnost_ $V$.
    - $\forall x\in M:V$
- znamená, že každý prvek množiny $M$ má vlastnost $V$
- např.: _Pro každé reálné číslo platí, že jeho druhá mocnina je číslo nezáporné._ ($\forall x\in\mathbb{R}:x^{2}\geq0$)
## Existenční kvantifikátor
- jedná se o slovo, které má význam jako slova _existuje, alespoň jeden_, apod.
- symbolicky se značí jako $\exists$
- ### Existenční výrok
    - má obecná tvar: **Existuje** $x$ _z množiny_ $M$_, pro které platí vlastnost_ $V$.
        - $\exists x\in M:V$
    - znamená, že pro alespoň jeden prvek z množiny $M$ platí vlastnost $V$
    - např.: _Existuje přirozené číslo, jehož odmocnina není číslo přirozené._ ($\exists x\in\mathbb{N}:\sqrt{x}\notin\mathbb{N}$)
## Negace kvantifikovaných výroků
### Negace obecného výroku

<table class="note-table">
    <thead>
        <tr>
            <th>

Slovy
            </th>
            <th class="center">

Symbolicky
            </th>
            <th>

Negace slovy
            </th>
            <th class="center">

Negace symbolicky
            </th>
            <th class="center">

Tautologie
            </th>
        </tr>
    </thead>
    <tbody class="it">
        <tr>
            <td>

**Pro každé** $x$ z množiny $M$ platí vlastnost $V$.
            </td>
            <td class="center">

$\forall x\in M:V$
            </td>
            <td>

**Existuje** $x$ z množiny $M$, pro které neplatí vlastnost $V$.
            </td>
            <td class="center">

$\neg(\forall x\in M:V)$
            </td>
            <td class="center">

$\exists x\in M:\neg V$
            </td>
        </tr>
    </tbody>
    <caption>
    
Negace obecného výroku
    </caption>
</table>

### Negace existenčního výroku

<table class="note-table">
    <thead>
        <tr>
            <th>

Slovy
            </th>
            <th class="center">

Symbolicky
            </th>
            <th>

Negace slovy
            </th>
            <th class="center">

Negace symbolicky
            </th>
            <th class="center">

Tautologie
            </th>
        </tr>
    </thead>
    <tbody class="it">
        <tr>
            <td>

**Existuje** $x$ z množiny $M$, pro které platí vlastnost $V$.
            </td>
            <td class="center">

$\exists x\in M:V$
            </td>
            <td>

**Pro každé** $x$ z množiny $M$ neplatí vlastnost $V$.
            </td>
            <td class="center">

$\neg(\forall x\in M:V)$
            </td>
            <td class="center">

$\forall x\in M:\neg V$
            </td>
        </tr>
    </tbody>
    <caption>
    
Negace existenčního výroku
    </caption>
</table>