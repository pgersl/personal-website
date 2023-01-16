---
title: "Reaction rates"
layout: note
toc: true
pm: true
---
- **_reaction rate_** $v$ desribes the speed of a reaction
- unit: $mol\cdot{dm^{-3}}\cdot{s^{-1}}$
# Calculation
## Method 1
- to calculate the rate of a reaction, the changes of concentration over time are used

$$v=\cfrac{\Delta{c}}{\Delta{t}}$$

- where:
    - $\Delta{c}$ is _the change in concentration_
    - $\Delta{t}$ is _the change in time_
- for a general reaction, the equation is more complex, since it includes all the possible reactants and products
$$v=-\sum{\cfrac{\Delta{c_R}}{\nu_R\cdot\Delta{t}}}=\sum{\cfrac{\Delta{c_P}}{\nu_P\cdot\Delta{t}}}$$
- where:
    - $\Delta{c_R}$ is _the change in concentration of a reactant_
    - $\Delta{c_P}$ is _the change in concentration of a product_
    - $\Delta{t}$ is _the change in time_
    - $\nu_R$ is _the stoichiometric coefficient of a reactant_
    - $\nu_P$ is _the stoichiometric coefficient of a product_
### Change in concentration over time
- as the concentration of the product increases, the concentration of the reactant decreases as the time goes on
- this relationship is not linear

{{< fig class="note-fig" src="/images/figs/reaction-rates/1.png" alt="Change of concentration in time of a reactant and a product" >}}
## Method 2
- the rate of a reaction is directly proportional to the concentration of the reactant
- to calulate the rate of a reaction, the concentration in a given moment in time is used

$$v=k[A]^a$$

- where:
    - $k$ is _the rate constant_
    - $[A]$ is _the concentraion of the reactant_ $A$
    - $a$ is _the order of the reaction_

### Order of a reaction
- **_order of a reaction_** is an experimentally derived value, which describes how much does the concentration of a reactant influence the rate of the reaction

- **Zeroth order reaction**
    - the concentration of the reactant does not affect the rate of the reaction
    - $a=0$, hence:

$$v=k$$

- **First order reaction**
    - the rate of the reaction is directly proporitional to the concentration of the reactant
    - as there is less reactant, the reaction gets slower and _vice versa_
    - $a=1$, hence:

$$v=k[A]$$

- **Second order reaction**
    - the rate of the reaction is directly proportional to the square value of the concentration of the reactant
    - as there is less reactant, the reaction gets slower and _vice versa_
    - it is similar to the first order reaction
    - $a=2$, hence:

$$v=k[A]^2$$

### Changes in rate constant units
- the $[k]$ changes with the different orders of the reaction:
    - $a=0=>[k]=mol\cdot{dm^{-3}}\cdot{s^{-1}}$
    - $a=1=>[k]=s^{-1}$
    - $a=2=>[k]=dm^3\cdot{mol^{-1}}\cdot{s^{-1}}$
# Rate law
- **_rate law_** combines both methods of calculating the rate of a reaction

$$\cfrac{-\Delta[A]}{\Delta{t}}=k$$

- **Zeroth order reaction**

$$[A]=-[A]_0-kt$$

- **First order reaction**

$$[A]=[A]_0\cdot{e^{-kt}}$$

- **Second order reacion**

$$[A]=[A]_0+\cfrac{1}{kt}$$

- where $[A]_0$ is the concentration of reactant $A$ when $t=0$
## Half-life of a reaction $t_{1/2}$
- it is used to describe what time does it take till half of the reactant has undergone a reaction

- **Zeroth order reaction**

$$t_{1/2}=\cfrac{[A]_0}{2k}$$

- **First order reaction**

$$t_{1/2}=\cfrac{ln2}{k}$$

- **Second order reacion**

$$t_{1/2}=\cfrac{1}{k[A]_0}$$