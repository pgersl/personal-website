---
title: "Reaction mechanisms"
layout: note
toc: true
pm: true
---
- **_reaction mechanism_** shows how exactly a reaction works with all of its intermediate steps
- **_rate-determining step_** is the slowest reaction in the chain of all the intermediate elementary reactions
    - to make the reaction go faster, this step needs to be adjsuted 
# Steady-state approximation
- **_steady-state approximation_** assumes there is a moment in a more complex reaction where an intermediate is in an equilibrium where it gets created as fast as it gets consumed
- it helps up determine the [rate law](/notes/research/chemistry/ap-chemistry/kinetics/reaction-rates#rate-law) for a complex reaction
## Example
- reaction: $2\ N_2O_5\longrightarrow{4\ NO_2+O_2}$
- steps:
    1. $2\ N_2O_5\leftrightharpoons{NO_2+NO_3}$
    2. $NO_2+NO_3\longrightarrow{NO+NO_2+O_2}$
    3. $NO_3+NO\longrightarrow{2\ NO_2}$
- rates:
    1. $v_1=k_1[N_2O_5]$, $v_{-1}=k_{-1}[NO_2][NO_3]$
    2. $v_2=k_2[NO_2][NO_3]$
    3. $v_3=k_3[NO_3][NO]$
- calculating $[NO]$:
    - $v_2=v_3$
    - $k_2[NO_2][NO_3]=k_3[NO_3][NO]$
    - hence: $[NO]=\cfrac{k_2[NO_2]}{k_3}$
- calculating $[NO_3]$:
    - $v_1=v_{-1}+v_2+v_3$
    - $k_1[N_2O_5]=k_{-1}[NO_2][NO_3]+k_2[NO_2][NO_3]+k_3[NO_3][NO]$
    - hence: $[NO_3]=\cfrac{k_1[N_2O_5]}{k_{-1}[NO_2]+k_2[NO_2]+k_3[NO]}$
    - after adjustment ($[NO]$ substitution): $[NO_3]=\cfrac{k_1[N_2O_5]}{k_{-1}[NO_2]+2k_2[NO_2]}$
- claculating the overall rate:
    - $v=\cfrac{\Delta[O_2]}{\Delta{t}}=k_2[NO_2][NO_3]$
    - after adjustment ($[NO_3]$ substitution): $v=\cfrac{\Delta[O_2]}{\Delta{t}}=\cfrac{k_1k_2[N_2O_5]}{k_{-1}+2k_2}=k[N_2O_5]$
    - where $k=\cfrac{k_1k_2}{k_{-1}+2k_2}$