---
title: "Lomené výrazy"
layout: note
toc: true
pm: true
---
- _racionální lomený výraz_ je podíl dvou mnohočlenů ve tvaru zlomku
- pro každý lomený výraz se musí vždy určit podmínky existence, _definiční obor_, tedy určit, kdy je výraz ve jmenovateli nenulový
# Určení definičního oboru
- ve jemnovateli nemí být nula
- **Postup**:
    - 1. zapíšeme podmínku eistence výrazu - jmenovatel se nesmí rovnat nule
        - např.: $\frac{\sqrt{2}-x}{x-3}$
            - $x-3\neq{0}$
    - 2. tuto nerovnost vyřešíme a získáme číslam která nelze za proměnnou dosadit
        - např.: $\frac{\sqrt{2}-x}{x-3}$
            - $x-3\neq{0}\\ \ \ \ \ \ \ \ x\neq{3}$
    - 3. zapíšeme definiční obor jako rozdíl oboru proměnné (nejčastěji $\mathbb{R}$) a čísle, která vyšla z vyřešené nerovnosti
        - např.: $\frac{\sqrt{2}-x}{x-3}$
            - $x\neq{3}\\ x\in\mathbb{R}-\{ 3 \}$
# Určení nulového bodu
- _nulový bod_ výrazu je hodnota tohoto výrazu, kdy se čitatel rovná nule
- **Postup**:
    - 1. určíme definiční obor
        - např.: $\frac{3x^{2}}{x+5}$
            - $x+5\neq{0}\\ \ \ \ \ \ \ \ x\neq{-5}\\ x\in\mathbb{R}-\{ -5 \}$
    - 2. výraz v čitateli položíme roven nule a vypočítáme, kdy tato rovnost platí
        - např.: $\frac{3x^{2}}{x+5}$
            - $3x^{2}=0\\ \ \ x^{2}=0\\ \ \ \ x=0$
    - 3. z bodu dva vyloučíme body, které nepatří do definičního oboru
# Rozšiřování lomených výrazů
- _rozšířit_ lomený výraz znamená vynásobit čitatel i jmenovatel stejným nenulovým výrazem
- **Postup**:
    - 1. čitatel i jmenovatel vynásobíme stejným výrazem různým od nuly
        - např.: rozšiřte $\frac{x}{x+5}$ výrazem $(x-1)$
            - $\frac{x}{x+5}=\frac{x(x-1)}{(x+5)(x-1)}=\frac{x^{2}-x}{x^{2}+4x-5}$
    - 2. stanovíme podmínky nově vzniklého výrazu
        - např.: $\frac{x(x-1)}{(x+5)(x-1)}$
            - $x\in\mathbb{R}-\{ -5;1 \}$