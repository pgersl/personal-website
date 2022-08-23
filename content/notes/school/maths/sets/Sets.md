---
title: "Množiny"
layout: note
toc: true
pm: true
---
- _množina_ je souhrn nějakých objektů (_prvků množiny_)
    - pokud je prvek $x$ prvkem množiny $A$, zapíšeme to jako $x\in{A}$
    - pokud prvek $x$ není prvkem množiny $A$, zapíšeme to jako $x\notin{A}$
# Zadání množiny
- **Výčtem prvků**
    - při určení množiny výčtem jejich prvků nezáleží na pořadí prvků a každý z těchto prvků může být v množině pouze jednou
    - např.:
        - _množina_ $A$ _obsahuje prvky_ $1;2;3,497;\phi;\pi;$ a $\sqrt{2}$
        - zapíšeme: $A=\{1;2;3,497;\phi;\pi;\sqrt{2}\}$
- **Charakteristickou vlastností**
    - uvedeme takovou vlastnost, kterou mají všechny prvky množiny a kromě těchto prvků této množiny ji žádný jiný prvek nemá
    - např.:
        - _množina_ $A$ _obsahuje všechna reálná čísla, která jsou větší než_ $-5,7$, ale menší nebo rovna $13,758$
        - zapíšeme: $A=\{x\in{\mathbb{R};-5,7<x\leq{15,758}}\}$
# Podmnožina množiny
- množina $B$ je _podmnožinou množiny_ $A$ právě tehdy, když každý prvek množiny $B$ je zároveň prvkem množiny $A$
- zapisujeme $B\subset{A}$ nebo $A\supset{B}$
- podmnožinou každé množiny $A$ je i prázdná množina a je si také podmnožinou sebe sama
    - $\emptyset\subset{A}$
    - $A\subset{A}$
# Rovnost množin
- množina $A$ a $B$ se rovnají pravě tehdy, když každý prvek množiny $A$ je prvkem množiny $B$ a zároveň každý prvek množiny $B$ je prvkem množiny $A$
- zapisujeme $A=B$
# Doplněk množiny
- v případě, že množina $B$ je podmnožinou množiny $A$, potom _doplněk množiny_ $B$ _v množině_ $A$ jsou všechny prvky množiny $A$, které nepatří do množiny $B$
- zapisujeme $B_{A}'$
# Průnik množin
- _průnik množin_ $A$ _a_ $B$ je množina všech prvků, které patří zároveň do obou množin
- zapisujeme: $A\cap{B}$
- množiny, jejichž průnikem je prázdná množina se nazývají _disjunktní_
    - $A\cap{B}=\emptyset$
# Sjednocení množin
- _sjednocení množin_ $A$ _a_ $B$ je množina všech prvků, které patří alespoň do jedné z množin $A$ a $B$
- zapisujeme: $A\cup{B}$
# Rozdíl množin
- _rozdíl množin_ $A$ a $B$ je množina všech prvků množiny $A$, které nejsou prvky množiny $B$ a _vice versa_
- zapisujeme: $A\backslash{B}$
- !pozor! $A\backslash{B}\neq{B\backslash{A}}$